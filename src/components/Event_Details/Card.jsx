import React from "react";
import "./Card.css";
function Card({ details }) {
  return (
    <div className="card-container">
      <div className="image-div">
        <img
          src={require(`../../resources/${details.image}`)}
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
              <i className="fa-brands fa-whatsapp"></i>
              {details.whatsapp && (
                <span>&nbsp;&nbsp;{details.whatsapp}</span>)}
            </a>
          )}
          {details.linkedin && (
            <a href={`${details.linkedin}`} target="_blank"
              rel="noopener noreferrer" className="link linked">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
