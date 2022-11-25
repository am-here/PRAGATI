import React from "react";
import "./heading.css";

function Heading(props) {
  return (
    <>
      <div className="F_heading">
        <h1 className="bg-heading">{props.title}</h1>
        <h1 className="front-heading">{props.title}</h1>
      </div>
    </>
  );
}

export default Heading;
