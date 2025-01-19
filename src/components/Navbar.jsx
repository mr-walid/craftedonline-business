import React, { useState } from 'react';
import '../style/Navbar.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Hamburger from 'hamburger-react';
import img from '../assets/onlinec.png';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={`navbar ${isOpen ? 'navbar--hidden' : ''}`}>
      <div className='logo-responsive'>
        <img
          src={img}
          alt='craftedonline logo'
        />
      </div>
      <div className='navbar__container'>
        <div className='navbar__hamburger'>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </div>

      {/* The hidden navbar menu that slides in when open */}
      <nav className={`navbar__menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
        </ul>
      </nav>

      {/* Call-to-action buttons */}
      <div className='navbar__cta'>
        <a
          href='#contact'
          className='btn btn--outline'
        >
          Contact Us
        </a>
        <a href='#contact'>
          <FaFacebook />
        </a>
        <a href='#contact'>
          <FaInstagram />
        </a>
        <a href='#contact'>
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
