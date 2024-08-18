// src/app/components/Navbar.tsx
"use client";

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black p-4">
      <ul className="flex space-x-4">
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
          <Link href="/Survey" className="text-white hover:text-gray-300">
            Survey
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
