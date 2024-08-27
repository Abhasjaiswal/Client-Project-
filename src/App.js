import React from "react";
// import Navbar from "./Components/NavBar/Navbar";
// import Identity from "./Components/Identity/Identity";
// import OurServices from "./Components/OurServices/Services";
// import Solutions from "./Components/Solutions/Solutions";
// import Lanyards from "./Components/Lanyards/Lanyards";
// import Footer from "./Components/Footer/Footer";
// import LandingContact from "./Components/LandContact/contact"
// import OurClient from "./Components/OurClient/Client"
import Landing from "./Pages/Landing/Lading"
import Business from "./Pages/Services/Business/Business"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Landing />} />
          <Route path="/business" element={<Business />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
