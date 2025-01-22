import React from 'react';
import '../style/Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Import the logo

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__left'>
          <img
            src={logo}
            alt='CraftedOnline Logo'
            className='footer__logo'
          />
          <p>
            We create exceptional websites and help businesses grow through
            powerful online solutions.
          </p>
        </div>

        <div className='footer__links'>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href='/#home'>Home</a>
            </li>
            <li>
              <a href='/#projects'>Projects</a>
            </li>
            <li>
              <a href='/#services'>Services</a>
            </li>
            <li>
              <a href='/#about'>About</a>
            </li>
          </ul>
        </div>

        <div className='footer__socials'>
          <h3>Follow Us</h3>
          <div className='footer__social-icons'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className='footer__bottom'>
        <p>&copy; 2025 CraftedOnline. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
