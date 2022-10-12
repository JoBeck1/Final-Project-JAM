import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "../assets/images/unnamed.png";

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <HeaderContainer>
        <Navbar>
          <div>
            <img src={Image} alt="logo" />
          </div>
          <Container className="text-center">
            <Nav>
              <LinkNav to="/">Home</LinkNav>
              <LinkNav to="/flashcardcreateNL">Start now!</LinkNav>
              <LinkNav to="/signup">Sign up</LinkNav>
              <LinkNav to="/login">Log in</LinkNav>
            </Nav>
          </Container>
        </Navbar>
      </HeaderContainer>
    </>
  );
}

export default Header;

const HeaderContainer = styled.div`
  font-size: 1.3em;
  background-color: #c7e1ec;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  position: sticky;
  overflow-y: hidden;
  top: 0;
  z-index: 1;

  

  .navbar {
    border-radius: 10px;
   
    margin: 0 auto;
       overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    text-decoration: none;
  }

  .navbar-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    text-decoration: none;
  }

  img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    padding: 10px;
    background-color: #128ecc;
    border-radius: 10px;
    border: 2px solid #c7e1ec;
    box-shadow: 5px 5px 5px #2f373b;
  }

  img:hover {
    background-color: #79c1e2;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
const LinkNav = styled(Link)`
  text-decoration: none;
  color: #2f373b;
  font-size: 1.2em;
  font-weight: 400;
  margin: 0 auto;

  &:hover {
    color: #45d69a;
    transform: scale(1.55);
    transition: 0.3s;
  }
`;
