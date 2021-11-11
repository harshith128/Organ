const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    patientName:{type:String, require:true, minlength:3},
    problemType:{type:String, require:true, minlength:3},
    dob:{type:String, require:true, minlength:10},
    bloodGroup:{type:String, require:true, minlength:2},
    preferable:[{type:String, require:true, minlength:2}],
    gender:{type:String, require:true, minlength:4},
    certificate:{type:String, require:true},
    email:{type:String, require:true},
    phone:{type:String, require:true, minlength:10},
    organs:[{type:String, require:true}],
    patientID:{type:String, require:true},
    hospital:{type:mongoose.Schema.Types.ObjectId, ref:"hospital", required:true}
}, {
    versionKey:false,
    timestamps:true
})

const Patient = mongoose.model("patient", patientSchema);

module.exports = Patient;