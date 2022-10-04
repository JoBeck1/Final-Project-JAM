import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "../assets/images/unnamed.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom"


function Header() {
  return (
    <>
      <HeaderContainer>
      
          <Navbar>
        <div>
          <img src={Image} alt="logo" />
        </div>
            <Container className="text-center">
              <Nav1>
              
                  <Link to = "/">
                    Home
                  </Link>
                  <Link to = "/flashcardcreateNL">
                    Start now!
                  </Link>
                  <Link to = "/signup">
                    Sign up
                  </Link>
                    <Link to ="/login">Log in</Link>
              </Nav1>
            </Container>
          </Navbar>
      </HeaderContainer>
    </>
  );
}

export default Header;

const HeaderContainer = styled.div`
  font-size: 1.3em;
  font-family: Poppins, sans-serif; 
 //margin-top: 10px;
 //margin-left: 5px;
 margin-right: 5px;
 height: 10vh;
 list-style: none;

 

  background-color: #79c1e2;
  img {
    width: 100px;
  }
`;

const Nav1 = styled(Nav)`
 //padding: 1rem;
 /* margin: 0 auto; */
 //text-align: center;
 width: 100%;
 display: flex;
 justify-content: space-around;
 align-items: center;
 position: absolute;
 left: 30px;
  
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.3em;
    font-family: Poppins, sans-serif;
    &:hover {
      color: #000;
    }
  }

 
 
`;
