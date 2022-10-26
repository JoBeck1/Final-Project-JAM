import React ,{useState, useEffect} from 'react'
import axios from "axios";
function UserCards() {

    let [myCard, setMyCard]= useState();
    const getMyCard= async ()=>{
     const cardResult= await axios.get("/mycards")
     setMyCard(cardResult)
    }

    useEffect(()=>{
  getMyCard()
    }, [])
  return (
    <div>userCards</div>
  )
}

export default UserCards