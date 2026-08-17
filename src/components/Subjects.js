import React from "react";
import { FaPalette, FaFlask, FaBriefcase } from "react-icons/fa";
import "./Subjects.css";

function Subjects() {
  const categories = {
    Arts: ["English Language", "History", "Geography", "Shona"],
    Sciences: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Agriculture"],
    Commercials: ["Commerce", "Accounting", "Business Studies", "Economics"]
  };

  return (
    <section className="subjects">
      <h2>Subjects Offered</h2>
      <div className="subjects-categories">

        {/* Arts */}
        <div className="category">
          <h3><FaPalette className="icon" /> Arts</h3>
          <ul>
            {categories.Arts.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        </div>

        {/* Sciences */}
        <div className="category">
          <h3><FaFlask className="icon" /> Sciences</h3>
          <ul>
            {categories.Sciences.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        </div>

        {/* Commercials */}
        <div className="category">
          <h3><FaBriefcase className="icon" /> Commercials</h3>
          <ul>
            {categories.Commercials.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Subjects;
