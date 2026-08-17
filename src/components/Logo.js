import React, { useState, useEffect } from "react";
import "./Logo.css";

function Logo() {
  const [showContact, setShowContact] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show logo when user scrolls down
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(true);   // scrolling down → show logo
      } else {
        setVisible(false);  // scrolling up → hide logo
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`logo-footer ${visible ? "show" : "hide"}`}>
      <img
        src="/pictures/Copilot_20260816_095627.png" // replace with your logo file
        alt="MSM Developer Logo"
        className="msm-logo"
        onClick={() => setShowContact(!showContact)}
      />

      {showContact && (
        <div className="contact-popup">
          <p>For any media development contact:</p>
          <p>📞 0718169537</p>
          <p>📧 mukudzeisam0@gmail.com</p>
        </div>
      )}
    </div>
  );
}

export default Logo;
