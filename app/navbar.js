"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useTheme } from "./components/ThemeProvider";
import { FiSun, FiMoon, FiArrowDown } from "react-icons/fi";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(
    pathname === "/"
      ? "Home"
      : pathname.substring(1).charAt(0).toUpperCase() + pathname.slice(2)
  );
  const [resumeLink, setResumeLink] = useState(
    "https://drive.google.com/file/d/1SjiYlVIaREhCBMUSFq8GwAq5Prh6k43R/view?usp=sharing"
  );

  useEffect(() => {
    fetch(resumeLink, { method: "HEAD", mode: "no-cors" }).catch(() => {
      setResumeLink("/Angel%20Koradiya%20Resume.pdf");
    });
  }, []);

  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <div className="absolute top-0 left-0 right-0 z-50 min-w-screen flex justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md items-center p-4 shadow-lg transition-colors duration-300">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Angel Koradiya logo"
            width={44}
            height={44}
            className="rounded-full object-cover"
          />
          <span className="text-2xl font-extrabold text-gray-900 dark:text-white hidden sm:inline">
            Angel Koradiya
          </span>
        </Link>

        <nav className="flex space-x-2 sm:space-x-6 items-center">
          {["Home", "Projects", "Learning"].map((tab) => (
            <Link
              key={tab}
              href={tab === "Home" ? "/" : `/${tab.toLowerCase()}`}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition ${
                activeTab === tab
                  ? "bg-sky-100 text-sky-600 dark:bg-sky-900/50 dark:text-sky-400"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </Link>
          ))}

          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all active:scale-95"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FiSun className="w-5 h-5" />
            ) : (
              <FiMoon className="w-5 h-5" />
            )}
          </button>

          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Angel Koradiya resume in a new tab"
            className="hidden md:flex px-5 py-2.5 rounded-xl text-base font-bold text-white bg-sky-600 hover:bg-sky-700 transition-all items-center gap-2 shadow-lg shadow-sky-500/25 active:scale-95"
          >
            Resume
            <FiArrowDown className="w-5 h-5 animate-bounce-slow" />
          </a>
        </nav>
      </div>
    </div>
  );
}
