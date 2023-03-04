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
        <Route path='/' element={<Elektrikell />} />
        <Route path='/:activePrice' element={<Elektrikell />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App