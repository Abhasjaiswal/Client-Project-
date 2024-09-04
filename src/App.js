import React from "react";
import Landing from "./Pages/Landing/Lading"
import Business from "./Pages/Services/Business/Business"
import AboutUs from "./Pages/AboutUs/About"
import Expertise from "./Pages/Expertise/Expertise"
import CMS from "./Pages/Expertise/CMS/CMS"
import Data from "./Pages/Expertise/Data/Data"
import Digital from "./Pages/Expertise/Digital/Digital"
import Markets from "./Pages/Expertise/Markets/Markets"
import Personalization from "./Pages/Expertise/Personalization/Personalization"
import Production from "./Pages/Expertise/Production/Production"
import ContactUs from "./Pages/Contact/Contact"
import Products from "./Pages/Products/ProductsPage"
import Concerts from "./Pages/Services/Concert/Concert"
import Service from "./Pages/Services/Services"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/business" element={<Business />} />
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/expertise"element={<Expertise/>}/>
          <Route path="/cms"element={<CMS/>}/>
          <Route path="/markets"element={<Markets/>}/>
          <Route path="/data"element={<Data/>}/>
          <Route path="/digital"element={<Digital/>}/>
          <Route path="/production"element={<Production/>}/>
          <Route path="/personalization"element={<Personalization/>}/>
          <Route path="/contact"element={<ContactUs/>}/>
          <Route path="/products"element={<Products/>}/>
          <Route path="/concert"element={<Concerts/>}/>
          <Route path="/services" element={<Service/>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
