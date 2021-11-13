const mongoose = require("mongoose");


const hospitaltempSchema = new mongoose.Schema({
    type:{type:String, require:true},
    name:{type:String, require:true},
    city:{type:String, require:true},
    state:{type:String, require:true},
    regNumber:{type:String, require:true},
    nottoID:{type:String, require:true},
    teleNumber:{type:String, require:true},
    licenceExpDate:{type:String, require:true},
    website:{type:String, require:true},
    email:{type:String, require:true},
    password:{type:String, require:true},
    coordinator:{type:String, require:true},
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