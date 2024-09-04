import React from "react";
import Navbar from "../../../Components/NavBar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import ConcertProduct from "../../../Components/ConcertProd/Products";
import WhyUs from "../../../Components/WhyUsConcert/Why";
import WhatWe from "../../../Components/WhatWeConcert/What";
import Who from "../../../Components/WhoWeConcert/Who";
import Header from "../../../Components/Header/Header"; // Import the Header component

const Landing = () => {
    return (
        <div>
            <Navbar />
            <Header 
                title="Concert Landing"   //Pass the title here 
                subtitle="Experience the Best Live Performances" //pass the subtitle here 
                backgroundImage={require('../../../assets/Images/production8.jpg')} // Pass the image path here
            />
            <WhatWe />
            <ConcertProduct />
            <WhyUs />
            <Who />
            <Footer />
        </div>
    );
};

export default Landing;
