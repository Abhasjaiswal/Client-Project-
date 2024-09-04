import React from "react";
import Navbar from "../../../Components/NavBar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import Header from "../../../Components/Header/Header"; // Import the Header component

const Events = () => {
    return (
        <div>
            <Navbar />
            <Header 
                title="Events"   //Pass the title here 
                // subtitle="Experience the Best Live Performances" //pass the subtitle here 
                backgroundImage={require('../../../assets/Images/cms5.jpg')} // Pass the image path here
            />
            <Footer />
        </div>
    );
};

export default Events;
