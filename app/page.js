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
    <div className="min-h-screen pt-32 pb-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-sky-200 dark:bg-sky-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>
        <div className="absolute bottom-[20%] left-[15%] w-80 h-80 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 pointer-events-none"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fade-in-down">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 to-indigo-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <h1 className="relative text-6xl md:text-7xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
              Hello, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">Angel Koradiya</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Computer Engineering graduate & Software Engineer at <span className="font-semibold text-sky-600 dark:text-sky-400">Silvertouch Technology</span>. 
            Crafting elegant solutions with code.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="#skills" className="px-8 py-3 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">View My Skills</a>
            <a href="/projects" className="px-8 py-3 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700 border border-gray-200 text-gray-900 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:shadow-lg hover:-translate-y-1">Browse Projects</a>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Info */}
          <div className="md:col-span-8 space-y-8">
            {/* Academics Section */}
            <section className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-white dark:border-gray-800 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  <span className="w-10 h-10 bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 rounded-xl flex items-center justify-center text-lg">🎓</span>
                  Academics
                </h2>
                <button
                  onClick={toggleDetails}
                  className="text-sm font-medium text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300 bg-sky-50 dark:bg-sky-900/30 px-4 py-2 rounded-full transition-colors"
                >
                  {showDetails ? "Hide Details" : "Show Details"}
                </button>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-gray-100 dark:before:bg-gray-800">
                {[
                  { year: "2025-Present", title: "Software Engineer", place: "Silvertouch Technology", detail: "6 months internship + Full-time Position" },
                  { year: "2021-2025", title: "B.Tech in Computer Engineering", place: "VGEC, Ahmedabad", detail: "CPI: 8 | GATE Qualified (First Attempt)" },
                  { year: "2020-2021", title: "12th Grade", place: "Dream International School", detail: "89% | JEE: 93 Percentile" },
                ].map((edu, i) => (
                  <div key={i} className="relative pl-12 group">
                    <div className="absolute left-3.5 top-1.5 w-3.5 h-3.5 bg-white dark:bg-gray-900 border-2 border-sky-500 rounded-full z-10 group-hover:scale-150 transition-transform"></div>
                    <span className="text-sm font-bold text-sky-500 uppercase tracking-wider">{edu.year}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{edu.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{edu.place}</p>
                    {showDetails && <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 italic">{edu.detail}</p>}
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements Section */}
            <section className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-white dark:border-gray-800 hover:shadow-xl transition-all duration-500">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center text-lg">🏆</span>
                Achievements
              </h2>
              <div className="grid gap-4">
                <div className="p-4 bg-amber-50/50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                  <p className="font-bold text-gray-900 dark:text-white">GATE 2025 Qualified</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Qualified in the first attempt.</p>
                </div>
                <div className="p-4 bg-sky-50/50 dark:bg-sky-900/20 rounded-2xl border border-sky-100 dark:border-sky-900/30">
                  <p className="font-bold text-gray-900 dark:text-white">Striver&apos;s SDE Sheet</p>
                  <a href="https://takeuforward.org/profile/angelkoradiya" target="_blank" className="text-sm text-sky-600 dark:text-sky-400 font-medium hover:underline">View Progress Profile →</a>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-8">
            {/* Skills Section */}
            <section id="skills" className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-white dark:border-gray-800 hover:shadow-xl transition-all duration-500">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {["C/C++", "Python", "MERN Stack", "Next.js", "Java", "GenAI", "ML", "Deep Learning"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-bold hover:bg-sky-500 hover:text-white dark:hover:bg-sky-600 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Platform Links */}
            <section className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-white dark:border-gray-800 hover:shadow-xl transition-all duration-500">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Competitive</h2>
              <div className="space-y-4">
                {dataStructuresAndAlgorithms.resources.map((resource, index) => (
                  <a key={index} href={resource.link} target="_blank" className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                    <div className="p-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                      <Image src={resource.logo} alt={resource.name} width={24} height={24} />
                    </div>
                    <span className="font-bold text-gray-700 dark:text-gray-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">{resource.name}</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Hobbies Section */}
            <section className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-white dark:border-gray-800 hover:shadow-xl transition-all duration-500">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Hobbies</h2>
              <div className="flex justify-center gap-6">
                {["🎮", "✈️", "💻"].map((emoji, i) => (
                  <div key={i} className="text-3xl animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>{emoji}</div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
