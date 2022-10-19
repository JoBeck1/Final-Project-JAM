import React , {useContext, useEffect} from 'react'
import { Context } from "../store/Store";
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';


function Testing() {
    const {cardInfo,flip, test, handelFlip,  countAnswer, toNextCardIndex, setDelay, delay} = useContext(Context)
    let ArrayOfCardInfo= JSON.parse(cardInfo)
   

 
useEffect(()=>{
  console.log("\u001b[32m"+delay + "\u001b[0m");
  
    setTimeout(()=>{
    setDelay(!delay)
}, 5000)
    
},[test])
let buttonsNames= [{buttonName: 'Yes'},{buttonName: 'Not sure'},{buttonName: 'No'}]

  return (
   
    <FlashcardContainer >
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
        {delay&& flip&& <h3> have you Known the card ??</h3>}
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

          {delay&&flip&& <button  style={{
              width: "250px",
              height: "50px",
              backgroundColor: "#494d58",
              color: "white",
              border: "none",
              outline: "none",
              fontSize: "20px",
              borderRadius: "40px",
              cursor: "pointer",
              textAlign: "center",
              boxShadow: " 0 6px 20px -5px rgba(0,0,0,0.4)",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
              zIndex: "0",
              marginTop: "20px",
              marginBottom: "20px",
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              letterSpacing: "1px",
              textTransform: "uppercase",

            }}>done with decks</button>}
    </FlashcardContainer>
  
  )
}

// Styling
const FlashcardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
const TextField = styled.h3`
  border: none;
  border-radius: 5px;
  background-color: #9ed86e;
  opacity: 0.9;
  color: #fff;
`;

export default Testing