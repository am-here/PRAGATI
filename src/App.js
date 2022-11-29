import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Day from "./components/Scheduler/Day";
import Teachers from "./components/Teachers/Teachers";
import Event from "./components/Ongoing_Event/event";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import "./App.css";

function App() {
  const [menu, setMenu] = useState("Home");
  const [top, setTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setTop(true);
      } else {
        setTop(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", window);
    };
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar menu={menu} setMenu={setMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Day />} />
          <Route path="/contact" element={<Teachers />} />
          <Route path="/rules" element={<Event />} />
        </Routes>
        <ScrollToTop show={top} />
        <Footer />
      </BrowserRouter>
      {/* <EventCard /> */}
    </>
  );
}

export default App;
