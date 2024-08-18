// src/app/Locations/page.tsx
import React from 'react';

const LocationsPage: React.FC = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Locations</h1>
        <p className="text-lg mb-8 text-center">
          Find us at multiple locations across the West Coast.
        </p>
        <div className="w-full max-w-md">
          <ul className="space-y-4">
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Ford</h2>
              <p className="text-gray-600">20370 Lougheed Hwy.</p>
              <p className="text-gray-600">Maple Ridge, BC</p>
              <p className="text-gray-600">V2X 2P8</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Kia</h2>
              <p className="text-gray-600">19950 Lougheed Hwy. Unit 100</p>
              <p className="text-gray-600">Pitt Meadows, BC</p>
              <p className="text-gray-600">V3Y 2S9</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Mazda</h2>
              <p className="text-gray-600">20000 Lougheed Hwy.</p>
              <p className="text-gray-600">Pitt Meadows, BC</p>
              <p className="text-gray-600">V3Y 2S9</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Nissan</h2>
              <p className="text-gray-600">19625 Lougheed Hwy.</p>
              <p className="text-gray-600">Pitt Meadows, BC</p>
              <p className="text-gray-600">V3Y 1Z2</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Toyota</h2>
              <p className="text-gray-600">19950 Lougheed Hwy.</p>
              <p className="text-gray-600">Pitt Meadows, BC</p>
              <p className="text-gray-600">V3Y 2S9</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LocationsPage;
