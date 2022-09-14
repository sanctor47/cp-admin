import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <NavContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/">Users</NavItem>
        <NavItem to="/">Devices</NavItem>
        <NavItem to="/">Settings</NavItem>
      </NavContainer>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: sticky;
  top: 0;
  min-height: 80px;
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  color: #fff;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.2rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-out;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
