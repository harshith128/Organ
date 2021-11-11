const mongoose = require("mongoose");

const brainDeathSchema = new mongoose.Schema({
    donorName:{type:String, require:true, minlength:3},
    deathTime:{type:String, require:true, minlength:7},
    deathDate:{type:String, require:true, minlength:10},
    dob:{type:String, require:true, minlength:10},
    approval:{type:Boolean, require:true},
    odCard:{type:Boolean, require:true},
    gender:{type:String, require:true, minlength:4},
    deathCertificate:{type:String, require:true},
    cause:{type:String, require:true, minlength:3},
    bloodGroup:{type:String, require:true, minlength:2},
    eligible:[{type:String, require:true, minlength:2}],
    organsAvailable:[{type:String, require:true, minlength:2}],
    state:{type:String, require:true, minlength:2},
    hospital:{type:mongoose.Schema.Types.ObjectId, ref:"hospital", required:true}
}, {
    versionKey:false,
    timestamps:true
})

const BrainDeath = mongoose.model("brainDeath", brainDeathSchema);

module.exports = BrainDeath;