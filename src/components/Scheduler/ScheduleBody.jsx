import React, { useState } from 'react'
import Day1 from './Day1'
import Day2 from './Day2'
// import timelineElements from './Schedule_data'

function ScheduleBody(props) {
  const [times, setTime] = useState("09:00-09:30");
  const [items, setItems] = useState(props.day === "Day1" ? Day1.filter((curItem) => {
    return curItem.time === "09:00-09:30";
  }) : Day2.filter((curItem) => {
    return curItem.time === "09:00-09:30";
  }));
  const filterItem = (time) => {
    const updatedItems = (props.day === "Day1" ? Day1 : Day2).filter((curItem) => {
      return curItem.time === time;
    });

    setItems(updatedItems);
  }
  return (
    <>
      <div className='schedule_body'>
        <div className="timeline">
          <button className={times === "09:00-09:30" ? "active-day" : ""} onClick={() => { filterItem("09:00-09:30"); setTime("09:00-09:30"); }}>09:00-09:30</button>
          <button className={times === "09:30-10:00" ? "active-day" : ""} onClick={() => { filterItem("09:30-10:00"); setTime("09:30-10:00"); }}>09:30-10:00</button>
          <button className={times === "10:00-11:00" ? "active-day" : ""} onClick={() => { filterItem("10:00-11:00"); setTime("10:00-11:00"); }}>10:00-11:00</button>
          <button className={times === "11:00-12:00" ? "active-day" : ""} onClick={() => { filterItem("11:00-12:00"); setTime("11:00-12:00"); }}>11:00-12:00</button>
          <button className={times === "12:00-13:00" ? "active-day" : ""} onClick={() => { filterItem("12:00-13:00"); setTime("12:00-13:00"); }}>12:00-13:00</button>
          <button className={times === "13:00-14:00" ? "active-day" : ""} onClick={() => { filterItem("13:00-14:00"); setTime("13:00-14:00"); }}>13:00-14:00</button>
          <button className={times === "14:00-15:00" ? "active-day" : ""} onClick={() => { filterItem("14:00-15:00"); setTime("14:00-15:00"); }}>14:00-15:00</button>
          <button className={times === "15:00-16:00" ? "active-day" : ""} onClick={() => { filterItem("15:00-16:00"); setTime("15:00-16:00"); }}>15:00-16:00</button>
          <button className={times === "16:00-17:00" ? "active-day" : ""} onClick={() => { filterItem("16:00-17:00"); setTime("16:00-17:00"); }}>16:00-17:00</button>
        </div>
        {/* <div className='scheduleCard'> */}
        <div className="ScheduleCardRow">
          {items.map((details) => {
            return (
              <div className='ScheduleCardCol'>
                <h1 className="ScheduleCardHeading">{details.heading}</h1>
                <h2 className="ScheduleCardRound">{details.round}</h2>
              </div>
            )
          })}
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default ScheduleBody