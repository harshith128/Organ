const express = require("express");
const upload = require("../middleware/patient.files");
const router = express.Router();
const { body, validationResult, check } = require('express-validator');

const sendMail = require("../utils/sendMail");
const BrainDeath = require("../models/brainDeath.model");
const Patient = require("../models/patient.model");


router.post("", 
    upload.single("deathCertificate"),
    async(req, res) => {
        try{
            const errors = validationResult(req);
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

            let deathDetails = {
                donorName: req.body.donorName,
                deathTime: req.body.deathTime,
                deathDate: req.body.deathDate,
                dob: req.body.dob,
                approval: req.body.approval,
                odCard: req.body.odCard,
                gender: req.body.gender,
                deathCertificate: req.file.path,
                cause: req.body.cause,
                bloodGroup: req.body.bloodGroup,
                eligible: req.body.eligible,
                hospital: req.body.hospital,
                organsAvailable: req.body.organsAvailable
            };

            let eligible = req.body.eligible;
            let oga = req.body.organsAvailable;

            // const brainDeath = await BrainDeath.create(deathDetails);

            let bgs = eligible.map((group) => {
                return {preferable: group}
            });

            oga.forEach(async (element) => {
                const data = await Patient.find({$and: [{organs:element},{$or: bgs}]}).limit(3);
                data.forEach(ele => {
                    // console.log(ele.email)
                    sendMail({
                        from: "organs@server.com",
                        to: ele.email,
                        subject: "Organ Availability",
                        text: `Hello ${ele.patientName} we are pleased to inform you that ${element} is available for transplant. Please visit the registered hospital`,
                        html: `<p>Hello ${ele.patientName} ${ele.bloodGroup} we are pleased to inform you that ${element} is available for transplant. Please visit the registered hospital</p>`
                    })
                })
            });
            
            // console.log(req.body.organsAvailable)

            res.status(201).send({ brainDeath:"hello" });

        }catch(err) {

            return res.status(400).send({ err: err.message });

        }
})

router.get("/others", async (req, res) => {
    console.log(req.query)
    console.log(req.query.state)

    let eligible = req.query.blood;

    if(eligible[eligible.length-1] === "p"){
        eligible = eligible.substr(0, eligible.length-1) + "+"
    } else {
        eligible = eligible.substr(0, eligible.length-1) + "-"
    }

    const allDeaths = await BrainDeath.find({$and: [{organsAvailable: req.query.organ}, {eligible: eligible}]}).populate("hospital").lean().exec();
    res.status(200).send({allDeaths})
})

router.get("", async (req, res) => {
    console.log(req.query)
    try {
        const allDeaths = await BrainDeath.find({hospital: {state: req.query.state}}).populate("hospital").lean().exec();
        res.status(200).send({allDeaths})
    } catch(err) {
        return res.status(400).send({ err: err.message })
    }
})

module.exports = router;