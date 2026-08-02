import React, { useState, useEffect, useCallback } from "react";
import RecipeImg from "../assets/images/Recipemaker.png";
import CarGameImg from "../assets/images/Cargame.png";
import LegalAIImg from "../assets/images/Legal_AI.png";
import FinAIImg from "../assets/images/Finai.png";
import SignImg from "../assets/images/Sign.png";
import AlrisImg from "../assets/images/Alris.png";
import FixConnectImg from "../assets/images/Fixconnect.jpg";
import SwivoraImg from "../assets/images/Swivora.png";
import StoreImg from "../assets/images/StoreManagement.png";
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

  // Projects sorted: featured first, then others
  const projects = [
    {
      id: 1,
      title: "Alris",
      subtitle: "Civic Issue Reporting Platform",
      column: "Civic Tech",
      description:
        "Full-stack civic issue reporting platform with REST APIs, geospatial reporting, and PostgreSQL/PostGIS. Built a Python microservice using OpenAI CLIP & FAISS for image-based duplicate detection. JWT-based auth and geospatial clustering.",
      technologies: ["TypeScript", "Express", "Python", "FastAPI", "PostgreSQL", "PostGIS"],
      image: AlrisImg,
      liveUrl: null,
      codeUrl: "https://github.com/Noah12398/Alris-App",
      featured: true,
      period: "Mar 2026",
    },
    {
      id: 2,
      title: "FixConnect",
      subtitle: "Service Professionals Platform",
      column: "MERN Stack",
      description:
        "MERN-stack platform connecting citizens with verified service professionals. MongoDB geospatial queries, JWT authentication, role-based access control, Supabase storage, and real-time request tracking.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "Supabase"],
      image: FixConnectImg,
      liveUrl: null,
      codeUrl: "https://github.com/Aswan-A/FixConnect",
      featured: true,
      period: "Oct 2025",
    },
    {
      id: 3,
      title: "Swivora",
      subtitle: "AI Skill Exchange Platform",
      column: "Technology",
      description:
        "An AI-powered web app for seamless peer-to-peer skill exchange through real-time chat.",
      technologies: ["Flutter", "TogetherAI", "Firebase"],
      image: SwivoraImg,
      liveUrl: "https://noah12398.github.io/SkillSwapper/",
      codeUrl: "https://github.com/Noah12398/SkillSwapper",
      featured: true,
      period: "2024",
    },
    {
      id: 4,
      title: "FinAI Adviser",
      subtitle: "Personal Finance Web App",
      column: "Finance",
      description:
        "Full-stack personal finance app with Django REST framework and PostgreSQL. NLP-based expense analysis for personalized financial advice. Improved budgeting efficiency by 30% with intuitive dashboards and budget alerts.",
      technologies: ["Django", "NLP", "PostgreSQL", "Python"],
      image: FinAIImg,
      liveUrl: "https://financial-ai-1.onrender.com/Adviser/",
      codeUrl: "https://github.com/Noah12398/Financial_AI",
      featured: true,
      period: "Jan – Feb 2025",
    },
    {
      id: 5,
      title: "Legal AI",
      subtitle: "AI Legal Advisory System",
      column: "Law",
      description:
        "An AI-powered assistant providing legal advice based on Indian law using NLP.",
      technologies: ["Python", "Flask", "OpenAI", "Render"],
      image: LegalAIImg,
      liveUrl: "https://lawful-ai.onrender.com/",
      codeUrl: "https://github.com/Noah12398/Lawful_AI",
      featured: true,
      period: "2024",
    },
    {
      id: 6,
      title: "Store Management System",
      subtitle: "Supermarket ERP",
      column: "Fullstack",
      description:
        "Full-stack supermarket management system for inventory, billing, attendance, and sales tracking. Flask and MySQL backend APIs with role-based access control and real-time stock updates.",
      technologies: ["Flask", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap"],
      image: StoreImg,
      liveUrl: null,
      codeUrl: "https://github.com/Noah12398/Grocery_Mangagement_System",
      featured: false,
      period: "Jan – Apr 2025",
    },
    {
      id: 7,
      title: "Recipe Maker",
      subtitle: "Firebase Recipe Manager",
      column: "Lifestyle",
      description:
        "Recipe app enabling users to discover, create, and share 100+ recipes. Firebase for real-time data. Ingredient-based filtering improved recipe search efficiency by 40%.",
      technologies: ["Flutter", "Firebase", "Dart"],
      image: RecipeImg,
      liveUrl: "https://recipe-maker-9c7a0.web.app/",
      codeUrl: "https://github.com/Noah12398/Recipe-Maker",
      featured: false,
      period: "Dec 2024 – Jan 2025",
    },
    {
      id: 8,
      title: "Sign Language Translator",
      subtitle: "Accessibility Tool",
      column: "Accessibility",
      description:
        "A web app that converts sign language gestures into text using a webcam and TensorFlow.",
      technologies: ["React", "TensorFlow.js", "Vercel"],
      image: SignImg,
      liveUrl: "https://sign-language-pi.vercel.app/",
      codeUrl: "https://github.com/Noah12398/Sign-Language",
      featured: false,
      period: "2024",
    },
    {
      id: 9,
      title: "Car Game",
      subtitle: "2D Racing Game",
      column: "Entertainment",
      description:
        "Fast-paced car racing game with smooth controls, customizable vehicles, and challenging tracks. Unique per-car physics and immersive graphics engineered with LibGDX.",
      technologies: ["Java", "LibGDX"],
      image: CarGameImg,
      liveUrl: null,
      codeUrl: "https://github.com/Noah12398/CarGame",
      featured: false,
      period: "Jul – Nov 2024",
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

  // Placeholder for projects without images
  const NoImageCard = ({ project }) => (
    <div style={{
      width: '100%',
      height: '180px',
      backgroundColor: 'var(--ink)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(245,240,232,0.08) 19px, rgba(245,240,232,0.08) 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(245,240,232,0.08) 19px, rgba(245,240,232,0.08) 20px)',
      }} />
      <div style={{
        fontFamily: 'var(--font-headline)',
        fontSize: '3rem',
        fontWeight: 900,
        color: 'rgba(245,240,232,0.12)',
        letterSpacing: '-0.02em',
        textAlign: 'center',
        padding: '0 1rem',
        lineHeight: 1,
        position: 'relative',
        zIndex: 1,
      }}>
        {project.title}
      </div>
      {project.period && (
        <div style={{
          fontFamily: 'var(--font-special)',
          fontSize: '0.6rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: 'rgba(245,240,232,0.4)',
          position: 'absolute',
          bottom: '10px',
          right: '12px',
        }}>
          {project.period}
        </div>
      )}
    </div>
  );

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
              fontSize: '0.8rem',
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
              fontSize: '0.8rem',
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
                    cursor: 'default',
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
                      <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.55rem', color: 'rgba(245,240,232,0.7)', letterSpacing: '0.1em' }}>
                        ★ Featured
                      </span>
                    )}
                  </div>

                  {/* Image or placeholder */}
                  <div style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--ink)' }}>
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{
                            width: '100%',
                            height: '180px',
                            objectFit: 'contain',
                            backgroundColor: 'var(--paper-dark)',
                            display: 'block',
                            transition: 'transform 0.4s',
                          }}
                          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                        />
                      </>
                    ) : (
                      <NoImageCard project={project} />
                    )}
                    {/* Caption row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 8px', borderTop: '1px solid var(--ink-light)', backgroundColor: 'var(--paper-dark)' }}>
                      <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.58rem', color: 'var(--ink-light)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        {project.period}
                      </span>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                            style={{ fontFamily: 'var(--font-special)', fontSize: '0.58rem', color: 'var(--ink)', textDecoration: 'underline', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            ↗ Live
                          </a>
                        )}
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer"
                          style={{ fontFamily: 'var(--font-special)', fontSize: '0.58rem', color: 'var(--ink)', textDecoration: 'underline', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          ↗ Code
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-headline)',
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      color: 'var(--ink)',
                      margin: '0 0 2px',
                      lineHeight: 1.2,
                    }}>
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <div style={{ fontFamily: 'var(--font-special)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-light)', marginBottom: '0.5rem' }}>
                        {project.subtitle}
                      </div>
                    )}
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--ink)', margin: '0 0 1rem', flex: 1 }}>
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
                          style={{ fontSize: '0.62rem', padding: '5px 12px', flex: 1, justifyContent: 'center' }}
                        >
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-newspaper-outline"
                        style={{ fontSize: '0.62rem', padding: '5px 12px', flex: project.liveUrl ? '0 0 auto' : 1, justifyContent: 'center' }}
                      >
                        Source Code
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
