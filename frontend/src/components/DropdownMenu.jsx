import React from "react";
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
            <SubA link href="https://www.fluentu.com/blog/best-language-learning-books/" onClick={() => this.handleClick("Link1")}>
              Books
            </SubA>
            <SubA link href="https://collegeinfogeek.com/flash-card-study-tips/" onClick={() => this.handleClick("Link2")}>
              Guides
            </SubA>
            <SubA link href="https://collegeinfogeek.com/flashcard-apps/" onClick={() => this.handleClick("Link3")}>
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
  margin: 10px;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #c7e1ec;
  box-shadow: 5px 5px 5px #2f373b;
  padding: 7px;
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
  background-color: #c2d9e9;
  min-width: 160px;
  box-shadow: 5px 5px 5px #2f373b;
  border-radius: 7px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
  animation: downOut 300ms ease-in-out forwards;
  transform-origin: center center;

  @keyframes downOut {
    0% {
      transform: translateZ(200px) transLateY(40px);
    }
    80% {
      transform: translateZ(-10px) transLateY(0px);
    }
    100% {
      transform: translateZ(0px) transLateY(0px);
    }
  }

  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: #2d9ce6;
    box-shadow: 5px 5px 5px #2f373b;
    cursor: pointer;
    border-radius: 7px;

  }
  &:hover ${DropDownContent} {
    display: block;
    transform: translateY(10px);

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
    border-radius: 7px;
  }
`;

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  border-radius: 7px;
  &:hover {
    box-shadow: 0px 10px 10px 3px rgba(0, 0, 0, 0.3);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  z-index: 111;
  transition: 0.4s all;
  }
`;

export default DropdownMenu;
