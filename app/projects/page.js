// pages/projects.js
"use client";


const projects = [
  {
    title: 'QuizMaster',
    description: 'My first web project where I learned Express.js, Node.js, and MongoDB. A simple yet functional quiz application.',
    link: 'https://quiz-minimal.onrender.com/',
    link2: 'https://github.com/AngelKoradiya/Quiz',
  },
  {
    title: '1930 Helpline Improvement',
    description: 'A machine learning project aimed at enhancing the 1930 helpline services for finding fake complaints. Built using scikit-learn to analyze and optimize police court complaint processing.',
    link2: 'https://github.com/Kathan0920/RJPOLICE_HACK_1202_CyberCrew_9',
  },
  
  {
    title: 'Black Water - Stock Analysis and Prediction Model',
    description: 'Inspired by the 1930 helpline project, I developed an automated stock analysis and prediction model. Uses historical data to provide insights and forecast market trends, helping to automate investment decisions.',
    link: 'https://black-waters.vercel.app/',
    link2: 'https://github.com/ANGELKORADIYA/black-water-analysis',
  },
  {
    title: 'Wanderlogue',
    description: 'A full-stack travel logging application built with the MERN stack. Features include infinite scrolling, post uploads, and a seamless user experience  for documenting and sharing travel adventures.',
    link: 'https://wanderlogues.vercel.app/',
    link2: 'https://github.com/ANGELKORADIYA/Wanderlogue',
  },
  {
    title: 'ForgeOAgent',
    description: 'An advanced generative AI platform for creating and managing intelligent agents. Includes a sophisticated prompt processor that enables agents to handle real-world tasks. It\'s like having AI on your computer, basically executing Python code autonomously.',
    link: 'https://forgeoagent.vercel.app/',
    link2: 'https://github.com/ANGELKORADIYA/ForgeOAgent',
  },
  {
    title: 'Regex Studio',
    description: 'An interactive tool for testing and generating regular expressions with real-time examples and pattern matching. Currently under development with enhanced linguistic features planned.',
    link: 'https://regex-studio.vercel.app/',
  },
  {
    title: 'Polylex',
    description: 'A dynamic database application with advanced search capabilities and real-time definitions. Currently under development with enhanced linguistic features planned.',
    link: 'https://polylex.vercel.app/',
    // link2: 'https://github.com/ANGELKORADIYA/Polylex',
  },
  {
    title: 'Public Library Management',
    description: 'A comprehensive management system for public libraries that streamlines book lending and user registrations. Dropped idea after hackathon.',
    link2: 'https://github.com/ANGELKORADIYA/public-library',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-gray-100 pt-20 p-6 flex flex-col items-center">
      <div className="max-w-6xl w-full p-6">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6">My Projects</h1>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-2">A collection of my projects showcasing full-stack development, AI/ML, and web applications. Each includes links to live demos and source code.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"> 
          {projects.map((project, index) => (
            <article key={index} className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] overflow-hidden flex flex-col">

              <div className="relative p-6 flex flex-col flex-grow">
                {/* Header with icon and title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg" style={{background: `linear-gradient(135deg, ${index % 2 === 0 ? '#6366f1' : '#ec4899'}, ${index % 3 === 0 ? '#06b6d4' : '#f97316'})`}}>
                    {project.title ? project.title.charAt(0) : "P"}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 leading-tight flex-1">{project.title}</h2>
                </div>

                {/* Description - full content always visible */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Buttons at bottom */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-sm hover:shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}

                  {project.link2 && (
                    <a href={project.link2} target="_blank" rel="noopener noreferrer" className={`${project.link ? 'w-auto' : 'flex-1'} inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-all`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      {project.link ? '' : 'View Code'}
                    </a>
                  )}
                </div>

                {/* Decorative corner element */}
                <div className="absolute right-4 top-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
