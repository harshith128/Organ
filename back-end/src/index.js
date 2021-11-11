const express = require("express");
const { checkSchema } = require("express-validator");

const app = express();
app.use(express.json());

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

// app.use(express.urlencoded({
//     extended:true
// }))

const hospitalController = require("./controllers/hospital.controller");
const validateRegister = require("./middleware/validateHospital");

const patientController = require("./controllers/patient.controller");
const validatePatient = require("./middleware/validatePatient");

const brainDeathController = require("./controllers/brainDeath.controller")

app.use("/hospital", (req) => {console.log(req.body); return}, checkSchema(validateRegister), hospitalController);

// app.use("/patients", (req) => {console.log(req.body); return}, checkSchema(validatePatient), patientController);
app.use("/patients", patientController);

app.use("/death", brainDeathController);

module.exports = app;