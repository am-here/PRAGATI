import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
// import Teachers from "../components/Teachers/Teachers";
import Venue from "../components/Venue";
import EventCard from "../components/Ongoing_Event/EventCard";

function Home() {
  return (
    <>
      <HeroSection />
      <EventCard />
      <Ongoing />
      <Venue />
    </>
  );
}

export default Home;
