import React from "react";
import Navbar from "../../Components/NavBar/Navbar"
import Identity from "../../Components/Identity/Identity";
import OurServices from "../../Components/OurServices/Services";
import Solutions from "../../Components/Solutions/Solutions";
import Lanyards from "../../Components/Lanyards/Lanyards";
import Videos from "../../Components/Videos/Videos";
import Footer from "../../Components/Footer/Footer"
import LandingContact from "../../Components/LandContact/contact"
import OurClient from "../../Components/OurClient/Client"


const Landing = () => {
    return (
      <div>
        <Navbar />
        <Identity />
        <OurServices />
        <Solutions />
        <Lanyards />
        <OurClient/>
        <LandingContact/>
        
        {/* <Videos /> */}
        <Footer/>
      </div>
    );
  };
  
  export default Landing;