import React from "react";
import Navbar from "../../../Components/NavBar/Navbar"
import Footer from "../../../Components/Footer/Footer"
import Market from "../../../Components/Market/Market"
import Contact from "../../../Components/LandContact/contact"

const Landing = () => {
    return (
      <div>
        <Navbar />
        <Market />
        <Contact />
        <Footer />
      </div>
    );
  };
  
  export default Landing;