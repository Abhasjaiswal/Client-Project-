import React from "react";
import Navbar from "../../Components/NavBar/Navbar"
import Footer from "../../Components/Footer/Footer"
import Service from "../../Components/Service/Service"

const Landing = () => {
    return (
      <div>
        <Navbar />
        <Service/>
        <Footer/>
      </div>
    );
  };
  
  export default Landing;