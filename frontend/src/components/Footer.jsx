import React from "react";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <Contain>
      <div>
        <Link href="">Contact</Link>
        {/* Contactform is needed! */}
      </div>
      <div>&copy; 2022 by JAM</div>
      {/* Implement an "About"-page? */}

      <SocialMedia>
        <div className="social">
          <FaTwitter />
        </div>
        <div className="social">
          <FaFacebook />
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

  background-color: #79c1e2;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
`;
const Link = styled.a`
  color: #f1e8e8;
  text-decoration: none;
  font-size: 1.2em;
  text-align: justify;

  &:hover {
    color: #151616;
  }
`;
