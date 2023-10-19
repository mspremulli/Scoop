import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Data/icon.svg';

const Brand = styled.div`
  width: 100px;
  height: 50px;
  font-family: 'Varela Round', sans-serif;
  align-items: center; /* Vertically center content */
  padding: 10px 20px; /* Add top and left padding to the brand */
`;

const NavBar = styled.nav`
  background-color: #00181c;
  display: flex;
  justify-content: space-between;
  position: fixed; /* Make the Navbar fixed */
  align-items: center; /* Vertically center content */
  top: 0; /* Position it at the top */
  left: 0; /* Align it to the left */
  width: 100%; /* Span the entire width */
  z-index: 1000; /* Set a high z-index to ensure it's on top of other content */
  border-bottom: 2px solid #193538; /* Add a colored border at the bottom */
  box-shadow: 0 0 10px rgba(25, 53, 56, 0.4); /* Add a subtle box-shadow for the glow effect */
  padding-right: 20px; /* Add right padding to the navbar */
`;

const NavLink = styled(Link)`
  color: #00ad14;
  text-decoration: none;
  margin: 0 10px 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 40px;
  transition: color 0.3s, transform 0.5s; /* Add transitions for color and transform */

  &:hover {
    color: #00FF85; /* Change color on hover */
    transform: translateX(-5px); /* Apply a horizontal translation on hover */
  }
`;


function Navbar() {
  return (
    <NavBar>
      <Brand>
        <img src={logo} alt="Scoop" width="140px" />
      </Brand>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Heat Map</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </NavBar>
  );
}

export default Navbar;
