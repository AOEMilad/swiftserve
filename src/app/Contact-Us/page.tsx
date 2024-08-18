// src/app/Contact/page.tsx
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg mb-4 text-center">
          Get in touch with us via email or phone.
        </p>
        <div className="text-lg mb-8 text-center">
          <p>Email: <a href="mailto:swiftservevendingenterprises@gmail.com" className="text-blue-500 hover:underline">swiftservevendingenterprises@gmail.com</a></p>
          <p>Phone:</p>
          <p className="mb-2">Anthony - <a href="tel:+17059203014" className="text-blue-500 hover:underline">705-920-3014</a></p>
          <p>Geomar - <a href="tel:+16725156706" className="text-blue-500 hover:underline">672-515-6706</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
