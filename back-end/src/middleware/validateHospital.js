const Hospital = require("../models/hospitalRegister.model");

const validateRegister = {
    name: {
        notEmpty :true,
        isLength: {
            options: { min: 3 },
            // errorMessage: 'must be 2 char long',
           },
        errorMessage: 'must be at least 2 chars long',
    },
    email: {
        isEmail: { errorMessage: 'invalid email' },
        // custom: {
        //     options: async (email) => {
        //         let user = await User.findOne({ email: email });
        //         if (user) {
        //             return Promise.reject("E-mail already in use");
        //         }
        //     }
        // }
    },
    password: {
        notEmpty: true,
        isLength: {
            options: { min: 8},
            errorMessage: "password too weak"
        }
    },
    type: {
        notEmpty: true
    },
    city: {
        notEmpty: true,
        isLength: {
            options: { min: 3},
            errorMessage: "must be at least 3 chars long"
        }
    },
    state: {
        notEmpty: true,
        isLength: {
            options: { min: 3},
            errorMessage: "must be at least 3 chars long"
        }
    },
    regNumber: {
        notEmpty: true,
        isLength: {
            options: { min: 8},
            errorMessage: "must be at least 8 chars long"
        },
        custom: {
            options: async (regNumber) => {
                let hospital = await Hospital.findOne({ regNumber: regNumber });
                if (hospital) {
                    return Promise.reject("Registration already in use");
                }
            }
        }
    },
    nottoID: {
        notEmpty: true,
        isLength: {
            options: { min: 8},
            errorMessage: "must be at least 8 chars long"
        },
        custom: {
            options: async (nottoID) => {
                let hospital = await Hospital.findOne({ nottoID: nottoID });
            
                if (hospital) {
                    return Promise.reject("NOTTOID already in use");
                }
            }
        }
    },
    teleNumber: {
        notEmpty: true,
        isLength: {
            options: { min: 10, max: 10},
            errorMessage: "invalid number"
        }
    },
    licenceExpDate: {
        notEmpty: true,
        isLength: {
            options: { min: 7, max: 7},
            errorMessage: "invalid date"
        }
    },
    website: {
        notEmpty: true
    },
    coordinator: {
        notEmpty: true,
        isLength: {
            options: { min: 3},
            errorMessage: "must be at least 3 chars long"
        }
    },
    address: {
        notEmpty: true,
        isLength: {
            options: { max: 100},
            errorMessage: "maximum of 100 chars long"
        }
    }
}

module.exports = validateRegister