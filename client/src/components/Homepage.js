import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  </Container>
);

function App() {
  return (
    <HomePage />
  );
}

export default App;

