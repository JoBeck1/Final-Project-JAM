import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components';
import {Context} from "../Store"
import ReactCardFlip from 'react-card-flip';
import "../styles/LearningStyling.css"
import { AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Learning() {
   const {cardInfo, flip, handelFlip}= useContext(Context) 
  const [index, setIndex]= useState(0)
    const ArrayOfCardinfo= JSON.parse(cardInfo)
console.log("cardinfo===>",ArrayOfCardinfo)
 console.log(
  
 );

// useEffect= (()=>{
// }, [index])

console.log(index);
    
  return (
    <FlashcardContainer > 
      <Carousel  className="carousel"> 
  
  
       {ArrayOfCardinfo.map((item,i)=>{
  
         return (
      <div>
  <ReactCardFlip isFlipped={flip}
    flipDirection="horizontal"
      flipSpeedBackToFront= "1.2"
   flipSpeedFrontToBack= "1.2">

       <div onClick={handelFlip } className="slide" >

          {console.log("this inside map===>",i, "=", index)}

                <TopContainer>

                </TopContainer>
                <CircleWrapper>

                  <Circle></Circle>
                </CircleWrapper>
                <TextContainer>

                  <FlashcardInput1>
                      <TextField>{item.frontSideLine1}</TextField>
                   </FlashcardInput1>
              
                  <FlashcardInput2>
                      <TextField>{item.frontSideLine2}</TextField>
                   </FlashcardInput2>
           
                </TextContainer>
                  
      
                <ButtonContainers>

</ButtonContainers>
            
              </div>
       
       


 



              <div onClick={handelFlip }>
                <TopContainer>

                </TopContainer>
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
                  
                <ButtonContainers>

</ButtonContainers>
          
              </div>
 
  
    </ReactCardFlip>
    </div>
         )
        })}
    </Carousel>
  

</FlashcardContainer>
  )
}

const FlashcardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

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
const TextField= styled.h3`
  border: none;
  border-radius: 5px;
  background-color: #9ed86e;
  opacity: 0.9;
  color: #fff;`


export default Learning