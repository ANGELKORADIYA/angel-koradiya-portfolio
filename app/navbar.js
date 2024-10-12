"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(
    pathname === '/' ? 'Home' : pathname.substring(1).charAt(0).toUpperCase() + pathname.slice(2)
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false); // Close menu on tab change (for mobile)
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg transition-all">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto p-4">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-gray-800 dark:text-white">
          Angel Koradiya
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-6">
          {['Home', 'Projects', 'Learning', 'About', 'Contact'].map((tab) => (
            <Link
              key={tab}
              href={tab === 'Home' ? '/' : `/${tab.toLowerCase()}`}
              className={`px-4 py-2 rounded-lg text-base font-medium transition duration-300 ${
                activeTab === tab
                  ? 'bg-sky-600 text-white dark:bg-sky-500'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200'
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 dark:text-gray-200 focus:outline-none transition transform hover:scale-110"
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="sm:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg p-4 space-y-4">
          {['Home', 'Projects', 'Learning', 'About', 'Contact'].map((tab) => (
            <Link
              key={tab}
              href={tab === 'Home' ? '/' : `/${tab.toLowerCase()}`}
              className={`block px-4 py-2 rounded-lg text-base font-medium transition duration-300 ${
                activeTab === tab
                  ? 'bg-sky-600 text-white dark:bg-sky-500'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200'
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
