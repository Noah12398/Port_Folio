import React, { useState, useEffect } from 'react';
import TiltCard from '../components/TiltCard';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [codeIndex, setCodeIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-indigo-950 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
  <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
      About <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
    </h2>
    <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8"></div>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
      Committed to building impactful mobile applications with 
      <span className="text-purple-400 font-medium"> clean architecture</span> and 
      <span className="text-indigo-400 font-medium"> intelligent solutions</span> driven by AI/ML.
    </p>
  </div>

  <div className="grid items-center">
    <div className={`space-y-8 transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
      <div className="space-y-6">
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm an enthusiastic <span className="text-purple-400 font-semibold">Android Developer</span> with a strong inclination toward solving real-world problems through mobile technology and artificial intelligence.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          My development toolkit includes <span className="text-indigo-400 font-semibold">Kotlin, Flutter, and Firebase</span>, which I use to craft intuitive and scalable mobile applications that prioritize performance and user experience.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          With a growing passion for <span className="text-purple-400 font-semibold">AI and Machine Learning</span>, I actively integrate predictive models and intelligent features into my apps to enhance functionality and personalization.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          I believe in continuous learning, clean code practices, and building solutions that are not only innovative but also accessible and impactful.
        </p>
      </div>




            {/* Skills Grid with Tilt */}
<div style={{ perspective: '1000px' }} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

  <TiltCard>
    <div className="space-y-6 p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
      <h3 className="text-xl font-bold text-white border-b border-purple-500/30 pb-3">Frontend & UI</h3>
{['React', 'HTML & CSS', 'Tailwind CSS', 'Bootstrap'].map((skill, i) => (
        <div key={i} className="flex items-center gap-3 group">
          <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{skill}</span>
        </div>
      ))}
    </div>
  </TiltCard>

  <TiltCard>
    <div className="space-y-6 p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
      <h3 className="text-xl font-bold text-white border-b border-indigo-500/30 pb-3">Backend & Fullstack</h3>
      {['Node.js & Express', 'MongoDB / PostgreSQL', 'Firebase / REST APIs', 'Django / Flask'].map((skill, i) => (
        <div key={i} className="flex items-center gap-3 group">
          <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{skill}</span>
        </div>
      ))}
    </div>
  </TiltCard>

  <TiltCard>
    <div className="space-y-6 p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
      <h3 className="text-xl font-bold text-white border-b border-green-500/30 pb-3">AI / Game / Mobile</h3>
      {['AI Integration (OpenAI, ML)', 'LibGDX & Game Logic', 'Kotlin + Android Studio', 'Flutter'].map((skill, i) => (
        <div key={i} className="flex items-center gap-3 group">
          <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{skill}</span>
        </div>
      ))}
    </div>
  </TiltCard>

  <TiltCard>
    <div className="space-y-6 p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300">
      <h3 className="text-xl font-bold text-white border-b border-yellow-500/30 pb-3">Tools & Contributions</h3>
      {['Git, GitHub, CI/CD', 'Postman', 'Hackathons & Projects', 'Open Source & Clubs'].map((skill, i) => (
        <div key={i} className="flex items-center gap-3 group">
          <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{skill}</span>
        </div>
      ))}
    </div>
  </TiltCard>

</div>


            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-purple-500/30">
              {[
                { number: '2+', label: 'Years Learning', color: 'purple' },
                { number: '10+', label: 'Projects Built', color: 'indigo' },
                { number: '100%', label: 'Commitment', color: 'violet' }
              ].map((stat, i) => (
                <div key={i} className="text-center group cursor-pointer">
                  <div className={`text-4xl font-bold text-${stat.color}-400 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-950 to-transparent"></div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-orbit {
          animation: orbit 8s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default About;
