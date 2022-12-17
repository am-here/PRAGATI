import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logoPragati from "../../resources/pragati-bg.png";

import "./footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="row">
          <div className="col">
            {/* <img
              src={require(`../../resources/demo_logo.png`)}
              alt="Logo"
              className="logo"
              draggable={false}
            /> */}
            <img src={logoPragati} alt="LOGO" className="logo" />
            <p>
              Pragati gives young minds an opportunity to showcase their skills
              and compete with other likeminded individuals and the best talent
              will emerge as the winner. Come join us in this expedition!
            </p>
          </div>
          <div className="col colf">
            <h3>
              Address{" "}
              <div className="underline">
                <span className="uspan"></span>
              </div>{" "}
            </h3>
            <p>243, G T Road North,</p>
            <p>Liluah, Howrah,</p>
            <p>West Bengal, India, 711204</p>
            {/* <p className="email-id">mckvie@gmail.com</p>
            <h4>+91 89106 31623</h4> */}
          </div>
          <div className="col colf">
            <h3>
              Links{" "}
              <div className="underline">
                <span className="uspan"></span>
              </div>{" "}
            </h3>
            <ul>
              <li className="li">
                <HashLink className="ali" to="/#home">
                  Home
                </HashLink>
              </li>
              <li className="li">
                <Link className="ali" to="/schedule">
                  Schedule
                </Link>
              </li>
              <li className="li">
                <HashLink className="ali" to="/#venue">
                  Venue
                </HashLink>
              </li>
              <li className="li">
                <HashLink className="ali" to="/#events">
                  Events
                </HashLink>
              </li>
              <li className="li">
                <Link className="ali" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>
              Register{" "}
              <div className="underline">
                <span className="uspan"></span>
              </div>{" "}
            </h3>
            <form className="form">
              <i class="fa-solid fa-envelope"></i>
              <input
                className="input"
                type="email"
                placeholder="Under Construction"
                disabled
                required
              />
              <button className="button" type="submit">
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
              </button>
            </form>
            <div className="social-icons">
              <a
                target="_blank"
                href="https://www.facebook.com/mckvieoriginal/"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/mckvieofficial/"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-instagram"></i>
              </a>
              <a
                target="_blank"
                href="https://wa.me/919874734389/"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-whatsapp"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/mckvie/"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="hr" />
        <h3 className="copyright">
          Made by Coders Club with <span className="span">&#9829;</span>{" "}
        </h3>
      </footer>
    </>
  );
}

export default Footer;
