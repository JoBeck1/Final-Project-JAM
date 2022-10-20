import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navbar from "./Navbar.jsx";
import ReactCard from "./Flashcard.jsx";
import Sidebar from './Sidebar';
import CountFlashCard from "./CountFlashCard"
import {Context} from "../store/Store"
import Learning from "./Learning"
import Testing from "./Testing"
import PopupMessage from "./PopupMessage"
import ResultChart from "./ResultChart"


function FlashcardCreate() {
  const {nextStage,popup ,toChartPage}= useContext(Context)
  console.log("popup===>",popup);
  console.log("toChartPage==",toChartPage);
  return (
    <MainDiv className="fluid">
     <Navbar />

      <Row>
        <Col md={3}>
          <Sidebar />
          
        </Col>

        <MainFlashCol md={6}>
          {/* Flashcard here */}
         {toChartPage? <ResultChart />:
         <div>
        {nextStage.title==="Learning"&&  <Learning/>  }
        {nextStage.title==="Creating" && <ReactCard/>}
        {nextStage.title==="Testing" && <Testing/>}
          </div>}
      
        {popup&& <PopupMessage/>}
        {/* {toChartPage&& <ResultChart/>} */}
        </MainFlashCol>
        <Col md={3}>{/* Info about the number of cards and decks */}
       
        <CountFlashCard/>
        </Col>
      </Row>
    </MainDiv>
  );
}

//Style
const MainFlashCol = styled(Col)`
  position: relative;
  height: 100vh;
  
`;



const MainDiv = styled.div`
  /* background-color: #EAF8BF92; */
  font-family: sans-serif;
  margin-left: 5px;
  margin-right: 5px;
`;

export default FlashcardCreate;
