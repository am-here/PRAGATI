import React, { useState, useEffect } from "react";
import TextScramble from "./TextScramble";
// import { Link } from "react-router-dom";
// import Header_img from "./Header_img.png";
import Header_img from "../../resources/PRAGATI.png";
import "./HeroSection.css";

function HeroSection() {
  const phrases = [
    "THE MOST SECURE,",
    "THE MOST PRIVATE,",
    "YET THE SIMPLEST ONLINE MESSAGING APP",
    "EVER BUILT.",
  ];
  useEffect(() => {
    const el = document.getElementById("text");
    const fx = new TextScramble(el);

    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 1000);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  }, [phrases]);

  return (
    <>
      <div className="hero-container">
        <img className="HeroSectionimg" src={Header_img} alt="header_img" />
        <h1 className="HeroSectionHeading">
          PRAGATI <span className="HeroSectionHeadingSpan">2K23</span>
        </h1>
        <p id="text"></p>
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
        {/* <div className="hero-btns">
        <button className="btn--primary">
          <a to="/blogs" className="btn-link">
            Get Started
            <i className="fas fa-suitcase-rolling" />
          </a>
        </button>
        <button className="btn--primary">
          <a to="/map" className="btn-link">
            Explore
            <i className="far fa-snowflake" />
          </a>
        </button>
      </div> */}
        <div className="fadeBottom"></div>
      </div>
    </>
  );
}

export default HeroSection;
