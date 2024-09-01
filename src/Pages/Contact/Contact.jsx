import React from "react";
import Navbar from "../../Components/NavBar/Navbar"
import Footer from "../../Components/Footer/Footer"
import Contact from "../../Components/ContactUs/Contact"  


const contact = () => {
    return (
      <div>
        <Navbar />
        <Contact/>
        <Footer/>
      </div>
    );
  };
  
  export default contact;