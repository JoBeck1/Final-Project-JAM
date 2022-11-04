import React, {useState} from 'react'
import "../../styles/DecKList.css"
import { AnimatePresence , motion} from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
function DeckList({deckInfo, i}) {
const [open, setOpen]= useState(false)

const variants = {
    open: { backgroundColor: "rgba(0,0,0,0.0)" },
    closed: { backgroundColor: "rgba(0,0,0,0)" },
  };
  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const modalInfoContainer = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };
  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };
    const openCard= ()=> {
        setOpen(true)
    }

    const closeCard= ()=> {
        setOpen(false)
    }
  return (
    <div  className="big-container">
        <div className="deckList" onClick={openCard}>
            <div className="deck-content">
                <h2>  deck-name : {" "} {deckInfo.deckName!==""? deckInfo.deckName: i+1
  }</h2>
            </div>
        </div>
        { open&& <motion.div    className="overlay1"
      onClick={closeCard}
      variants={variants}
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      key="overlay">
    <motion.div className="word-info"     variants={modalVariants} onClick={(e) => e.stopPropagation()}> 
    <motion.div className="word-container"     variants={modalInfoContainer}>
    <div className="word-row" variant={modalRowVariants}>
        <h3> Front side</h3> 
      
    </div>
    <div className="word-row" variant={modalRowVariants}>
        <h4> word: {" "} {deckInfo.frontSideLine1}</h4> 
      
    </div>
    
    <div className="word-row" variant={modalRowVariants}>
        <h4> example: {" "} {deckInfo.frontSideLine2}</h4>
    </div>
    <div className="word-row" variant={modalRowVariants}>
        <h3> Back side</h3> 
      
    </div>
    <div className="word-row" variant={modalRowVariants}>
   
        <h4> word: {" "} {deckInfo.backSideLine1}</h4>
    </div>
    <div className="word-row" variant={modalRowVariants}>
        <h4> example: {" "} {deckInfo.backSideLine2}</h4>
    </div>
    </motion.div>
    <motion.button
          className="modal__close-wrapper"
          whileHover={{ scale: 1.2 }}
          onClick={closeCard}
        >
          <IoCloseCircleOutline className="modal__close-icon" />
        </motion.button>
    </motion.div>
        </motion.div> }
     
    </div>
  )
}

export default DeckList