import React from "react";

import Header_img from "../../resources/PRAGATI.png";
import "./HeroSection.css";

import TextScrambler from "react-scramble-text";
import "react-scramble-text/dist/index.css";
function HeroSection() {
  const phrases = [
    "THE MOST SECURE,",
    "THE MOST PRIVATE,",
    "YET THE SIMPLEST ONLINE MESSAGING APP",
    "EVER BUILT.",
  ];

  return (
    <>
      <div className="hero-container">
        <img className="HeroSectionimg" src={Header_img} alt="header_img" />
        <h1 className="HeroSectionHeading">
          PRAGATI <span className="HeroSectionHeadingSpan">2K23</span>
        </h1>
        <TextScrambler phrases={phrases} speed={20} pauseTime={800} />
        <section className="countDays">
          <ul className="countDown">
            <li>
              <span className="timeNumbers">167</span>
              <p className="time-description">Days</p>
            </li>
            <li>
              <span className="timeNumbers">167</span>
              <p className="time-description">Days</p>
            </li>
            <li>
              <span className="timeNumbers">167</span>
              <p className="time-description">Days</p>
            </li>
            <li>
              <span className="timeNumbers">167</span>
              <p className="time-description">Days</p>
            </li>
          </ul>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: " 700",
              padding: "0",
              letterSpacing: "0.1rem",
              marginTop: "5px",
              color: "rgb(206, 175, 3)",
            }}
          >
            Coming Soon
          </p>
        </section>

        <div className="fadeBottom"></div>
      </div>
    </>
  );
}

export default HeroSection;
