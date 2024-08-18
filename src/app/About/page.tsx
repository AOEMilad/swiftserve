// src/app/About/page.tsx
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg mb-8">
          Welcome to SwiftServe, where we are committed to providing top-notch vending services tailored to your needs. Our mission is to deliver high-quality products and exceptional customer service through our state-of-the-art vending machines.
        </p>
        <p className="text-lg mb-8">
          At SwiftServe, we believe in innovation and efficiency. Our team works tirelessly to ensure that our vending machines are always stocked with the best products and that they are well-maintained for your convenience. We are passionate about making your experience with our services smooth and enjoyable.
        </p>
        <p className="text-lg mb-8">
          We value your feedback and continuously strive to improve our services. To help us serve you better, we have a survey where you can request new options and provide suggestions. <a href="https://forms.gle/RcCsaVCnKTGKysRc6" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Take our survey here</a>.
        </p>
        <p className="text-lg">
          Thank you for choosing SwiftServe. We look forward to serving you and exceeding your expectations.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
