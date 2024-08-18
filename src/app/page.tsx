// src/app/page.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <section className="bg-black text-white w-full py-16 text-center">
        
        <div className="flex justify-center">
          <img src='.\images\SwiftServe.png'></img>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Welcome to SwiftServe</h1>
        <p className="text-lg">Your fast and reliable vending service provider.</p>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Quick Links</h2>
        <ul className="flex flex-col items-center mt-4 space-y-4">
          <li>
            <a href="/About" className="text-blue-600 hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="/Contact-Us" className="text-blue-600 hover:underline">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/Locations" className="text-blue-600 hover:underline">
              Our Locations
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default HomePage;