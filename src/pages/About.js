import React from "react";
import { FaUserTie } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h2>About White Star College</h2>
      <p>
        White Star College is a center of academic excellence dedicated to
        nurturing talent, fostering innovation, and preparing students for
        success in a global society, and it was started in January 2026 in Bepe Park in Nyanga Town
      </p>
      <div className="owner-info">
        <FaUserTie className="icon" />
        <h3>Founder & Principal</h3>
        <p>
          <strong>ALAN MUSAKANDA</strong> — a visionary educator passionate
          about empowering youth through quality education and modern learning
          environments.
        </p>
      </div>
    </div>
  );
}

export default About;
