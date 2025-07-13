"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { user, loading } = useAuth();

  const toggleNavbar = () => setIsClick(!isClick);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Failed to sign out:", err);
    }
  };

  // ✅ Always assume user is logged in until you *know* otherwise
  const isLoggedIn = user || loading;

  const navItems = isLoggedIn
    ? [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Pension", href: "/pension" },
        { name: "Scheme", href: "/scheme" },
      ]
    : [];

  return (
    <nav className="bg-white border-b border-gray-200 shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-blue-900 font-bold text-lg">
            Veteran Portal
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}

            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={toggleProfile}
                  className="flex items-center focus:outline-none"
                >
                  <img
                    src={user?.photoURL || "/default-avatar.png"}
                    alt={`${user?.displayName || "User"} profile`}
                    className="w-8 h-8 rounded-full border-2 border-blue-500 shadow-lg"
                  />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-64 rounded-xl shadow-2xl border border-gray-200 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100 backdrop-blur-xl animate-fadeIn">
                    <div className="px-6 py-5 border-b border-blue-200">
                      <div className="flex items-center gap-4">
                        <img
                          src={user?.photoURL || "/default-avatar.png"}
                          alt={`${user?.displayName || "User"} profile`}
                          className="w-12 h-12 rounded-full border-2 border-blue-400 shadow-md"
                        />
                        <div>
                          <p className="text-xs text-gray-500">Signed in as</p>
                          <p className="font-semibold text-blue-900">
                            {user?.displayName || "Loading..."}
                          </p>
                          <p className="text-xs text-gray-400">
                            {user?.email || ""}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-6 py-4 text-sm font-medium text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-colors duration-300"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="text-blue-900 font-medium hover:underline"
              >
                Login
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-800"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isClick && (
        <div className="md:hidden bg-gradient-to-br from-white via-blue-50 to-blue-100 border-t border-gray-200 shadow animate-slideDown backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block relative px-3 py-2 rounded-md text-base font-medium overflow-hidden group"
              >
                <span className="relative z-10 text-gray-700 group-hover:text-blue-900 transition-colors duration-300">
                  {item.name}
                </span>
                <span className="absolute left-0 top-0 h-full w-0 bg-blue-100 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {isLoggedIn ? (
              <div className="border-t border-blue-200 pt-3 px-3">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={user?.photoURL || "/default-avatar.png"}
                    alt={`${user?.displayName || "User"} profile`}
                    className="w-10 h-10 rounded-full border-2 border-blue-400 shadow"
                  />
                  <div>
                    <p className="text-xs text-gray-500">Signed in as</p>
                    <p className="font-semibold text-blue-900">
                      {user?.displayName || "Loading..."}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="relative block w-full text-left px-4 py-2 text-sm font-semibold text-red-600 overflow-hidden rounded-lg group"
                >
                  <span className="relative z-10">Logout</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-red-50 to-red-100 group-hover:w-full transition-all duration-300"></span>
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="block w-full text-center text-blue-900 font-medium py-2 hover:underline"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
