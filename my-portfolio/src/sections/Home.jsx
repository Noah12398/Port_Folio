import React, { useState, useEffect } from 'react';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = ['React', 'Flutter', 'Kotlin', 'Python', 'Java'];
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pb-24
                 bg-gradient-to-br from-black via-gray-950 to-indigo-950 
                 text-white px-6 text-center overflow-hidden pt-28"
    >
      {/* Mouse-tracked radial background */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.25) 0%, rgba(59, 130, 246, 0.15) 30%, transparent 60%)`,
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-indigo-900/20 to-transparent"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className={`relative z-10 max-w-5xl flex flex-col items-center justify-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight tracking-tight text-center">
          <span className="block text-gray-100 mb-2">Hello, I'm</span>
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-pulse">
            Noah John Puthayathu
          </span>
        </h1>

        <div className="h-16 flex items-center justify-center mb-6">
          <p className="text-2xl sm:text-3xl text-gray-200 font-light">
            <span className="text-gray-400">Specializing in </span>
            <span
              key={currentSkill}
              className="text-purple-400 font-medium animate-pulse"
            >
              {skills[currentSkill]}
            </span>
          </p>
        </div>

        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed font-light">
"I specialize in transforming innovative ideas into <span className="text-purple-400 font-medium">scalable, real-world solutions </span>
          by leveraging <span className="text-indigo-400 font-medium"> clean, modern technologies and best coding practices</span>,
          —ensuring performance, maintainability, and a seamless user experience."
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <a href="#projects">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-purple-500/30 hover:scale-105 min-w-[180px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-3">
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </a>

          <a href="#contact">
            <button className="group px-8 py-4 border-2 border-gray-600 hover:border-purple-400 text-gray-200 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-purple-900/30 backdrop-blur-sm min-w-[180px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800/50 to-indigo-800/50 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Connect
              </span>
            </button>
          </a>
          <a
  href="/Resume Final.pdf"
  download="Noah_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="group px-8 py-4 border-2 border-gray-600 hover:border-indigo-400 text-gray-200 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-indigo-900/30 backdrop-blur-sm min-w-[180px] relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-800/50 to-indigo-800/50 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
    <span className="relative flex items-center justify-center gap-3">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
      </svg>
      Download Resume
    </span>
  </button>
</a>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center space-y-3 group cursor-pointer">
          <span className="text-sm text-gray-500 font-medium group-hover:text-gray-200 transition-colors duration-300">
            Explore More
          </span>
          <div className="w-6 h-10 border-2 border-gray-500 group-hover:border-purple-400 rounded-full flex justify-center p-1 transition-colors duration-300">
            <div className="w-1 h-3 bg-gray-500 group-hover:bg-purple-400 rounded-full animate-pulse transition-colors duration-300"></div>
          </div>
        </div>
      </div>

      {/* Grid & Shapes */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(255,255,255,.01)_25%,rgba(255,255,255,.01)_26%,transparent_27%)] bg-[length:80px_80px] opacity-50 pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-32 h-32 border border-purple-700/30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 border border-indigo-700/30 rounded-lg rotate-45 animate-pulse hidden lg:block"></div>
    </section>
  );
}

export default Home;
