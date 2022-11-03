import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../store/Store";
import { Link } from "react-router-dom";

function CountFlashCard() {
  const {
    count,
    deckName,

    handelNameOnDickCard,
    handelDeckNameSubmit,
    isInputExist,
    userSissionData,
    GetUserData,
  } = useContext(Context);
  console.log(userSissionData);
  useEffect(() => {
    GetUserData();
  }, []);
  return (
    <CardContainer>
      <CardBody>
        <h2> Deck : {deckName}</h2>
        {isInputExist && (
          <form onSubmit={handelDeckNameSubmit}>
            <input
              name="deckname"
              type="text"
              onChange={handelNameOnDickCard}
            />
            <button type="submit">Done</button>
          </form>
        )}

        <p>
          {" "}
          you created <span> {count}</span> FlashCards
        </p>
      </CardBody>
      {userSissionData && (
        <CardBody>
          <h2> import Decks :</h2>
          <button className="btn">
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
              to="/allWords"
            >
              {" "}
              Our Collections
            </Link>
          </button>
          <button className="btn">
            {" "}
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
              to="/userCards"
            >
              {" "}
              My Cards{" "}
            </Link>
          </button>
        </CardBody>
      )}
    </CardContainer>
  );
}
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #d9afd9;
  background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);

  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    background-color: aqua;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const CardBody = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  transition: 1s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 1100px) {
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #0e0808;
    text-align: left;
    margin: 20px 0;
    padding: 20px;
    @media (max-width: 1100px) {
      padding: 5px;
      margin: 5px;
      font-size: 1.2rem;
    }
  }
  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #0e0808;
    text-align: center;
    margin: 0;
    padding: 0;
    @media (max-width: 1100px) {
      font-size: 0.8rem;
    }
  }
  span {
    color: #c93838;
    font-weight: 700;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1100px) {
      flex-direction: column;
    }
    input {
      width: 100%;
      height: 30px;
      border: none;
      border: 1px solid #5c5757;
      border-radius: 5px;
      padding: 5px;
      margin: 10px;
      outline: none;
      font-size: 1.2rem;
      font-weight: 600;
      color: #5c5757;
      text-align: center;
      @media (max-width: 1100px) {
        display: block;
        width: 130px;
      }
    }

    button {
      width: 100px;
      height: 30px;
      border: 1px solid #5c5757;
      border-radius: 5px;
      padding: 5px;
      margin: 10px;
      outline: none;
      font-size: 1.2rem;
      font-weight: 600;
      color: #0e0808;
      text-align: center;
      margin: 0;
      padding: 0;
      background-color: #adb2b3b0;
      cursor: pointer;
      @media (max-width: 1100px) {
        display: block;
        width: 80px;
      }
    }
  }
`;

export default CountFlashCard;
