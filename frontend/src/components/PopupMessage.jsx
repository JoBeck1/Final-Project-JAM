import React, { useContext, useState } from "react";
import { Context } from "../store/Store";
import "../styles/popUpStyles.css";
function PopupMessage() {
  const { calcTheResult } = useContext(Context);
  return (
    <div className="popup">
      <div className="inner-popup">
        <p className="inner-popup-message">
          {" "}
          This was the last Card !! click below to see{" "}
        </p>
        <button className="to-result" onClick={calcTheResult}>
          {" "}
          your result
        </button>
      </div>
    </div>
  );
}

export default PopupMessage;
