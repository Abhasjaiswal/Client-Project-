import React from "react";
import Navbar from "../../../Components/NavBar/Navbar"
import Digital from "../../../Components/Digital/Digital"
import Footer from "../../../Components/Footer/Footer"
import Contact from "../../../Components/LandContact/contact"



const Landing = () => {
    return (
      <div>
        <Navbar />
      
        <Digital/>
        <Contact />

        <Footer/>
      </div>
    );
  };
  
  export default Landing;