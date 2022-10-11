import React from 'react'
import { TbWriting } from "react-icons/tb";
import { RiStackFill } from "react-icons/ri";
import { ImStatsDots} from "react-icons/im";
import styled from 'styled-components';
import {Link} from "react-router-dom"
const SidebarData = [
    { title: 'Creating', icon: <TbWriting/>, link: "/create" },
    { title: 'Learning', icon: <RiStackFill/>, link: "/create" },
    { title: 'Testing', icon: <ImStatsDots/>, link: "/create" },

]

function Sidebar() {
  return (
    < SidebarContainer>
        <ListStyling>
    {SidebarData.map((item, key)=>{
return (
   <ListItems key={key}>
    <div style={{flex:"20%", display:"grid" , placeItems:"center"}}> {item.icon}</div>
    <div style={{flex:"80%", display:"grid" }}> 
    <LinkStyling>
    {item.title}
    </LinkStyling>
    </div>

   </ListItems>
)

    })}
        </ListStyling>
    </SidebarContainer>
  )
}

const SidebarContainer= styled.div`
width: 100%;
height: 100%;
background-color: #0e0303;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
padding: 20px;
margin: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    }

`
const ListStyling= styled.ul`
list-style: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`
const ListItems = styled.li`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 10px;
padding: 10px;
width: 100%;
height: 100%;
background-color: #615d5d;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

@media (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    
    
    
    
    `
const LinkStyling= styled(Link)`

text-decoration: none;
color: #fff;
font-size: 1.5rem;
font-weight: 600;
text-align: center;
@media (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    }

   
`

export default Sidebar