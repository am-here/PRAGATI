import React from "react";
import { Link } from "react-router-dom";
import Heading from "../Heading";
import EventData from "./EventData";
import "./EventCard.css";
function Ongoing() {
  return (
    <>
      <div id="notices">
        <Heading title="NOTICES" />
        <footer className="EventCard">
          <div className="EventCardRow">
            {EventData.map((element) => {
              return (
                <div className="EventCardCol">
                  <Link
                    className={element.linkto ? "" : "non-pointer"}
                    to={element.linkto ? `${element.linkto}` : `#`}
                  >
                    <img
                      src={require(`../../resources/${element.image}`)}
                      alt="notices"
                      className="EventCardImg"
                      draggable={false}
                    />
                  </Link>
                  <p className="EventCardPara">{element.description}</p>
                </div>
              );
            })}
          </div>
        </footer>
      </div>
    </>
  );
}

export default Ongoing;
