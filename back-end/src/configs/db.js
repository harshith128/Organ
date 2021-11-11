const mongoose = require("mongoose")

module.exports = (req, res) => {
    return mongoose.connect("mongodb+srv://organdb:1234ABCD@cluster0.3xadk.mongodb.net/organdb?retryWrites=true&w=majority")
}