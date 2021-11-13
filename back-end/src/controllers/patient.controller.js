const express = require("express");
const upload = require("../middleware/patient.files");
const Patient = require("../models/patient.model");
const router = express.Router();
const { body, validationResult, check } = require('express-validator');

const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 6);

const sendMail = require("../utils/sendMail");


router.post("", 
    // checkSchema(validatePatient),
    // check('patientName').isLength({ min: 3 }).custom((req) => {
    //             console.log(req.body.patientName)
    // }),

    // upload.single("certificate"),
    async(req, res) => {
        try{
            // console.log({after:req.body})
            const errors = validationResult(req);
            // console.log(errors)
            let final_errors = null;
            if (!errors.isEmpty()) {
                final_errors = errors.array().map(error => {
                    return {
                        param: error.param,
                        msg: error.msg
                    }
                })
                return res.status(400).json({ final_errors });
            }

            let details = {
                patientName: req.body.patientName,
                problemType: req.body.problemType,
                dob: req.body.dob,
                bloodGroup: req.body.bloodGroup,
                preferable: req.body.preferable,
                gender: req.body.gender,
                email: req.body.email,
                phone: req.body.phone,
                // certificate: req.file.path,
                patientID: nanoid(),
                organs: req.body.organs
            };

            const patient = await Patient.create(details);

            sendMail({
                from: "organs@server.com",
                to: details.email,
                subject: "patient ID",
                text: `patient ID ${details.patientID}`,
                html: `<p>patient ID ${details.patientID}</p>`
            })
            console.log({ patientID: details.patientID })

            // res.status(201).send({ patient });
            res.status(201).send({patientID: patient.patientID})

        }catch(err) {

            return res.status(400).send({ err: err.message });

        }
})

module.exports = router;