import React from 'react';
import { Link } from 'react-router-dom';
import './Head.css';

const Header = ({ active }) => {
  return (
    <div className="header">
      <Link to="/" className={active === 'home' ? 'active' : ''}>  
        Blood Bank & Donation
      </Link>  
      <div className="header-right">
        <Link to="/About" className={active === 'about' ? 'active' : ''}>
          About Us
        </Link>
        <Link to="/Why" className={active === 'why' ? 'active' : ''}>
          Why Donate Blood
        </Link>
        <Link to="/Donate" className={active === 'donate' ? 'active' : ''}>
          Become A Donor
        </Link>
        <Link to="/Need" className={active === 'need' ? 'active' : ''}>
          Need Blood
        </Link>
        <Link to="/Contact" className={active === 'contact' ? 'active' : ''}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
