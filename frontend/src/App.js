import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landingPage.js';
import Enquiry from './pages/enquiry.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/enquiry' element={<Enquiry />} />
      </Routes>
    </Router>
  );
}

export default App;
