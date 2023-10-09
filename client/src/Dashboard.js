import React, { useState } from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faUser, faComments, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  // State for comment input and existing comments
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  // Function to handle posting a comment
  const handlePostClick = () => {
    if (commentText.trim() !== '') {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  return (
    <div className="dashboard-container">
      <div className="duel-content">
        <FontAwesomeIcon icon={faCloud} className='cloud-icon' />
      </div>

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
          <h2>Event Schedule</h2>
          {/* Individual Event */}
          <div className="event">
            <div className="event-time">09:00 AM</div>
            <div className="event-details">
              <h3>Morning Yoga</h3>
              <p>Start your day with a refreshing yoga session.</p>
            </div>
          </div>
          {/* Add more events here */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;