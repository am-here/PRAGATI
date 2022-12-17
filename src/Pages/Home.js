import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Venue from "../components/Venue";
import EventCard from "../components/Ongoing_Event/EventCard";

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
