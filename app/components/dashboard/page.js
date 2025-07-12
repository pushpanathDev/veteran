"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-br from-sky-100 via-cyan-100 to-teal-100">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-900 mb-4">
          Welcome to Your Veteran Dashboard
        </h1>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          Here you can manage your pension, schemes, profile and stay updated with the latest announcements.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {/* Pension Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-xl rounded-xl p-6 border border-gray-100 transition-all"
        >
          <h2 className="text-xl font-bold text-teal-800 mb-2">Pension Details</h2>
          <p className="text-gray-600 mb-4">
            View and manage your pension status and related documents.
          </p>
          <button className="px-4 py-2 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors">
            View Pension
          </button>
        </motion.div>

        {/* Schemes Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-xl rounded-xl p-6 border border-gray-100 transition-all"
        >
          <h2 className="text-xl font-bold text-teal-800 mb-2">Available Schemes</h2>
          <p className="text-gray-600 mb-4">
            Explore government schemes specially curated for veterans.
          </p>
          <button className="px-4 py-2 rounded-full bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-colors">
            Explore Schemes
          </button>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-xl rounded-xl p-6 border border-gray-100 transition-all"
        >
          <h2 className="text-xl font-bold text-teal-800 mb-2">Your Profile</h2>
          <p className="text-gray-600 mb-4">
            Update your personal details, documents and contact information.
          </p>
          <button onClick={() => { window.location.href = "/profile"; }} className="px-4 py-2 rounded-full bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition-colors">
            Manage Profile
          </button>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-center mt-20 text-sm text-gray-500"
      >
        🇮🇳 Proudly serving our veterans. Thank you for your service!
      </motion.footer>
    </main>
  );
}
