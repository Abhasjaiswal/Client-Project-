import React from "react";
import Navbar from "../../../Components/NavBar/Navbar";
import ConcertHeader from "../../../Components/ConcertHeader/Header";
import Footer from "../../../Components/Footer/Footer"
import ConcertProduct from "../../../Components/ConcertProd/Products";
const Landing = () => {
    return (
      <div>
        <Navbar />
        <ConcertHeader />
        <ConcertProduct />
        <Footer/>
      </div>
    );
  };
  
  export default Landing;