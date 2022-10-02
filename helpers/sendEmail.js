import nodemailer from "nodemailer";
// import "dotenv/config";

function sendEmail(message, toEmail) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "moses91@ethereal.email",
      pass: "7Xatpaqc1K99SkrvV2",
    },
  });
  let mailOptions = {
    from: "kevin.kalimba54@gmail.com", // sender address
    to: toEmail, // list of receivers
    subject: "Password reset", // Subject line
    html: message, // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }

    res.render("contact", { msg: "Email has been sent" });
  });
}

export default sendEmail;