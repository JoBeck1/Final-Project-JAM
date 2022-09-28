import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "../assets/images/unnamed.png";


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
              
                 
                    <Nav.Link href="#home">Home</Nav.Link>
               
                
                    <Nav.Link href="#link">Sign Up</Nav.Link>
               
                    <Nav.Link href="#LogIn">log in</Nav.Link>
                 
              
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
 //margin-top: 10px;
 //margin-left: 5px;
 //margin-right: 5px;

 

  background-color: #79c1e2;
  img {
    width: 100px;
  }
`;

const Nav1 = styled(Nav)`
 padding: 1rem;
 /* margin: 0 auto; */
 text-align: center;
 width: 100%;
 display: flex;
 justify-content: space-around;
 align-items: center;
 position: absolute;
 left: 30px;
 
`;
