import React from 'react';
import '../App.css';
import logo from '../images/Ẹríayọ̀-Media-Logo.png';

function App() {
  return (
    <div className='App'>
      <header>
        <img src={logo} alt='Ẹríayọ̀ Media - Logo' />
      </header>
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
