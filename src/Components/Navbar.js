import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyLogo</div>
      <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        ☰
      </button>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#theme" className="navbar-link">Theme</a></li>
        <li><a href="#aboutproject" className="navbar-link">About Project</a></li>
        <li><a href="#Roadmap" className="navbar-link">Roadmap</a></li>
        <li><a href="#team" className="navbar-link">Team Members</a></li>
        <li><a href="#contact" className="navbar-link">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
