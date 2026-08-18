const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");


const app = express();
app.use(bodyParser.json());
app.use(cors());
const fs = require("fs");

// Delete route
app.delete("/delete", (req, res) => {
  const filePath = path.join(__dirname, req.query.file);
  fs.unlink(filePath, (err) => {
    if (err) return res.status(500).send("Error deleting file");
    res.send("File deleted successfully");
  });
});

// Announcement schema
const announcementSchema = new mongoose.Schema({
  text: String,
  date: { type: Date, default: Date.now }
});
const Announcement = mongoose.model("Announcement", announcementSchema);

// Save announcement
app.post("/announcement", async (req, res) => {
  const { announcement } = req.body;
  const newAnnouncement = new Announcement({ text: announcement });
  await newAnnouncement.save();
  res.send("Announcement saved");
});

// Fetch announcements
app.get("/announcements", async (req, res) => {
  const anns = await Announcement.find().sort({ date: -1 });
  res.json(anns);
});


// MongoDB Atlas connection

mongoose.connect("mongodb+srv://mukudzeisam0_db_user:xOSkBYg94En6trA4@cluster0.6zliui1.mongodb.net/collegeDB?retryWrites=true&w=majority")
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ Connection error:", err));


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

// Define schema
const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  program: String,
  message: String,
  confirmationCode: String,
  date: { type: Date, default: Date.now }
});

// Create model
const Application = mongoose.model("Application", applicationSchema);

// Route to handle applications
app.post("/apply", async (req, res) => {
  const { name, email, program, message } = req.body;
  const confirmationCode = Math.floor(100000 + Math.random() * 900000).toString();

  // Save to database
  const newApp = new Application({ name, email, program, message, confirmationCode });
  await newApp.save();

  // Email setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "whitestarcollege123@gmail.com",
      pass: "ckhrshtonkryxfjm" // Replace with Gmail App Password
    },
  });

  const schoolMailOptions = {
    from: email,
    to: "whitestarcollege123@gmail.com",
    subject: `New Application from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nProgram: ${program}\nMessage: ${message}\nConfirmation Code: ${confirmationCode}`,
  };

  const applicantMailOptions = {
    from: "whitestarcollege123@gmail.com",
    to: email,
    subject: "White Star College Application Confirmation",
    text: `Dear ${name},\n\nThank you for applying to White Star College.\nYour confirmation code is: ${confirmationCode}\n\nWe will review your application and contact you soon.\n\nBest regards,\nWhite Star College Admissions`,
  };

  try {
    await transporter.sendMail(schoolMailOptions);
    await transporter.sendMail(applicantMailOptions);
    res.send("Application submitted successfully! Confirmation code sent.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending application.");
  }
});

// Admin endpoint to fetch all applications
app.get("/applications", async (req, res) => {
  try {
    const apps = await Application.find();
    res.json(apps);
  } catch (err) {
    res.status(500).send("Error fetching applications");
  }
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
