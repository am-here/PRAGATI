// import React, { useState } from "react";
import React from "react";
import UnderCunstruction from "../../resources/UnderCunstruction";
import Heading from "../Heading/index";
import GoToTop from "./../GoToTop";

// import Scheduler from "./Scheduler";
import "./Scheduler.css";

function Day() {
  // const [day, setDay] = useState("day1");

  return (
    <>
      <div className="mar_add"></div>
      <Heading title="SCHEDULE" />
      <UnderCunstruction />
      {/* <div className="day-button">
        <button
          className={day === "day1" ? "item-active" : "day1"}
          onClick={() => setDay("day1")}
        >
          1st Day
        </button>
        <button
          className={day === "day2" ? "item-active" : "day2"}
          onClick={() => setDay("day2")}
        >
          2nd Day
        </button>
      </div>
      <div>
        {day === "day1" && <Scheduler />}
        {day === "day2" && <Scheduler />}
      </div> */}
      <GoToTop />
    </>
  );
}

export default Day;
