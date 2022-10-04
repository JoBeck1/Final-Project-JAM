import React from 'react'
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownMenu from './DropdownMenu.jsx';
import Card from 'react-bootstrap/Card';


function FlashcardCreate() {
    return (
      <MainDiv className="fluid">
          <Row >
            <Col md={3}>
                <DropdownMenu />
            </Col>
 
            <MainFlashCol md={6}>
{/* Flashcard here */}
                <Flashcard >
                    <FlashBody>
                        <FlashRow>
                        <Card.Title style={{"font-size": '40px'}}>Card Title1</Card.Title>
                        </FlashRow>
            
                        <FlashRow>
                        <Card.Title style={{"font-size": '40px'}}>Card Title2</Card.Title>
                        </FlashRow>

 
                    </FlashBody>
                </Flashcard>
                <InputField>
                    <InputFieldRow1>                    
                        <Button>Back to Frontside</Button>          
                        <Button>Next Flashcard</Button> 
                    </InputFieldRow1>
                    <InputFieldRow2>
                        <Button>Done with this deck</Button> 
                    </InputFieldRow2>
                </InputField>

          </MainFlashCol>
          <Col md={3}>
{/* Info about the number of cards and decks */}
          </Col>
          </Row>
  
      </MainDiv>
    )
  }

//Style
const MainFlashCol = styled(Col)`
  position:relative;
  background-color: #123489;
  height:100vh;
`


const Flashcard = styled(Card)`
    width: 40vw;
    position:absolute;
    top: 20vh;
    left: 6em;
  
`

const FlashBody = styled(Card.Body)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50vh;

`

const FlashRow = styled(Row)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 15rem;
`
const InputField = styled.div`
  width:50rem;
  background-color: #222299;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 75vh;
  left: 10vh;
`
const InputFieldRow1 = styled(Row)`

  background-color: #222299;
  height: 80px;

`

const InputFieldRow2 = styled(Row)`

  background-color: #2fff20;
  height: 40px;

`

const MainDiv = styled.div` 
  /* background-color: #EAF8BF92; */
  font-family: sans-serif; 
  margin-left: 5px;
  margin-right: 5px;
`

export default FlashcardCreate