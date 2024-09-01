import React from "react";
import Navbar from "../../Components/NavBar/Navbar"
import Footer from "../../Components/Footer/Footer"
import Expertise from "../../Components/Exinnovation/Exinnovation"
import Categories from "../../Components/Excategories/Excategories"


const Landing = () => {
    return (
      <div>
        <Navbar />
        <Expertise />
        <Categories />
        <Footer/>
      </div>
    );
  };
  
  export default Landing;