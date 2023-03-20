import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Elektrikell from './ElektriKell';
import NavBar from './Header/NavBar';

const App = () => {
  
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/elektrikell" element={<Elektrikell />} />
        <Route path="/elektrikell/:activePrice" element={<Elektrikell />} />
        <Route path="/elektrikell/low/:hour" element={<Elektrikell />} />
        <Route path="/elektrikell/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App