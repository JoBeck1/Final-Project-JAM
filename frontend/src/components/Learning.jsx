import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../store/Store";
import ReactCardFlip from "react-card-flip";
import "../styles/LearningStyling.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Learning() {
  const { cardInfo, flip, handelFlip , resetPages, learningData} = useContext(Context);
 
  const ArrayOfCardinfo =JSON.parse(cardInfo) 
 console.log("resetpages===>", resetPages)
 console.log("learningData", learningData)

  return (
    <FlashcardContainer>
      {resetPages? <div> <h2 style={{fontSize: "2,5rem", color: "#473e41", borderBottom: "dotted"}}> No card exist</h2></div>: <Carousel className="carousel">
        
        { ArrayOfCardinfo.map((item, i) => {
          return (
            <ReactCardFlip
              isFlipped={flip}
              flipDirection="horizontal"
              flipSpeedBackToFront="1.2"
              flipSpeedFrontToBack="1.2"
            >
              <div onClick={handelFlip} className="test">
                <TopContainer></TopContainer>
                <CircleWrapper>
                  <Circle></Circle>
                </CircleWrapper>
                <TextContainer>
                  <h2>frontside</h2>
                  <FlashcardInput1>
                    <TextField>{item.frontSideLine1}</TextField>
                  </FlashcardInput1>

                  <FlashcardInput2>
                    <TextField>{item.frontSideLine2}</TextField>
                  </FlashcardInput2>
                </TextContainer>

                <ButtonContainers></ButtonContainers>
              </div>

              <div onClick={handelFlip} className="test">
                <TopContainer></TopContainer>
                <CircleWrapper>
                  <Circle></Circle>
                </CircleWrapper>
                <TextContainer>
                  <FlashcardInput1>
                    <TextField>{item.backSideLine1}</TextField>
                  </FlashcardInput1>

                  <FlashcardInput2>
                    <TextField>{item.backSideLine2}</TextField>
                  </FlashcardInput2>
                </TextContainer>

                <ButtonContainers></ButtonContainers>
              </div>
            </ReactCardFlip>
          );
        })}
      </Carousel>}
      
    </FlashcardContainer>
  );
}

const FlashcardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 65vh;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  text-decoration: none;
  color: #473e41;
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

const CircleWrapper = styled.div`
  
`;
const Circle = styled.div`
 
`;
const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1.2;
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
const TextField = styled.h3`
  border: none;
  border-radius: 5px;
  background-color: #c5d3b97a;
  opacity: 0.9;
  color: #1b1b1b;
`;

export default Learning;
