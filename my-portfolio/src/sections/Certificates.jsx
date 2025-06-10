import React, { useState, useEffect } from 'react';

function Certificates() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const certificates = [
  {
    title: 'Ethical Hacking',
    issuer: 'NPTEL',
    date: 'Aug 2024 - Nov 2024',
    category: 'cybersecurity',
    level: 'Intermediate',
    icon: '🛡️',
    color: 'from-red-500 to-pink-500',
    skills: ['Vulnerability Analysis', 'Penetration Testing', 'Network Security'],
    url: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS94S35710000303850615'
  },
  {
    title: 'Full-Stack JavaScript Developer',
    issuer: 'IBM (Coursera)',
    date: 'May 2024 - Jul 2024',
    category: 'fullstack',
    level: 'Advanced',
    icon: '🌐',
    color: 'from-yellow-500 to-orange-500',
    skills: ['Node.js', 'React', 'Express', 'MongoDB'],
    url:'https://coursera.org/share/570259f0b437896d8bf933ce9bcd252b'
  },
  {
    title: 'Cybersecurity Certificate',
    issuer: 'Google (Coursera)',
    date: '2024',
    category: 'cybersecurity',
    level: 'Intermediate',
    icon: '🔐',
    color: 'from-green-500 to-emerald-500',
    skills: ['Security Foundations', 'Threat Management', 'Risk Assessment'],
    url: 'https://coursera.org/share/42c9108bd3343f02d16d2bdad914165a'

  },
  {
    title: 'Backend JavaScript Developer',
    issuer: 'IBM (Coursera)',
    date: '2024',
    category: 'backend',
    level: 'Advanced',
    icon: '🖥️',
    color: 'from-purple-500 to-indigo-500',
    skills: ['Node.js', 'Express', 'APIs', 'Databases'],
    url: 'https://coursera.org/share/55fe8ea36c7c565f95884b6df0276ddb'
  },
 {
    title: 'Google AI Essentials',
    issuer: 'Google (Coursera)',
    date: '2024',
    category: 'ai-ml',
    level: 'Intermediate',
    icon: '🧠',
    color: 'from-blue-500 to-teal-500',
    skills: ['Generative AI', 'Artificial Intelligence', 'Machine Learning'],
    url: 'https://coursera.org/share/6ffcd6b8aa3061ec8c33a446f855b06b'
  }
];


  const categories = [
    { name: 'all', label: 'All Certificates', count: certificates.length },
    { name: 'backend', label: 'Backend', count: certificates.filter(cert => cert.category === 'backend').length },
    { name: 'cybersecurity', label: 'Cybersecurity', count: certificates.filter(cert => cert.category === 'cybersecurity').length },
    { name: 'fullstack', label: 'Fullstack', count: certificates.filter(cert => cert.category === 'fullstack').length },
    { name: 'ai-ml', label: 'AI/ML', count: certificates.filter(cert => cert.category === 'ai-ml').length }
];

  const filteredCertificates = activeCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeCategory);

  const getLevelColor = (level) => {
    switch(level) {
      case 'Advanced': return 'text-red-400 bg-red-500/10 border-red-500/30';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
      case 'Fundamental': return 'text-green-400 bg-green-500/10 border-green-500/30';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/30';
    }
  };

  const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('Certificate link copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};


  return (
    <section 
      id="certificates" 
      className="py-24 px-6 bg-gradient-to-b from-indigo-950 via-gray-950 to-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Certificates</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Continuous learning journey through 
            <span className="text-purple-400 font-medium"> verified certifications</span> and 
            <span className="text-indigo-400 font-medium"> professional achievements</span>
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 group relative ${
                activeCategory === category.name
                  ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-white border border-purple-500/30 backdrop-blur-sm'
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-gray-700/30'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {category.label}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === category.name ? 'bg-white/20' : 'bg-gray-700/50'
                }`}>
                  {category.count}
                </span>
              </span>
              {activeCategory === category.name && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1200 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filteredCertificates.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Certificate Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-indigo-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-400">{cert.issuer}</span>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <span className="text-gray-400">{cert.date}</span>
                  </div>
                </div>
              </div>

              {/* Level Badge */}
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border mb-4 ${getLevelColor(cert.level)}`}>
                {cert.level}
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700/50 group-hover:border-purple-500/30 group-hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Certificate Actions */}
              <div className="flex gap-3">
                <a 
  href={cert.url} 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
>
  View Certificate
</a>

                <button 
  onClick={() => copyToClipboard(cert.url)}
  className="px-4 py-2 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-500/10 transition-all duration-300"
>
  🔗
</button>

              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              
              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        
      </div>

      {/* Floating geometric elements */}
      <div className="absolute top-20 left-8 w-4 h-4 border-2 border-purple-400/20 rounded-lg rotate-45 animate-spin" style={{animationDuration: '12s'}}></div>
      <div className="absolute bottom-20 right-12 w-6 h-6 bg-indigo-400/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-12 w-2 h-2 bg-cyan-400/30 rounded-full animate-ping"></div>
      
      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}

export default Certificates;