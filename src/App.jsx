// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Component/Hero';
import Structure from './Component/Structure';
import Guided from './Component/Guided';
import Blogging from './Component/Blogging';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/search" element={<Structure />} />
         <Route path="/guided" element={<Guided/>} />
         <Route path="/blogging" element={<Blogging/>} />
      </Routes>
    </Router>
  );
};

export default App;
