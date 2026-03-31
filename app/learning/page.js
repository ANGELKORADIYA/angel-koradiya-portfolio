"use client";

import { useState, useEffect } from "react";
import { 
  FaCode, FaJava, FaDatabase, FaReact, FaPython, 
  FaBrain, FaMagic, FaGlobe, FaYoutube, FaBook, 
  FaExternalLinkAlt, FaGraduationCap, FaTerminal,
  FaChevronRight, FaMapMarkerAlt
} from "react-icons/fa";
import { SiScikitlearn } from "react-icons/si";

const learningCategories = [
  {
    id: "programming",
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
    id: "core-cs",
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
    id: "full-stack",
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
    id: "ai-ml",
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

export default function Learning() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = learningCategories.map(cat => document.getElementById(cat.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(learningCategories[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 pt-24 pb-20 relative overflow-hidden">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-12">
        
        {/* Mobile Filter Index - Visible only on small screens */}
        <div className="lg:hidden sticky top-20 z-30 -mx-6 px-6 py-4 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {learningCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  activeSection === cat.id 
                    ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20" 
                    : "bg-gray-100 dark:bg-gray-800 text-gray-500"
                }`}
              >
                {cat.icon}
                {cat.category.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Sidebar Index - Hidden on small screens */}
        <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-32 h-fit">
          <div className="p-6 bg-white dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-100 dark:border-gray-800/50 shadow-xl shadow-gray-200/20 dark:shadow-black/20">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 px-2">Navigation Map</h3>
            <nav className="space-y-2">
              {learningCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group ${
                    activeSection === cat.id 
                      ? "bg-sky-500/10 text-sky-500 ring-1 ring-sky-500/20" 
                      : "text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <span className={`transition-transform duration-300 ${activeSection === cat.id ? "scale-110" : "group-hover:scale-110 opacity-70"}`}>
                    {cat.icon}
                  </span>
                  <span className="text-sm font-semibold truncate">{cat.category}</span>
                  {activeSection === cat.id && <FaChevronRight className="ml-auto text-xs animate-pulse" />}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1">
          <header className="mb-12 text-left">
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter bg-gradient-to-r from-gray-900 via-sky-600 to-gray-900 dark:from-white dark:via-sky-400 dark:to-white bg-clip-text text-transparent">
              Roadmap <span className="text-sky-500">to Mastery</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Explore the structured path of my technical evolution, from core foundations to advanced implementations.
            </p>
          </header>

          <div className="relative pl-8 md:pl-12">
            {/* Vertical Path Line */}
            <div className="absolute left-[3px] md:left-[5px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-500/50 via-emerald-500/50 to-purple-500/50 rounded-full opacity-20"></div>
            
            {/* Dashed overlay for "map" look */}
            <div className="absolute left-[3px] md:left-[5px] top-0 bottom-0 w-[2px] border-l-2 border-dashed border-gray-200 dark:border-gray-800 pointer-events-none"></div>

            <div className="space-y-20">
              {learningCategories.map((cat, i) => (
                <section 
                  key={cat.id} 
                  id={cat.id} 
                  className="relative animate-slide-in-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Category Marker Node */}
                  <div className="absolute -left-[31px] md:-left-[39px] top-1.5 z-20">
                    <div className={`p-1.5 rounded-full border-2 transition-all duration-500 bg-white dark:bg-gray-950 ${
                      activeSection === cat.id ? "border-sky-500 scale-110 shadow-lg shadow-sky-500/20" : "border-gray-200 dark:border-gray-800"
                    }`}>
                      <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                        activeSection === cat.id ? "bg-sky-500" : "bg-gray-300 dark:bg-gray-700"
                      }`}></div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                        {cat.icon}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">{cat.category}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {cat.items.map((item, j) => (
                        <div 
                          key={item.title} 
                          className="group relative p-5 bg-white/40 dark:bg-gray-900/20 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-800/50 hover:border-sky-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5"
                        >
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-2.5 bg-gray-50 dark:bg-gray-800/50 rounded-lg group-hover:scale-105 group-hover:bg-sky-100 dark:group-hover:bg-sky-900/30 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-all duration-300">
                              {item.icon}
                            </div>
                            <h3 className="text-lg font-bold">{item.title}</h3>
                          </div>

                          <ul className="grid grid-cols-1 gap-1.5">
                            {item.resources.map((res, k) => (
                              <li key={k}>
                                <a
                                  href={res.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white dark:hover:bg-gray-800 border border-transparent hover:border-gray-100 dark:hover:border-gray-700 transition-all duration-200 group/link"
                                >
                                  <div className="flex items-center gap-3 min-w-0">
                                    <span className="flex-shrink-0 opacity-70 group-hover/link:opacity-100">{getResourceIcon(res.type)}</span>
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 truncate group-hover/link:text-sky-600 dark:group-hover/link:text-sky-400 transition-colors">
                                      {res.name}
                                    </span>
                                  </div>
                                  <span className="text-[9px] font-bold px-1.5 py-0.5 bg-gray-100 dark:bg-gray-900 rounded text-gray-500 group-hover/link:bg-sky-100 dark:group-hover/link:bg-sky-900 group-hover/link:text-sky-600 transition-colors">
                                    {res.type}
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="fixed top-1/4 -right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
    </div>
  );
}
