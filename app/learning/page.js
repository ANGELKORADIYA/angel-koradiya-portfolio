"use client";

import { 
  FaCode, FaJava, FaDatabase, FaReact, FaPython, 
  FaBrain, FaMagic, FaGlobe, FaYoutube, FaBook, 
  FaExternalLinkAlt, FaGraduationCap, FaTerminal
} from "react-icons/fa";
import { SiScikitlearn } from "react-icons/si";

export default function Learning() {
  const learningCategories = [
    {
      category: "Programming Languages",
      icon: <FaTerminal className="text-sky-500" />,
      items: [
        {
          title: "C++",
          icon: <FaCode className="text-blue-500" />,
          resources: [
            { name: "One Shot - Code with Harry", link: "https://youtu.be/yGB9jhsEsr8?si=OTJxBCkHoESrjzHY", type: "Video" },
            { name: "OOPS Concept - Code with Harry", link: "https://youtube.com/playlist?list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&si=gnboxIGFaEvGZXmv", type: "Playlist" },
          ],
        },
        {
          title: "Java",
          icon: <FaJava className="text-red-500" />,
          resources: [
            { name: "JTC India Tutorials", link: "https://jtcindia.org/tutorials/java/Java-Introduction.php", type: "Doc" },
            { name: "One Shot - Apna College", link: "https://youtu.be/UmnCZ7-9yDY?si=5fm2TjBizJZagMKM", type: "Video" },
          ],
        },
        {
          title: "Python",
          icon: <FaPython className="text-yellow-500" />,
          resources: [
            { name: "One Shot - Apna College", link: "https://youtu.be/vLqTf2b6GZw?si=40N12O1QFWgZsdE1", type: "Video" },
            { name: "Full Course - Code with Harry", link: "https://youtu.be/JdG1cVFyj5A?si=5dddMwcrzMsDpRO8", type: "Video" }
          ],
        },
      ]
    },
    {
      category: "Core Computer Science",
      icon: <FaDatabase className="text-emerald-500" />,
      items: [
        {
          title: "DSA",
          icon: <FaDatabase className="text-emerald-500" />,
          resources: [
            { name: "Striver’s DSA Course", link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/", type: "Course" },
            { name: "Coding Ninja Profile", link: "https://www.naukri.com/code360/profile/angelkoradiya", type: "Profile" },
            { name: "LeetCode Profile", link: "https://leetcode.com/u/Angel_Koradiya/", type: "Profile" },
            { name: "HackerRank Profile", link: "https://www.hackerrank.com/profile/koradiyaangel11", type: "Profile" },
          ],
        },
      ]
    },
    {
      category: "Full Stack Development",
      icon: <FaReact className="text-cyan-500" />,
      items: [
        {
          title: "MERN Stack",
          icon: <FaReact className="text-cyan-400" />,
          resources: [
            { name: "React - Code with Harry", link: "https://youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&si=TZrmd5HlA8mzdOci", type: "Playlist" },
            { name: "Express - Code with Harry", link: "https://youtu.be/7H_QH9nipNs?si=AM3w22bk2Ru7c6LQ", type: "Video" },
            { name: "MongoDB - Code with Harry", link: "https://youtu.be/J6mDkcqU_ZE?si=xrdsrVDYYCEEPAy8", type: "Video" },
            { name: "NodeJS - Code with Harry", link: "https://youtu.be/BLl32FvcdVM?si=bfDtDlzQqu7QIiJk", type: "Video" },
          ],
        },
        {
          title: "Web Basics",
          icon: <FaGlobe className="text-blue-400" />,
          resources: [
            { name: "HTML - Code with Harry", link: "https://youtu.be/BsDoLVMnmZs?si=e9MvQnEsjHEUERvb", type: "Video" },
            { name: "CSS - Code with Harry", link: "https://youtu.be/Edsxf_NBFrw?si=7SqsXYVFQJn_3xCb", type: "Video" },
            { name: "Next.js Official Docs", link: "https://nextjs.org/docs", type: "Doc" },
          ],
        },
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: <FaBrain className="text-purple-500" />,
      items: [
        {
          title: "ML Basics",
          icon: <SiScikitlearn className="text-orange-500" />,
          resources: [
            { name: "Scikit-learn - freeCodeCamp", link: "https://youtu.be/0Lt9w-BxKFQ", type: "Video" },
            { name: "Intro to Scikit - Krish Naik", link: "https://youtu.be/pqNCD_5r0IU", type: "Video" },
            { name: "Official Documentation", link: "https://scikit-learn.org/stable/user_guide.html", type: "Doc" },
          ],
        },
        {
          title: "Generative AI",
          icon: <FaMagic className="text-yellow-400" />,
          resources: [
            { name: "Intro by Google Cloud", link: "https://www.cloudskillsboost.google/course_templates/536", type: "Course" },
            { name: "Leader Certification Course", link: "https://youtu.be/30diF8dKpAY?si=Jv6yk0PAORCMgO9u", type: "Video" },
            { name: "Hugging Face Transformers", link: "https://huggingface.co/transformers/", type: "Doc" },
          ],
        },
      ]
    }
  ];

  const getResourceIcon = (type) => {
    switch (type) {
      case "Video": return <FaYoutube className="text-red-500 opacity-70" />;
      case "Playlist": return <FaYoutube className="text-red-600 opacity-70" />;
      case "Doc": return <FaBook className="text-blue-500 opacity-70" />;
      case "Course": return <FaGraduationCap className="text-emerald-500 opacity-70" />;
      case "Profile": return <FaExternalLinkAlt className="text-gray-400 opacity-70" size={12} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6 flex flex-col items-center pt-24 transition-colors duration-300 overflow-hidden relative">
      {/* Decorative background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: "2000ms" }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: "4000ms" }}></div>

      <div className="max-w-7xl w-full relative z-10">
        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight animate-fade-in-down">
            Learning <span className="text-sky-500">Journey</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A curated collection of resources that have shaped my technical foundation and continue to fuel my growth as an engineer.
          </p>
        </header>

        <div className="space-y-20">
          {learningCategories.map((cat, i) => (
            <section key={cat.category} className="animate-slide-in-up" style={{ animationDelay: `${i * 150}ms` }}>
              <div className="flex items-center gap-4 mb-10 border-b border-gray-200 dark:border-gray-800 pb-4">
                <div className="p-3 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                  {cat.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {cat.category}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((item, j) => (
                    <div 
                      key={item.title} 
                      className="group relative p-8 bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-sky-500/30 dark:hover:border-sky-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/10"
                    >
                      {/* Decorative gradient border on hover - Added pointer-events-none to prevent blocking clicks */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-5 transition duration-500 pointer-events-none"></div>
                      
                      <div className="flex items-center gap-4 mb-6 relative z-10">
                        <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl group-hover:scale-110 group-hover:bg-sky-50 dark:group-hover:bg-sky-900/30 transition-all duration-300">
                          {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                      </div>

                      <ul className="space-y-3 relative z-10">
                        {item.resources.map((res, k) => (
                          <li key={k}>
                            <a
                              href={res.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/res flex items-center justify-between p-3 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-all duration-300 border border-transparent hover:border-sky-100 dark:hover:border-sky-800/50 w-full"
                            >
                              <div className="flex items-center gap-3 min-w-0 flex-1">
                                <span className="flex-shrink-0 text-gray-400 group-hover/res:text-sky-500 transition-colors">
                                  {getResourceIcon(res.type)}
                                </span>
                                <span className="text-gray-600 dark:text-gray-400 group-hover/res:text-gray-900 dark:group-hover/res:text-white text-sm font-medium truncate transition-colors block">
                                  {res.name}
                                </span>
                              </div>
                              <div className="flex items-center ml-3 flex-shrink-0">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 dark:text-gray-600 px-2 py-1 rounded-md bg-gray-100/50 dark:bg-gray-800/50 group-hover/res:bg-sky-500 group-hover/res:text-white transition-all duration-300">
                                  {res.type}
                                </span>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
