import React from 'react';
import styled from 'styled-components';
import './Homepage.css';
const Container = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  width: 100%;
  height: 100vh;
`;

const HomePage = () => (
  
  <Container>
    {/* <header style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div className="image-container">
      <div className="welcome">
        <h2>Welcome to Our App</h2>
        <p>Explore our features and start carpooling today!</p>
      </div>
    </div>
    </header> */}
    <iframe
                src="https://9dhj8j.csb.app" /* modified Vanta's public JS animation:  https://codesandbox.io/s/dreamy-dawn-9dhj8j?file=/index.html*/
                width="5000px"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
  </Container>
);

export default HomePage;

