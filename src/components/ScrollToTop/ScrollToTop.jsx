import React from "react";
import { HashLink } from "react-router-hash-link";
import "./ScrollToTop.css";
function ScrollToTop({ show }) {
  return (
    <div
      className={show ? "scroll-up-button show" : "scroll-up-button"}
      id="scroll-btn"
    >
      <HashLink to="#top">
        <i className="fa-solid fa-angle-up"></i>
      </HashLink>
    </div>
  );
}

export default ScrollToTop;
