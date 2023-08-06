import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Create a separate CSS file for the navbar if needed

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-container">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">News</Link></li>
        <li><Link to="/">Results</Link></li>
        <li><Link to="/">Ladder</Link></li>
        {/* Add other links for navigation */}
      </ul>
    </nav>
  );
};

export default NavBar;
