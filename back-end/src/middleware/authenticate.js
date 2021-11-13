const jwt = require('jsonwebtoken');

function verifyToken(token) {
    return new Promise(function(resolve, reject) {
        jwt.verify(token, 'organ', function(err, hospital) {
            if(err) return reject(err);
            return resolve(hospital)
        });
    })
}

async function authenticate(req, res, next){
    const bearerToken = req.headers.authorization;
    // console.log(req.headers)
    if(! bearerToken || ! bearerToken.startsWith("Bearer ")){
        return res.status(400).send({message: "invalid bearer token"})
    }
    try {
        const token = bearerToken.split(" ")[1];
        // console.log(token)
        const {hospital} = await verifyToken(token);
        // console.log(hospital)
        req.hospital = hospital
        return next()
    } catch(err) {
        return res.status(400).send({ err: err.message })
    }
}

module.exports = authenticate