const mongoose = require("mongoose");

const brainDeathSchema = new mongoose.Schema({
    donorName:{type:String, require:true},
    deathTime:{type:String, require:true},
    deathDate:{type:String, require:true},
    dob:{type:String, require:true},
    approval:{type:Boolean, require:true},
    odCard:{type:Boolean, require:true},
    gender:{type:String, require:true},
    deathCertificate:{type:String, require:true},
    cause:{type:String, require:true},
    bloodGroup:{type:String, require:true},
    eligible:[{type:String, require:true}],
    organsAvailable:[{type:String, require:true}],
    state:{type:String, require:true},
    // hopital:{type:String, require:true}
    coordinator:{type:String, require:true},
    address:{type:String, require:true}
    // hospital:{type:mongoose.Schema.Types.ObjectId, ref:"hospital", required:true}
}, {
    versionKey:false,
    timestamps:true
})

const BrainDeath = mongoose.model("brainDeath", brainDeathSchema);

module.exports = BrainDeath;