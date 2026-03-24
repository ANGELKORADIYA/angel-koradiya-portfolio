"use client";

export default function Learning() {
  const learningResources = [
    {
      title: "C++",
      icon: "💻",
      resources: [
        {
          name: "One Shot of Code with Harry",
          link: "https://youtu.be/yGB9jhsEsr8?si=OTJxBCkHoESrjzHY",
        },
        {
          name: "OOPS Concept of Code with Harry",
          link: "https://youtube.com/playlist?list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&si=gnboxIGFaEvGZXmv",
        },
      ],
    },
    {
      title: "Java",
      icon: "☕",
      resources: [
        {
          name: "JTC India",
          link: "https://jtcindia.org/tutorials/java/Java-Introduction.php",
        },
        {
          name: "One Shot of Apna Collage",
          link: "https://youtu.be/UmnCZ7-9yDY?si=5fm2TjBizJZagMKM",
        },
      ],
    },
    {
      title: "Data Structures and Algorithms",
      icon: "📊",
      resources: [
        {
          name: "Striver’s DSA Course",
          link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
        },
        {
          name: "Coding Ninja",
          link: "https://www.naukri.com/code360/profile/angelkoradiya",
        },
        {
          name: "Leet Code",
          link: "https://leetcode.com/u/Angel_Koradiya/",
        },
        {
          name: "HackerRank",
          link: "https://www.hackerrank.com/profile/koradiyaangel11",
        },
      ],
    },
    {
      title: "Mern Stack",
      icon: "🚀",
      resources: [
        {
          name: "React from Code with Harry",
          link: "https://youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&si=TZrmd5HlA8mzdOci",
        },
        {
            name:"Express from Code with Harry",
            link:"https://youtu.be/7H_QH9nipNs?si=AM3w22bk2Ru7c6LQ"
        },
        {
            name:"MongoDB from Code with Harry",
            link:"https://youtu.be/J6mDkcqU_ZE?si=xrdsrVDYYCEEPAy8"
        },
        {
            name:"NodeJS from Code with Harry",
            link:"https://youtu.be/BLl32FvcdVM?si=bfDtDlzQqu7QIiJk"
        },
      ],
    },
    {
      title: "Python",
      icon: "🐍",
      resources: [
        {
          name: "One Shot of Apna Collage",
          link: "https://youtu.be/vLqTf2b6GZw?si=40N12O1QFWgZsdE1",
        },
        {
            name:"Code with Harry",
            link:"https://youtu.be/JdG1cVFyj5A?si=5dddMwcrzMsDpRO8"
        }
      ],
    },
    {
      title: "ML Basics (Scikit-learn)",
      icon: "🤖",
      resources: [
        {
          name: "Scikit-learn Crash Course by freeCodeCamp",
          link: "https://youtu.be/0Lt9w-BxKFQ",
        },
        {
          name: "Introduction to Scikit-learn by Krish Naik",
          link: "https://youtu.be/pqNCD_5r0IU",
        },
        {
          name: "Official Scikit-learn Documentation",
          link: "https://scikit-learn.org/stable/user_guide.html",
        },
      ],
    },
    {
      title: "Generative AI",
      icon: "✨",
      resources: [
        {
          name: "Intro to Generative AI by Google Cloud",
          link: "https://www.cloudskillsboost.google/course_templates/536",
        },
        {
          name: "Google Generative AI Leader Certification Course",
          link: "https://youtu.be/30diF8dKpAY?si=Jv6yk0PAORCMgO9u",
        },
        {
          name: "Hugging Face - Introduction to Transformers",
          link: "https://huggingface.co/transformers/",
        },
      ],
    },
    {
        title: "Web Technologies",
        icon: "🌐",
        resources: [
          {
            name: "HTML One Shot of Code with Harry",
            link: "https://youtu.be/BsDoLVMnmZs?si=e9MvQnEsjHEUERvb",
          },
          {
            name: "CSS One Shot of Code with Harry",
            link: "https://youtu.be/Edsxf_NBFrw?si=7SqsXYVFQJn_3xCb",
          },
          {
            name: "Next.js Official Documentation",
            link: "https://nextjs.org/docs",
          },
        ],
      },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6 flex flex-col items-center pt-24 transition-colors duration-300">
      <div className="max-w-6xl w-full">
        <h1 className="text-5xl font-black text-center text-gray-900 dark:text-white mb-4 animate-fade-in-down">
          Learning Journey
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          A collection of high-quality resources that have helped me master various technologies throughout my engineering journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningResources.map(({ title, icon, resources }, i) => (
            <div 
              key={title} 
              className="group p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 bg-sky-50 dark:bg-sky-900/30 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                {icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                {title}
              </h2>
              <ul className="space-y-4">
                {resources.map(({ name, link }, index) => (
                  <li key={index} className="flex items-start group/item">
                    <span className="text-sky-500 dark:text-sky-400 mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-current"></span>
                    <a
                      href={link}
                      className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-sm font-medium leading-relaxed"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
