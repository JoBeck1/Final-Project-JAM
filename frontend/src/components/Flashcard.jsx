
import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReactCardFlip from 'react-card-flip';
import {Context} from "../Store"
import {toast} from "react-toastify"
function ReactCard() {
 
  const {flip, setFlip, text, setText, handelFlip, handleFlashCardSubmit,handleInputText  } = useContext(Context)





//  useEffect(()=>{
//  
// }, [text])

  return (
    <>
      <Sidebar />
      <FlashcardContainer>
        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
          {/* -----------Flashcard Front --------- */}
          <Flashcard>
            {/* First line of Flashcard input */}
            <FlashcardInput1>
              <input
                type="text"
                name="name"
                style={{
                  textAlign: "center",
                }}
              />
            </FlashcardInput1>
            {/* Second line of Flashcard input */}
            <FlashcardInput2>
              <input
                type="text"
                name="name"
                style={{
                  textAlign: "center",
                }}
              />
            </FlashcardInput2>
            {/* Backside/Frontside Button */}
            <FlashcardButton style={{}} onClick={() => setFlip(!flip)}>
              To Backside
            </FlashcardButton>
          </Flashcard>
          {/* ------------ Flashcard Back -----------------------*/}
          <Flashcard>
            {/* First line of Flashcard input */}
            <FlashcardInput1>
              <input
                type="text"
                name="name"
                style={{
                  textAlign: "center",
                }}
              />
            </FlashcardInput1>
            {/* Second line of Flashcard input */}
            <FlashcardInput2>
              <input
                type="text"
                name="name"
                style={{
                  textAlign: "center",
                }}
              />
            </FlashcardInput2>
            {/* Backside/Frontside Button */}
            <FlashcardButton style={{}} onClick={() => setFlip(!flip)}>
              To Frontside
            </FlashcardButton>
          </Flashcard>
        </ReactCardFlip>
        <ButtonContainer>
          <ContainerButton
          // onClick={}
          >
            Previous Flashcard
          </ContainerButton>
          <ContainerButton
          // onClick={}
          >
            Next Flashcard
          </ContainerButton>
        </ButtonContainer>
      </FlashcardContainer>
    </>
  );
}
// Styling
const FlashcardContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: green;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Flashcard = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-Size: 25px;
  background-color:white;
  color: green;
  margin: auto;
  line-height: center;
  border-radius: 50%;
  border: 2px solid black;
  text-align: center;
  padding: 7rem 3rem;
`;
const FlashcardInput1 = styled.p`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 40px;
`;
const FlashcardInput2 = styled.p`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 40px;
`;
const FlashcardButton = styled.button`
  display: block;
  width: 30%;
  height: 30%;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
  font-size: 20px;
  background-color: #f5d9fa;
  font-weight: bold;
  border-radius: 5px;
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 30px;
  width: 130%;
`
const ContainerButton = styled.button`
  display: block;
  width: 20%;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
  font-size: 20px;
  background-color: #f5d9fa;
  font-weight: bold;
  border-radius: 5px;
`;
export default ReactCard;
