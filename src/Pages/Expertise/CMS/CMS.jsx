import React from "react";
import Navbar from "../../../Components/NavBar/Navbar"
import CMS from "../../../Components/CMS/CMS"
import Footer from "../../../Components/Footer/Footer"
import Contact from "../../../Components/LandContact/contact"



const Landing = () => {
    return (
      <div>
        <Navbar />
        <CMS/>
        <Contact/>
        <Footer/>
      </div>
    );
  };
  
  export default Landing;