// components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <header className={`fixed w-full z-20 bg-white shadow-lg`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-indigo-600">Communion</span>
        </Link>
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>

        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`font-medium ${isActive('/') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
          >
            Home
          </Link>
          <Link 
            to="/events" 
            className={`font-medium ${isActive('/events') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
          >
            Events
          </Link>
          <Link 
            to="/about" 
            className={`font-medium ${isActive('/about') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
          >
            About
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed w-full bg-white py-2 px-4 shadow-inner">
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className={`font-medium py-2 ${isActive('/') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/events" 
              className={`font-medium py-2 ${isActive('/events') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/about" 
              className={`font-medium py-2 ${isActive('/about') ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;