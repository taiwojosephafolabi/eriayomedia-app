import React from 'react';
import '../App.css';
import logo from '../images/Ẹríayọ̀-Media-Logo.png';

function enquiryForm() {
  return (
    <div className='App'>
      <header>
        <img src={logo} alt='Ẹríayọ̀ Media - Logo' />
      </header>
      <form
        class='form'
        action='https://formsubmit.co/info@eriayomedia.com'
        method='POST'
      >
        <input type='hidden' name='_subject' value='New Email!' />
        <input type='text' name='name' placeholder='Your Full Name...' required />
        <br />
        <input
          type='email'
          name='email'
          placeholder='Your Email Address...'
          required
        />
        <br />
        <input
          id='message'
          type='text'
          name='message'
          placeholder='Your Message...'
          required
        />
        <br />
        <input type='text' name='location' placeholder='Where is your special occasion?' required />
        <br />
        <button type='submit'>Send</button>
        <input type='hidden' name='_captcha' value='false' />
        <input type='hidden' name='_next' value='contact-thankyou.html' />
      </form>
    </div>
  );
}

export default enquiryForm;
