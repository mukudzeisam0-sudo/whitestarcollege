import mongoose from "mongoose";
import nodemailer from "nodemailer";

mongoose.connect(process.env.MONGODB_URI);

const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  program: String,
  message: String,
  confirmationCode: String,
  date: { type: Date, default: Date.now }
});
const Application = mongoose.models.Application || mongoose.model("Application", applicationSchema);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, program, message } = req.body;
    const confirmationCode = Math.floor(100000 + Math.random() * 900000).toString();

    try {
      const newApp = new Application({ name, email, program, message, confirmationCode });
      await newApp.save();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS
        },
      });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: "Application Confirmation",
        text: `Dear ${name}, your confirmation code is ${confirmationCode}`
      });

      res.status(200).json({ message: "Application submitted successfully!" });
    } catch (err) {
      res.status(500).json({ error: "Error submitting application" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
