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
      setFlip(true);
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
  background-color: #2b2a2a97;
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
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    animation: 1s ease-in-out;
    transform: scale(1.1);
    cursor: pointer;
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
    color: #27c557;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    animation: 1s ease-in-out;
    transform: scale(1.1);
    cursor: pointer;
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
