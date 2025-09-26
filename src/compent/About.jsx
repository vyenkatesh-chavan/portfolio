import React, { useState, useEffect, useRef } from 'react';
import { Code, Award, Users, Star, MapPin, GraduationCap, User } from 'lucide-react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const sectionRef = useRef(null);

  const skills = [
    'React & Next.js',
    'Node.js & Express',
    'MongoDB',
    'Python & C++',
    'Java',
    'Tailwind CSS & GitHub',
    'Numpy Pandas and Matplotlib',
    'Docker'
  ];

  const achievements = [
    { icon: Award, title: "CGPA 9.03", desc: "Consistent academic excellence at PICT" },
    { icon: Code, title: 'Daily-Vegies', desc: 'ML-powered farm-to-table supply chain platform' },
    { icon: Users, title: 'Team Leader & Volunteer', desc: 'Active in IEEE, INC, GDU, PICTOREAL events' },
    { icon: Star, title: 'Projects Portfolio', desc: 'Business-to-Trader, Final Bid & more on GitHub' }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'journey', label: 'Journey', icon: MapPin }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block px-6 py-3 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
            Get to know me better
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate Computer Engineering student at PICT with strong MERN stack expertise, ML integration, and a drive to build impactful digital solutions.
          </p>
        </div>

        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((ach, idx) => (
                <div key={idx} className="flex items-start space-x-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:scale-105 transition-transform">
                  <ach.icon className="text-blue-400" size={28} />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{ach.title}</h4>
                    <p className="text-gray-400">{ach.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 text-white font-medium hover:scale-105 transition-transform">
                  {skill}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'journey' && (
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="flex items-center text-white font-semibold mb-2"><GraduationCap className="mr-2" /> Education</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>BE Computer Engineering, PICT (2023–2027) — CGPA 9.03</li>
                  <li>HSC (2021–2023) — 76.67%</li>
                  <li>SSC (2020–2021) — 91.20%</li>
                </ul>
              </div>
              <div>
                <h4 className="flex items-center text-white font-semibold mb-2"><Code className="mr-2" /> Projects</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Daily-Vegies</strong>: ML + MERN farm-to-table app</li>
                  <li><strong>Business-to-Trader</strong>: MERN app for B2B connections</li>
                  <li><strong>Final Bid</strong>: Real-time bidding with ML chatbot</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
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
}

export default About;
