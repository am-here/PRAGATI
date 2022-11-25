import React from "react";
// import { Link } from "react-router-dom";
import Header_img from "./Header_img.png";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img className="HeroSectionimg" src={Header_img} alt="header_img" />
      <h1 className="HeroSectionHeading">
        PRAGATI <span className="HeroSectionHeadingSpan">2K23</span>
      </h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
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
      </div>
    </div>
  );
}

export default HeroSection;
