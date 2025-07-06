"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/components/about" },
    { name: "Pension", href: "/components/pension" },
    { name: "Scheme", href: "/components/scheme" },
    { name: "Login", href: "/components/login" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-blue-900 font-bold text-lg">
              Veteran Portal
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
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
        <div className="md:hidden bg-white border-t border-gray-200 shadow">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              href="/Pension"
              className="block text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md"
            >
              Pension
            </Link>
            <Link
              href="/Schema"
              className="block text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md"
            >
              Schema
            </Link>
            <Link
              href="/Login"
              className="block text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
