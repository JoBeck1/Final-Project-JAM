import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Picture1 from '../assets/images/Picture1.jpg';
import Picture2 from '../assets/images/Picture2.jpg';
import DropdownMenu from './DropdownMenu.jsx'
import styled from 'styled-components'; 
import {Link} from "react-router-dom"

function Profile() {
  return (
    <div>
        <Header/>
        <div>
        <MainDiv className="fluid">
            <Row>

        <Col md={3}>
        {/* Put Side bar here */}
        <DropdownMenu />
        </Col>
        <Col md={6}>
        <Title><h1>Welcome to the JAM-Project!</h1></Title>
        <StyleP> you created successfully your  account pls <StyledLink to="/login"> Login </StyledLink> to your account</StyleP>
        </Col>
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
        </div>
        <Footer/>
    </div>
  )
}

const StyleP= styled.p`
padding-top: 20px;
font-size:1.5rem;
color: #278a0b;
    
`
const StyledLink= styled(Link)`
    text-decoration: none;
    color: #f9efef;
    :hover {
        transition: 1s;
        color: #c43232
    }
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
    box-shadow: 5px 5px 5px #2f373b;`

export default Profile