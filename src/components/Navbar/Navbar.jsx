import React, { useState, useEffect } from "react";

// import logo from "../../resources/demo_logo.png";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", window);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav-container">
        <a href="/" className="logo">
          {/* <img src={logo} alt="LOGO" className="nav-logo" /> */}
          Pragati
        </a>
        <div className="items">
          <span className="nav-items">
            <a href="/" className="nav-links">
              HOME
            </a>
          </span>
          <span className="nav-items">
            <a href="/" className="nav-links">
              Events
            </a>
          </span>
          <span className="nav-items">
            <a href="/" className="nav-links">
              Contact
            </a>
          </span>
          <span className="nav-items">
            <a href="/" className="nav-links">
              Venue
            </a>
          </span>
          <span className="nav-items">
            <a href="/" className="nav-links">
              FAQ
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
