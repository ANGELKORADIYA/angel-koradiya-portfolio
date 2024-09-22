"use client";
import { useState } from 'react';

export default function About() {
  const [showDetails, setShowDetails] = useState(false); // State to control visibility

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center pt-24">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-8">About Me</h1>

        <div className="flex justify-end mb-4">
          <button 
            onClick={toggleDetails}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {showDetails ? (
              <span>&#128065; Hide Details</span> // Eye icon to hide details
            ) : (
              <span>&#128064; Show Details</span> // Eye icon to show details
            )}
          </button>
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
          Hello! I am <span className="font-semibold text-sky-600">Angel Koradiya</span>, currently in my 7th semester pursuing a B.Tech in Computer Engineering at <span className="font-semibold">Vishwakarma Government Engineering College</span>, Gujarat. Passionate about learning, coding, and growing with new challenges.
        </p>
        
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Skills</h2>
          <ul className="grid grid-cols-2 gap-4 text-gray-700">
            <li className="flex items-center"><span className="font-semibold">MERN Stack</span></li>
            <li className="flex items-center"><span className="font-semibold">Java</span></li>
            <li className="flex items-center"><span className="font-semibold">C / C++</span></li>
            <li className="flex items-center"><span className="font-semibold">Python</span></li>
            <li className="flex items-center"><span className="font-semibold">Next.js (Learning)</span></li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Academics</h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>2019</strong> – 10th Grade: 89% | 
              {showDetails && <span> Maths, Science: 98 marks |</span>} Aditya School, Manavadar
            </li>
            <li>
              <strong>2020-2021</strong> – 11th/12th Grade: 89% | 
              {showDetails && <span> GUJCET: 80 marks | JEE: 93 Percentile |</span>} Dream International School, Dhoraji
            </li>
            <li>
              <strong>2021-2025</strong> – B.Tech in Computer Engineering | 
              {showDetails && <span> CPI: 8 |   GATE Qualified (First Attempt) |</span>} Vishwakarma Government Engineering College, Ahmedabad
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Hobbies</h2>
          <ul className="grid grid-cols-3 gap-4 text-gray-700">
            <li className="flex items-center"><span className="font-semibold">Gaming</span></li>
            <li className="flex items-center"><span className="font-semibold">Traveling</span></li>
            <li className="flex items-center"><span className="font-semibold">Coding</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
