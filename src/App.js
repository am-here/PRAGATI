import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Teachers from "./components/Teachers/Teachers";
import Venue from "./components/Venue";
import Rules from "./components/RulesRegulation";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Venue />
      <Teachers />
      <Footer />
      {/* <Rules/> */}
    </>
  );
}

export default App;
