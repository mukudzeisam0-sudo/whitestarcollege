import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, program, message } = req.body;
    const confirmationCode = Math.floor(100000 + Math.random() * 900000).toString();

    console.log("Application received:", { name, email, program, message, confirmationCode });

    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      // Send confirmation email to applicant
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: "Application Confirmation",
        text: `Dear ${name}, your confirmation code is ${confirmationCode}`,
      });

      // Send notification email to school
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `New Application from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nProgram: ${program}\nMessage: ${message}\nConfirmation Code: ${confirmationCode}`,
      });

      res.status(200).json({ message: "Application submitted successfully!" });
    } catch (err) {
      console.error("Nodemailer error:", err);
      res.status(500).json({ error: "Error sending application" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
