import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Day from "./components/Scheduler/Day";
import Teachers from "./components/Teachers/Teachers";
import Event from "./components/Ongoing_Event/event";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import EventDetails from "./components/Event_Details/EventDetails";
import eventDetails from "./components/Event_Details/Data";
import "./App.css";

function App() {
  const [menu, setMenu] = useState("Home");
  const [top, setTop] = useState(false);
  const [ID, setId] = useState("0");
  const [details, setDetails] = useState(null);
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
  useEffect(() => {
    var obj = eventDetails.find((x) => x.id === parseInt(ID));
    setDetails(obj);
    console.log(obj);
  }, [ID]);
  return (
    <>
      <BrowserRouter>
        <Navbar menu={menu} setMenu={setMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Day />} />
          <Route path="/contact" element={<Teachers />} />
          <Route
            path="/rules/:id"
            element={<EventDetails setId={setId} details={details} />}
          />
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
