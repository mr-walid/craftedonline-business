import React from "react";
import "../style/Navbar.css";
import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__container">
     

        {/* Menu Items */}
        <nav className="navbar__menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>

        {/* Call-to-Action Buttons */}
        <div className="navbar__cta">
          <a href="#contact" className="btn btn--outline">Contact Us</a>
          <a href="#contact">
            <FaFacebook />
          </a>
          <a href="#contact"> 
              <FaInstagram />
          </a>
          <a href="#contact"> 
              <FaLinkedin />
          </a>
           

        </div>
      </div>
    </header>
  );
};

export default Navbar;
