import React from 'react';

class Vanta extends React.Component {
  render() {
    return (
      <div>
        <iframe 
          border="none"
          title="Internal HTML File"
          src="/vanta.html"
          width="100%"
          overflow= "hidden"
          height= "1000px"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    );
  }
}

export default Vanta ;