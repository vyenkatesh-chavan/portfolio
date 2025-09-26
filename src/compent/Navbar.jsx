import React, { useState, useEffect } from 'react';
import { Menu, X, Home, FileText, Mail, User, Code, Zap } from 'lucide-react';
import resume from '../public/Resume.pdf'; // import your resume

const Navbar = ({ activeItem, setActiveItem }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse tracking for gradient
  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleItemClick = (id) => {
    if (id === 'resume') {
      // Open resume in new tab
      window.open(resume, '_blank');
      setIsMenuOpen(false);
      return;
    }
    setActiveItem(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20'
            : 'bg-slate-900/80 backdrop-blur-md border-b border-white/5'
        }`}
      >
        {/* Mouse gradient background */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.1), transparent 40%)`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="group cursor-pointer flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur"></div>
              </div>
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  Vyenkatesh
                </span>
                <span className="text-white ml-2">Chavan</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeItem === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`group relative flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-20 animate-pulse"></div>
                      )}
                      <Icon
                        size={18}
                        className={`transition-colors duration-300 ${
                          isActive ? 'text-white' : 'group-hover:text-blue-400'
                        }`}
                      />
                      <span className="relative z-10">{item.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block w-6 h-0.5 bg-white transform transition-all duration-300 ${
                      isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                    }`}
                  ></span>
                  <span
                    className={`absolute block w-6 h-0.5 bg-white transform transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0' : 'top-3'
                    }`}
                  ></span>
                  <span
                    className={`absolute block w-6 h-0.5 bg-white transform transition-all duration-300 ${
                      isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="p-6 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`group w-full flex items-center space-x-4 px-5 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon
                    size={22}
                    className={`transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-blue-400 group-hover:text-white'
                    }`}
                  />
                  <span>{item.label}</span>
                  {isActive && <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>}
                </button>
              );
            })}
          </div>

          {/* Menu Footer */}
          <div className="px-6 pb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>
            <p className="text-center text-gray-400 text-sm">
              Building the future, one line at a time
            </p>
          </div>
        </div>
      </div>

      {/* Gradient animation styles */}
      <style>
        {`
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }

          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
