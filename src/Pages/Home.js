import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
// import Teachers from "../components/Teachers/Teachers";
import Venue from "../components/Venue";
import EventCard from "../components/Ongoing_Event/EventCard";
import Event_Detail from "../components/Event_Details/event_details";
import Event_Contact from "../components/Event_Details/event_contacts";

function Home() {
  return (
    <>
      <HeroSection />
      <EventCard />
      <Event_Detail name="Circuit Design" date="5th January 2023" amt="50" size="1 to 3" rules="https://meet.google.com/zua-gmya-vyf" contacts="https://meet.google.com/zua-gmya-vyf"/>
      <Event_Contact/>
      {/* <EventCard /> */}
      <Venue />
    </>
  );
}

export default Home;
