import React from "react";

const About = () => {
  return (
    <main className="min-h-screen pt-16 bg-gray-50 text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">About Veteran Portal</h1>
        <p className="mb-4">
          Our Veteran Portal is dedicated to serving retired personnel and their families
          by providing clear, trustworthy, and accessible information about pension schemes,
          benefits, and entitlements.
        </p>
        <p className="mb-4">
          We aim to simplify access to government services, forms, and updates in a transparent
          and user-friendly manner. Our mission is to honor the sacrifices of veterans by
          ensuring they receive the support they deserve.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-800">Our Vision</h2>
            <p>
              Empower every veteran to access their rights easily and stay informed about
              new schemes and services.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-800">Our Mission</h2>
            <p>
              Bridge the gap between retired personnel and government services using
              clear information and modern technology.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-800">Our Commitment</h2>
            <p>
              Transparency, respect, and support for all veterans and their families —
              always and everywhere.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
