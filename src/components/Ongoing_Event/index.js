import React from 'react'
import Heading from "../Heading";
function Ongoing() {
  return (
    <>
    <Heading title="EVENTS"/>
    <footer className="footer">
        <div className="row">
          <div className="col">
            <img
              src={require(`../../resources/logo_comp.png`)}
              alt="Comp1"
              className="card"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
              rerum veniam, atque esse dignissimos et officia reprehenderit
              possimus facere aliquam accusantium
            </p>
          </div>
          <div className="col colf">
            {/* <h3>
              Address{" "}
              <div className="underline">
                <span className="uspan"></span>
              </div>{" "}
            </h3>
            <p>243, G T Road North,</p>
            <p>Liluah, Howrah,</p>
            <p>West Bengal, India, 711204</p>
            <p className="email-id">mckvie@gmail.com</p>
            <h4>+91 89106 31623</h4> */}
          </div>
          <div className="col colf">
            {/* <h3>
              Links{" "}
              <div className="underline">
                <span className="uspan"></span>
              </div>{" "}
            </h3>
            <ul>
              <li className="li">
                <Link className="ali" to="/">
                  Home
                </Link>
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
                <HashLink className="ali" to="/#faq">
                  Faq
                </HashLink>
              </li>
              <li className="li">
                <HashLink className="ali" to="/#contact">
                  Contact
                </HashLink>
              </li>
            </ul> */}
          </div>
          <div className="col">
            {/* <h3>
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
                placeholder="Enter your email id"
                required
              />
              <button className="button" type="submit">
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
              </button>
            </form>
            <div className="social-icons">
              <Link
                target="_blank"
                to="https://www.facebook.com/mckvieoriginal/"
              >
                <i className="fa-brands fa-square-facebook"></i>
              </Link>
              <Link
                target="_blank"
                to="https://www.instagram.com/mckvieofficial/"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-instagram"></i>
              </Link>
              <Link
                target="_blank"
                to="https://wa.me/918910631623/"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-whatsapp"></i>
              </Link>
              <Link
                target="_blank"
                to="https://www.linkedin.com/company/mckvie/"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </div> */}
          </div>
        </div>
        {/* <hr className="hr" />
        <h3 className="copyright">
          Made by Coders Club with <span className="span">&#9829;</span>{" "}
        </h3> */}
      </footer>
    </>
  )
}

export default Ongoing