const mongoose = require("mongoose");


const hospitaltempSchema = new mongoose.Schema({
    type:{type:String, require:true},
    name:{type:String, require:true, minlength:3},
    city:{type:String, require:true, minlength:3},
    state:{type:String, require:true, minlength:3},
    regNumber:{type:String, require:true, minlength:8},
    nottoID:{type:String, require:true, minlength:8},
    teleNumber:{type:String, require:true, minlength:10},
    licenceExpDate:{type:String, require:true},
    website:{type:String, require:true},
    email:{type:String, require:true},
    password:{type:String, require:true, minlength:8},
    coordinator:{type:String, require:true, minlength:3},
    address:{type:String, require:true},
    otp:{type:Number, require:false},
    director:{type:String, require:true},
    coordinatorNumber:{type:String, require:true}
}, {
    versionKey:false,
    timestamps:true
})

const Hospitaltemp = mongoose.model("hospitaltemp", hospitaltempSchema);

module.exports = Hospitaltemp