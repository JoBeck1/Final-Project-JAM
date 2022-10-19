import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Picture1 from "../assets/images/Picture1.jpg";
import Picture2 from "../assets/images/Picture2.jpg";
import DropdownMenu from "./DropdownMenu.jsx";
import videoBg from "../assets/videoBg.mp4";

function LogOut() {
  return (
    <MainDiv className="fluid">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <Row>
          <Col md={3}>
            {/* Put Side bar here */}
            <DropdownMenu />
          </Col>

          {/* Main text */}
          <Col md={6}>
            <Title>
              <h1 className="animate__animated animate__backInDown">
                Thank you for using the JAM-Project!
              </h1>
            </Title>

            <p>
              Please come back later again and enjoy your progress!
            </p>
            <p>
              See you soon!
            </p>
            <p>
              Jochen, Ahmed and Mohammed
            </p>

            <hr />
          </Col>

          <Col md={3}>
            <div className="main_pic animate__zoomIn">
              <img
                src={Picture1}
                alt="Flashcards"
                className="animate__zoomIn"
              />
            </div>
            <div className="main_pic">
              <img src={Picture2} alt="Flags" />
            </div>


          </Col>
        </Row>
      </div>
    </MainDiv>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #473e41;
  font-family: Poppins, sans-serif;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px;
  background-color: #128ecc;
  border-radius: 10px;
  border: 2px solid #c7e1ec;
  box-shadow: 5px 5px 5px #2f373b;
  text-shadow: 2px 2px 2px #000000;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  @media (max-width: 576px) {
    font-size: 1em;
  }

  @media (max-width: 375px) {
    font-size: 0.8em;
  }

  @media (max-width: 320px) {
    font-size: 0.6em;
  }

  @media (max-width: 320px) {
    font-size: 0.6em;
  }
`;
const MainDiv = styled.div`
  font-size: 1.3em;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  background-color: #96b5c4;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  text-decoration: none;
  color: #473e41;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #c7e1ec;
  box-shadow: 5px 5px 5px #2f373b;

  background: #fff;
  position: relative;
  z-index: 1;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    z-index: 2;
    opacity: 0.5;
  }

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 1;
  }
  .content {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    padding: 0 1rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
    transition: 0.3s;
    margin-bottom: 20px;
    border-radius: 10px;
    animation: zoomIn 3s infinite;
    animation-direction: alternate;

    &:hover {
      transform: scale(1.05);
      transition: 0.3s;
      cursor: pointer;
    }
  }
  .main_pic {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
    padding: 7px;
    background-color: #55a4cc;
    border-radius: 10px;
    border: 2px solid #c7e1ec;
    box-shadow: 5px 5px 5px #2e383d;
    width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  @media (max-width: 576px) {
    font-size: 1em;
  }

  @media (max-width: 375px) {
    font-size: 0.8em;
  }

  @media (max-width: 320px) {
    font-size: 0.6em;
  }
`;

// Here is a test

export default LogOut;