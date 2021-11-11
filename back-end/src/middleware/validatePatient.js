// const Patient = require("../models/patient.model");

const validatePatient = {
    patientName: {
        notEmpty :true,
        custom: {
            options: async (patientName) => {
                console.log(patientName)
            }
        },
        isLength: {
            options: { min: 3 },
            // errorMessage: 'must be 2 char long',
           },
        errorMessage: `must be at least 2 chars long`,
    },
    // problemType: {
    //     notEmpty: true
    // },
    // dob: {
    //     notEmpty: true,
    //     isLength: {
    //         options: { min: 7, max: 7},
    //         errorMessage: "invalid date"
    //     }
    // },
    // bloodGroup: {
    //     notEmpty: true,
    //     isLength: {
    //         options: { min: 2},
    //         errorMessage: "must be at least 2 chars long"
    //     }
    // },
    // preferable: {
    //     notEmpty: true
    // },
    // gender: {
    //     notEmpty: true,
    //     isLength: {
    //         options: { min: 4},
    //         errorMessage: `${this.gender} must be at least 4 chars long`
    //     }
    // },
    // email: {
    //     isEmail: { errorMessage: 'invalid email' },
    //     // custom: {
    //     //     options: async (email) => {
    //     //         let user = await User.findOne({ email: email });
    //     //         if (user) {
    //     //             return Promise.reject("E-mail already in use");
    //     //         }
    //     //     }
    //     // }
    // },
    // phone: {
    //     notEmpty: true,
    //     isLength: {
    //         options: { min: 10, max: 10},
    //         errorMessage: "invalid number"
    //     }
    // },
    // organs: {
    //     notEmpty: true
    // }
}

module.exports = validatePatient;