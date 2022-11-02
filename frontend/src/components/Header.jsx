import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "../assets/images/unnamed.png";
import  { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import "../styles/NavbarStyling.css";



function Header() {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <header className="header__middle">
      <div className="container">
          {/* Add Logo  */}

          <div className="header__middle__menus">
            {" "}
            <div className="header__middle__logo">
              <NavLink exact activeClassName="is-active" to="/">
                <img src={Image} alt="logo" />
              </NavLink>
            </div>
            <nav className="main-nav ">
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" , position:"absolute", top:"0", right:"0"}}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiXCircle />{" "}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none", position:"absolute", top:"0", right:"0" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiAlignRight />{" "}
                  </span>
                </>
              )}

              <ul className={boxClass.join(" ")}>
                <li className="menu-item">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/`}
                  >
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>
               
                <li className="menu-item">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/flashcardcreateNL`}
                  >
                    {" "}
                    Start Now{" "}
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/signup`}
                  >
                    {" "}
                    SignUp{" "}
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/login`}
                  >
                    {" "}
                    Log in{" "}
                  </NavLink>
                </li>
               
              </ul>
            </nav>
          </div>
        </div>
    </header>
  );
};

export default Header;

const HeaderContainer = styled.div`
  font-size: 1.3em;
  background-color: #D9AFD9;
background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%); 
 font-family: Poppins, sans-serif;
  font-weight: 400;
  position: sticky;
  overflow-y: hidden;
  top: 0;
  z-index: 1;

  

  .navbar {
    border-radius: 10px;
   
    margin: 0 auto;
       overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    text-decoration: none;
  }

  .navbar-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    text-decoration: none;
  }

  img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    padding: 10px;
    background-color: #128ecc;
    border-radius: 10px;
    border: 2px solid #c7e1ec;
    box-shadow: 5px 5px 5px #2f373b;
  }

  img:hover {
    background-color: #79c1e2;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
const LinkNav = styled(Link)`
  text-decoration: none;
  color: #2f373b;
  font-size: 1.2em;
  font-weight: 400;
  margin: 0 auto;

  &:hover {
    color: #45d69a;
    transform: scale(1.55);
    transition: 0.3s;
  }
`;
