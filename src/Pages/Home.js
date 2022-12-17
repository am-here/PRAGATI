import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
// import Teachers from "../components/Teachers/Teachers";
import Venue from "../components/Venue";
import EventCard from "../components/Ongoing_Event/EventCard";
// import Event_Detail from "../components/Event_Details/event_details";

function Home() {
  return (
    <>
      <HeroSection />
      <EventCard />
      <Venue />
    </>
  );
}

export default Home;
