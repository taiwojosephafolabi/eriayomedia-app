import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import Enquiry from './pages/enquiry';

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
