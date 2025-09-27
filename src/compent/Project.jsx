import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projectList = [
    {
      title: "DAILY-VEGIES",
      desc: `Farm-to-table supply chain platform with four roles (farmer, consumer, delivery, admin).
      • ML model predicts crop prices for profitability.
      • Built with React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Flask.
      • Direct farmer-to-consumer transactions ensuring fair pricing.`,
      link: "https://dailyvegies.onrender.com/",
      github: "#",
      tech: ["React.js", "Node.js", "MongoDB", "ML"]
    },
    {
      title: "Business-to-Trader",
      desc: `Full-stack MERN app connecting businesses directly to local shopkeepers.
      • Eliminates middlemen to increase profitability.
      • UI built with React.js & Tailwind CSS.
      • Backend powered by Node.js, Express.js, MongoDB.`,
      github: "https://github.com/vyenkatesh-chavan/bussinesstotrader",
      tech: ["MERN", "Tailwind", "Express.js"]
    },
    {
      title: "Final Bid",
      desc: `Real-time bidding platform for project posting & bidding.
      • Integrated ML-powered chatbot to predict project prices.
      • Secure flows & chat-based interactions.
      • Stack: MERN (React, Tailwind, Node.js, Express, MongoDB).`,
      github: "https://github.com/vyenkatesh-chavan/finalbid",
      tech: ["MERN", "ML", "Real-time"]
    },
    {
      title: "AI Test Case Generator",
      desc: `AI-powered test case generator integrated with GitHub.
      • Fetches repo files & generates AI test case suggestions.
      • Supports frameworks like JUnit, Selenium.
      • Optional PR creation directly into GitHub.
      • Built with React, TailwindCSS, Node.js/Express, GitHub API.`,
      link: "https://drive.google.com/drive/folders/1Qk7BMob5K6-J7v7IUiUmmPz5XEyrUijs",
      github: "https://github.com/vyenkatesh-chavan/Workik_project",
      tech: ["AI", "GitHub API", "React", "Node.js"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
            My Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here's a showcase of my recent work, featuring full-stack applications with cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 transition-all duration-300 hover:bg-blue-600/20 hover:scale-110 text-gray-300 hover:text-blue-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 transition-all duration-300 hover:bg-purple-600/20 hover:scale-110 text-gray-300 hover:text-purple-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-300 whitespace-pre-line mb-6 leading-relaxed">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global Styles */}
      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
