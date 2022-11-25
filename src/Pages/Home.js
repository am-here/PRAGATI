import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Teachers from "../components/Teachers/Teachers";
import Venue from "../components/Venue";

function Home() {
  return (
    <>
      <HeroSection />
      <Venue />
      <Teachers />
    </>
  );
}

export default Home;
