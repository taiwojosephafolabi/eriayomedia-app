import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/Ẹríayọ̀-Media-Logo.png';

function Logo({
  backToLandingPage,
  showHomePage,
  showEnquiryPage,
  showAboutPage,
}) {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt='Ẹríayọ̀ Media - Logo' />
      <Navbar expand='lg'>
        <Container>
          {/* <Navbar.Brand onClick={() => backToLandingPage()}>
            <img src={logo} alt='Ẹríayọ̀ Media - Logo' />
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link className='navbar-link' linkto='/' href='/'>
                Home
              </Nav.Link>
              <Nav.Link
                className='navbar-link'
                linkto='./enquiry'
                href='./enquiry'
                rel='noopener noreferrer'
              >
                Enquiry
              </Nav.Link>
              <Nav.Link
                className='navbar-link'
                linkto='./about'
                href='./about'
                rel='noopener noreferrer'
              >
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Logo;
