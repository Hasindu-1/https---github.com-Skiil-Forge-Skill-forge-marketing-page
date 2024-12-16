import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyLogo</div>
      <ul className="navbar-links">
        <li><a href="#resources">Resources</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#signup" className="signup-btn">Sign Up</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;