import React from "react";
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
                  <img
                    src={require(`../../resources/${element.image}`)}
                    alt="Comp1"
                    className="EventCardImg"
                    draggable={false}
                  />
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
