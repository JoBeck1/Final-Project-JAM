import React , {useContext, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Context} from "../store/Store"
import {motion, useAnimation} from "framer-motion"
import "../styles/userProfile.css"
function UserProfile() {
  const {user}= useContext(Context)
  console.log(user)

  const [isOpen,setIsOpen]= useState(false)


  return (
    <div>
      {user?
    <div className='userContainer'>
      <div className='box-container'>
        <motion.div className='box' 
     
    onClick={()=>setIsOpen(!isOpen)}
      transition={{
        
     layout: { 
      duration:1,
      type: "spring",
    
     }
            
      }}
      layout
      style={{borderRadius:"1rem", boxShadow:"0px 10px 30px rgba(0,0,0,0.5"}}
   
        >
          <motion.h2 layout="position"> Hi   {`${user.firstName} ${user.Surname}`} </motion.h2>
        {isOpen&&
      <motion.div className="inside-card"    animate={{  staggerChildren: 0.4, opacity: .6, transition:{duration:1}, x: "-20px"
      }}>
      <h4> your name : {user.firstName} </h4>
      <h4> your Surname: {user.Surname}</h4>
      <h4> your Email:  {user.Email} </h4>
      <h4> your Age:  {user.Age} </h4>
      </motion.div>
        }  
        </motion.div>
      </div>
    </div>:
      <div className= "not-login"> <h2> you are not registered </h2></div>
       } 
    </div>
  )
}

export default UserProfile