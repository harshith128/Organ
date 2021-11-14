const express = require("express");
const router = express.Router();

const jwt = require('jsonwebtoken');

const { body, validationResult, check } = require('express-validator');

const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 6);


const Hospitaltemp = require("../models/hospitalbefore.model");
const Hospital = require("../models/hospitalRegister.model");
const authenticate = require("../middleware/authenticate");
const verifyOTP = require("../middleware/verfiyOTP");

require('dotenv').config();

const sendMail = require("../utils/sendMail");

const { JWT_SECRET_KEY } = process.env;

const newToken = (hospital) => {
    return jwt.sign({ hospital }, JWT_SECRET_KEY);
}

router.post("/register", 
    async(req, res) => {
    try {
        const errors = validationResult(req);
        let final_errors = null;
        // console.log(req.body)
        if (!errors.isEmpty()) {
            final_errors = errors.array().map(error => {
                return {
                    param: error.param,
                    msg: error.msg
                }
            })
            return res.status(400).json({ final_errors });
        }
        let item = req.body;

        item.otp = Math.floor(1000 + Math.random() * 9000);

        let hospital = await Hospitaltemp.create(item);
        const token = newToken(hospital);

        // const message = {
        //     from: "organs@server.com",
        //     to: item.email,
        //     subject: "Email verification OTP",
        //     text: `OTP ${item.otp}`,
        //     html: `<p>OTP ${item.otp}</p>`
        // };

        // transporter.sendMail(message);

        sendMail({
            from: "organs@server.com",
            to: item.email,
            subject: "Email verification OTP",
            text: `OTP ${item.otp}`,
            html: `<p>OTP ${item.otp}</p>`
        })

        // console.log(item)
        console.log({ OTP: item.otp });

        res.status(201).send({token});
        // res.status(201).send({item})
    } catch(err) {
        return res.status(400).send({ err: err.message })
    }
})

router.post("/verify", 
    authenticate,
    verifyOTP,
    async(req, res) => {
        console.log(req.body)
    try {
        let details = req.hospital;
        details.userID = nanoid();

        delete details.otp;
        let hospital = await Hospital.create(details);
        await Hospitaltemp.findByIdAndDelete(details._id);

        sendMail({
            from: "organs@server.com",
            to: details.email,
            subject: "USER ID",
            text: `userID ${details.userID}`,
            html: `<p>userID ${details.userID}</p>`
        })

        console.log({ userID: details.userID });

        res.status(201).send({userID:hospital.userID, email:hospital.email});
    } catch(err) {
        return res.status(400).send({ err: err.message })
    }
})

router.post("/login",
    async(req, res) => {
        try{
            console.log(req.body)
            let hospital = await Hospital.findOne({userID: req.body.userID})
            // console.log(hospital)
            if(! hospital) {
                return res.status(400).send({ message: "invalid User ID or Password" })
            }

            let match = hospital.checkPassword(req.body.password);
            if(! match){
                return res.status(400).send({ message: "invalid User ID or Password" })
            }

            const token = newToken(hospital.userID)

            res.status(201).send({id: hospital.userID, token, hospital:hospital.name});
        } catch(err) {
            return res.status(400).send({ err: err.message })
        }
    })

module.exports = router;