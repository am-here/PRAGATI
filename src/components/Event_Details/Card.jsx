import React from "react";
import "./Card.css";
function Card({ details }) {
  console.log(details);
  return (
    <div className="card-container">
      <div className="image-div">
        <img
          src={require(`../../resources/photo.jpeg`)}
          alt="details"
          className="image"
        />
      </div>
      <div className="about-div">
        <h3 className="name">{details.name}</h3>
        {details.bio && <span className="bio">{details.bio}</span>}
        <div className="social">
          {/* {details.phone && (
            <a href={`tel:${details.phone}`} className="link">
              <i className="fa-solid fa-phone"></i>
            </a>
          )} */}
          {details.phone && (
            <a href={`https://wa.me/+91${details.phone}`} target="_blank"
              rel="noopener noreferrer" className="link">
              <i className="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;Whatsapp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
