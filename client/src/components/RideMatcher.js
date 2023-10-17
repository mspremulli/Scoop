import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faUser, faCalendar, faMapPin } from '@fortawesome/free-solid-svg-icons';

function RideMatcher() {
  const [rideMatches, setRideMatches] = useState([
    // Initial ride matches data
    {
      id: 1,
      driverName: 'Driver A going to:',
      event: 'Event 1 at:',
      destination: 'Location A1',
    },
    {
      id: 2,
      driverName: 'Driver B going to:',
      event: 'Event 2 at:',
      destination: 'Location B2',
    },
  ]);

  useEffect(() => {
    // Function to update ride data with random rides
    const updateRideData = () => {
      const newRideMatches = [...rideMatches];

      // Create a delay of 10 seconds before adding a new random ride
      setTimeout(() => {
        const randomDriver = 'Driver ' + String.fromCharCode(65 + Math.floor(Math.random() * 26)) + " going to:";
        const randomEvent = 'Event ' + (Math.floor(Math.random() * 10) + 1) + " at:";
        const randomDestination = ' Location ' + String.fromCharCode(65 + Math.floor(Math.random() * 26));

        newRideMatches.unshift({
          id: Date.now(),
          driverName: randomDriver,
          event: randomEvent,
          destination: randomDestination,
        });

        if (newRideMatches.length > 4) {
          newRideMatches.pop();
        }

        setRideMatches(newRideMatches);
      }, 10000); // 10 seconds
    };

    // Call updateRideData immediately
    updateRideData();

    // Set the interval for subsequent updates
    const updateInterval = setInterval(updateRideData, 10000); // 10 seconds

    return () => {
      clearInterval(updateInterval);
    };
  }, [rideMatches]);

  return (
    <div className="ride-matcher">
      <div className="ride-matcher-content">
        <ul className="ride-matches-list">
          {rideMatches.map((match) => (
            <li key={match.id} className="ride-match">
              <p>
                <FontAwesomeIcon icon={faUser} size="xl" style={{ color: "#a8a8a8", }} /> {match.driverName}
              </p>
              <p>
                <FontAwesomeIcon icon={faCalendar} size="xl" style={{ color: "#a8a8a8", }} /> {match.event}
              </p>
              <p>
                <FontAwesomeIcon icon={faMapPin} size="xl" style={{ color: "#a8a8a8" }} />     {match.destination}
              </p>
              <button>Request Ride</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RideMatcher;
