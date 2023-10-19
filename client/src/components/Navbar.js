import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Brand = styled.div`
  width: 100px;
  height: 100px;
`;

const NavBar = styled.nav`
  background-color: #00000000;
  display: flex;
  justify-content: space-between;

  position: sticky;
  top: 20px;
`;

const NavLink = styled(Link)`
  color: #00FF85;
  text-decoration: none;
  margin: 0 10px 0 ;
  font-size: 1.15rem;
  font-weight: 600;
 line-height: 40px;
 
  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
  <NavBar>
       <Brand><img src="../icon.svg" alt="Scoop" width="140px;"></img></Brand>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Heat Map</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  </NavBar>
  )
}
export default Navbar;
