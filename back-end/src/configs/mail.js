const nodemailer = require("nodemailer");
const {CURRENT_ENVIRONMENT, SMTP_USERNAME, SMTP_PASSWORD} = process.env;

const transporter = nodemailer.createTransport({
    host: CURRENT_ENVIRONMENT === "development"? "smtp.mailtrap.io" : "",
    port: 465,
    secure: false, // use TLS
    auth: {
      user: SMTP_USERNAME,
      pass: SMTP_PASSWORD,
    },
  });

  module.exports = transporter;