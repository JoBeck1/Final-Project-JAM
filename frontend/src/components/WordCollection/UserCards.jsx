import React ,{useState, useEffect} from 'react'
import axios from "axios";
import "../../styles/userCardsStyling.css"
function UserCards() {

    let [myCard, setMyCard]= useState([]);
    let [choosedDeck, setChoosedDeck]= useState([]);
    // const getMyCard= async ()=>{
    //  const cardResult= await axios.get("/mycards")
    //  setMyCard(cardResult.data)
    // }
    useEffect(async()=>{
      const cardResult= await axios.get("/mycards")
      setMyCard(cardResult.data)
     console.log("inside===");
    }, [])
    console.log(myCard)

  
   
    const showMyCard= (i)=>{
    let choosed= myCard.filter((item,index)=> index===i)
    setChoosedDeck(choosed)
    }
    console.log("choosed=", choosedDeck)
  return (
    <div className="userCard-container">
      {myCard.length>=1?( <div>
      {myCard.map((deck, i)=>{
        return (<div className="deck-container" key={i} onClick={()=>showMyCard(i)}> <h2><span> deckNo{i}:</span> {deck.deckName!==""? deck.deckName: i}</h2>
        </div>)
      })}
      {choosedDeck.map((word)=>{
        return(<div className="choosed-Container">
          <h2> deckName: {word.deckName}</h2>
          <h3> the word: {word.frontSideLine1}</h3>
          <h3> the sentance: {word.frontSideLine2}</h3>
          <h3> the meaning: {word.backSideLine1}</h3>
          <h3> the sentance: {word.backSideLine2}</h3>
           </div> )
      })}</div>):( <div> you don't have a card</div>)
      }
    </div>

  )
}

export default UserCards