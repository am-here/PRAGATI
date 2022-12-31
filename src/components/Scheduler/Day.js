import React, { useState } from "react";
import GoToTop from "./../GoToTop";
import ScheduleBody from "./ScheduleBody";
// import Day1 from "./Day1";
// import Day2 from "./Day2";
import "./Scheduler.css";
// import Heading from "../Heading";
function Day() {
  const [day, setDay] = useState("day1");
  return (
    <>
      <div className="mar_add_event"></div>
      {/* <Heading title="SCHEDULE" /> */}
      <div className="card-schedule">
        <div className="sidebar-item">
          <div className="sidebar">
            <h2>Days</h2>
            <button
              className={day === "day1" ? "active-day" : ""}
              onClick={() => setDay("day1")}
            >
              16th January
            </button>
            <button
              className={day === "day2" ? "active-day" : ""}
              onClick={() => setDay("day2")}
            >
              17th January
            </button>
          </div>
        </div>
        <div className="scheduleBody-item">
          {day === "day1" && <ScheduleBody day="Day1" />}
          {day === "day2" && <ScheduleBody day="Day2" />}
        </div>
      </div>
      <GoToTop />
    </>
  );
}

export default Day;
