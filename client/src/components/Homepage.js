import React from 'react';
import Vanta from './Vanta'

import ChatBot from './ChatBot';
import './Homepage.css';
import styled from 'styled-components';

var Container = styled.div`
`

const HomePage = () => (
  
  <Container>
    { <header style={{ minHeight: '100vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
    <div className="image-container" >
      <div className="welcome">
        <h2>Welcome to Scoop!</h2>
        <p>Explore our features and start carpooling today!</p>
        
      </div>
     
    </div>
    <ChatBot />
    <div style={{position: 'fixed', width: '5000px', zIndex: -1}}><Vanta ></Vanta></div>
    </header> }
  </Container>
  
  
);


export default HomePage;
