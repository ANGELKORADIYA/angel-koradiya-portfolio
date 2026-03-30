// pages/projects.js
"use client";
import { useState, useMemo } from "react";

const projects = [
  {
    title: 'Wanderlogue',
    description: 'A full-stack travel logging application built with the MERN stack. Features include infinite scrolling, post uploads, and a seamless user experience for documenting and sharing travel adventures.',
    link: 'https://wanderlogues.vercel.app/',
    link2: 'https://github.com/ANGELKORADIYA/Wanderlogue',
    logo: 'https://wanderlogues.vercel.app/assets/favicon-CIIPRWpr.ico',
    category: 'Web Apps',
    tags: ['MERN', 'Full Stack', 'Cloudinary']
  },
  {
    title: 'Black Water - Stock Analysis and Prediction Model',
    description: 'Inspired by the 1930 helpline project, I developed an automated stock analysis and prediction model. Uses historical data to provide insights and forecast market trends, helping to automate investment decisions.',
    link: 'https://black-waters.vercel.app/',
    link2: 'https://github.com/ANGELKORADIYA/black-water',
    logo: 'https://black-waters.vercel.app/assets/logo-Cc8KG4OS.png',
    category: 'Finance',
    tags: ['Python', 'Stock Prediction', 'Data Analysis']
  },
  {
    title: 'QuizMaster',
    description: 'My first web project where I learned Express.js, Node.js, and MongoDB. A simple yet functional quiz application.',
    link: 'https://quiz-minimal.vercel.app/',
    link2: 'https://github.com/AngelKoradiya/Quiz',
    logo: 'https://quiz-minimal.vercel.app/favicon.ico',
    category: 'Web Apps',
    tags: ['Node.js', 'Express', 'MongoDB']
  },
  {
    title: 'ForgeOAgent - pypi Package',
    description: 'An advanced generative AI platform for creating and managing intelligent agents. Includes a sophisticated prompt processor that enables agents to handle real-world tasks. It\'s like having AI on your computer, basically executing Python code autonomously.creates self agents and pre build prompts agents with custom logic of MCP for GEMINI at that time this is just a concepts.',
    link: 'https://forgeoagent.vercel.app/',
    link2: 'https://github.com/ANGELKORADIYA/ForgeOAgent',
    logo: '/forgeoagent_logo.png',
    category: 'Gen AI',
    tags: ['GenAI', 'Python', 'LLM']
  },
  {
    title: 'Zen Light - AI-Powered Extension',
    description: 'ZenLight is a browser extension that brings AI to your fingertips — select any text on any webpage to instantly get explanations, translations, and visual context without leaving the page. Highlight a question and ZenLight automatically finds and marks the answer on the page. Plus, a distraction-free Spotlight Mode and YouTube productivity tools help you stay focused and in the zone.',
    link: 'https://addons.mozilla.org/en-US/firefox/addon/zenlight-office-tools/',
    link2: 'https://github.com/ANGELKORADIYA/ZenLight',
    logo: '/zenlight_logo.png',
    category: 'Gen AI',
    tags: ['Extension', 'AI', 'Productivity']
  },
  {
    title: 'Bit Stash - Code Snippet Sharing Platform',
    description: 'Bit Stash is a Spring Boot application for uploading and sharing code snippets, backed by PostgreSQL. Runs on single Docker Compose command and deploys effortlessly to the cloud via Render.',
    link: 'https://bit-stash.vercel.app/',
    link2: 'https://github.com/ANGELKORADIYA/bit-stash',
    logo: 'https://bit-stash.vercel.app/logo.svg',
    category: 'Web Apps',
    tags: ['Spring Boot', 'PostgreSQL', 'Docker']
  },
  {
    title: 'Astroid Game',
    description: 'A browser-based Asteroids-inspired arcade shooter built with JavaScript and HTML5 Only. Features ship physics, power-ups, UFO enemies, combo scoring, procedural music, and particle effects — all running in the browser with no dependencies.',
    link: 'https://angelkoradiya.github.io/astroid-game/',
    link2: 'https://github.com/ANGELKORADIYA/astroid-game',
    category: 'Games',
    tags: ['JavaScript', 'HTML5 Canvas', 'Game Dev']
  },
  {
    title: 'Polylex',
    description: 'A dynamic database application with advanced search capabilities and real-time definitions. Currently under development with enhanced linguistic features planned.',
    link: 'https://polylex.vercel.app/',
    link2: 'https://github.com/ANGELKORADIYA/Polylex',
    logo: 'https://polylex.vercel.app/favicon.ico',
    category: 'Web Apps',
    tags: ['Database', 'Linguistics', 'React']
  },
  {
    title: 'Regex Studio',
    description: 'An interactive tool for testing and generating regular expressions with real-time examples and pattern matching. Currently under development with enhanced linguistic features planned.',
    link: 'https://regex-studio.vercel.app/',
    link2: 'https://github.com/ANGELKORADIYA/Regex-Studio',
    logo: 'https://regex-studio.vercel.app/favicon.ico',
    category: 'Gen AI',
    tags: ['Regex', 'Developer Tool', 'React']
  },
  {
    title: 'Schedulling Algorithm with Visualizing Gantt Chart for Operating Systems',
    description: 'A C program built during college that visualizes CPU scheduling algorithms — FCFS, SJF, SRTN, Priority (preemptive & non-preemptive), and Round Robin — using the graphics.h library. Enter your processes and instantly see a Gantt chart along with turnaround and waiting time stats. Note: Round Robin was implemented based on college-level understanding and may not cover all edge cases perfectly.',
    link2: 'https://github.com/ANGELKORADIYA/scheduling_algo_with_graphics.h',
    category: 'Systems & Tools',
    tags: ['C', 'OS', 'Algorithms']
  },
    {
    title: '1930 Helpline Improvement',
    description: 'A machine learning project built at the Rajasthan Police Hackathon to detect fake complaints on the 1930 helpline. Uses scikit-learn to analyze and classify police complaint data. Not fully completed, but a great hands-on introduction to ML concepts.',
    link2: 'https://github.com/Kathan0920/RJPOLICE_HACK_1202_CyberCrew_9',
    category: 'AI & ML',
    tags: ['Scikit-learn', 'ML', 'Cybersecurity']
  },
  {
    title: 'Public Library',
    description: 'A comprehensive management system for public libraries that streamlines book lending and user registrations. Dropped idea after hackathon.',
    link2: 'https://github.com/ANGELKORADIYA/public-library',
    category: 'Web Apps',
    tags: ['Management', 'Hackathon', 'Library']
  },
  {
    title: 'VeriScan',
    description: 'Face recognition system for secure authentication and monitoring. Built during hackathons for real-world security use cases.',
    link2: 'https://github.com/ANGELKORADIYA/VeriScan',
    category: 'AI & ML',
    tags: ['OpenCV', 'Face Recognition', 'Python']
  },
  {
    title: 'Guess the Number',
    description: 'An interactive game where players guess a randomly generated number with helpful hints and scoring.',
    link2: 'https://github.com/ANGELKORADIYA/Guess-the-Number',
    category: 'Games',
    tags: ['JavaScript', 'Game', 'Logic']
  },
  {
    title: 'TO-DO LIST',
    description: 'Efficient task management application with persistent storage, categories, and priority levels.',
    link2: 'https://github.com/ANGELKORADIYA/TO-DO-LIST',
    category: 'Games',
    tags: ['Productivity', 'Frontend', 'React']
  },
  {
    title: 'TunnelHub',
    description: 'A centralized dashboard for listing and managing all active ngrok tunnels, simplifying local development exposure.',
    link: 'https://tunnelhub.vercel.app/',
    link2: 'https://github.com/ANGELKORADIYA/tunnelhub',
    category: 'Systems & Tools',
    tags: ['Networking', 'ngrok', 'Node.js']
  },
];

