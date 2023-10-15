// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faUser, faComments, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import EmissionTracker from './EmissionTracker'; // Import your EmissionTracker component


function RideMatcher() {
  // Sample ride matches (replace with actual matching logic)
  const [rideMatches, setRideMatches] = useState([
    {
      id: 1,
      driverName: 'Driver A',
      event: 'Event 1',
      destination: 'Location A1',
    },
    {
      id: 2,
      driverName: 'Driver B',
      event: 'Event 2',
      destination: 'Location B2',
    },
  ]);

  useEffect(() => {
    // Function to update ride data with random rides
    const updateRideData = () => {
      const newRideMatches = [...rideMatches];
      // Generate random ride data (you can replace this logic)
      const randomDriver = 'Driver ' + String.fromCharCode(65 + Math.floor(Math.random() * 26));
      const randomEvent = 'Event ' + (Math.floor(Math.random() * 10) + 1);
      const randomDestination = 'Location ' + String.fromCharCode(65 + Math.floor(Math.random() * 26));

      // Add the new random ride
      newRideMatches.unshift({
        id: Date.now(), // Use a unique key (you can use a more robust approach)
        driverName: randomDriver,
        event: randomEvent,
        destination: randomDestination,
      });

      // Keep a maximum number of rides (e.g., 10)
      if (newRideMatches.length > 4) {
        newRideMatches.pop();
      }

      setRideMatches(newRideMatches);
    };

    // Update ride data every 5 seconds (adjust the interval as needed)
    const updateInterval = setInterval(updateRideData, 5000);

    return () => {
      clearInterval(updateInterval); // Cleanup the interval when the component unmounts
    };
  }, [rideMatches]);

  return (
    <div className="ride-matcher">
      <div className="ride-matcher-content">
        {rideMatches.map((match) => (
          <div key={match.id} className="ride-match">
            <p>
              {match.driverName} is going to {match.event} at {match.destination}
            </p>
            <button>Request Ride</button>
          </div>
        ))}
      </div>
    </div>
  );
}


function Dashboard() {
  // State for comment input and existing comments
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  // State for events
  const [events, setEvents] = useState([]);

  // Function to handle posting a comment
  const handlePostClick = () => {
    if (commentText.trim() !== '') {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };



  // Function to generate random events
  const generateRandomEvents = () => {
    const randomEvents = [];
    for (let i = 1; i <= 4; i++) {
      randomEvents.push({
        id: i,
        time: `${i + 8}:00 AM`, // For demonstration, it starts at 8:00 AM
        title: `Event ${i}`,
        description: `Description for Event ${i}`,
      });
    }
    return randomEvents;
  };

  useEffect(() => {
    setEvents(generateRandomEvents());

    // Interval to change events every 10 seconds
    const intervalId = setInterval(() => {
      setEvents((prevEvents) => {
        // Rotate the events array to the left (cycle through events)
        const updatedEvents = [...prevEvents];
        const firstEvent = updatedEvents.shift();
        updatedEvents.push(firstEvent);
        return updatedEvents;
      });
    }, 6000);

    return () => {
      // Clear the interval on component unmount
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="dashboard-container">

      <FontAwesomeIcon icon={faCloud} className='cloud-icon' />


      <div className="content-wrapper">

        {/* Sidebar */}
        <div className="sidebar">
          {/* Profile Section */}
          <div className="profile">
            <div className="profile-pic">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <h3>User Name</h3>
          </div>

          {/* Sidebar Navigation */}
          <ul className="sidebar-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Rides</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Messages</a></li>
          </ul>
        </div>


        {/* Main Content */}
        <div className="main-content">
          {/* Emission Tracker Component */}
          <EmissionTracker />



          {/* Status Update */}
          <div className="status-update">
            {/* Map */}
            <div className="map">
              {/* Add your map component here */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387051.2814168042!2d-74.25986578607159!3d40.69767006045345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDAwJzAwLjQiTiA3NMKwMjgnMDUuOCJX!5e0!3m2!1sen!2sus!4v1643315473522!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            {/* Status Update */}
            <div className="status-update-content">
              <textarea
                placeholder="What's on your mind?"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              ></textarea>
              <button onClick={handlePostClick}>Post</button>
            </div>
          </div>

          {/* Post Section */}
          <div className="post-section">
            {/* Individual Post */}
            <div className="post">
              <div className="post-avatar">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="post-content">
                <h3>User123 posted:</h3>
                <p>Having a great time with friends! 🚗 #WeekendFun</p>
              </div>
              <div className="post-actions">
                <button><FontAwesomeIcon icon={faThumbsUp} /> Like</button>
                <button><FontAwesomeIcon icon={faComments} /> Comment</button>
              </div>
            </div>

            {/* Add more posts here */}
          </div>

          {/* Comment Section */}
          <div className="comment-section">
            {/* Existing comments */}
            {comments.map((comment, index) => (
              <div className="comment" key={index}>
                <div className="comment-avatar">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="comment-content">
                  <div className="user-content">
                    <h4>User{index + 1}</h4>
                    <p>{comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Board Sidebar */}

        <div className="event-board-sidebar">
          <h2>Ride Matcher</h2>
          {/* Include the RideMatcher component here */}
          <RideMatcher />
          {/* Rest of your Dashboard component */}

          <h2>Event Schedule</h2>
          {/* Individual Event */}
          <div className="event">
            {events.map((event) => (
              <div className="event-content" key={event.id}>
                <div className="event-time">{event.time}</div>
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
                <button>Schedule Event</button>
              </div>
            ))}
          </div>
          {/* Add more events here */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;