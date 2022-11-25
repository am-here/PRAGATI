import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <>
    <footer className='footer'>
      <div className="row">
        <div className="col">
          <img src={require(`../../resources/demo_logo.png`)} alt="Logo" className="logo"/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem rerum veniam, atque esse dignissimos et officia reprehenderit possimus facere aliquam accusantium</p>
        </div>
        <div className="col colf">
          <h3>Address <div className="underline"><span className="uspan"></span></div> </h3>
          <p>243, G T Road North,</p>
          <p>Liluah, Howrah,</p>
          <p>West Bengal, India, 711204</p>
          <p className="email-id">mckvie@gmail.com</p>
          <h4>+91 89106 31623</h4>
        </div>
        <div className="col colf">
          <h3>Links <div className="underline"><span className="uspan"></span></div> </h3>
          <ul>
            <li className='li'><a className='ali' href="/">Home</a></li>
            <li className='li'><a className='ali' href="/">Schedule</a></li>
            <li className='li'><a className='ali' href="/">Venue</a></li>
            <li className='li'><a className='ali' href="/">Faq</a></li>
            <li className='li'><a className='ali' href="/">Contact</a></li>
          </ul>
        </div>
        <div className="col">
          <h3>Register <div className="underline"><span className="uspan"></span></div> </h3>
          <form  className='form'>
            <i class="fa-solid fa-envelope"></i>
            <input className="input" type="email" placeholder="Enter your email id" required/>
            <button className="button" type="submit"><i class="fa-solid fa-arrow-right-to-bracket"></i></button>
          </form>
          <div className="social-icons">
          <a target="_blank" href="https://www.facebook.com/mckvieoriginal/"><i class="fa-brands fa-square-facebook"></i></a>
          <a target="_blank" href="https://www.instagram.com/mckvieofficial/"><i class="fa-brands fa-square-instagram"></i></a>
          <a target="_blank" href="https://wa.me/918910631623/"><i class="fa-brands fa-square-whatsapp"></i></a>
          <a target="_blank" href="https://www.linkedin.com/company/mckvie/"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <hr className='hr'/>
      <h3 className="copyright">Made by Coders Club with <span className="span" >&#9829;</span> </h3>
    </footer>
    </>
  )
}

export default Footer