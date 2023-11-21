import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

function App() {
//   {backToLandingPage,
//   showHomePage,
//   showEnquiryPage,
//   showAboutPage}
  return (
    <div className='App'>
      <Navbar
      // backToLandingPage={backToLandingPage}
      // showHomePage={showHomePage}
      // showEnquiryPage={showEnquiryPage}
      // showAboutPage={showAboutPage}
      />
      <h1>
        SITE
        <br />
        COMING SOON
      </h1>
      <a
        className='App-link'
        linkto='./enquiry'
        href='./enquiry'
        rel='noopener noreferrer'
      >
        Enquire
      </a>
      <a
        className='App-link'
        href='https://www.instagram.com/eriayomedia'
        target='_blank'
        rel='noopener noreferrer'
      >
        Instagram
      </a>
    </div>
  );
}

export default App;
