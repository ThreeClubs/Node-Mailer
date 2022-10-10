const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const mailOptions = {
  from: '"Burt" <andrewg@missionreadyhq.com>',
  to: "andrew.grenon@gmail.com",
  subject: "video test",
  html: '<h1>Video Test</h1><iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe>',
};

transporter.sendMail(mailOptions);
