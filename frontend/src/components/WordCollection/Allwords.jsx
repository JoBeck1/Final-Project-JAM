import React , {useContext, useState, useEffect}from 'react'
import {Context} from "../../store/Store"
import "../../styles/AllwordStyling.css"
import {motion, AnimatePresence} from "framer-motion"
import axios from "axios";
import Navbar from '../Navbar';
function Allwords() {
    const {learningData,user} = useContext(Context)
const [filtered, setFiltered]= useState([])
const [buttonStyle, setButtonStyle]= useState()
const [indexNumber, setIndexNumber] = useState(0)
const [allcards, setAllcards] = useState()

useEffect( ()=>{
  const allcardsHandler = async()=>{

    const AllCards = await axios.get("/allcards")
     setAllcards(AllCards.data)
     setFiltered(AllCards.data)
     console.log(AllCards.data)
  }
  allcardsHandler()
   
 }, []);
const onClickHandlers =(activeButton)=> {
  setButtonStyle(activeButton)
  if (activeButton===0) {
      setFiltered(allcards)
  } else if (activeButton===1 )
   {
     setIndexNumber(0)
       setFiltered(allcards.slice(0, 10))
       console.log("just10====>",indexNumber)
      }
    else  if (activeButton===2  ) {
      const tempIndex= indexNumber+10
          setIndexNumber(indexNumber+10)
          setFiltered(allcards.slice(tempIndex, tempIndex+10))
      
      console.log("next10===>",indexNumber)
  }
}

   useEffect(()=>{
    onClickHandlers(0)
   }, [])

  

  return (
    <div>
          {filtered? <div> 
            <Navbar/>
            <div className="filter-container">
            <button onClick={()=>onClickHandlers (0)} className={buttonStyle===0? "active":""}> all</button>
            <button onClick={()=>onClickHandlers (1)} className={buttonStyle===1? "active":""}> just 10</button>
            <button onClick={()=>onClickHandlers (2)} className={buttonStyle===2? "active":""}> next 10</button>
          </div>
        <motion.div 
        layout 
        transition={{duration:1}}
      
        className="allCard-container">
            <AnimatePresence>
            {filtered.map((word, i) =>{
                return (<motion.div
                    layout 
                    animate={{opacity: 1, scale:1}}
                    initial={{opacity: 0, scale:0}}
                    exist={{opacity:0, scale:1}}
                    
                    transition={{duration:1}}
                
                    key={i} className="innerCard"> <div>
                     
                      <h3> Frontside</h3>
                      <p> word:<span style={{color: 'blue'}}> {word.frontSideLine1}</span></p>
                      <p> sentence:<span style={{color: 'blue'}}> {word.frontSideLine2}</span></p>
                      <h3> Backside</h3>
                      <p> word: <span style={{color: "blue"}}> {word.backSideLine1}</span></p>
                      <p> sentence: <span style={{color: 'blue'}}> {word.backSideLine2}</span></p>
                    </div>
                    </motion.div>)
            })}
            </AnimatePresence>
        </motion.div> </div>: <div> you are not allowed to enter </div>}
    </div>
  )
}

export default Allwords