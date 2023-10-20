import React from 'react';
import './Homepage.css';
import ChatBot from './ChatBot';
import Vanta from './Vanta';

const HomePage = () => (
  <div class="container">
    <div class="left">
    <div className="image-container">
      <div className="welcome">
        <h2>Welcome to Scoop!</h2>
        <p>Explore our features and start carpooling today!</p>
      </div>
      <div style={{position: 'fixed', width: '3000px', zIndex: -1, bottom: '0'}}><Vanta ></Vanta></div>
    </div>
    </div>
    <div class="right">
      <ChatBot />
    </div>
  </div>
);

export default HomePage;

