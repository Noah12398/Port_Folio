function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white px-6 text-center overflow-hidden"
    >
      {/* Background accent elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
          Hello, I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Noah
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-light">
          Frontend Developer
        </p>
        
        <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting modern, responsive, and user-centric web experiences with 
          attention to detail and performance optimization.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105 min-w-[160px]">
            <span className="flex items-center justify-center gap-2">
              View Portfolio
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <button className="px-8 py-4 border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-800/50 min-w-[160px]">
            Get In Touch
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-500 font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-gray-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Subtle grid pattern overlay */}
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(255,255,255,.02)_25%,rgba(255,255,255,.02)_26%,transparent_27%)] bg-[length:60px_60px]"></div>
    </section>
  );
}

export default Home;