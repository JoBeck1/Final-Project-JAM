import {createContext, useState} from "react";
import axios from 'axios';
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"

export  const Context= createContext()



function ContextProvider (props) {
  const [isProfile, setIsProfile] = useState()
  // const navigate = useNavigate()
    // onsubmit 
    // send the data to backend to rigister
  const handelSignUp = async (data)=> {

    try {
   const result = await axios.post("/signup", {data})
  //  await  console.log(result.data.message)
   if (result.data.message==="user is already exist ") {
    toast.error(" user is already exist ", {
      position: toast.POSITION.TOP_CENTER
    })

   }
      console.log(result.data)
   return result.data
 } catch (err) {
 console.log(err)
 }
  }

  const handelLogin= async (logindata)=> {
    try {

      const resultLoginData=   await axios.post("/login",{logindata} )
      console.log(resultLoginData.data)
      setIsProfile(resultLoginData.data)
      if (resultLoginData.data.message==="invalid password") {
        toast.error("wrong Email or password", {position: toast.POSITION.TOP_CENTER})
      }
      return resultLoginData.data ;
    } catch (err) {
      console.log(err)
    }
   
  }
  

    return <Context.Provider value={{ handelSignUp, handelLogin , isProfile}} > {props.children}</Context.Provider>
}


export default ContextProvider