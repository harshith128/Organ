function verifyOTP (req, res, next) {
    // let hospital = req.hospital;
    console.log(req.hospital.otp,req.body.otp)
    if(req.hospital.otp !== req.body.otp){
        return res.status(400).send({message: "invalid OTP"})
    }
    return next()
}

module.exports = verifyOTP;