import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Services from './Components/Pages/Services/Services';

function App() {
  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <Navbar />
    //     {/* <Routes> */}
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/services" element={<Services />} />
    //     {/* </Routes> */}
    //   </div>
    // </BrowserRouter>

    <div>
      <Navbar/>
    </div>
  );
}

export default App;
