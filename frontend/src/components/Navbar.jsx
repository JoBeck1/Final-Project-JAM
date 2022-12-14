import React, { useState , useContext} from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import Image from "../assets/images/unnamed.png";
import "../styles/NavbarStyling.css";
import { Context } from "../store/Store";

const Navbar = () => {
  const {userSissionData}= useContext(Context)
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
                    style={{ display: "none", position:"absolute", top:"0", right:"0" }}
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
                    style={{ display: "none",position:"absolute", top:"0", right:"0" }}
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
               
                {
                 userSissionData?
                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  {" "}
                  <Link to="#">
                    {" "}
                    My Account <FiChevronDown />{" "}
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      {" "}
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/userprofile`}
                      >
                        {" "}
                        Setting{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/logout`}
                      >
                        {" "}
                        Log Out{" "}
                      </NavLink>{" "}
                    </li>
                  </ul>
                </li>:  <div className="list-container menu-item">
                 <li >  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/signup`}
                  >
                    {" "}
                    SignUp{" "}
                  </NavLink>
                </li>
                <li >  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/login`}
                  >
                    {" "}
                    Log in{" "}
                  </NavLink>
                </li>
                </div>
                  
                }
               
              </ul>
            </nav>
          </div>
        </div>
    </header>
  );
};

export default Navbar;
