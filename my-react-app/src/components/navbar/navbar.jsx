import React from 'react';
import { Link } from 'react-router-dom'; 
import './navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2>MyApp</h2>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
