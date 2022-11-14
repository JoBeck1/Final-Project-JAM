import React , {useContext, useEffect} from 'react'
import { Context } from "../store/Store";
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';
import image2 from "../assets/images/image2.jpg";



function Testing() {
    const {cardInfo,flip, test, handelFlip,  countAnswer, toNextCardIndex, setDelay, delay, resetPages} = useContext(Context)
    let ArrayOfCardInfo= JSON.parse(cardInfo)? JSON.parse(cardInfo):[]
   

 
useEffect(()=>{
  
  
    setTimeout(()=>{
    setDelay(!delay)
}, 5000)
    
},[test])

let buttonsNames= [{buttonName: 'yes'},{buttonName: 'not sure'},{buttonName: 'no'}]
console.log(flip);

  return (
   
    <FlashcardContainer >
      {resetPages? <div><h2 style={{fontSize: "2,5rem", color: "#473e41", borderBottom: "dotted"}}> No card exist</h2></div>: <div>
        <ReactCardFlip isFlipped={flip}
        
            flipDirection="horizontal"
            flipSpeedBackToFront= "1.2"
            flipSpeedFrontToBack= "1.2" >
        {/* -----------Flashcard Front --------- */}
            
            <Flashcard onClick={handelFlip} >
              <TopContainer>

              </TopContainer>
              <CircleWrapper>

                <Circle></Circle>
              </CircleWrapper>
              <TextContainer>

                  <h2 > card :{toNextCardIndex+1}from{ArrayOfCardInfo.length}</h2>
                <FlashcardInput1>
                <TextField > {ArrayOfCardInfo[toNextCardIndex].frontSideLine1}</TextField>
                 </FlashcardInput1>
            {/* Second line of Flashcard input */}
                <FlashcardInput2>
                <TextField > {ArrayOfCardInfo[toNextCardIndex].frontSideLine2}</TextField>
                 </FlashcardInput2>
           
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
                 
                    <TextField > {ArrayOfCardInfo[toNextCardIndex].backSideLine1}</TextField>
                 </FlashcardInput1>
            {/* Second line of Flashcard input */}
                <FlashcardInput2>
                <TextField > {ArrayOfCardInfo[toNextCardIndex].backSideLine2}</TextField>
                 </FlashcardInput2>
            {/* Backside/Frontside Button */}
             
                </TextContainer>
                <ButtonContainers>

               </ButtonContainers>
            </Flashcard>
           
        </ReactCardFlip>
        {delay&& flip&& <h3 style={{
          color:"red", alignItem:"center"}}> Did you know the card ??</h3>}
          {delay&& flip&&
        

              <ButtonContainer>
                {buttonsNames.map((item, key)=>{
                  return (
                     
                    <ContainerButton key={key} onClick={()=>countAnswer(item.buttonName)}>
               
               {item.buttonName}
            </ContainerButton>
                  )
                })}
           
        </ButtonContainer>
     
          
          }

         
          </div> }
     
    </FlashcardContainer>
  
  )
}

// Styling
const FlashcardContainer = styled.div`
 display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  text-decoration: none;
  color: #473e41;
  margin: 20px;
 

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
  margin: 20px;
  line-height: center;
  border-radius: 5px;
  
  text-align: center;
  padding: 20px;
  @media  (max-width: 1024px) {
    width: 100%;
    height: 100%;
    padding: 1rem 1rem;
    margin: 0;
  }
  @media  (max-width: 1280px) {
    width: 350px;
    height: 350px;
    
  }
  @media  (max-width: 980px) {
    width: 330px;
    height: 330px;
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 480px) {
    width: 350;
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
  background-color:#6a6b69;
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
  flex-direction: row;
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


`
const Circle= styled.div`
  
 

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
margin: 20px;

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
>h2{
  font-size:1.5rem;
  color: black;
}

`
const TextField = styled.h3`
  border: none;
  border-radius: 5px;
  background-color: #c5d3b97a;
  opacity: 0.9;
  color: #1b1b1b;
`;

export default Testing