import React from "react";
import Navbar from "../../../Components/NavBar/Navbar";
import Header from "../../../Components/BusinessHeader/Business";
import Serve from "../../../Components/WhatWeServe/Serve"
import BusinessProd from "../../../Components/BusinessProd/Products"
import WhyUs from "../../../Components/WhyUsBusiness/why"
import Footer from "../../../Components/Footer/Footer"
import WhoWe from "../../../Components/WhoWeServe/We"
const Landing = () => {
    return (
      <div>
        <Navbar />
        <Header/>
        <Serve/>
        <BusinessProd/>
        <WhyUs/>
        <WhoWe/>
        <Footer/>
      </div>
    );
  };
  
  export default Landing;