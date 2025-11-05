// pages/projects.js
"use client";


const projects = [
  {
    title: 'Wanderlogue',
    description: 'A travel log app that allows users to document their journeys with features like infinite scrolling and post uploads.',
    link: 'https://wanderlogues.vercel.app/', // Update with the actual link
    link2: 'https://github.com/ANGELKORADIYA/Wanderlogue',
  },
  {
    title: 'QuizMaster',
    description: 'An interactive quiz application for creating dynamic quizzes with real-time student result displays and analytics.',
    link: 'https://quiz-minimal.onrender.com/', // Update with the actual link
    link2: 'https://github.com/AngelKoradiya/Quiz',
  },
  {
    title: 'Black Water - Stock Analysis and Prediction Model',
    description: 'A stock analysis and prediction model designed to provide insights and forecast stock trends based on historical data.',
    link: 'https://black-waters.vercel.app/',
    link2: 'https://github.com/ANGELKORADIYA/black-water-analysis',
  },
  {
    title: 'ForgeOAgent',
    description: 'Prompt Processor is a tool that helps you creating agents and use them and also main mode for real world tasks.',
    link: 'https://forgeoagent.vercel.app/',
    link2: 'https://github.com/ANGELKORADIYA/ForgeOAgent',
  },
   {
    title: 'Regex Studio',
    description: 'Regex Studio for testing and generating regular expressions examples.',
    link: 'https://regex-studio.vercel.app/',
  },
  {
    title: 'Polylex',
    description: 'Dynamic Dictonary',
    link: 'https://polylex.vercel.app/',
    // link2: 'https://github.com/ANGELKORADIYA/Polylex',
  },
  {
    title: 'Public Library Management',
    description: 'A management system for public libraries that streamlines book lending, returns, and user registrations.',
    link2: 'https://github.com/ANGELKORADIYA/public-library', // Update with the actual link
  },
  {
    title: '1930 Helpline Improvement',
    description: 'A project aimed at enhancing the 1930 helpline services to improve response times and user satisfaction.',
    link2: 'https://github.com/Kathan0920/RJPOLICE_HACK_1202_CyberCrew_9', // Update with the actual link
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-gray-100 pt-20 p-6 flex flex-col items-center">
      <div className="max-w-6xl w-full p-6">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6">My Projects</h1>

        <p className="text-center text-gray-600 max-w-2xl mx-auto">Selected projects with links to live demos and code. Hover a card to reveal more detail and actions.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"> 
          {projects.map((project, index) => (
            <article key={index} className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-[1.03] overflow-hidden">

              <div className="relative p-5 flex flex-col h-64">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-white font-bold text-lg" style={{background: `linear-gradient(135deg, ${index % 2 === 0 ? '#6366f1' : '#ec4899'}, ${index % 3 === 0 ? '#06b6d4' : '#f97316'})`}}>
                    {project.title ? project.title.charAt(0) : "P"}
                  </div>
                  <h2 className="text-lg font-semibold text-gray-800">{project.title}</h2>
                </div>

                <p className="text-gray-600 mt-3 overflow-hidden" style={{maxHeight: '4.5rem', transition: 'max-height 300ms'}}>
                  {project.description}
                </p>

                <div className="mt-4 flex items-center gap-3 justify-center opacity-100 transition-opacity duration-300 w-max mx-auto flex-nowrap">
                  {project.link2 && (
                    <a href={project.link2} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-md text-sm hover:bg-indigo-700 transition whitespace-nowrap">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m6 4h-3m4 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Code
                    </a>
                  )}

                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-800 px-3 py-2 rounded-md text-sm hover:shadow-sm hover:bg-gray-50 hover:scale-105 transform transition focus:outline-none focus:ring-2 focus:ring-indigo-200 whitespace-nowrap">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656 0 4 4 0 010-5.656l1.414-1.414" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 015.656 0 4 4 0 010 5.656l-1.414 1.414" />
                      </svg>
                      Live
                    </a>
                  )}

                </div>

                <div className="absolute right-4 top-4 opacity-30 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zM21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
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
