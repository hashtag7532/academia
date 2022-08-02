import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
        <ul className="navbar-items">
            <li><Link to="/" className='link'>Home</Link></li>
            <li><Link to="/courses" className='link'>All Courses</Link></li>
            <li><Link to="/about" className='link'>About</Link></li>
            <li><Link to="/team" className='link'>Team</Link></li>
            <li><Link to="/pricing" className='link'>Pricing</Link></li>
            <li><Link to="/journal" className='link'>Journal</Link></li>
            <li><Link to="/contact" className='link'>Contact</Link></li>
        </ul>
        <div className="certificate">
            <h3>GET CERTIFICATE</h3>
        </div> 
    </div>
  )
}

export default Navbar;