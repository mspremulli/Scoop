// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faUser, faComments, faThumbsUp, faCalendar } from '@fortawesome/free-solid-svg-icons';
import EmissionTracker from './EmissionTracker'; // Import your EmissionTracker component
import RideMatcher from './RideMatcher'; // Import your RideMatcher component

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
              <div className = "corner">
              <iframe
                src="https://8jc7g5-5173.csb.app"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
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
          <hr></hr>
          <h2 className="event-schedule-header">Event Schedule</h2>
          {/* Individual Event */}
          <div className='event-container'>
            {events.map((event) => (
              <div className="event" key={event.id}>
                <div className="event-content">
                  <FontAwesomeIcon className="calendar-icon" icon={faCalendar} style={{ fontSize: '2rem', color: 'grey' }} />
                  <div className="event-time">{event.time}</div>
                  <div className="event-details">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </div>
                  <button>Schedule Event</button>
                </div>
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
