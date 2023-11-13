"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "ashish150920001@gmail.com",
    pass: "gisg btvo jlzh brtc",
  },
});

// async..await is not allowed in global scope, must use a wrapper
exports.sendEmail = async (name, email, subject, message) => {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'ashish150920001@gmail.com', // sender address
    to: `ashish150920001@gmail.com`, // list of receivers
    subject: `${subject}`, // Subject line
    text: `${message}`, // plain text body
    html: `<b>Name: </b>${name}<br> <b>Email: </b>${email}<br> <b>Message: </b>${message}`, // html body
  });

  console.log("Message sent: %s", info);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}
