import React, { useState } from "react";
import "./Logo.css";

function Logo() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="logo-footer">
      <img
        src="/pictures/Copilot_20260816_095627.png" // replace with your logo file
        alt="MSM Developer Logo"
        className="msm-logo"
        onClick={() => setShowContact(!showContact)}
      />
      <p className="tagline">Design. Develop. Deliver.</p>

      {showContact && (
        <div className="contact-popup">
          <p>for any media development contact</p>
          <p>📞 0718169537</p>
          <p>📧 mukudzeisam0@gmail.com</p>
        </div>
      )}
    </div>
  );
}

export default Logo;
