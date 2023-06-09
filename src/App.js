import React from "react";
import NavBar from "./component/navBar/Nav";
import HomeContiner from "./component/sections/section1/section1-HomeContiner";
import About from "./component/sections/section2/about";
import OurTeam from "./component/sections/section3/OurTeam";
import HowItWork from "./component/sections/section4/HowItWorks";
import Prising from "./component/sections/section5/Prising";
import Blog from "./component/sections/section6/Blog";
import Contact from "./component/sections/section7/Contact";
import Footer from "./component/xfooter/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
        <NavBar />
        <HomeContiner />
        <About />
        <OurTeam />
        <HowItWork />
        <Prising />
        <Blog />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
