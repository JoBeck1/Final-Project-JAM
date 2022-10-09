import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

class DropdownMenu extends React.Component {
  handleClick = (action) => {
    if (!action) return;

    if (this.props.onClick) this.props.onClick(action);
  };

  render = () => {
    return (
      <StyledUl>
        <StyledLi>
          <StyledA link href="/" onClick={() => this.handleClick("/Home")}>
            Home
          </StyledA>
        </StyledLi>
        <DropDownLi>
          <Dropbtn onClick={() => this.handleClick("DropDown")}>
            Our Recommendations
          </Dropbtn>
          <DropDownContent>
            {" "}
            <SubA link href="/" onClick={() => this.handleClick("Link1")}>
              Books
            </SubA>
            <SubA link href="/" onClick={() => this.handleClick("Link2")}>
              Guides
            </SubA>
            <SubA link href="/" onClick={() => this.handleClick("Link3")}>
              Apps
            </SubA>
          </DropDownContent>
        </DropDownLi>
      </StyledUl>
    );
  };
}

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #c7e1ec;
  box-shadow: 5px 5px 5px #2f373b;
  padding: 10px;
  background: #fff;
  background-color: #128ecc;
`;

const StyledLi = styled.li`
  float: left;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: #2d9ce6;
    box-shadow: 5px 5px 5px #2f373b;
    cursor: pointer;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const StyledA = styled.a`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: #2d9ce6;
    box-shadow: 5px 5px 5px #2f373b;
    cursor: pointer;
  }
`;

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export default DropdownMenu;
