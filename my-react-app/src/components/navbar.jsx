import React from 'react';
import { Link } from 'react-router-dom'; 
import './styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1>U-LEARN</h1>
        {/* <div className='logo-container'>
      <img src={logo} alt="Logo" className="navbar-logo" />
      </div> */}
        <div className="nav-links">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
