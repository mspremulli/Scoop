import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavBar = styled.nav`
  background-color: #00000000;
  display: flex;
  justify-content: space-between;
  width: 700px;
  position: fixed;
  top: 30px; left: 0; right: 0;
  margin: 0 auto;
`;

const NavLink = styled(Link)`
  color: #00FF85;
  text-decoration: none;
  margin: 0 8px 0;
  font-size: 1rem;
  font-weight: 700;
  border: solid 8px #006240;
  border-radius: 12px;
  background-color: #006240;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
  <NavBar>
      <img src="../icon.svg" alt="Scoop" width="160px;"></img>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Map</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  </NavBar>
  )
}
export default Navbar;
