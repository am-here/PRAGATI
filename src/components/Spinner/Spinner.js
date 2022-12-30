import React from "react";
import "./spinner.css";
function Spinner(props) {
  return (
    <div className="loader-container">
      <div className="spinner">
        <img src={props.gif} alt="loader" draggable={false} />
      </div>
    </div>
  );
}

export default Spinner;
