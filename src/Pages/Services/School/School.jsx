import React from "react";
import Navbar from "../../../Components/NavBar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header"; // Import the Header component

const School = () => {
    return (
        <div>
            <Navbar />
            <Header 
                title="School"   //Pass the title here 
                // subtitle="Experience the Best Live Performances" //pass the subtitle here 
                backgroundImage={require('../../../assets/Images/cms2.jpg')} // Pass the image path here
            />
            <Footer />
        </div>
    );
};

export default School;
