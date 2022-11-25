import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Teachers from "./components/Teachers/Teachers";
import Venue from "./components/Venue";
import Rules from "./components/RulesRegulation";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Teachers />
      <Venue />
      <Footer />
      {/* <Rules/> */}
    </>
  );
}

export default App;
