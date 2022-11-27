import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import "./Navbar.css";
import "./Hambarger.css";

function Navbar() {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);
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
  const handleClick = () => {
    setHide(!hide);
  };
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav-container">
        <div className="logo-menu">
          <Link to="/" className="logo">
            {/* <img src={logo} alt="LOGO" className="nav-logo" /> */}
            Pragati
          </Link>
          <div className="menu-btn" onClick={handleClick}>
            <button
              className={
                hide
                  ? "hamburger hamburger--collapse"
                  : "hamburger hamburger--collapse is-active"
              }
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>

        <div className={hide ? "items hide" : "items"}>
          <span className="nav-items" onClick={handleClick}>
            <HashLink to="/#home" className="nav-links">
              Home
            </HashLink>
          </span>
          <span className="nav-items" onClick={handleClick}>
            <HashLink to="/#events" className="nav-links">
              Events
            </HashLink>
          </span>
          <span className="nav-items" onClick={handleClick}>
            <HashLink to="/schedule" className="nav-links">
              Schedule
            </HashLink>
          </span>
          <span className="nav-items" onClick={handleClick}>
            <HashLink to="/#venue" className="nav-links">
              Venue
            </HashLink>
          </span>
          <span className="nav-items" onClick={handleClick}>
            <HashLink to="/contact" className="nav-links">
              Contacts
            </HashLink>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
