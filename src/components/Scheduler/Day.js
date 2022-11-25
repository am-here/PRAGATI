import React, { useState } from "react";
import Heading from "../Heading/index";
import Scheduler from "./Scheduler";
import "./Scheduler.css";

function Day() {
  const [day, setDay] = useState("day1");

  return (
    <>
      {/* <Heading title="SCHEDULE" /> */}
      <div className="day-button">
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
      </div>
    </>
  );
}

export default Day;
