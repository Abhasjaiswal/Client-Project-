import React from "react";
import Navbar from "../../Components/NavBar/Navbar"
import Footer from "../../Components/Footer/Footer"
import About from "../../Components/About/AboutC"
import OurServices from "../../Components/OurServices/Services" 
import Contact from "../../Components/AboutContact/AboutContact"


const Landing = () => {
    return (
      <div>
        <Navbar />
        <About/>
        <OurServices/>
        <Contact/>
        <Footer/>
      </div>
    );
  };
  
  export default Landing;