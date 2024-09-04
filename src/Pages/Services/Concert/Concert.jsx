import React from "react";
import Navbar from "../../../Components/NavBar/Navbar";
import ConcertHeader from "../../../Components/ConcertHeader/Header";
import Footer from "../../../Components/Footer/Footer"
import ConcertProduct from "../../../Components/ConcertProd/Products";
import WhyUs from "../../../Components/WhyUsConcert/Why";
import WhatWe from "../../../Components/WhatWeConcert/What";
import Who from "../../../Components/WhoWeConcert/Who"

const Landing = () => {
    return (
      <div>
        <Navbar />
        <ConcertHeader />
        <WhatWe/>
        <ConcertProduct />
        <WhyUs/>
        <Who/>
        <Footer/>
      </div>
    );
  };
  
  export default Landing;