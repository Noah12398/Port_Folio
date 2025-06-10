import React, { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = ['Home', 'About', 'Projects','Certificates', 'Contact'];

  // Detect scroll to set header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect active section in view
  useEffect(() => {
    const sectionIds = navItems.map(item => item.toLowerCase());
    const sections = sectionIds.map(id => document.getElementById(id));

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(entry => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6, // Trigger when 60% of the section is visible
      }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navItems]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md shadow-2xl border-b border-purple-500/30'
          : 'bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-indigo-900/5"></div>

      <div className="max-w-6xl mx-auto px-6 py-4 relative z-10">
        <nav className="flex justify-between items-center">
          {/* Logo and Name */}
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ping"></div>
            </div>

            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                Noah
              </span>
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent ml-2">
                John Puthayathu
              </span>
            </div>
          </div>

          {/* Navigation */}
          <ul className="flex space-x-1">
            {navItems.map(item => {
              const id = item.toLowerCase();
              return (
                <li key={item}>
                  <a
                    href={`#${id}`}
                    className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 group ${
                      activeSection === id
                        ? 'text-white bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-indigo-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {item}
                    </span>
                    {activeSection === id && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse"></div>
                    )}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 group-hover:w-8 transition-all duration-300"></div>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      {/* Floating particles */}
      <div className="absolute top-2 left-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-4 right-1/3 w-1 h-1 bg-indigo-400/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-cyan-400/40 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
    </header>
  );
}

export default Header;
