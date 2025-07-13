"use client";

import { useState, useEffect } from "react";
import AuthGuard from "../components/AuthGuard";
import httpClient from "../utils/httpclient";
import { API_BASE_URL } from "../utils/constants";
import { motion } from "framer-motion"; // ✅ Add smooth animations

export default function Scheme() {
  const [schemes, setSchemes] = useState([]);
  const [status, setStatus] = useState("Loading...");
  const [error, setError] = useState("");

  const api = httpClient(API_BASE_URL);

  useEffect(() => {
    async function fetchSchemes() {
      try {
        const data = await api.get("/items");
        setSchemes(data);
        setStatus(`Fetched ${data.length} schemes ✅`);
        console.log(data);
      } catch (err) {
        console.error("❌ Failed to fetch:", err);
        setError(err.message);
        setStatus("Error fetching schemes ❌");
      }
    }

    fetchSchemes();
  }, []);

  return (
    <AuthGuard>
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-4 md:px-10">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2">
            💠 Veteran Welfare Schemes
          </h1>
          <p className="text-blue-800 text-lg mb-2">
            Discover and track multiple schemes crafted for our honored veterans.
          </p>
          <p className="text-sm italic text-gray-600">{status}</p>
          {error && (
            <p className="mt-2 bg-red-200 text-red-800 inline-block px-4 py-1 rounded">
              {error}
            </p>
          )}
        </motion.div>

        {/* GRID */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {schemes.map((scheme) => (
            <motion.div
              key={scheme.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-white/50 backdrop-blur-md border border-blue-200 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:bg-white/80"
            >
              <div className="absolute -top-6 -left-6 bg-blue-100 text-blue-900 rounded-full p-4 shadow-md">
                🎖️
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {scheme.name}
              </h3>
              <p className="text-gray-700">{scheme.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* FOOTER NOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center text-xs text-gray-400 mt-12"
        >
          🇮🇳 Proudly serving those who served.
        </motion.div>
      </section>
    </AuthGuard>
  );
}
