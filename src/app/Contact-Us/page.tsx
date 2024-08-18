// src/app/Contact/page.tsx
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg mb-4 text-center">
          Get in touch with us via email or phone.
        </p>
        <div className="text-lg mb-8 text-center">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p>Email: <a href="mailto:swiftservevendingenterprises@gmail.com" className="text-blue-500 hover:underline">swiftservevendingenterprises@gmail.com</a></p>
          </div>
          
          <div className="flex flex-row space-x-4">
            <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
              <p>Geomar - <a href="tel:+16725156706" className="text-blue-500 hover:underline">672-515-6706</a></p>
            </div>
            <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
              <p>Anthony - <a href="tel:+17059203014" className="text-blue-500 hover:underline">705-920-3014</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
