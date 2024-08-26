import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Identity from "./Components/Identity/Identity";
import OurServices from "./Components/OurServices/Services";
import Solutions from "./Components/Solutions/Solutions";
import Lanyards from "./Components/Lanyards/Lanyards";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Identity />
      <OurServices />
      <Solutions />
      <Lanyards/>
      <Footer />
    </div>
  );
}

export default App;
