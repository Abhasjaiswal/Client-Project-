import React from "react";
import Navbar from "../../../Components/NavBar/Navbar";
import Header from "../../../Components/BusinessHeader/Business";
import Serve from "../../../Components/WhoWeServe/Serve"

const Landing = () => {
    return (
      <div>
        <Navbar />
        <Header/>
        <Serve/>

      </div>
    );
  };
  
  export default Landing;