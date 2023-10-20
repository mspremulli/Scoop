import React from 'react';
import './Homepage.css';
import ChatBot from './ChatBot';

const HomePage = () => (
  <div class="container">
    <div class="left">
    <div className="image-container">
      <div className="welcome">
        <h2>Welcome to Scoop!</h2>
        <p>Explore our features and start carpooling today!</p>
      </div>
    </div>
    </div>
    <div class="right">
      <ChatBot />
    </div>
  </div>
);

export default HomePage;

