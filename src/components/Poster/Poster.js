import React, { useState } from "react";
import "./poster.css";
import POSTER from "../../resources/notice_3.png";

function Poster() {
  const [poster, setPoster] = useState("show");
  return (
    <>
      <div className={poster === "show" ? "poster-area" : "no_show"}>
        <div className="poster">
          <img src={POSTER} alt="POSTER" draggable={false} />
          <button className="cross-button" onClick={() => setPoster("no")}>
            X
          </button>
        </div>
      </div>
    </>
  );
}

export default Poster;
