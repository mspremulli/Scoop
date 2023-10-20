import React from 'react';
import styled from 'styled-components';
import ChatBot from './ChatBot';

const Container = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

const HomePage = () => (
  <Container>
    <header style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div className="image-container">
      <div className="welcome">
        <h2>Welcome to Our App</h2>
        <p>Explore our features and start carpooling today!</p>
      </div>
    </div>
    </header>
    <ChatBot />
  </Container>
);

export default HomePage;

