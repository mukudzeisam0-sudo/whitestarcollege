import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/videos/White_Star_College_4K_Hero_Video_2-2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to White Star College Nyanga</h1>
          <p className="hero-subtitle">
            Empowering students through excellence, innovation, and integrity.
          </p>
          <div className="hero-buttons">
            {/* ✅ Apply button navigates to /apply */}
            <button 
              className="btn-primary" 
              onClick={() => navigate("/apply")}
            >
              Apply Now
            </button>

            {/* ✅ Learn More button navigates to /about */}
            <button 
              className="btn-secondary" 
              onClick={() => navigate("/about")}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
