import React from "react";
import Navbar from "../../../Components/NavBar/Navbar"
import Personalization from "../../../Components/Personalisation/Personalisation"
import Footer from "../../../Components/Footer/Footer"
import Contact from "../../../Components/LandContact/contact"



const Landing = () => {
    return (
      <div>
        <Navbar />
        <Personalization/>
        <Contact/>
        <Footer/>
      </div>
    );
  };
  
  export default Landing;