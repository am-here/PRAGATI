import React from "react";
import "./loader.css";
function Loader(props) {
  return (
    <div className="loader-container">
      <div className="spinner">
        <img src={props.gif} alt="loader" draggable={false} />
      </div>
    </div>
  );
}

export default Loader;
