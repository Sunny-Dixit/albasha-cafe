import React, { useState } from "react";
import { FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Hem", path: "/" },
    { label: "Meny", path: "/meny" },
    { label: "Om oss", path: "/om-oss" },
    { label: "Kontakt", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 poppins-regular z-50 bg-white text-[#3e2723] shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        {/* Header Content */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/Images/large.png"
                alt="Albasha Logo"
                className="h-12 w-40 md:h-[60px] md:w-[250px] object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium uppercase">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="hover:text-amber-600 transition-colors duration-200 px-1 py-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
      <div className="hidden md:flex items-center space-x-3 text-sm text-gray-700 hover:text-amber-600 transition-colors group">
  <div className="p-2 bg-amber-100 rounded-full animate-pulse">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3.6 7.59a1 1 0 01-.17 1.09l-2.7 2.7a16.03 16.03 0 006.59 6.59l2.7-2.7a1 1 0 011.09-.17L19 19v2a1 1 0 01-1 1h-1C9.163 22 2 14.837 2 6V5a1 1 0 011-1z" />
    </svg>
  </div>
  <div className="flex flex-col leading-tight">
    <span className="font-semibold text-gray-800 group-hover:text-amber-600">Ring oss</span>
    <span className="text-xs text-gray-500 group-hover:text-amber-500">031-388 01 94</span>
  </div>
</div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
           
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-inherit hover:text-amber-500 transition-colors p-1"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white pt-2 pb-4">
            <nav className="flex flex-col space-y-3 text-sm font-medium uppercase px-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="hover:text-amber-600 transition-colors duration-200 py-2 px-1 border-b border-amber-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          

          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
