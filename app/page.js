"use client";

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
  return (
    <div className="min-h-screen flex justify-center items-center pt-20 px-4 m-5">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-8 sm:p-12">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          Hi! I am Angel Koradiya, a passionate engineering student exploring
          the world of technology and software development.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">Connect with Me</h2>
        <ul className="flex justify-center space-x-8 mb-10">
          {connectWithMe.map((platform, index) => (
            <li key={index} className="flex items-center">
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <img
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  className="w-8 h-8 mr-3 transition-transform transform group-hover:scale-110"
                />
                <span className="text-gray-900 font-semibold transition-colors group-hover:text-blue-500">
                  {platform.name}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {dataStructuresAndAlgorithms.title}
        </h2>
        <ul className="flex justify-center space-x-8 mb-10">
          {dataStructuresAndAlgorithms.resources.map((resource, index) => (
            <li key={index} className="flex items-center">
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <img
                  src={resource.logo}
                  alt={`${resource.name} logo`}
                  className="w-8 h-8 mr-3 transition-transform transform group-hover:scale-110"
                />
                <span className="text-gray-900 font-semibold transition-colors group-hover:text-blue-500">
                  {resource.name}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
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
