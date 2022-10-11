import React, {useContext, useState} from 'react'
import styled from 'styled-components';
import {Context} from "../Store"
function CountFlashCard() {
    const {count, deckName, setDeckName, handelNameOnDickCard,handelDeckNameSubmit, isInputExist} = useContext(Context)
 
    
    return (
    <CardContainer>
  <CardBody>
    

<h2> Deck : {deckName}</h2>
{isInputExist&&
<form onSubmit={handelDeckNameSubmit}>

    <input name="deckname" type="text"  onChange={handelNameOnDickCard}/>
    <button type="submit" >done</button>
</form>
}

<p> you created <span>  {count}</span> FlashCards</p>
  </CardBody>
    </CardContainer >
  )
}
 const CardContainer= styled.div`
 display:flex;

 justify-content: flex-start;
 `

 const CardBody = styled.div`
 overflow: hidden;
 width: 80%;
 height: 80%;
 box-shadow: 0 2px 10px #5c5757;
 border-radius: 5px;
 display: flex;
 flex-direction: column;
 justify-content:space-around;
 transition: 1s ease-in-out;
 > h2 {
    padding: 1rem;

 }
 > p {
    padding: 1rem;
    >span {
        color: #d63e30;
    }
 }
 :hover {
    transform: scale(1.08);
 }
 `

export default CountFlashCard