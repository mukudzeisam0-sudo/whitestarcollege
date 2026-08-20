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

      // ✅ Auto‑reply to applicant
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: "Application Confirmation – White Star College Nyanga",
        html: `
          <div style="font-family:Arial, sans-serif; color:#333;">
            <h2 style="color:#002b5c;">White Star College Nyanga</h2>
            <p>Dear ${name},</p>
            <p>We are pleased to confirm your application to <strong>White Star College Nyanga</strong> for the <strong>${program}</strong> program.</p>
            <p>Your confirmation code is: <strong style="color:#d32f2f;">${confirmationCode}</strong></p>
            <p>By receiving this code, you are officially confirmed to join the school. Please come to the campus on <strong>Orientation Day</strong> as scheduled by the Admissions Office For more info directly contact this number 0711995764.</p>
            <p>Our team will provide further details and guidance during orientation.</p>
            <br/>
            <p style="color:#555;">Best regards,<br/>Admissions Office</p>
          </div>
        `,
      });

      // ✅ Notification email to school
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `New Application from ${name}`,
        text: `Name: ${name}
Email: ${email}
Program: ${program}
Message: ${message}
Confirmation Code: ${confirmationCode}`,
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
