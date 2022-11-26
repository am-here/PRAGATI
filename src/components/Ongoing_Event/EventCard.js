import React from "react";
import Heading from "../Heading";
import EventData from "./EventData";
import { Link } from "react-router-dom";
import "./EventCard.css";
function Ongoing() {
  return (
    <>
      <div id="events">
        <Heading title="EVENTS" />
        <footer className="EventCard">
          <div className="EventCardRow">
            {EventData.map((element) => {
              return (
                <Link to="/schedule" className="">
                  <div className="EventCardCol">
                    <img
                      src={require(`../../resources/${element.image}`)}
                      alt="Comp1"
                      className="EventCardImg"
                    />
                    <p className="EventCardPara">{element.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </footer>
      </div>
    </>
  );
}

export default Ongoing;
