import React from "react";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import  { Link }  from  "react-router-dom" ;

function Footer() {
 
  
  return (
    <Contain>
      <div>
        <LinkStyle to="/contact" style={{cursor: "pointer"}}>Contact</LinkStyle>
        {/* Contactform is needed! */}
      </div>
      <div>&copy; {(new Date().getFullYear())} by JAM</div>
      {/* Implement an "About"-page? */}

      <SocialMedia>
        <div className="social">
          <a href="https://twitter.com/JamProject22">
          <FaTwitter />
          </a>
        </div>
        <div className="social">
          <a href="https://facebook.com/profile.php?id=100087149580347">
          <FaFacebook />
          </a>
        </div>
      </SocialMedia>
    </Contain>
  );
}

export default Footer;

const Contain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #79c1e2;
  color: white;
  padding: 10px;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 10px;
  width: 100%;
  height:2.5rem;
 

  .social:hover {
    color: #151616;
  }
  div {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: left;

  color: white;
  font-size: 1.2rem;
  cursor: pointer;
`;
const LinkStyle = styled(Link)`
  color: #f1e8e8;
  text-decoration: none;
  font-size: 1.2em;
  text-align: justify;

  &:hover {
    color: #151616;
  }
`;
