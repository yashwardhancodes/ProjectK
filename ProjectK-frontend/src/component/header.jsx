// src/components/Header.jsx
import React from "react";
import "../index.css";

// You can replace this with an SVG icon or any image you prefer
const LogoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-blue-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v12m6-6H6"
    />
  </svg>
);

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Leftmost Icon */}
      <div className="flex items-center">
        <LogoIcon />
      </div>

      {/* Center Options */}
      <nav className="flex space-x-6">
        <a href="#" className="text-gray-800 hover:text-blue-500">
          Home
        </a>
        <a href="#" className="text-gray-800 hover:text-blue-500">
          About
        </a>
        <a href="#" className="text-gray-800 hover:text-blue-500">
          Services
        </a>
      </nav>

      {/* Rightmost Admin Sign In */}
      <div>
        <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600">
          Admin Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
