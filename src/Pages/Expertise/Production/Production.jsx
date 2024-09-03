import React from "react";
import Navbar from "../../../Components/NavBar/Navbar"
import Production from "../../../Components/Production/Production"
import Footer from "../../../Components/Footer/Footer"



const Landing = () => {
    return (
      <div>
        <Navbar />
        <Production/>
        <Footer/>
      </div>
    );
  };
  
  export default Landing;