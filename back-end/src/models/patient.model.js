const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    patientName:{type:String, require:true},
    problemType:{type:String, require:true},
    dob:{type:String, require:true},
    bloodGroup:{type:String, require:true},
    preferable:[{type:String, require:true}],
    gender:{type:String, require:true},
    // certificate:{type:String, require:true},
    email:{type:String, require:true},
    phone:{type:String, require:true},
    organs:[{type:String, require:true}],
    patientID:{type:String, require:true},
    hospital:{type:String, require:true},
}, {
    versionKey:false,
    timestamps:true
})

const Patient = mongoose.model("patient", patientSchema);

module.exports = Patient;