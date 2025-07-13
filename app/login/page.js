"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const { user, googleSignIn, emailPasswordSignIn, signUpWithEmailPassword } = useAuth();

  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState(""); // ✅ name state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  const handleGoogleSignIn = async () => {
    await googleSignIn();
    router.push("/");
  };

  const handleEmailAuth = async () => {
    try {
      if (isRegister) {
        if (!name) {
          alert("❌ Name is required for registration");
          return;
        }
        await signUpWithEmailPassword(name, email, password);
        alert("✅ Registered successfully");
      } else {
        await emailPasswordSignIn(email, password);
        alert("✅ Logged in successfully");
      }
      router.push("/");
    } catch (err) {
      alert(`❌ ${err.message}`);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-200 via-cyan-200 to-teal-200 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-md text-center border border-gray-100 relative"
      >
        <h1 className="text-4xl font-extrabold text-teal-800 mb-2">Veteran Portal</h1>
        <p className="mb-8 text-gray-700">{isRegister ? "Create your account" : "Sign in to continue"}</p>

        <div className="space-y-4 mb-6">
          {isRegister && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white/50"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white/50"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white/50"
          />
          <button
            onClick={handleEmailAuth}
            className="w-full px-4 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors"
          >
            {isRegister ? "Register" : "Sign in"}
          </button>
        </div>

        <p
          className="mb-4 text-sm text-gray-600 cursor-pointer hover:underline"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? "Already have an account? Sign in instead"
            : "Don’t have an account? Register here"}
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">OR</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleGoogleSignIn}
          className="relative overflow-hidden px-6 py-3 border-2 border-black rounded-full flex items-center justify-center mx-auto gap-3 font-semibold group"
        >
          <svg className="w-6 h-6 relative z-10" viewBox="0 0 48 48">
            <path fill="#4285F4" d="M43.6 20.5H42V20H24v8h11.3C34 32 29.6 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.2 5.1 29.4 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.6 0 20-7.7 20-21 0-1.4-.1-2.8-.4-4.5z"/>
            <path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.5 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.2 5.1 29.4 3 24 3c-7.7 0-14.4 4.1-18 10.2z"/>
            <path fill="#FBBC05" d="M24 45c5.4 0 10.4-1.8 14.2-5l-6.6-5.5C29.7 36.4 26.9 37 24 37c-5.5 0-10.1-3.5-11.8-8.3l-6.7 5.2C9.7 41 16.4 45 24 45z"/>
            <path fill="#EA4335" d="M43.6 20.5H42V20H24v8h11.3C34 32 29.6 35 24 35c-5.5 0-10.1-3.5-11.8-8.3l-6.7 5.2C9.7 41 16.4 45 24 45c10.6 0 20-7.7 20-21 0-1.4-.1-2.8-.4-4.5z"/>
          </svg>
          <span className="relative z-10 text-sm group-hover:text-white transition-colors">
            Sign in with Google
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
        </motion.button>
      </motion.div>
    </main>
  );
}
