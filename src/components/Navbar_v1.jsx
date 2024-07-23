// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand */}
        <div className="flex-shrink-0 text-2xl font-bold">
          <Link to="/">Brand</Link>
        </div>

        {/* Center Title for Mobile */}
        <div className="hidden lg:flex flex-grow justify-center">
          <span className="text-lg font-semibold">Togelon01</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none">
            <svg
              className={`h-6 w-6 fill-current transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 6h16M4 12h16m-7 6h7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Center Title for Mobile */}
      <div className="lg:hidden flex items-center justify-center py-2">
        <span className="text-lg font-semibold">Togelon01</span>
      </div>

      {/* Modal Box for Menu Items */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 text-white rounded-lg shadow-lg p-4 w-64">
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-4 space-y-4">
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors duration-300">Contact</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors duration-300">About</Link>
              <Link to="/login" className="block text-gray-400 hover:text-white transition-colors duration-300">Login</Link>
            </div>
          </div>
        </div>
      )}

      {/* Links for Desktop */}
      <div className={`hidden lg:flex lg:items-center lg:justify-between lg:w-auto`}>
        <div className="lg:flex lg:items-center lg:space-x-4 mt-4 lg:mt-0">
          <Link to="/contact" className="block px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300">Contact</Link>
          <Link to="/about" className="block px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300">About</Link>
          <Link to="/login" className="block px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

