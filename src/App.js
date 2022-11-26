import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Day from "./components/Scheduler/Day";

// import React from "react";
// import EventCard from "./components/Ongoing_Event/EventCard";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Day />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <EventCard /> */}
    </>
  );
}

export default App;
