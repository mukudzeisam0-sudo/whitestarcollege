import React from "react";
import Hero from "../components/Hero";
import { 
  FaBullseye, 
  FaEye, 
  FaUserTie, 
  FaPalette, 
  FaFlask, 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaWhatsapp 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <Hero 
        onApplyClick={() => navigate("/apply")} 
        onLearnMoreClick={() => navigate("/about")} 
      />

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

      {/* Subjects Offered Section */}
      <section id="subjects" className="subjects">
        <h2>Subjects Offered</h2>
        <div className="subjects-categories">

          {/* Arts */}
          <div className="category">
            <h3><FaPalette className="icon" /> Arts</h3>
            <ul>
              <li>English Language</li>
              <li>History</li>
              <li>Geography</li>
              <li>Shona</li>
            </ul>
          </div>

          {/* Sciences */}
          <div className="category">
            <h3><FaFlask className="icon" /> Sciences</h3>
            <ul>
              <li>Mathematics</li>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Biology</li>
              <li>Computer Science</li>
              <li>Agriculture</li>
            </ul>
          </div>

          {/* Commercials */}
          <div className="category">
            <h3><FaBriefcase className="icon" /> Commercials</h3>
            <ul>
              <li>Commerce</li>
              <li>Accounting</li>
              <li>Business Studies</li>
              <li>Economics</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Information</h2>
        <div className="contact-cards">
          <div className="contact-card">
            <FaMapMarkerAlt className="icon" />
            <p>Bepe Park, Nyanga</p>
            {/* ✅ Free Google Maps Embed */}
            <iframe
              title="White Star College Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.123456789!2d32.750000!3d-18.216667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1930abcd123456%3A0x9876543210abcdef!2sBepe%20Park%2C%20Nyanga%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1692200000000!5m2!1sen!2szw"
              width="100%"
              height="200"
              style={{ 
                border: 0, 
                marginTop: "10px", 
                borderRadius: "8px", 
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)" 
              }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="contact-card">
            <FaPhone className="icon" />
            <p>
              <a href="tel:0714067951">0714067951</a><br />
              <a href="tel:0775240473">0775240473</a>
            </p>
          </div>
          <div className="contact-card">
            <FaWhatsapp className="icon" style={{ color: "green" }} />
            <p>
              <a href="https://wa.me/263714067951" target="_blank" rel="noopener noreferrer">
                WhatsApp 0714067951
              </a><br />
              <a href="https://wa.me/263775240473" target="_blank" rel="noopener noreferrer">
                WhatsApp 0775240473
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="developer-note">Proudly developed by MSM Developer</p>
      </footer>
    </div>
  );
}

export default Home;
