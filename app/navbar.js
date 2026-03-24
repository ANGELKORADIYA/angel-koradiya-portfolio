"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useTheme } from "./components/ThemeProvider";

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
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m.386-6.364l1.591-1.591M12 18.75a6.75 6.75 0 110-13.5 6.75 6.75 0 010 13.5z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>

          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Angel Koradiya resume in a new tab"
            className="hidden md:flex px-4 py-2 rounded-lg text-base font-medium text-white bg-sky-600 hover:bg-sky-700 transition items-center gap-1 shadow-md shadow-sky-500/20"
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  );
}
