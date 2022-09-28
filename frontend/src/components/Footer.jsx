import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";


function Footer() {
    return(
        <>
                <Contain>
                <div>
                <Link href="#top">Contact</Link>    
{/* Contactform is needed! */}
                
                </div>  
                <div>&copy; 2022 by JAM</div>
{/* Implement an "About"-page? */}

                <SocialMedia>
                    <div>
                    <FaTwitter />
                    </div>
                    <div>
                    <FaFacebook />
                    </div>
                 </SocialMedia>  
                </Contain>
        </>
    )
}

export default Footer;

const Contain= styled(Container)`

    position: absolute;
    top: 54vw;
    left: 15%;

    padding: 10px 0;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    background-color: #79c1e2;

`;

const SocialMedia =styled.div` 
    display: flex;
    div{
        padding: 10px;
    }
`
const Link = styled.a` 
    color: #000000;
    text-decoration: none;
`