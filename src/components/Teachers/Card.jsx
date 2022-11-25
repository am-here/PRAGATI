import React from "react";
import "./Card.css";
function Card({ teacher }) {
  console.log(teacher);
  return (
    <div className="card-container">
      <div className="image-div">
        <img
          src={require(`../../assets/Teachers/${teacher.image}`)}
          alt="Teacher"
          className="image"
        />
      </div>
      <div className="about-div">
        <h3 className="name">{teacher.name}</h3>
        <span className="bio">{teacher.bio}</span>
        <div className="social">
          <a href={`tel:${teacher.phone}`} className="link">
            <i className="fa-solid fa-phone"></i>
          </a>
          <a href={`https://wa.me/91${teacher.wapp}`} className="link">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
