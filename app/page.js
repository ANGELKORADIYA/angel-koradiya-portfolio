"use client";
import { useState } from "react";

const dataStructuresAndAlgorithms = {
  title: "Competitive Programming",
  resources: [
    {
      name: "Coding Ninja",
      link: "https://www.naukri.com/code360/profile/angelkoradiya",
      logo: "https://cdn-icons-png.flaticon.com/512/6058/6058350.png", // Coding Ninja logo
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/u/Angel_Koradiya/",
      logo: "https://cdn-icons-png.flaticon.com/512/3296/3296814.png", // LeetCode logo
    },
    {
      name: "HackerRank",
      link: "https://www.hackerrank.com/profile/koradiyaangel11",
      logo: "https://cdn-icons-png.flaticon.com/512/2202/2202112.png", // HackerRank logo
    },
  ],
};

const connectWithMe = [
  {
    name: "GitHub",
    link: "https://github.com/angel-koradiya",
    logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png", // GitHub logo
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/angelkoradiya",
    logo: "https://cdn-icons-png.flaticon.com/512/61/61109.png", // LinkedIn logo
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ANGELKORADIYA",
    logo: "https://cdn-icons-png.flaticon.com/512/733/733579.png", // Twitter logo
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center pt-24">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
          Welcome to My Portfolio
        </h1>

        <p className="text-lg text-gray-700 text-center mb-8">
          Hi! I am Angel Koradiya, a passionate engineering student exploring
          the world of technology and software development.
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Connect with Me
        </h2>
        <ul className="flex justify-center space-x-6 mb-8">
          {connectWithMe.map((platform, index) => (
            <li key={index} className="flex items-center">
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  className="w-6 h-6 mr-2"
                />
                {platform.name}
              </a>
            </li>
          ))}
        </ul>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {dataStructuresAndAlgorithms.title}
        </h2>
        <ul className="flex justify-center space-x-6 mb-8">
          {dataStructuresAndAlgorithms.resources.map((resource, index) => (
            <li key={index} className="flex items-center">
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  src={resource.logo}
                  alt={`${resource.name} logo`}
                  className="w-6 h-6 mr-2"
                />
                {resource.name}
              </a>
            </li>
          ))}
        </ul>

        

        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700 text-center">
          Interested in collaborating or learning more about my work? Feel free
          to reach out via{" "}
          <a
            href="mailto:koradiyaangel11@gmail.com"
            className="text-blue-600 hover:underline"
          >
            email
          </a>
          .
        </p>
      </div>
    </div>
  );
}
