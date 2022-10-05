import {createContext, useState} from "react";
import axios from 'axios';
import {toast} from "react-toastify"

export  const Context= createContext()



function ContextProvider (props) {
 
    // onsubmit 
    // send the data to backend to rigister
  const handelSignUp = async (data)=> {

    try {
   const result = await axios.post("/signup", {data})
   await  console.log(result.data.message)
   if (result.data.message==="user is already exist ") {
    toast.error(" user is already exist ", {
      position: toast.POSITION.TOP_CENTER
    })
   }
  
   
 } catch (err) {
 console.log(err)
 }
  }

  const handelLogin= async (logindata)=> {
  const resultLoginData=   await axios.post("/login",{logindata} )
  console.log(resultLoginData.data)
  return resultLoginData.data ;
   
  }
  

    return <Context.Provider value={{ handelSignUp, handelLogin }} > {props.children}</Context.Provider>
}


export default ContextProvider