import React, { useState, useEffect, useCallback } from "react";
import TranslatorImg from "../assets/images/Translator.png";
import RecipeImg from "../assets/images/Recipemaker.png";
import CarGameImg from "../assets/images/Cargame.png";
import LegalAIImg from "../assets/images/Legal_AI.png";
import NotesImg from "../assets/images/Notes.png";
import TitanicImg from "../assets/images/Titanic.png";
import FinAIImg from "../assets/images/Finai.png";
import SignImg from "../assets/images/Sign.png";
import SwivoraImg from "../assets/images/Swivora.png";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 3 },
      },
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("reInit", () => setScrollSnaps(emblaApi.scrollSnapList()));
  }, [emblaApi]);

  const projects = [
    {
      id: 1,
      title: "Swivora",
      column: "Technology",
      description: "An AI-powered web app for seamless peer-to-peer skill exchange through real-time chat.",
      technologies: ["Flutter", "TogetherAI", "Firebase"],
      image: SwivoraImg,
      liveUrl: "https://noah12398.github.io/SkillSwapper/",
      codeUrl: "https://github.com/Noah12398/SkillSwapper",
      featured: true,
    },
    {
      id: 2,
      title: "Recipe Maker",
      column: "Lifestyle",
      description: "A Firebase-powered recipe manager where users can add, view, and delete cooking recipes.",
      technologies: ["Flutter", "Firebase"],
      image: RecipeImg,
      liveUrl: "https://recipe-maker-9c7a0.web.app/",
      codeUrl: "https://github.com/Noah12398/Recipe-Maker",
      featured: true,
    },
    {
      id: 3,
      title: "Car Game",
      column: "Entertainment",
      description: "A 2D car racing game developed using LibGDX with exciting gameplay and graphics.",
      technologies: ["Java", "LibGDX"],
      image: CarGameImg,
      liveUrl: null,
      codeUrl: "https://github.com/Noah12398/CarGame",
      featured: false,
    },
    {
      id: 4,
      title: "Financial Adviser AI",
      column: "Finance",
      description: "A smart financial assistant that analyzes user expenses and provides insights using AI.",
      technologies: ["Django", "PostgreSQL", "OpenAI"],
      image: FinAIImg,
      liveUrl: "https://financial-ai-1.onrender.com/Adviser/",
      codeUrl: "https://github.com/Noah12398/Financial_AI",
      featured: true,
    },
    {
      id: 5,
      title: "Legal AI",
      column: "Law",
      description: "An AI-powered assistant providing legal advice based on Indian law using NLP.",
      technologies: ["Python", "Flask", "OpenAI", "Render"],
      image: LegalAIImg,
      liveUrl: "https://lawful-ai.onrender.com/",
      codeUrl: "https://github.com/Noah12398/Lawful_AI",
      featured: true,
    },
    {
      id: 6,
      title: "Notes",
      column: "Productivity",
      description: "A notes-taking app with CRUD functionality and local storage integration.",
      technologies: ["React", "JavaScript", "CSS"],
      image: NotesImg,
      liveUrl: null,
      codeUrl: "https://github.com/Noah12398/NotesApp",
      featured: false,
    },
    {
      id: 7,
      title: "Titanic Survival Prediction",
      column: "Data Science",
      description: "A machine learning project that predicts passenger survival on the Titanic.",
      technologies: ["Python", "Flask", "scikit-learn"],
      image: TitanicImg,
      liveUrl: "https://titanic-y364.onrender.com",
      codeUrl: "https://github.com/Noah12398/Titanic",
      featured: false,
    },
    {
      id: 8,
      title: "Sign Language Translator",
      column: "Accessibility",
      description: "A web app that converts sign language gestures into text using a webcam and TensorFlow.",
      technologies: ["React", "TensorFlow.js", "Vercel"],
      image: SignImg,
      liveUrl: "https://sign-language-pi.vercel.app/",
      codeUrl: "https://github.com/Noah12398/Sign-Language",
      featured: true,
    },
    {
      id: 9,
      title: "Translator",
      column: "Utilities",
      description: "A simple translation app that helps users translate text between languages.",
      technologies: ["Python", "Tkinter"],
      image: TranslatorImg,
      liveUrl: null,
      codeUrl: "https://github.com/Noah12398/Translator",
      featured: false,
    },
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const handlePrevious = useCallback(() => {
    if (emblaApi) { emblaApi.scrollPrev(); setIsAutoPlaying(false); }
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    if (emblaApi) { emblaApi.scrollNext(); setIsAutoPlaying(false); }
  }, [emblaApi]);

  const handleDotClick = useCallback((index) => {
    if (emblaApi) { emblaApi.scrollTo(index); setIsAutoPlaying(false); }
  }, [emblaApi]);

  const handleMouseEnter = useCallback(() => {
    if (emblaApi) {
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) autoplay.stop();
    }
  }, [emblaApi]);

  const handleMouseLeave = useCallback(() => {
    if (emblaApi && isAutoPlaying) {
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) autoplay.play();
    }
  }, [emblaApi, isAutoPlaying]);

  return (
    <section
      id="projects"
      style={{
        padding: '4rem 1.5rem',
        backgroundColor: 'var(--paper-dark)',
        borderTop: '3px double var(--ink)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ fontFamily: 'var(--font-special)', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--ink-light)', marginBottom: '0.5rem' }}>
            — Portfolio Showcase —
          </div>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            color: 'var(--ink)',
            margin: '0 0 0.5rem',
            lineHeight: 1,
          }}>
            Featured Projects
          </h2>
          <div style={{ borderTop: '3px double var(--ink)', margin: '0.8rem auto', width: '180px' }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--ink-light)', margin: 0 }}>
            Discover the latest creations and technical innovations
          </p>
        </div>

        {/* Carousel Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <button
            onClick={handlePrevious}
            style={{
              border: '2px solid var(--ink)',
              background: 'var(--paper)',
              color: 'var(--ink)',
              padding: '6px 14px',
              fontFamily: 'var(--font-special)',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--paper)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--paper)'; e.currentTarget.style.color = 'var(--ink)'; }}
          >
            ← Prev
          </button>

          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                style={{
                  width: index === currentIndex ? '24px' : '8px',
                  height: '8px',
                  border: '1px solid var(--ink)',
                  background: index === currentIndex ? 'var(--ink)' : 'transparent',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            style={{
              border: '2px solid var(--ink)',
              background: 'var(--paper)',
              color: 'var(--ink)',
              padding: '6px 14px',
              fontFamily: 'var(--font-special)',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--paper)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--paper)'; e.currentTarget.style.color = 'var(--ink)'; }}
          >
            Next →
          </button>
        </div>

        {/* Embla Carousel */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container" style={{ display: 'flex' }}>
            {projects.map((project) => (
              <div
                key={project.id}
                className="embla__slide"
                style={{ flex: '0 0 320px', marginRight: '1rem' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Newspaper Card */}
                <div
                  style={{
                    border: project.featured ? '2px solid var(--ink)' : '1px solid var(--ink)',
                    backgroundColor: 'var(--paper)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: project.featured ? '3px 3px 0 var(--ink)' : 'none',
                    transition: 'box-shadow 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '5px 5px 0 var(--ink)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = project.featured ? '3px 3px 0 var(--ink)' : 'none'; }}
                >
                  {/* Column label */}
                  <div style={{
                    borderBottom: '1px solid var(--ink)',
                    padding: '3px 10px',
                    backgroundColor: 'var(--ink)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--paper)' }}>
                      {project.column}
                    </span>
                    {project.featured && (
                      <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.55rem', color: 'var(--paper)', letterSpacing: '0.1em' }}>
                        ★ FEATURED
                      </span>
                    )}
                  </div>

                  {/* Image */}
                  <div style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--ink)' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '180px',
                        objectFit: 'cover',
                        filter: 'grayscale(100%) contrast(1.1)',
                        display: 'block',
                        transition: 'transform 0.4s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                    />
                    {/* Image caption row */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px', padding: '6px 8px', borderTop: '1px solid var(--ink-light)', backgroundColor: 'var(--paper-dark)' }}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontFamily: 'var(--font-special)', fontSize: '0.6rem', color: 'var(--ink)', textDecoration: 'underline', textTransform: 'uppercase', letterSpacing: '0.08em' }}
                          onClick={e => e.stopPropagation()}
                        >
                          ↗ Live
                        </a>
                      )}
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontFamily: 'var(--font-special)', fontSize: '0.6rem', color: 'var(--ink)', textDecoration: 'underline', textTransform: 'uppercase', letterSpacing: '0.08em' }}
                        onClick={e => e.stopPropagation()}
                      >
                        ↗ Code
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-headline)',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      color: 'var(--ink)',
                      margin: '0 0 0.5rem',
                      lineHeight: 1.2,
                    }}>
                      {project.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--ink)', margin: '0 0 1rem', flex: 1 }}>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '1rem' }}>
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tag-newspaper">{tech}</span>
                      ))}
                    </div>

                    {/* Action links */}
                    <div style={{ borderTop: '1px solid var(--ink-light)', paddingTop: '0.75rem', display: 'flex', gap: '0.75rem' }}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-newspaper"
                          style={{ fontSize: '0.65rem', padding: '5px 12px', flex: 1, justifyContent: 'center' }}
                        >
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-newspaper-outline"
                        style={{ fontSize: '0.65rem', padding: '5px 12px', flex: project.liveUrl ? '0 0 auto' : 1, justifyContent: 'center' }}
                      >
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem', borderTop: '1px solid var(--ink)', paddingTop: '2rem' }}>
          <a
            href="https://github.com/Noah12398"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-newspaper"
            style={{ fontSize: '0.75rem' }}
          >
            View All Projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
