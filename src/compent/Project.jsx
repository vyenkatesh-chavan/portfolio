import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectList = [
    {
      title: "DAILY-VEGIES",
      desc: `Farm-to-table supply chain platform with four roles (farmer, consumer, delivery, admin).
      • ML model predicts crop prices for profitability.
      • Built with React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Flask.
      • Direct farmer-to-consumer transactions ensuring fair pricing.`,
      link: "https://dailyvegies.onrender.com/",
      github: "#"
    },
    {
      title: "Business-to-Trader",
      desc: `Full-stack MERN app connecting businesses directly to local shopkeepers.
      • Eliminates middlemen to increase profitability.
      • UI built with React.js & Tailwind CSS.
      • Backend powered by Node.js, Express.js, MongoDB.`,
      github: "https://github.com/vyenkatesh-chavan/bussinesstotrader"
    },
    {
      title: "Final Bid",
      desc: `Real-time bidding platform for project posting & bidding.
      • Integrated ML-powered chatbot to predict project prices.
      • Secure flows & chat-based interactions.
      • Stack: MERN (React, Tailwind, Node.js, Express, MongoDB).`,
      github: "https://github.com/vyenkatesh-chavan/finalbid"
    },
    {
      title: "Workik Project – AI Test Case Generator",
      desc: `AI-powered test case generator integrated with GitHub.
      • Fetches repo files & generates AI test case suggestions.
      • Supports frameworks like JUnit, Selenium.
      • Optional PR creation directly into GitHub.
      • Built with React, TailwindCSS, Node.js/Express, GitHub API.`,
      link: "https://drive.google.com/drive/folders/1Qk7BMob5K6-J7v7IUiUmmPz5XEyrUijs",
      github: "https://github.com/vyenkatesh-chavan/Workik_project"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-gray-600 whitespace-pre-line mb-4">{p.desc}</p>
              <div className="flex space-x-4">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Live Demo / Video
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;