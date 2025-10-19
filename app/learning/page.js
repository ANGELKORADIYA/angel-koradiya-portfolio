// pages/learning.js
import styles from "../globals.css";

export default function Learning() {
  const learningResources = [
    {
      title: "C++",
      resources: [
        {
          name: "One Shot of Code with Harry",
          link: "https://youtu.be/yGB9jhsEsr8?si=OTJxBCkHoESrjzHY",
        },
        {
          name: "OOPS Concept of Code with Harry",
          link: "https://youtube.com/playlist?list=PLISTUNloqsz0z9JJJke7g7PxRLvy6How9&si=gnboxIGFaEvGZXmv",
        },
        // { name: 'Apna Collage', link: 'https://www.youtube.com/watch?v=3X_ywWcB1gE' },
      ],
    },
    {
      title: "Java",
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
      title: "C",
      resources: [
        {
          name: "One Shot of Code with Harry",
          link: "https://youtu.be/ZSPZob_1TOk?si=rcjZCt5cZtxd7AfC",
        },
        {
          name: "One Shot of Apna Collage",
          link: "https://youtu.be/irqbmMNs2Bo?si=qL52zTAoDV8jNx9e",
        },
      ],
    },
    {
      title: "HTML",
      resources: [
        {
          name: "One Shot of Code with Harry",
          link: "https://youtu.be/BsDoLVMnmZs?si=e9MvQnEsjHEUERvb",
        },
        {
          name: "One Shot of Apna Collage",
          link: "https://youtu.be/HcOc7P5BMi4?si=BU3IiPltNe0jEUaA",
        },
      ],
    },
    {
      title: "CSS",
      resources: [
        {
          name: "One Shot of Code with Harry",
          link: "https://youtu.be/Edsxf_NBFrw?si=7SqsXYVFQJn_3xCb",
        },
        {
          name: "One Shot of Apna Collage",
          link: "https://youtu.be/ESnrn1kAD4E?si=V_roDw3XHIj2X3VR",
        },
      ],
    },
    ,
  {
    title: "Next.js",
    resources: [
      {
        name: "Next.js Full Course by Traversy Media",
        link: "https://youtu.be/Y6KDk5iyrYE",
      },
      {
        name: "Next.js Crash Course by Codevolution",
        link: "https://youtu.be/NbYgm0r7u6o",
      },
      {
        name: "Next.js Official Documentation",
        link: "https://nextjs.org/docs",
      },
    ],
  },
   {
    title: "ML Basics (Scikit-learn)",
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
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center pt-24">
      <div className="bg-white shadow-lg rounded-lg max-w-6xl w-full p-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-8">
          My Learning Journey
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {learningResources.map(({ title, resources }) => (
            <div key={title} className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
              <ul className="space-y-2 text-gray-700">
                {resources.map(({ name, link }, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    <a
                      href={link}
                      className="text-blue-600 underline"
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
