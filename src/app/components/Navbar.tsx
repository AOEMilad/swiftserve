// src/app/components/Navbar.tsx
"use client";

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/Contact-Us">Contact Us</Link></li>
        <li><Link href="/Locations">Locations</Link></li>
      </ul>
      <style jsx>{`
        nav {
          padding: 1rem;
          background: #333;
        }
        ul {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
        a {
          text-decoration: none;
          color: #fff;
        }
        a:hover {
          color: #ddd;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