const categories = ['All', 'Web Apps', 'Gen AI' ,'AI & ML', 'Games', 'Finance', 'Systems & Tools'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12 p-6 flex flex-col items-center transition-colors duration-300">
      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-sky-200 dark:bg-sky-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
      </div>

      <div className="max-w-6xl w-full p-2 md:p-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">Projects</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A curated collection of my work spanning full-stack development, artificial intelligence, and specialized engineering tools.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-sky-600 border-sky-600 text-white shadow-lg shadow-sky-600/30 scale-105'
                  : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-sky-400 dark:hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4"> 
          {filteredProjects.map((project, index) => (
            <article 
              key={project.title} 
              className="group relative bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:shadow-sky-500/10 transform transition-all duration-500 hover:scale-[1.02] overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-4 z-10">
                 <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 rounded-full text-[10px] font-black uppercase tracking-wider border border-sky-200 dark:border-sky-800/50">
                    {project.category}
                 </span>
              </div>

              <div className="relative p-6 flex flex-col flex-grow pt-10">
                {/* Header with icon and title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-md overflow-hidden bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700" style={{background: project.logo ? undefined : `linear-gradient(135deg, ${index % 2 === 0 ? '#6366f1' : '#ec4899'}, ${index % 3 === 0 ? '#06b6d4' : '#f97316'})`}}>
                    {project.logo ? (
                      <img 
                        src={project.logo} 
                        alt={`${project.title} logo`} 
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.style.background = `linear-gradient(135deg, ${index % 2 === 0 ? '#6366f1' : '#ec4899'}, ${index % 3 === 0 ? '#06b6d4' : '#f97316'})`;
                          e.target.parentElement.innerText = project.title ? project.title.charAt(0) : "-";
                        }}
                      />
                    ) : (
                      project.title ? project.title.charAt(0) : "-"
                    )}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">{project.title}</h2>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags?.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-gray-500 dark:text-gray-500 bg-gray-50 dark:bg-gray-800/50 px-2 py-0.5 rounded-md border border-gray-100 dark:border-gray-800">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Buttons at bottom */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 bg-sky-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-sky-700 transition-all shadow-md shadow-sky-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </a>
                  )}

                  {project.link2 && (
                    <a href={project.link2} target="_blank" rel="noopener noreferrer" className={`${project.link ? 'w-auto' : 'flex-1'} inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      {project.link ? '' : 'Code'}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
