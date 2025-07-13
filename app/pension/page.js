// app/pension/page.js
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AuthGuard from "../components/AuthGuard";
import { API_BASE_URL } from "../utils/constants";

export default function PensionPage() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("Loading...");
  const [error, setError] = useState("");

  // Mock pension schemes to display with each user
  const pensionSchemes = [
    "Retirement Pension",
    "Disability Pension",
    "Family Pension",
    "War Widow Pension",
    "Invalid Pension",
  ];

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`${API_BASE_URL}/users`);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setUsers(data);
        setStatus(`Fetched ${data.length} veterans ✅`);
      } catch (err) {
        console.error("❌ Failed to fetch:", err);
        setError(err.message);
        setStatus("Error fetching data ❌");
      }
    }

    fetchUsers();
  }, []);

  return (
    <AuthGuard>
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-6">
        {/* Top Right Count Badge */}
        <div className="absolute top-6 right-6 bg-blue-900 text-white px-4 py-2 rounded-full shadow-lg">
          👥 {users.length} Veterans
        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            🎖️ Veteran Pension Dashboard
          </h1>
          <p className="text-lg text-blue-800">
            Explore all pension beneficiaries and their pension schemes.
          </p>
          <p className="mt-2 text-gray-600 italic">{status}</p>
          {error && (
            <p className="mt-2 text-red-600 bg-red-100 inline-block px-3 py-1 rounded">
              Error: {error}
            </p>
          )}
        </motion.div>

        {/* Pension Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {users.map((user, index) => (
            <motion.div
              key={user.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-blue-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-blue-900 mb-1 flex items-center gap-2">
                <span>🎖️</span> {user.name}
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                Pension ID: {user.id}
              </p>
              <p className="text-gray-600 font-semibold">
                Scheme:{" "}
                <span className="text-blue-800">
                  {pensionSchemes[index % pensionSchemes.length]}
                </span>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </AuthGuard>
  );
}
