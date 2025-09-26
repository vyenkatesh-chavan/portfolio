import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Database, Brain } from 'lucide-react';
import resume from '../public/Resume.pdf'; // import your PDF

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ["MERN Developer", "Full-Stack Engineer", "ML Enthusiast", "Problem Solver"];

  useEffect(() => {
    setIsVisible(true);
    const roleInterval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(roleInterval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about') || document.querySelector('section:nth-child(2)');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden flex items-center justify-center">
      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Main Content */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              Welcome to my digital space
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Vyenkatesh
            </span>
            <br />
            <span className="text-white">Chavan</span>
          </h1>

          {/* Animated Role */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <p className="text-2xl md:text-3xl font-semibold text-blue-300">
              <span className="text-gray-300">I'm a </span>
              <span className="inline-block min-w-80 text-left">
                <span key={currentRole} className="animate-fade-in-up bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {roles[currentRole]}
                </span>
              </span>
            </p>
          </div>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Computer Engineer passionate about building scalable full-stack applications with cutting-edge ML integration. I transform ideas into powerful digital experiences.
          </p>

          {/* Tech Stack Icons */}
          <div className="flex justify-center gap-6 mb-12">
            <div className="group cursor-pointer">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                <Code className="w-8 h-8 text-blue-400" />
              </div>
              <p className="text-sm text-gray-400 mt-2">Frontend</p>
            </div>
            <div className="group cursor-pointer">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                <Database className="w-8 h-8 text-green-400" />
              </div>
              <p className="text-sm text-gray-400 mt-2">Backend</p>
            </div>
            <div className="group cursor-pointer">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-sm text-gray-400 mt-2"> Data Analysis </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="flex items-center justify-center gap-2">
                View My Work
                <div className="transition-transform duration-300 group-hover:translate-x-1">→</div>
              </span>
            </button>

            {/* Download Resume Button */}
            <a
              href={resume}
              download="Vyenkatesh_Chavan_Resume.pdf"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-110 text-gray-300 hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-110 text-gray-300 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-110 text-gray-300 hover:text-white">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div onClick={scrollToNext} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
          <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
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
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Home;