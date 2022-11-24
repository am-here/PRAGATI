import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Teachers from "./components/Teachers/Teachers";
import Day from "./Scheduler/Day";

import "./App.css";

function App() {
  return (
    <>
      <Day />
      <HeroSection />
      <Teachers />
      <Footer />
    </>
  );
}

export default App;
