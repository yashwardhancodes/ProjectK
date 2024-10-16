// src/components/Header.jsx
import React from "react";
import bgImage from "./assets/image1.jpg"; // Ensure the correct path to your background image

const Header = () => {
  return (
    <header className="relative">
      {/* Navigation Bar */}
      <nav className="absolute top-2 w-full">
        <div className="container mx-auto fixed flex items-center justify-between px-4 py-2 ">
          {/* Logo */}
          <a href="#" className="text-white text-lg font-medium">
            Material Design
          </a>

         
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu.classList.toggle("hidden");
            }}
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-4 mx-auto">
            <li>
              <a href="#" className="text-white hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-500">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <ul className="hidden lg:flex space-x-3">
            <li>
              <a href="#" className="text-white hover:text-blue-500">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-500">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-500">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden lg:hidden bg-gray-800">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <a href="#" className="text-white hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        
      </nav>

      {/* Header Section with Background */}
      <div
        className="flex items-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
            <div className="md:col-span-4 lg:col-span-3 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-3 font-roboto-slab">
                Kalpana Auto
              </h1>
              <p className="text-white opacity-80 ">
                Personalize your bike's service or repair exclusively with us for top-notch results.
              </p>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                <button className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-100 hover:shadow-[0_0_10px_3px_rgba(0,0,255,0.5)] transition duration-300 ease-in-out">
                  Get Started
                </button>
                <button className="px-4 py-2 text-white border border-white rounded hover:bg-white hover:text-black">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
