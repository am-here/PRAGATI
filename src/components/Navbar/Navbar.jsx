import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import logoPragati from "../../resources/pragati-bg.png";

import "./Navbar.css";
import "./Hambarger.css";

function Navbar({ menu, setMenu }) {
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
  const handleClick = (menu1) => {
    setHide(!hide);
    setMenu(menu1);
  };
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav-container">
        <div className="logo-menu">
          <Link to="/" className="logo">
            <img src={logoPragati} alt="LOGO" className="nav-logo" draggable={false} />
            {/* Pragati */}
          </Link>
          <div className="menu-btn" onClick={() => handleClick("Home")}>
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
          <span className="nav-items" onClick={() => handleClick("Home")}>
            <HashLink
              to="/#home"
              className={menu === "Home" ? "nav-links active" : "nav-links"}
            >
              Home
            </HashLink>
          </span>
          <span className="nav-items" onClick={() => handleClick("Events")}>
            <HashLink
              to="/events"
              className={menu === "Events" ? "nav-links active" : "nav-links"}
            >
              Events
            </HashLink>
          </span>
          <span className="nav-items" onClick={() => handleClick("Schedule")}>
            <HashLink
              to="/schedule"
              className={menu === "Schedule" ? "nav-links active" : "nav-links"}
            >
              Schedule
            </HashLink>
          </span>
          <span className="nav-items" onClick={() => handleClick("Notices")}>
            <HashLink
              to="/#notices"
              className={menu === "Notices" ? "nav-links active" : "nav-links"}
            >
              Notices
            </HashLink>
          </span>
          <span className="nav-items" onClick={() => handleClick("Venue")}>
            <HashLink
              to="/#venue"
              className={menu === "Venue" ? "nav-links active" : "nav-links"}
            >
              Venue
            </HashLink>
          </span>
          <span className="nav-items" onClick={() => handleClick("Contact")}>
            <HashLink
              to="/contact"
              className={menu === "Contact" ? "nav-links active" : "nav-links"}
            >
              Contact
            </HashLink>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
