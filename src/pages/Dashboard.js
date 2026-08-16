import React, { useEffect, useState } from "react";

function Dashboard() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // Example: fetch the logged-in student's application status
    fetch("http://localhost:5000/my-application") 
      .then(res => res.json())
      .then(data => setStatus(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      {status ? (
        <div>
          <p><strong>Name:</strong> {status.name}</p>
          <p><strong>Email:</strong> {status.email}</p>
          <p><strong>Program:</strong> {status.program}</p>
          <p><strong>Status:</strong> {status.status}</p>
          <p><strong>Confirmation Code:</strong> {status.confirmationCode}</p>
        </div>
      ) : (
        <p>Loading your application status...</p>
      )}
    </div>
  );
}

export default Dashboard;
