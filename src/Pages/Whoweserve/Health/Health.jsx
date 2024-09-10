import React from "react";
import Navbar from "../../../Components/NavBar/Navbar"
import Wwserve from "../../../Components/Wwserve/whoweserpage"
import Footer from "../../../Components/Footer/Footer"
// import Contact from "../../../Components/LandContact/contact"



const Landing = () => {
    return (
      <div>
        <Navbar />
        <Wwserve/>
        {/* <Contact/> */}
        <Footer/>
      </div>
    );
  };
  
  export default Landing;