

import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';

import ReactCardFlip from 'react-card-flip';
import {Context} from "../Store"

import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"
import axios from 'axios';


function ReactCard() {
  const navigate= useNavigate()
  const {flip, setFlip, text, setText, handelFlip, handleFlashCardSubmit,handleInputText, nextStage, setNextStage } = useContext(Context)
  const [learningData, setLearningData]= useState({})
 

const navigateToLearning= async()=> {
  let data = await axios.get("/flashcardcreate/learning") 
  setLearningData(data.data)
  console.log(data.data);
 setNextStage({title: 'Learning'})
  toast.success("welcome to learn Stage", {position:toast.POSITION.TOP_CENTER})
}




  return (

<div>
      <FlashcardContainer onSubmit={handleFlashCardSubmit}>
          <ReactCardFlip isFlipped={flip}
              flipDirection="horizontal"
              flipSpeedBackToFront= "1.2"
              flipSpeedFrontToBack= "1.2" >
          {/* -----------Flashcard Front --------- */}
              
              <Flashcard>
                <TopContainer>

                </TopContainer>
                <CircleWrapper>

                  <Circle></Circle>
                </CircleWrapper>
                <TextContainer>

                  <FlashcardInput1>
                      <InputField type="text" name="frontSideLine1" value={text.frontSideLine1} style={{
                      textAlign: 'center', width:"100%"}} onChange={ handleInputText}
                      placeholder="write your word ....."
                      />
                   </FlashcardInput1>
              {/* Second line of Flashcard input */}
                  <FlashcardInput2>
                      <InputField type="text" name="frontSideLine2" value={text.frontSideLine2} style={{
                      textAlign: 'center', width:"100%"
                      }}onChange={ handleInputText} placeholder="write your sentance.."
                      />
                   </FlashcardInput2>
                  <FlashcardButton  onClick={handelFlip }>
                      To Backside
                  </FlashcardButton>
                </TextContainer>
                  
                <ButtonContainers>

</ButtonContainers>
              {/* Backside/Frontside Button */}
             
                {/* <ButtonContainers>

                </ButtonContainers> */}
              {/* First line of Flashcard input */}
              </Flashcard>
          {/* ------------ Flashcard Back -----------------------*/}
              <Flashcard>
              <TopContainer>

</TopContainer>
<CircleWrapper>

  <Circle></Circle>
</CircleWrapper>
<TextContainer>
              {/* First line of Flashcard input */}
                  <FlashcardInput1>
                   
                      <InputField type="text" name="backSideLine1" value={text.backSideLine1} style={{
                      textAlign: 'center', width:"100%",
                      }} onChange={ handleInputText}
                      placeholder="write the meaning ..."
                      />
                   </FlashcardInput1>
              {/* Second line of Flashcard input */}
                  <FlashcardInput2>
                 
                      <InputField type="text" name="backSideLine2" value={text.backSideLine2} style={{
                      textAlign: 'center', width:"100%", 
                      }}onChange={ handleInputText}
                      placeholder="write the meaning ..."
                      />
                   </FlashcardInput2>
              {/* Backside/Frontside Button */}
                  <FlashcardButton  onClick={handelFlip}>
                      To Frontside
                  </FlashcardButton>
                  </TextContainer>
                  <ButtonContainers>

                 </ButtonContainers>
              </Flashcard>
             
          </ReactCardFlip>
          <ButtonContainer>
              <ContainerButton
            
              >
                  Previous Flashcard
              </ContainerButton>
              <ContainerButton
              // onClick={}
              type="submit"
              >
                  Next Flashcard
              </ContainerButton>
          </ButtonContainer>

      </FlashcardContainer>
              <ContainerButton
            onClick={navigateToLearning}
            >
               Done Flashcard
            </ContainerButton>
      </div>
  );
}
// Styling
const FlashcardContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 65vh;
  justify-content: center;
  align-items: center;
  /* background-color: #8b8888; */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  background-color: #232723;
  position: relative;
  margin: auto;
  line-height: center;
  border-radius: 25px;
  
  text-align: center;
  padding: 2rem 3rem;

`
const FlashcardInput1 = styled.p`
  
display: block;

  font-size: 25px;
  font-weight: 800;
  
`
const FlashcardInput2 = styled.p`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 25px;
  font-weight: 800;
`
const FlashcardButton = styled.button`
  display: block;
  width: 30%;
  height: 30%;
  margin: 0 auto;
  text-align: center;
  padding:10px ;
  
  font-Size: 15px;
  background-color:#9ed86e;
  font-weight: bold;
  border-Radius: 5px;
  transition: 1s ease-in-out;
  :hover {
    background-color: #78ca34;
    animation: flip 5s infinite;
    animation-duration: 3s;
    

  }
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  margin: 10px;
  padding: 10px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
const ContainerButton = styled.button`

  display: block;
  width: 30%;
  height: 50%;
  margin: 0 auto;
  text-align: center;
  padding:10px ;

  font-Size: 15px;
  background-color:#9ed86e;
  font-weight: bold;
  border-Radius: 5px;
  transition: 1s ease-in-out;
  :hover {  
    background-color: #579fda;
    animation: fadeOut 3s infinite;
    animation-duration: 2s;

  }
`;

 

  
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
flex: 1;
justify-content: center;
align-items: center;
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
  opacity: 0.8;
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
`

 


export default ReactCard;
