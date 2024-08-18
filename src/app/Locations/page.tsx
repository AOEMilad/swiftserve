// src/app/Locations/page.tsx
import React from 'react';

const LocationsPage: React.FC = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Locations</h1>
        <p className="text-lg mb-8 text-center">
          Find us at multiple locations across the West Coast.
        </p>
        <div className="w-full max-w-md">
          <ul className="space-y-4">
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Ford</h2>
              <p className="text-gray-600">123 Ford St, Los Angeles, CA 90001</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Kia</h2>
              <p className="text-gray-600">456 Kia Ave, Seattle, WA 98101</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Mazda</h2>
              <p className="text-gray-600">789 Mazda Blvd, San Francisco, CA 94102</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Nissan</h2>
              <p className="text-gray-600">101 Nissan Rd, Portland, OR 97201</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Toyota</h2>
              <p className="text-gray-600">202 Toyota St, San Diego, CA 92101</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LocationsPage;
