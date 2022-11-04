import React ,{useState, useEffect} from 'react'
import axios from "axios";
import "../../styles/userCardsStyling.css"
import DeckList from './DeckList';
import Navbar from '../Navbar'
function UserCards() {

    let [myCard, setMyCard]= useState([]);
    let [choosedDeck, setChoosedDeck]= useState([]);
    // const getMyCard= async ()=>{
    //  const cardResult= await axios.get("/mycards")
    //  setMyCard(cardResult.data)
    // }
    useEffect(()=>{
      const myData= async()=> {

        const cardResult= await axios.get("/mycards")
        setMyCard(cardResult.data)
       console.log("inside===");
      }
      myData()
    }, [])
    console.log(myCard)

  
   
    // const showMyCard= (i)=>{
    // let choosed= myCard.filter((item,index)=> index===i)
    // setChoosedDeck(choosed)
    // }
    // console.log("choosed=", choosedDeck)
  return (
    <div className="userCard-container">
      <Navbar/>
      <h2> your decks that have been created before </h2>
      {/* <Navbar/> */}
      {myCard.length>=1?(<div className="userCard-innerContainer"> {myCard.map((item, i) => 

        ( 
          <DeckList deckInfo={item} i={i} key={i}/>
          )
      
      )} </div>):( <div> you don't have a card</div>)
      }
    </div>

  )
}

export default UserCards