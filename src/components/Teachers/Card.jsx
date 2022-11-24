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
        />
      </div>
      <div className="about-div">
        <h3>{teacher.name}</h3>
        <span>{teacher.bio}</span>
        <div className="social">
          <a href={`tel:${teacher.phone}`}>
            <i class="fa-solid fa-phone"></i>
          </a>
          <a href={`https://wa.me/${teacher.wapp}`}>
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
