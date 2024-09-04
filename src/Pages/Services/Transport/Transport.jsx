import React from "react";
import Navbar from "../../../Components/NavBar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import Header from "../../../Components/Header/Header"; // Import the Header component

const Events = () => {
    return (
        <div>
            <Navbar />
            <Header 
                title="Transport"   //Pass the title here 
                // subtitle="Experience the Best Live Performances" //pass the subtitle here 
                backgroundImage={require('../../../assets/Images/cms3.jpg')} // Pass the image path here
            />
            <Footer />
        </div>
    );
};

export default Events;
