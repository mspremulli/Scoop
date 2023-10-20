import React, { useState, useEffect } from 'react';

function EmissionsTracker() {
  const [emissions, setEmissions] = useState([]);
  const [newEmission, setNewEmission] = useState('');

  const options = { method: 'GET', headers: { accept: 'application/json' } };


  // Fetch emissions from the API
  useEffect(() => {
    fetch('https://api.v2.emissions-api.org/api/v2/countries.json', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, []);

  // Function to handle adding a new emission
  const addEmission = () => {
    if (newEmission.trim() === '') return;

    // Here, you can implement the logic to add a new emission to the API if needed.

    // Clear the input field
    setNewEmission('');
  };

  return (
    <div>
      <h2>Ride and Event Activity Pulse</h2>
      <ul>
        {emissions.map((emission) => (
          <li key={emission.id}>{emission.sourceName}</li>
        ))}
      </ul>
    </div>
  );
}

export default EmissionsTracker;
