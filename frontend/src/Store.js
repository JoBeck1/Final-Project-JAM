import {createContext} from "react";
import axios from 'axios';

export  const Context= createContext()



function ContextProvider (props) {
 
    // onsubmit 
  const handelSignUp = async (data)=> {
 const {result} = await axios.post("/signup", {data})
  }

  

    return <Context.Provider value={{ handelSignUp}} > {props.children}</Context.Provider>
}


export default ContextProvider