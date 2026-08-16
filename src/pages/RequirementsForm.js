import React from "react";
import "./RequirementsForm.css";

function RequirementsForm() {
  const requirements = {
    "O-Level Boarding": [
      "Birth certificate copy",
      "Grade 7 results slip",
      "Medical clearance form",
      "Boarding fees deposit proof"
    ],
    "O-Level Day": [
      "Birth certificate copy",
      "Grade 7 results slip",
      "Proof of residence",
      "Day scholar fees deposit proof"
    ],
    "A-Level Boarding": [
      "O-Level results certificate",
      "Recommendation letter",
      "Medical clearance form",
      "Boarding fees deposit proof"
    ],
    "A-Level Day": [
      "O-Level results certificate",
      "Recommendation letter",
      "Proof of residence",
      "Day scholar fees deposit proof"
    ]
  };

  return (
    <div className="requirements-page">
      <h2>Student Entry Requirements</h2>
      <div className="requirements-grid">
        {Object.entries(requirements).map(([category, items]) => (
          <div key={category} className="requirement-card">
            <h3>{category}</h3>
            <ul>
              {items.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ✅ Orientation Note */}
      <div className="orientation-note">
        <p>
          📌 Please note: All necessary requirements will be physically provided 
          on the Orientation Day.
        </p>
      </div>
    </div>
  );
}

export default RequirementsForm;
