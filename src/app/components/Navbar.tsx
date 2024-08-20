'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center">
        {/* Clickable Logo/Image */}
        <Link href="/">
          <img src=".\images\Candy.png" alt="Logo" className="h-16 w-auto cursor-pointer mr-8" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/Contact-Us" className="text-white hover:text-gray-300">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/Locations" className="text-white hover:text-gray-300">
              Locations
            </Link>
          </li>
          <li>
            <Link href="/Request" className="brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-3 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600">
              Request
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none ml-auto"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <ul className={`md:hidden flex flex-col items-center space-y-4 mt-4 ${isOpen ? 'block' : 'hidden'}`}>
        <li>
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/About" className="text-white hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/Contact-Us" className="text-white hover:text-gray-300">
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="/Locations" className="text-white hover:text-gray-300">
            Locations
          </Link>
        </li>
        <li>
          <Link href="/Request" className="brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-3 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600">
            Request
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
