import React from 'react'
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Picture1 from '../assets/images/Picture1.jpg';
import Picture2 from '../assets/images/Picture2.jpg';
import DropdownMenu from './DropdownMenu.jsx';


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
            Enjoy every merit of the JAM-Project by <Button variant="info" size="sm"> registering</Button> on this website!
            
        </p>

        <hr />
        
        <h3>Already registered?</h3>
        <p>
            AWESOME! Just <Button variant="success" size="sm">log in</Button> here and check how much you have learned already!
        </p></Col>

        <Col md={3}> 
        <div className="main_pic">
            
        <img src={Picture1}  alt="Flashcards"/>

        </div>
        <div className="main_pic">

        <img src={Picture2} alt="Flags"/>
        </div>
            
        

         {/* Put Pictures here */}
        </Col>
        </Row>

    </MainDiv>
  )
}

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #473e41;
    font-family: Poppins, sans-serif;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 30px;
    margin-left: 5px;
    margin-right: 5px;
    padding: 10px;
    background-color: #128ecc;
    border-radius: 10px;
    border: 2px solid #c7e1ec;
    box-shadow: 5px 5px 5px #2f373b;
    

`
const MainDiv = styled.div` 
    font-family: Poppins, sans-serif; 
    font-size: 1.2em;
    color: #473e41;
    margin-top: 10px;
    margin-bottom: 30px;
    margin-left: 5px;
    margin-right: 5px;
    padding: 10px;
    background-color: #96b5c4;
    border-radius: 10px;
    border: 2px solid #c7e1ec;
    box-shadow: 5px 5px 5px #79c1e2;
     margin: 0 auto; 
     width: 100%; 
     height: 60%;
   
     img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    .main_pic{
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 5px;
        margin-right: 5px;
        padding: 7px;
        background-color: #55a4cc;
        border-radius: 10px;
        border: 2px solid #c7e1ec;
        box-shadow: 5px 5px 5px #2e383d;
        width: 100%;
       

    }  


`

// Here is a test

export default Main