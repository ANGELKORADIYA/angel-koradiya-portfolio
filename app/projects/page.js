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
    <div className="min-h-screen bg-gray-50 pt-20 p-6 flex flex-col items-center">
      <div className="max-w-6xl w-full p-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6">My Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8"> 
          {projects.map((project, index) => (
            <div key={index} className="bg-white max-w-xs h-64 p-4 rounded-lg shadow-lg transition transform hover:scale-105 flex flex-col">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-700 flex-grow mb-4">{project.description}</p>
              <div className="flex mt-auto justify-around">
                {
                  project.link2 &&<button
                  className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition"
                  onClick={() => window.open(project.link2, '_blank')}
                  >
                  Code
                </button>
                }
                {
                  project.link &&<button
                  className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition"
                  onClick={() => window.open(project.link, '_blank')}
                  >
                  Go to Website
                </button>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
