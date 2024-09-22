"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname==='/'?'Home':pathname.substring(1).charAt(0).toUpperCase()+pathname.slice(2));


  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-50 min-w-screen flex justify-center items-center bg-white p-4 shadow-lg">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <div className="text-3xl font-extrabold">
          Angel Koradiya
        </div>
        <nav className="hidden sm:flex space-x-6">
          {['Home', 'Projects', 'Learning', 'About', 'Contact'].map((tab) => (
            <Link
              key={tab}
              href={tab === 'Home' ? '/' : `/${tab.toLowerCase()}`}
              className={`px-4 py-2 rounded-lg text-base font-medium transition ${
                activeTab === tab
                  ? 'bg-sky-100 text-sky-600 dark:bg-sky-700 dark:text-sky-50'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200'
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
