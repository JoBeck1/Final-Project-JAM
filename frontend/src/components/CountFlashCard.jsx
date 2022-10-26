import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../store/Store";


function CountFlashCard() {
  const {
    count,
    deckName,
    setDeckName,
    handelNameOnDickCard,
    handelDeckNameSubmit,
    isInputExist,
  } = useContext(Context);

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
    </CardContainer>
  );
}
const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #2b2a2a97;
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
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
    text-align: left;
    margin: 20px 0;
    padding: 20px;
  }
  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  span {
    color: #ffffff;
    font-weight: 700;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
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
      color: #ffffff;
      text-align: center;
      margin: 0;
      padding: 0;
      background-color: #adb2b3b0;
      cursor: pointer;
    }
  }
`;

export default CountFlashCard;
