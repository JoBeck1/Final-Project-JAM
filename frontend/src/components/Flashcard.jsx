<<<<<<< HEAD

import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReactCardFlip from 'react-card-flip';
import {Context} from "../Store"
import {toast} from "react-toastify"
=======
import React, { useState } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import Sidebar from "./Sidebar.jsx";

>>>>>>> c405f923a43095ef17ab76e8c30eb8d0a4a46127
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
<<<<<<< HEAD
  border: 5px solid red;

=======
  width: 100%;
>>>>>>> c405f923a43095ef17ab76e8c30eb8d0a4a46127
`
const Flashcard = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
<<<<<<< HEAD
  font-size: 20px;
  background-color: #232723;
  position: relative;
  margin: auto;
  line-height: center;
  border-radius: 25px;
  
  text-align: center;
  padding: 2rem 3rem;
  box-shadow: 0 2px 7px 2px rgba(31,31,31,0.2);

`
const FlashcardInput1 = styled.p`
  
display: block;

  font-size: 25px;
  font-weight: 800;
  
`
=======
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
>>>>>>> c405f923a43095ef17ab76e8c30eb8d0a4a46127
const FlashcardInput2 = styled.p`
  display: block;
  margin-left: auto;
  margin-right: auto;
<<<<<<< HEAD
  font-size: 25px;
  font-weight: 800;
`
=======
  font-size: 40px;
`;
>>>>>>> c405f923a43095ef17ab76e8c30eb8d0a4a46127
const FlashcardButton = styled.button`
  display: block;
  width: 30%;
  height: 30%;
  margin: 0 auto;
  text-align: center;
<<<<<<< HEAD
  padding:10px ;
  
  font-Size: 15px;
  background-color:#9ed86e;
  font-weight: bold;
  border-Radius: 5px;
  transition: 1s ease-in-out;
  :hover {
    transform:translateY(-3px) ;
    background-color: #76f30f;
  }
`
=======
  padding: 10px;
  font-size: 20px;
  background-color: #f5d9fa;
  font-weight: bold;
  border-radius: 5px;
`;
>>>>>>> c405f923a43095ef17ab76e8c30eb8d0a4a46127
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
<<<<<<< HEAD
  background-color: #9ed86e;
  font-weight: bold;
  border-Radius: 5px;
`
const CircleWrapper= styled.div`
position: absolute;
top: 0;
left: 0;
min-width: 100%;
min-height: 100%;
overflow:hidden;
border-top-right-radius: 25px;

`
const Circle= styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top:-4.2rem;
  right: -8em;
  z-index: 5;
background-color: #e6c823;
  border-radius:50%;
 

`
const TopContainer= styled.div`
width: 100%;
display:flex;
flex:1.2;
position: relative;
align-items: center;
justify-content:flex-end;
padding:1em 15px;

`
const ButtonContainers = styled.div`
display: flex;
flex:.8;
padding: 0 1em;
color: #fff;

`

const TextContainer= styled.div`
margin: 0;
z-index: 10;
font-size:25px;
font-weight:300;


`
const InputField= styled.input`
  border: none;
  border-radius: 5px;
  background-color: #9ed86e;
  opacity: 0.9;
  color: #fff;
`


export default ReactCard;
=======
  background-color: #f5d9fa;
  font-weight: bold;
  border-radius: 5px;
`;
export default ReactCard;
>>>>>>> c405f923a43095ef17ab76e8c30eb8d0a4a46127
