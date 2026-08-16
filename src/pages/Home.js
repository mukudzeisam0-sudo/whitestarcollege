import React from "react";
import Hero from "../components/Hero";
import { FaBullseye, FaEye, FaUserTie } from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <Hero onApplyClick={() => (window.location.href = "/apply")} />

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            White Star College is a center of academic excellence dedicated to
            nurturing talent, fostering innovation, and preparing students for
            success in a global society.
          </p>
        </div>
        <div className="owner-info">
          <FaUserTie className="icon" />
          <h3>Founder & Principal</h3>
          <p>
            <strong>ALAN MUSAKANDA</strong> — a visionary educator passionate
            about empowering youth through quality education and modern learning
            environments.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="mission">
        <h2>Our Mission & Vision</h2>
        <div className="mission-cards">
          <div className="card">
            <FaBullseye className="icon" />
            <h3>Mission</h3>
            <p>
              Enabling our learners to achieve their full potential today and
              empowering them to become the global leaders of tomorrow.
            </p>
          </div>
          <div className="card">
            <FaEye className="icon" />
            <h3>Vision</h3>
            <p>
              To facilitate a thriving school community where all individuals
              can flourish and positively impact the world around them.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
