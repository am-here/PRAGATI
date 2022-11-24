import React from 'react'
import Heading from "../Heading";
import "./footer.css"
import logo from "/Users/harsh/Downloads/Coding/Web_Dev/pragati/src/resources/demo_logo.png"
function Footer() {
  return (
    <>
    <Heading title="SOCIALS"/>
    <h1>FUCKKK!!</h1>
    <footer>
      <div className="row">
        <div className="col">
          <img src={logo} alt="Logo" className="logo"/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem rerum veniam, atque esse dignissimos et officia reprehenderit possimus facere aliquam accusantium suscipit sapiente dolores tempora maiores! Eos vero voluptates voluptas?</p>
        </div>
        <div className="col colf">
          <h3>Office <div className="underline"><span></span></div> </h3>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum. India</p>
          <p className="email-id">mckvie@gmail.com</p>
          <h4>+91 89106 31623</h4>
        </div>
        <div className="col colf">
          <h3>Links <div className="underline"><span></span></div> </h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Schedule</a></li>
            <li><a href="/">Venue</a></li>
            <li><a href="/">Faq</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
        <div className="col">
          <h3>Newsletter <div className="underline"><span></span></div> </h3>
          <form>
            <i class="fa-solid fa-envelope"></i>
            <input type="email" placeholder="Enter your email id" required/>
            <button type="submit"><i class="fa-solid fa-arrow-right-to-bracket"></i></button>
          </form>
          <div className="social-icons">
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-square-whatsapp"></i>
          <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
      <hr />
      <h3 className="copyright">Made by Coders Club with <span>&#9829;</span> </h3>
    </footer>
    </>
  )
}

export default Footer