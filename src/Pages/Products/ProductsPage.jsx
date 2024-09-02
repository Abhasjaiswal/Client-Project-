import React from "react";
import Navbar from "../../Components/NavBar/Navbar"
import Footer from "../../Components/Footer/Footer"
import Products from "../../Components/Products/Products"


const Landing = () => {
    return (
      <div>
        <Navbar />
        <Products />
        <Footer/>
      </div>
    );
  };
  
  export default Landing;