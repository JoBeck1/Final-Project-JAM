import React , {useContext} from 'react'
import { Context } from "../Store";

function Testing() {
    const {cardInfo} = useContext(Context)
    let ArrayOfCardinfo= JSON.parse(cardInfo)
    
  return (
    <div>Testing</div>
  )
}

export default Testing