"use client";

import React from "react";

const Login = () => {
  return (
    <main className="min-h-screen pt-16 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-2 text-blue-900">Welcome Back</h1>
        <p className="mb-6 text-gray-600">Sign in to access your account</p>

        <button
          onClick={() => {
            // TODO: Add your real Google OAuth logic here
            alert("Redirect to Google Sign In");
          }}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 48 48"
          >
            <path
              fill="#4285F4"
              d="M43.6 20.5H42V20H24v8h11.3C34 32 29.6 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.2 5.1 29.4 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.6 0 20-7.7 20-21 0-1.4-.1-2.8-.4-4.5z"
            />
            <path
              fill="#34A853"
              d="M6.3 14.7l6.6 4.8C14.5 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.2 5.1 29.4 3 24 3c-7.7 0-14.4 4.1-18 10.2z"
            />
            <path
              fill="#FBBC05"
              d="M24 45c5.4 0 10.4-1.8 14.2-5l-6.6-5.5C29.7 36.4 26.9 37 24 37c-5.5 0-10.1-3.5-11.8-8.3l-6.7 5.2C9.7 41 16.4 45 24 45z"
            />
            <path
              fill="#EA4335"
              d="M43.6 20.5H42V20H24v8h11.3C34 32 29.6 35 24 35c-5.5 0-10.1-3.5-11.8-8.3l-6.7 5.2C9.7 41 16.4 45 24 45c10.6 0 20-7.7 20-21 0-1.4-.1-2.8-.4-4.5z"
            />
          </svg>
          <span>Sign in with Google</span>
        </button>

        <div className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-700 hover:underline">
            Register
          </a>
        </div>
      </div>
    </main>
  );
};

export default Login;
