import React, { useContext, useState } from "react";
import { TbWriting } from "react-icons/tb";
import { RiStackFill } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Context } from "../store/Store";
import "../styles/buttonStyling.css";

const SidebarData = [
  { title: "Creating", icon: <TbWriting /> },
  { title: "Learning", icon: <RiStackFill /> },
  { title: "Testing", icon: <ImStatsDots /> },
];

function Sidebar() {
  const { nextStage, setNextStage, setFlip } = useContext(Context);
  const [active, setActive] = useState();
  const sidebarStage = (title) => {
    if (title === "Learning") {
      setNextStage({ title: "Learning" });
      setActive("Learning");
    }

    if (title === "Creating") {
      setNextStage({ title: "Creating" });
      setActive("Creating");
    }
    if (title === "Testing") {
      setNextStage({ title: "Testing" });
      setActive("Testing");
    }
  };

  return (
    <SidebarContainer>
      <ListStyling>
        {SidebarData.map((item, key) => (
          <ListItems
            className={
              item.title === active ? "buttonActive" : "buttonNonActive"
            }
            key={key}
          >
            <div style={{ flex: "20%", display: "grid", placeItems: "center" }}>
              {" "}
              {item.icon}
            </div>
            <div style={{ flex: "80%", display: "grid" }}>
              <LinkStyling onClick={() => sidebarStage(item.title)}>
                {item.title}
              </LinkStyling>
            </div>
          </ListItems>
        ))}
      </ListStyling>
    </SidebarContainer>
  );
}
const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: #d9afd9;
  background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);

  animation-fill-mode: forwards;
  animation-duration: 0.5s;
  animation-name: slideIn;
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
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
`;
const ListStyling = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ListItems = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  width: 100%;
  height: 100%;

  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  :hover {
    background: linear-gradient(to left, orange, tomato);
    text-align: right;
    padding-right: 20%;
    transform: perspective(500px) rotateY(-35deg);
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const LinkStyling = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  :focus {
   
    cursor: pointer;
  }
  @media (max-width: 1080) {
    height: 80px;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Sidebar;
