import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "../assets/images/unnamed.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <>
      <HeaderContainer>
        <div>
          <img src={Image} alt="logo" />
        </div>
        <div>
          <Navbar>
            <Container className="text-center">
              <Nav1>
                <Row>
                  <Col md={6}>
                    <Nav.Link href="#home">Home</Nav.Link>
                  </Col>
                  <Col md={3}>
                    <Nav.Link href="#link">Sign Up</Nav.Link>
                  </Col>
                  <Col md={3}>
                    <Nav.Link href="#link">Log In</Nav.Link>
                  </Col>
                </Row>
              </Nav1>
            </Container>
          </Navbar>
        </div>
      </HeaderContainer>
    </>
  );
}

export default Header;

const HeaderContainer = styled.div`
  font-size: 1.3em;
  text-align: center;
  display: flex;

  background-color: #79c1e2;
  img {
    width: 100px;
  }
`;

const Nav1 = styled(Nav)`
 
`;
