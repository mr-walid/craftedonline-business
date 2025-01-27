import React, { useState } from 'react';
import '../style/Navbar.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Hamburger from 'hamburger-react';
import img from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={`navbar ${isOpen ? 'navbar--hidden' : ''}`}>
      <div className='logo-responsive'>
        <Link to='/'>
          <img
            src={img}
            alt='craftedonline logo'
          />
        </Link>
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
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>

      {/* Call-to-action buttons */}
      <div className='navbar__cta'>
        <Link
          to='/contact'
          className='btn btn--outline'
        >
          Contact Us
        </Link>
        <Link to='facebook'>
          <FaFacebook />
        </Link>
        <Link to='instagram'>
          <FaInstagram />
        </Link>
        <Link to='linkedin'>
          <FaLinkedin />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
