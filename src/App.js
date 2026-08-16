import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // ✅ inside src
import Home from "./pages/Home"; // ✅ inside src/pages
import Apply from "./pages/Apply";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import RequirementsForm from "./pages/RequirementsForm";
import Logo from "./components/Logo"; // ✅ inside src/components
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* ✅ Single Navbar at the top */}
        <Navbar />

        {/* ✅ Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/requirements" element={<RequirementsForm />} />
        </Routes>

        {/* ✅ MSM Logo fixed at bottom of every page */}
        <div className="logo-center">
          <Logo />
        </div>

        {/* ✅ Footer */}
        <footer className="footer">
          <p>© 2026 White Star College. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
