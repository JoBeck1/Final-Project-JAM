import {createContext, useState} from "react";
import axios from 'axios';

export  const Context= createContext()



function ContextProvider (props) {
 
    // onsubmit 
    // send the data to backend to rigister
  const handelSignUp = async (data)=> {

 const {result} = await axios.post("/signup", {data})
console.log(result.data)
return result.data
  }

  const handelLogin= async (logindata)=> {
  const resultLoginData=   await axios.post("/login",{logindata} )
  console.log(resultLoginData.data)
  return resultLoginData.data ;
   
  }
  

    return <Context.Provider value={{ handelSignUp, handelLogin }} > {props.children}</Context.Provider>
}


export default ContextProvider