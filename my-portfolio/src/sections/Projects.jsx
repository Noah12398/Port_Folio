import React, { useState, useEffect, useRef } from 'react';
import TranslatorImg from '../assets/images/Translator.png';
import RecipeImg from '../assets/images/Recipemaker.png';
import CarGameImg from '../assets/images/Cargame.png';
import LegalAIImg from '../assets/images/Legal_AI.png';
import NotesImg from '../assets/images/Notes.png';
import TitanicImg from '../assets/images/Titanic.png';
import FinAIImg from '../assets/images/Finai.png';
import SignImg from '../assets/images/Sign.png';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef(null);
  const intervalRef = useRef(null);

  const projects = [
  {
    id: 1,
    title: "Translator",
    description: "A simple translation app that helps users translate text between languages.",
    technologies: ["Python", "Tkinter"],
    image: TranslatorImg,
    liveUrl: null,
    codeUrl: "https://github.com/Noah12398/Translator",
    featured: false,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Recipe Maker",
    description: "A Firebase-powered recipe manager where users can add, view, and delete cooking recipes.",
    technologies: ["Flutter", "Firebase"],
    image: RecipeImg,
    liveUrl: "https://recipe-maker-9c7a0.web.app/",
    codeUrl: "https://github.com/Noah12398/Recipe-Maker",
    featured: true,
    gradient: "from-orange-400 to-red-400"
  },
  {
    id: 3,
    title: "Car Game",
    description: "A 2D car racing game developed using LibGDX with exciting gameplay and graphics.",
    technologies: ["Java", "LibGDX"],
    image: CarGameImg,
    liveUrl: null,
    codeUrl: "https://github.com/Noah12398/CarGame",
    featured: false,
    gradient: "from-yellow-500 to-red-500"
  },
  {
    id: 4,
    title: "Legal AI",
    description: "An AI-powered assistant providing legal advice based on Indian law using NLP.",
    technologies: ["Python", "Flask", "OpenAI", "Render"],
    image: LegalAIImg,
    liveUrl: "https://lawful-ai.onrender.com/",
    codeUrl: "https://github.com/Noah12398/Lawful_AI",
    featured: true,
    gradient: "from-purple-600 to-indigo-600"
  },
  {
    id: 5,
    title: "Notes",
    description: "A notes-taking app with CRUD functionality and local storage integration.",
    technologies: ["React", "JavaScript", "CSS"],
    image: NotesImg,
    liveUrl: null,
    codeUrl: "https://github.com/Noah12398/NotesApp",
    featured: false,
    gradient: "from-gray-600 to-gray-900"
  },
  {
    id: 6,
    title: "Titanic Survival Prediction",
    description: "A machine learning project that predicts passenger survival on the Titanic.",
    technologies: ["Python", "Flask", "scikit-learn"],
    image: TitanicImg,
    liveUrl: "https://titanic-y364.onrender.com",
    codeUrl: "https://github.com/Noah12398/Titanic",
    featured: false,
    gradient: "from-blue-700 to-blue-400"
  },
  {
    id: 7,
    title: "Financial Adviser AI",
    description: "A smart financial assistant that analyzes user expenses and provides insights using AI.",
    technologies: ["Django", "PostgreSQL", "OpenAI"],
    image: FinAIImg,
    liveUrl: "https://financial-ai-1.onrender.com/Adviser/",
    codeUrl: "https://github.com/Noah12398/Financial_AI",
    featured: true,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 8,
    title: "Sign Language Translator",
    description: "A web app that converts sign language gestures into text using a webcam and TensorFlow.",
    technologies: ["React", "TensorFlow.js", "Vercel"],
    image: SignImg,
    liveUrl: "https://sign-language-pi.vercel.app/",
    codeUrl: "https://github.com/Noah12398/Sign-Language",
    featured: true,
    gradient: "from-pink-500 to-fuchsia-500"
  }
];


  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, projects.length]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 400;
      const gap = 24;
      const scrollPosition = currentIndex * (cardWidth + gap);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section  className="py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden" id="projects">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8 rounded-full shadow-lg shadow-purple-500/50"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover my latest creations and technical innovations
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={handlePrevious}
            className="group p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-white group-hover:text-purple-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="group p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-white group-hover:text-purple-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Projects Horizontal Scroll */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex-none w-96 group cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-all duration-500`}></div>
                    
                    {/* Quick Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 hover:bg-white text-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                        title="View Live Site"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 hover:bg-white text-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                        title="View Source Code"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-full border border-white/20 hover:border-white/40 transition-all duration-200 hover:scale-105 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
  {project.liveUrl && (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-purple-500/25 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 text-sm`}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
      Live Demo
    </a>
  )}

                      
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 border border-white/30 hover:border-white/50 text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Noah12398"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 hover:border-white/40 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
          >
            <span>View All Projects on GitHub</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default Projects;