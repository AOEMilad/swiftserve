// src/app/Request/page.tsx
import React from 'react';

const RequestPage: React.FC = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">Make a Request</h1>
        <p className="text-lg mb-8">
          We value your feedback and continuously strive to improve our services. To help us serve you better, we have a survey where you can request new options and provide suggestions.
        </p>

        <div className="w-full max-w-4xl">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdUGqp7t0V0Shz9kA34dQ58fY2pkhYaT-IFlRs67v6s1gr0Tg/viewform?embedded=true"
            className="w-full h-[1000px] border-none"
            title="Survey Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default RequestPage;
