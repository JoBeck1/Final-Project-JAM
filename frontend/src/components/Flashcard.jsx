import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import { Context } from "../store/Store";
import image2 from  "../assets/images/image2.jpg";

function ReactCard() {
  const {
    flip,
    text,
    setText,
    handelFlip,
    handleFlashCardSubmit,
    handleInputText,
    nextStage,
    setNextStage,
    navigateToLearning,
  } = useContext(Context);

  return (
    <div>
      <FlashcardContainer onSubmit={handleFlashCardSubmit}>
        <ReactCardFlip
          isFlipped={flip}
          flipDirection="horizontal"
          flipSpeedBackToFront="1.2"
          flipSpeedFrontToBack="1.2"
        >
          {/* -----------Flashcard Front --------- */}

          <Flashcard>
            <TopContainer></TopContainer>
            <CircleWrapper>
              <Circle></Circle>
            </CircleWrapper>
            <TextContainer>
              <FlashcardInput1>
                <InputField
                  type="text"
                  name="frontSideLine1"
                  value={text.frontSideLine1}
                  style={{
                    textAlign: "center",
                    width: "100%",
                  }}
                  onChange={handleInputText}
                  placeholder="write your word ....."
                />
              </FlashcardInput1>
              {/* Second line of Flashcard input */}
              <FlashcardInput2>
                <InputField
                  type="text"
                  name="frontSideLine2"
                  value={text.frontSideLine2}
                  style={{
                    textAlign: "center",
                    width: "100%",
                  }}
                  onChange={handleInputText}
                  placeholder="write your sentance.."
                />
              </FlashcardInput2>
              <FlashcardButton onClick={handelFlip}>
                To Backside
              </FlashcardButton>
            </TextContainer>

            <ButtonContainers></ButtonContainers>
            {/* Backside/Frontside Button */}

            {/* <ButtonContainers>

                </ButtonContainers> */}
            {/* First line of Flashcard input */}
          </Flashcard>
          {/* ------------ Flashcard Back -----------------------*/}
          <Flashcard>
            <TopContainer></TopContainer>
            <CircleWrapper>
              <Circle></Circle>
            </CircleWrapper>
            <TextContainer>
              {/* First line of Flashcard input */}
              <FlashcardInput1>
                <InputField
                  type="text"
                  name="backSideLine1"
                  value={text.backSideLine1}
                  style={{
                    textAlign: "center",
                    width: "100%",
                  }}
                  onChange={handleInputText}
                  placeholder="write the meaning ..."
                />
              </FlashcardInput1>
              {/* Second line of Flashcard input */}
              <FlashcardInput2>
                <InputField
                  type="text"
                  name="backSideLine2"
                  value={text.backSideLine2}
                  style={{
                    textAlign: "center",
                    width: "100%",
                  }}
                  onChange={handleInputText}
                  placeholder="write the meaning ..."
                />
              </FlashcardInput2>
              {/* Backside/Frontside Button */}
              <FlashcardButton onClick={handelFlip}>
                To Frontside
              </FlashcardButton>
            </TextContainer>
            <ButtonContainers></ButtonContainers>
          </Flashcard>
        </ReactCardFlip>
        <ButtonContainer>
          <ContainerButton>Previous Card</ContainerButton>
          <ContainerButton
            // onClick={}
            type="submit"
          >
            Next Card
          </ContainerButton>
        </ButtonContainer>
      </FlashcardContainer>
      <ContainerButton onClick={navigateToLearning}>
        Done Flashcard
      </ContainerButton>
    </div>
  );
}
// Styling
const FlashcardContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  text-decoration: none;
  color: #473e41;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Flashcard = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 20px;

  background-image: url(${image2});
  position: relative;
  margin: auto;
  line-height: center;
  border-radius: 5px;

  text-align: center;
  padding: 2rem 3rem;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    padding: 1rem 1rem;
    margin: 0;
  }
  @media (max-width: 1280px) {
    width: 350px;
    height: 350px;
  }
  @media (max-width: 980px) {
    width: 330px;
    height: 330px;
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 480px) {
    width: 350px;
    height: 300px;
  }

  @media (max-width: 320px) {
    width: 100vw;
    height: 100%;
  }

  @media (max-width: 280px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 240px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 200px) {
    width: 100%;
    height: 100%;
  }
`;
const FlashcardInput1 = styled.p`
  display: block;

  font-size: 25px;
  font-weight: 800;
`;
const FlashcardInput2 = styled.p`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 25px;
  font-weight: 800;
`;
const FlashcardButton = styled.button`
  display: block;
  width: 30%;
  height: 30%;
  margin: 0 auto;
  text-align: center;
  padding: 10px;

  font-size: 15px;
  background-color: #9ed86e;
  font-weight: bold;
  border-radius: 5px;
  transition: 1s ease-in-out;
  :hover {
    background-color: #78ca34;
  }
    
  @media (max-width: 1280px) {
    width: 50%;
    height: 40%;
    padding: 0;
    font-size: 10px;
  }
  @media (max-width: 600px) {
    width: 30%;
    height: 30%;
    padding: 5px;
    font-size: 10px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 10px;
  padding: 10px;
  @media (max-width: 768px) {
    width: 80%;
    height: 80px;
    font-size: 10px;
  }
`;
const ContainerButton = styled.button`
  display: block;
  width: 30%;
  height: 60%;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
  font-size: 15px;
  background-color: #9ed86e;
  font-weight: bold;
  border-radius: 5px;
  transition: 1s ease-in-out;
  :hover {
    background-color: #579fda;
    animation: fadeOut 3s infinite;
    animation-duration: 2s;
  }
  @media (max-width: 768px) {
    width: 80px;
    height: 100px;
  }
  @media (max-width: 980px) {
    width: 30%;
    height: 20%;
    font-size: 10px;
  }
  @media (max-width: 600px) {
    width: 80px;
    height: 100px;
  }
  @media (max-width: 1024px) {
    width: 30%;
    height: 20%;
  }
  @media (max-width: 1280px) {
    width: 30%;
    height: 20%;
    padding: 1rem 1rem;
    font-size: 10px;
  }
  @media (max-width: 480px) {
    width: 80px;
    height: 50px;
    font-size: 8px;
  }
`;

const CircleWrapper = styled.div`
  
`;
const Circle = styled.div`
  
`;
const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;
const ButtonContainers = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
  color: #fff;
`;

const TextContainer = styled.div`
  margin: 0;
  z-index: 10;
  font-size: 25px;
  font-weight: 300;
`;
const InputField = styled.input`
  border: none;
  border-radius: 5px;
  background-color: #b0c99b7b;
  opacity: 0.5;
  color: #473e41;
  font-size: 20px;
  font-weight: 800;
  padding: 10px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  :focus {
    outline: none;
  }
`;

export default ReactCard;
