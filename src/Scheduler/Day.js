import React, { useState } from "react";
import Scheduler from "./Scheduler";
import "./Scheduler.css";

function Day() {
  const [day, setDay] = useState("day1");

  return (
    <>
      <div className="day-button">
        <button
          className={day === "day1" ? "item-active" : "day1"}
          onClick={() => setDay("day1")}
        >
          Day First
        </button>
        <button
          className={day === "day2" ? "item-active" : "day2"}
          onClick={() => setDay("day2")}
        >
          Day 2nd
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
