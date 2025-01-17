import React from "react";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import "../style/UpperNav.css"; // Ensure the path is correct
import logo from "../assets/onlinec.png"; // Ensure the logo path is correct

const UpperNav = () => {
  return (
    <div className="upper-navbar">
      {/* Logo Section */}
      <div className="logo">
        <a href="/">
          <img src={logo} alt="craftedonline logo" />
        </a>
      </div>

      
      <div className="icons"> 
          {/* Email Section */}
          <div>
            <IoIosMail />
            <span>Mail us: walid1997zaidoun@gmail.com</span>
          </div>

          {/* Phone Section */}
          <div>
            <IoCall />
            <span>Call us: +961 70 000 000</span>
          </div>
      </div>
    </div>
  );
};

export default UpperNav;
