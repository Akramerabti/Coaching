import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import here

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* ...rest of the navbar structure... */}

      <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {/* Hamburger menu icon here */} 
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {/* ...your links... */}

        <li className="dropdown">
          <Link to="/categories">Categories</Link>
          <div className="dropdown-content">
            <Link to="/categories/strength">Strength Training</Link>
            <Link to="/categories/cardio">Cardio</Link>
            {/* ...add more categories */}
          </div>
        </li>

        <li>
          <Link to="/subscribe" className="btn-cta">Subscribe</Link> 
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
