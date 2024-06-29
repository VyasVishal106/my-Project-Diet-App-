// Navbar.jsx

import React from 'react';

const ZeroNavbar = () => {
  return (
    <nav className=" p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="text-black text-lg font-semibold">HELLIXHEAVAN</a>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-black hover:text-gray-300">Home</a></li>
              <li><a href="#" className="text-black hover:text-gray-300">About</a></li>
              <li><a href="#" className="text-black hover:text-gray-300">Services</a></li>
              <li><a href="#" className="text-black hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="text-black focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ZeroNavbar;
