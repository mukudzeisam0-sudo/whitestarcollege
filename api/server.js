const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Delete route
app.delete("/delete", (req, res) => {
  const filePath = path.join(__dirname, req.query.file);
  fs.unlink(filePath, (err) => {
    if (err) return res.status(500).send("Error deleting file");
    res.send("File deleted successfully");
  });
});

// Storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage: storage });

// Upload route
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ url: `/uploads/${req.file.filename}` });
});

// Serve uploads folder
app.use("/uploads", express.static("uploads"));

// Route to handle applications (no DB save)
app.post("/apply", async (req, res) => {
  const { name, email, program, message } = req.body;
  const confirmationCode = Math.floor(100000 + Math.random() * 900000).toString();

  console.log("Application received:", { name, email, program, message, confirmationCode });

  // Email setup with env variables
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const schoolMailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `New Application from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nProgram: ${program}\nMessage: ${message}\nConfirmation Code: ${confirmationCode}`,
  };

  const applicantMailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "White Star College Application Confirmation",
    text: `Dear ${name},\n\nThank you for applying to White Star College.\nYour confirmation code is: ${confirmationCode}\n\nWe will review your application and contact you soon.\n\nBest regards,\nWhite Star College Admissions`,
  };

  try {
    await transporter.sendMail(schoolMailOptions);
    await transporter.sendMail(applicantMailOptions);
    res.send("Application submitted successfully! Confirmation code sent.");
  } catch (error) {
    console.error("Nodemailer error:", error);
    res.status(500).send("Error sending application.");
  }
});

// Export for Vercel serverless
module.exports = (req, res) => app(req, res);
