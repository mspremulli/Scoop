import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  text-align: center;
  font-family: 'Varela Round';
  padding: 20px;
  width: 50vw;
  max-width: 50vw;
  min-width: 40vw;
  height: 79vh;
  max-height: 79vh;
  margin-top: 9vh;
  margin-left: 10vw;
  border-radius: 15px;
  background: linear-gradient(to bottom, #001F23, transparent);
  background-color: rgba(204, 204, 204, 0.2);
  overflow-y: auto;
`;

const logoStyle = {
  fontFamily: 'Varela Round, sans-serif',
  fontSize: '2rem',
  textAlign: 'center',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  marginTop: '7vh',
  marginBottom: '1vh',
};

const subStyle = {
  fontSize: '1rem',
  verticalAlign: 'super',
  margin: '0 2px',
};


const AboutUs = () => {
  return (
    <AboutContainer>
      <div className="about-us-text">
        <h1>About Us</h1>
        <p>
          Transforming the carpooling landscape, our app now boasts an IBM Watson chat bot that enhances your travel experience while championing sustainability. When you indicate your destination, the chat bot not only curates tailored event recommendations but also enables you to create your events by specifying your desired location.
        </p>
        <p>
          If you're unsure where to go, the bot prompts you to provide a location for personalized suggestions. With your preferences in mind, IBM Watson conducts intelligent event searches and connects you with fellow users who are carpooling to the same event. This integration doesn't just streamline your experience; it's also a positive step toward reducing CO2 emissions, promoting eco-friendly travel, and fostering a sense of community. Join us in embracing a greener, more connected future of carpooling and adventure.
        </p>
        <h1>Mission Statement</h1>
        <p>Scoop aims to bring community together, lower CO2 emissions, and save on gas money.</p>
        <div style={{ ...logoStyle, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <div style={{ color: '#00FF85', fontSize: '40px', fontWeight: 'bold'  }}>S</div>top
  <div style={{ color: '#00FF85', fontSize: '40px', fontWeight: 'bold'  }}>CO</div><sub style={subStyle}><b>2</b></sub>
  <div style={{ color: '#00FF85', fontSize: '40px', fontWeight: 'bold'  }}>P</div>ollution
</div>
</div>
    </AboutContainer>
  );
};

export default AboutUs;
