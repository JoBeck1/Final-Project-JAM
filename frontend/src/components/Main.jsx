import React from 'react'
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Picture1 from '../assets/images/Picture1.jpg';
import Picture2 from '../assets/images/Picture2.jpg';
import DropdownMenu from './DropdownMenu.jsx'

function Main() {
  return (
    <MainDiv className="fluid">
        <Row >
        <Col md={3}>
        {/* Put Side bar here */}
        <DropdownMenu />
        </Col>

        {/* Main text */}
        <Col md={6}>
        <Title><h1>Welcome to the JAM-Project!</h1></Title>
        
        <p>JAM - that is an acronym of the creators: Jochen, Ahmed and Mohammed.</p>
        <p>
            For our final project in our web development course at DCI, we came up with
            the idea, to provide language learners with a simple and pleasant way to
            memorize vocabulary and grammar.
        </p>
        <p>
            On this webpage, you can create your own flashcards, save it on your own 
            personal account and test your learning progress by different methods. 
        </p>

        <hr />
        
        <h3>For Beginners:</h3>
        <p>
            Feel free to <Button variant="primary" size="sm">start</Button> right away! No registration needed!
        </p>
        
        <hr />
        
        <h3>For advanced Users:</h3>
        <p>
            Enjoy every merit of the JAM-Project by <Button variant="info" size="sm">registering</Button> on this website!
            
        </p>

        <hr />
        
        <h3>Already registered?</h3>
        <p>
            AWESOME! Just <Button variant="success" size="sm">log in</Button> here and check how much you have learned already!
        </p></Col>

        <Col md={3}>
        <img src={Picture1} className="img-fluid" alt="Flashcards"/>

        <img src={Picture2} className="img-fluid" alt="Flags"/>
    
            
        

         {/* Put Pictures here */}
        </Col>
        </Row>

    </MainDiv>
  )
}

const Title = styled.h1`
    font-size: 1.5em;

`
const MainDiv = styled.div` 
    /* background-color: #EAF8BF92; */
    font-family: Times New Roman; 
    margin-left: 5px;
    margin-right: 5px;

`

// Here is a test

export default Main