import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <NavContainer>
        <NavItem to="/networks">Networks</NavItem>
        <NavItem to="/users">Users</NavItem>
        <NavItem to="/devices">Devices</NavItem>
        <NavItem to="/settings">Settings</NavItem>
      </NavContainer>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: sticky;
  top: 0;
  /* min-height: 80px; */
  height: 80px;
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* gap: 1rem; */
  align-items: center;
  color: #fff;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  height: 100%;
  width: 100%;
  /* border: 1px solid #ccc; */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-out;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
