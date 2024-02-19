import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">Fitness Blog</Link>

        {/* Hamburger Menu Button (for mobile) */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden"
        >
          <svg /* Hamburger icon SVG - Find one you like online */  /> 
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}> 
          <li className="mr-4"><Link to="/">Home</Link></li> 
          {/* Add more links as needed */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;