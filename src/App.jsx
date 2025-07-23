import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Menu from './Menu/MainMenu';
import AboutUs from './About/about';
import Dashboard from './Dashboard/dashboard';
import Franchise from './Franchise/franchise';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meny" element={<Menu />} />
        <Route path="/om-oss" element={<AboutUs />} />
                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/franchise" element={<Franchise />} />



      </Routes>
    </Router>
  );
};

export default App;
