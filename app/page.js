"use client";
import { useState } from "react";
import Image from "next/image";

const dataStructuresAndAlgorithms = {
  title: "Competitive Programming",
  resources: [
    {
      name: "LeetCode",
      link: "https://leetcode.com/u/Angel_Koradiya/",
      logo: "https://cdn-icons-png.flaticon.com/512/3296/3296814.png",
    },
    {
      name: "Coding Ninja",
      link: "https://www.naukri.com/code360/profile/angelkoradiya",
      logo: "https://cdn-icons-png.flaticon.com/512/6058/6058350.png",
    },
    {
      name: "HackerRank",
      link: "https://www.hackerrank.com/profile/koradiyaangel11",
      logo: "https://cdn-icons-png.flaticon.com/512/2202/2202112.png",
    },
  ],
};

const connectWithMe = [
  {
    name: "GitHub",
    link: "https://github.com/angelkoradiya",
    logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/angel-koradiya",
    logo: "https://cdn-icons-png.flaticon.com/512/61/61109.png",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ANGELKORADIYA",
    logo: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
  },
];

export default function Home() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className="min-h-screen pt-20 px-4 pb-7 bg-gray-100 mt-5">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-8 sm:p-12 mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6">
          Welcome to My Portfolio
        </h1>

        <div className="text-lg text-gray-700 mb-10 space-y-6">
          <p className="leading-relaxed text-center">
            Hello! I am{" "}
            <span className="font-semibold text-sky-600">Angel Koradiya</span>,
            a Computer Engineering graduate from{" "}
            <span className="font-semibold">
              Vishwakarma Government Engineering College
            </span>
            , Gujarat. Currently working at{" "}
            <span className="font-semibold">Silvertouch Technology</span>.
            Passionate about learning, coding, and growing with new challenges.
          </p>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Skills</h2>
            <ul className="grid grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-center">
                <span className="font-semibold">C / C++</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold">Python</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold">MERN Stack</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold">Next.js</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold">Java</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold">Generative AI</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold">Machine Learning Basics</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold">Deep Learning (Learning)</span>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-gray-800 text-center">
                Academics
              </h2>
              <div className="flex justify-center items-center">
                <button
                  onClick={toggleDetails}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showDetails ? (
                    <span>&#128065; Hide Details</span>
                  ) : (
                    <span>&#128064; Show Details</span>
                  )}
                </button>
              </div>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>2019</strong> – 10th Grade: 89% |
                {showDetails && <span> Maths, Science: 98 marks |</span>} Aditya
                School, Manavadar
              </li>
              <li>
                <strong>2020-2021</strong> – 11th/12th Grade: 89% |
                {showDetails && (
                  <span> GUJCET: 80 marks | JEE: 93 Percentile |</span>
                )}{" "}
                Dream International School, Dhoraji
              </li>
              <li>
                <strong>2021-2025</strong> – B.Tech in Computer Engineering |
                {showDetails && (
                  <span>
                    {" "}
                    CPI: 8 | GATE Qualified (First Attempt) | Graduated |
                  </span>
                )}{" "}
                Vishwakarma Government Engineering College, Ahmedabad
              </li>
              <li>
                <strong>2025-Present</strong> – Software Engineer |
                {showDetails && <span> Full-time Position |</span>} Silvertouch
                Technology
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Hobbies</h2>
            <ul className="grid grid-cols-3 gap-4 text-gray-700">
              <li className="flex items-center">
                <span className="font-semibold">Gaming</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold">Traveling</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold">Coding</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {dataStructuresAndAlgorithms.title}
        </h2>
        <ul className="flex justify-center space-x-8">
          {dataStructuresAndAlgorithms.resources.map((resource, index) => (
            <li key={index} className="flex items-center">
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <Image
                  src={resource.logo}
                  alt={`${resource.name} logo`}
                  width={32}
                  height={32}
                  className="mr-3 transition-transform transform group-hover:scale-110"
                />
                <span className="text-gray-900 font-semibold transition-colors group-hover:text-blue-500">
                  {resource.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
