import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
// import EventData from "../Ongoing_Event/EventData";

import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
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
        <Link to="/" className="logo">
          {/* <img src={logo} alt="LOGO" className="nav-logo" /> */}
          Pragati
        </Link>
        <div className="items">
          <span className="nav-items">
            <Link to="/" className="nav-links">
              HOME
            </Link>
          </span>
          <span className="nav-items">
            <Link to="/schedule" className="nav-links">
              Schedule
            </Link>
          </span>
          <span className="nav-items">
            <HashLink to="/#event" className="nav-links">
              Event
            </HashLink>
          </span>
          <span className="nav-items">
            <HashLink to="/#contact" className="nav-links">
              Contact
            </HashLink>
          </span>
          <span className="nav-items">
            <HashLink to="/#venue" className="nav-links">
              Venue
            </HashLink>
          </span>
          <span className="nav-items">
            <HashLink to="/#faq" className="nav-links">
              FAQ
            </HashLink>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
