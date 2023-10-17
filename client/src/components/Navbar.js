import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Brand = styled.div`
  color: white;
  font-size: 1.5rem;
`;

const NavBar = styled.nav`
  background-color: #282c34;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: sticky;
  top: 0;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
  <NavBar>
    <Brand>Scoop</Brand>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  </NavBar>
  )
}
export default Navbar;