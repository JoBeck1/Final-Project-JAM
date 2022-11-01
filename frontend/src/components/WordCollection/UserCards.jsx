import React ,{useState, useEffect} from 'react'
import axios from "axios";
import "../../styles/userCardsStyling.css"
import DeckList from './DeckList';
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
      {myCard.length>=1?(<div className="userCard-innerContainer"> {myCard.map((item, i) => 

        (  <DeckList deckInfo={item} i={i} key={i}/>
          )
      
      )} </div>):( <div> you don't have a card</div>)
      }
    </div>

  )
}

export default UserCards