// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Images/download.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />
        <span className="company-name">Education Consultancy</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
