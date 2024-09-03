import React from "react";
import Navbar from "../../../Components/NavBar/Navbar"
import Data from "../../../Components/Data/Data"
import Footer from "../../../Components/Footer/Footer"
import Contact from "../../../Components/LandContact/contact"



const Landing = () => {
    return (
      <div>
        <Navbar />
        <Data/>
        <Contact/>
        <Footer/>
      </div>
    );
  };
  
  export default Landing;