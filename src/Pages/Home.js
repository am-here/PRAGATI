import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Teachers from "../components/Teachers/Teachers";
import Venue from "../components/Venue";
import Ongoing from "../components/Ongoing_Event";

function Home() {
  return (
    <>
      <HeroSection />
      <Ongoing/>
      <Venue />
      <Teachers />
    </>
  );
}

export default Home;
