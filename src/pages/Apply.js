import React, { useState } from "react";
import axios from "axios";
import Logo from "../components/Logo";
import "../App.css";
import "./Apply.css";

function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/send-application", formData);
      alert("Application sent successfully!");
    } catch (error) {
      alert("Failed to send application.");
    }
  };

  return (
    <div className="apply-page">
      <div className="form-container">
        <h2 className="form-title">Application Form</h2>
        <form onSubmit={handleSubmit} className="application-form">
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="program"
            placeholder="Program of Interest"
            value={formData.program}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Additional Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </div>

      {/* ✅ MSM Logo centered */}
      <div className="logo-center">
        <Logo />
      </div>

      <footer className="footer">
        <p>© 2026 White Star College. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Apply;
