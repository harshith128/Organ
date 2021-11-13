const express = require("express");
const upload = require("../middleware/patient.files");
const router = express.Router();
const { body, validationResult, check } = require('express-validator');

const sendMail = require("../utils/sendMail");
const BrainDeath = require("../models/brainDeath.model");
const Patient = require("../models/patient.model");
const Hospital = require("../models/hospitalRegister.model");


router.post("", 
    // upload.single("deathCertificate"),
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
                // deathCertificate: req.file.path,
                cause: req.body.cause,
                bloodGroup: req.body.bloodGroup,
                eligible: req.body.eligible,
                hospital: req.body.hospital,
                organsAvailable: req.body.organsAvailable
            };

            let hosp = await Hospital.findOne({userID:req.body.hospital}).lean().exec();
            deathDetails.state = hosp.state;

            let eligible = req.body.eligible;
            let oga = req.body.organsAvailable;
            // console.log(hosp)

            const brainDeath = await BrainDeath.create(deathDetails);

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

            res.status(201).send({ brainDeath });

        }catch(err) {

            return res.status(400).send({ err: err.message });

        }
})

router.get("/others", async (req, res) => {
    const page = +req.query.page || 1;
    const size = 10;
    const offset = (page - 1) * size;

    let eligible = req.query.blood;

    if(eligible[eligible.length-1] === "p"){
        eligible = eligible.substr(0, eligible.length-1) + "+"
    } else {
        eligible = eligible.substr(0, eligible.length-1) + "-"
    }

    const allDeaths = await BrainDeath.find({$and: [{state: req.query.state, organsAvailable: req.query.organ}, {eligible: eligible}]}).sort({_id:-1}).populate("hospital").lean().exec();
    const total_pages = Math.ceil((await BrainDeath.find({$and: [{state: req.query.state, organsAvailable: req.query.organ}, {eligible: eligible}]}).countDocuments().lean().exec() ) / size);
    res.status(200).send({allDeaths, total_pages})
})

router.get("/all", async (req, res) => {

    const page = +req.query.page || 1;
    const size = 10;
    const offset = (page - 1) * size;
    
    try {
        const allDeaths = await BrainDeath.find().sort({_id:-1}).skip(offset).limit(size).populate("hospital").lean().exec();
        const total_pages = Math.ceil((await BrainDeath.find().countDocuments().lean().exec() ) / size);
        res.status(200).send({allDeaths, total_pages})
    } catch(err) {
        return res.status(400).send({ err: err.message })
    }
})

router.get("", async (req, res) => {

    const page = +req.query.page || 1;
    const size = 10;
    const offset = (page - 1) * size;
    
    try {
        const allDeaths = await BrainDeath.find({$or: [{state: req.query.state}, {organsAvailable: req.query.organ}]}).sort({_id:-1}).skip(offset).limit(size).populate("hospital").lean().exec();
        const total_pages = Math.ceil((await BrainDeath.find({$or: [{state: req.query.state}, {organsAvailable: req.query.organ}]}).countDocuments().lean().exec() ) / size);
        res.status(200).send({allDeaths, total_pages})
    } catch(err) {
        return res.status(400).send({ err: err.message })
    }
})

module.exports = router;