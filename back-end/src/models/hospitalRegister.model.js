const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const hospitalSchema = new mongoose.Schema({
    type:{type:String, require:true},
    name:{type:String, require:true, minlength:3},
    city:{type:String, require:true, minlength:3},
    state:{type:String, require:true, minlength:3},
    regNumber:{type:String, require:true, minlength:8, unique:true},
    nottoID:{type:String, require:true, minlength:8, unique:true},
    teleNumber:{type:String, require:true, minlength:10},
    licenceExpDate:{type:String, require:true},
    website:{type:String, require:true},
    email:{type:String, require:true},
    password:{type:String, require:true, minlength:8},
    coordinator:{type:String, require:true, minlength:3},
    address:{type:String, require:true},
    userID:{type:String, require:true},
}, {
    versionKey:false,
    timestamps:true
})

hospitalSchema.pre("save", function (next) {
    if(!this.isModified("password"))  return next()

    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next()
})

hospitalSchema.methods.checkPassword = function (password){
    const match = bcrypt.compareSync(password, this.password);
    return match
}

const Hospital = mongoose.model("hospital", hospitalSchema);

module.exports = Hospital;