import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // ✅ use NavLink instead of Link
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="/pictures/IMG-20260814-WA0010.jpg"
          alt="White Star College Logo"
          className="logo"
        />
        <h1 className="college-name">White Star College Nyanga</h1>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/apply" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
            Apply
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/requirements" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
            Requirements
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
