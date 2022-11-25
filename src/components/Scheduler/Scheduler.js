import React from "react";
import "./Scheduler.css";
import timelineElements from "./Event_data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import demo_logo from "./demo_logo.png";

function Scheduler() {
  const isIcon = { background: "#fff" };
  //   const arrowStyle = { background: "rgb(211, 238, 7)" };
  return (
    <>
      {/* // <Heading /> */}

      <VerticalTimeline animate={Boolean}>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              //   time={element.time}
              dateClassName="date"
              iconStyle={isIcon}
              icon={<img src={demo_logo} alt="logo" />}
              //   contentArrowStyle={arrowStyle}
            >
              <h2 className="vertical-timeline-element-title">
                {element.title}
              </h2>

              <h4 className="vertical-timeline-element-subtitle">
                {element.location}
              </h4>
              <p id="description">{element.description}</p>

              <a href={element.button1Url} className="btn-rule">
                {element.button1Text}
              </a>
              <a href={element.button2Url} className="btn-register">
                {element.button2Text}
              </a>
              <a href={element.button3Url} className="btn-contact">
                {element.button3Text}
              </a>
            </VerticalTimelineElement>
          );
        })}
        ;
      </VerticalTimeline>
    </>
  );
}

export default Scheduler;
