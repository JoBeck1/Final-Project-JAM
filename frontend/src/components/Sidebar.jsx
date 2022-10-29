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
height:100vh;
width:20vw;
background-color:#2f4050; 
opacity: .92;
position: absolute;

`
const ListStyling= styled.ul`
    height: auto;
    width: 100%;
    position:absolute;
    top: 15%; 

`
const ListItems = styled.li`
    width: 100%;
    height:50px;
    list-style-type: none;
    margin: 0;
    display:flex;
    align-items:center;
    justify-content: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color : #fff;
    :hover {
     cursor: pointer;
     background-color : #293846;
     width: 100%;
    }
    
    
    
    `
const LinkStyling= styled(Link)`

    text-decoration: none;
    color : #fff;
    :hover{
        color : #fff;
    }
   
`

export default Sidebar