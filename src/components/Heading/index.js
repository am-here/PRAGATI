import React from "react";
import "./heading.css";

function Heading(props) {
  return (
    <>
      <div class="heading">
        <h1 class="bg-heading">{props.title}</h1>
        <h1 class="front-heading">{props.title}</h1>
      </div>
    </>
  );
}

export default Heading;
