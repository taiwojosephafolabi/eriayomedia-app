import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from './pages/landingPage.js';
import Enquiry from './pages/enquiry.js';
import About from './pages/aboutPage.js';

import './App.css';

export default function App() {
  const backToLandingPage = () => {
    <Link to='/' />;
  };

  const showEnquiryPage = () => {
    // <Route exact path='./enquiry' element={<Enquiry />}
    <Link to='./enquiry' />;
  };

  const showAboutPage = () => {
    // <Route exact path='./about' element={<About />}
    <Link to='./about' />;
  };

  return (
    <Router>
      <Routes>
        <Route
          backToLandingPage={backToLandingPage}
          exact
          path='/'
          element={<LandingPage />}
        />
        <Route
          showEnquiryPage={showEnquiryPage}
          path='/enquiry'
          element={<Enquiry />}
        />
        <Route
          showAboutPage={showAboutPage}
          path='/about'
          element={<About />}
        />
      </Routes>
    </Router>
  );
}
