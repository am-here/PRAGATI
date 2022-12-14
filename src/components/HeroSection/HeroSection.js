import React, { useState, useEffect, useRef } from "react";
import TextScrambler from "react-scramble-text";
import "react-scramble-text/dist/index.css";

// import Header_img from "../../resources/p.gif";
import Header_img from "../../resources/hero_2.gif";
// import logoPragati from "../../resources/pragati-bg.png";
import "./HeroSection.css";

function HeroSection() {
  const phrases = [
    "MCKVIE TECHNICAL FESTIVAL",
    "INNOVATION TECHNOLOGY ROBOTICS",
    "CONNECTING MINDS",
    "LARGEST SCIENCE AND TECHNOLOGY FESTIVAL",
    "CREATING FUTURE",
    "GATHERING OF INNOVATION AND IDEAS",
    "LEARN BY DOING",
  ];
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const setTimer = () => {
    const countDownDate = new Date("Jan 16, 2023 09:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    setTimer();
    let x = interval.current;
    return () => clearInterval(x);
  });

  return (
    <>
      <div className="hero-container" id="home">
        <img
          className="HeroSectionimg"
          src={Header_img}
          alt="header_img"
          draggable={false}
        />
        <h1 className="HeroSectionHeading">
          pragati <span className="HeroSectionHeadingSpan">2023</span>
        </h1>
        {/* <h1 className="HeroSectionHeading">
          <img src={logoPragati} alt="LOGO" className="nav-logo" />
        </h1> */}
        <TextScrambler phrases={phrases} speed={20} pauseTime={800} />
        <section className="countDays">
          <ul className="countDown">
            <li>
              <span className="timeNumbers">{timerDays}</span>
              <p className="time-description">Days</p>
            </li>
            <li>
              <span className="timeNumbers">{timerHours}</span>
              <p className="time-description">Hours</p>
            </li>
            <li>
              <span className="timeNumbers">{timerMinutes}</span>
              <p className="time-description">Minutes</p>
            </li>
            <li>
              <span className="timeNumbers">{timerSeconds}</span>
              <p className="time-description">Seconds</p>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
