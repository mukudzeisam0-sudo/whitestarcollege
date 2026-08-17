import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; 
import Home from "./pages/Home"; 
import Apply from "./pages/Apply";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import RequirementsForm from "./pages/RequirementsForm";
import Logo from "./components/Logo"; 
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        {/* ✅ Navbar at the top */}
        <Navbar />

        {/* ✅ Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/requirements" element={<RequirementsForm />} />
        </Routes>

        {/* ✅ MSM Logo watermark at bottom */}
        <Logo />

        {/* ✅ Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
