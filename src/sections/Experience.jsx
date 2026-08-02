import React, { useState, useEffect } from 'react';

function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById('experience');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      role: 'Tech Head',
      org: 'Computer Society of India (CSI), TKMCE',
      location: 'Kollam, Kerala, India',
      period: 'Aug 2025 – Present',
      type: 'Leadership',
      bullets: [
        'Organized 5+ tech-focused workshops and coding events, impacting over 300 students.',
        'Improved event efficiency by introducing reusable code templates and automation scripts, reducing setup time.',
        'Facilitated cross-functional collaboration among 4 teams for seamless event execution.',
      ],
    },
    {
      role: 'Research Intern',
      org: 'Centre for Development of Imaging Technology (CDIT)',
      location: 'Thiruvananthapuram, Kerala',
      period: 'Internship',
      type: 'Research',
      stack: 'FastAPI · Python · PostgreSQL · RAG',
      bullets: [
        'Developed disease-matching logic using symptom extraction, rule-based scoring, and Retrieval-Augmented Generation (RAG) for an AI-assisted agricultural advisory system in Malayalam.',
        'Built FastAPI-based REST APIs to integrate diagnostic modules with frontend services and knowledge retrieval components.',
        'Designed modular backend components to support scalable disease diagnosis and recommendation workflows.',
      ],
    },
    {
      role: 'Software Intern',
      org: 'Event Management System — TKMCE',
      location: 'Kollam, Kerala',
      period: 'Apr 2026 – Jun 2026',
      type: 'Internship',
      stack: 'Svelte · TypeScript',
      bullets: [
        'Developed responsive interfaces for a digital platform automating multi-level college event approval workflows.',
        'Collaborated with backend services through REST APIs to improve workflow efficiency and usability.',
      ],
    },
  ];

  const research = [
    {
      title: 'Hierarchical Long-Document Summarization using LED for Legal Judgments',
      venue: 'ACL JUST-NLP 2025',
      venueType: 'Published',
      link: 'https://aclanthology.org/2025.justnlp-main.22',
      bullets: [
        'Implemented hierarchical legal text summarization using the Longformer Encoder-Decoder (LED) architecture.',
        'Optimized training pipeline with global attention mechanisms and gradient accumulation for long documents.',
      ],
    },
    {
      title: 'Law in Thought: Auto-CoT Prompting for Legal Reasoning with LLMs',
      venue: 'ICTEST 2026 (IEEE)',
      venueType: 'Presented',
      bullets: [
        'Presented an automated Chain-of-Thought prompting framework for legal reasoning using Large Language Models.',
        'Integrated Sentence-BERT embeddings with FAISS retrieval; evaluated on legal benchmarks including COLIEE.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="newsprint"
      style={{
        padding: '4rem 1.5rem',
        borderTop: '3px double var(--ink)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2.5rem',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.7s ease',
        }}>
          <div style={{ fontFamily: 'var(--font-special)', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--ink-light)', marginBottom: '0.5rem' }}>
            — Career & Scholarship —
          </div>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            color: 'var(--ink)',
            margin: '0 0 0.5rem',
            lineHeight: 1,
          }}>
            Experience & Research
          </h2>
          <div style={{ borderTop: '3px double var(--ink)', margin: '0.8rem auto', width: '220px' }} />
        </div>

        {/* ─── WORK EXPERIENCE ─── */}
        <div style={{
          borderTop: '4px solid var(--ink)',
          borderBottom: '1px solid var(--ink)',
          padding: '4px 0',
          marginBottom: '1.5rem',
          textAlign: 'center',
        }}>
          <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            Work Experience
          </span>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
          border: '1px solid var(--ink)',
          marginBottom: '3rem',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.7s ease 0.2s',
        }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              style={{
                padding: '1.5rem',
                borderBottom: i < experiences.length - 1 ? '1px solid var(--ink)' : 'none',
                backgroundColor: i % 2 === 0 ? 'var(--paper)' : 'var(--paper-dark)',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '1rem',
              }}
            >
              {/* Left content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '4px', flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--ink)', margin: 0 }}>
                    {exp.role}
                  </h3>
                  <span className="tag-newspaper-filled" style={{ fontSize: '0.55rem' }}>{exp.type}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--ink)', marginBottom: '2px' }}>
                  <strong>{exp.org}</strong>
                </div>
                <div style={{ fontFamily: 'var(--font-special)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-light)', marginBottom: '0.75rem' }}>
                  {exp.location}
                  {exp.stack && <> · <span style={{ color: 'var(--ink)' }}>{exp.stack}</span></>}
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      color: 'var(--ink)',
                      paddingLeft: '1.2rem',
                      position: 'relative',
                    }}>
                      <span style={{ position: 'absolute', left: 0, fontFamily: 'var(--font-special)', fontSize: '0.65rem' }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: period */}
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{
                  fontFamily: 'var(--font-special)',
                  fontSize: '0.6rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--ink-light)',
                  borderLeft: '2px solid var(--ink)',
                  paddingLeft: '8px',
                  whiteSpace: 'nowrap',
                }}>
                  {exp.period}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── RESEARCH ─── */}
        <div style={{
          borderTop: '4px solid var(--ink)',
          borderBottom: '1px solid var(--ink)',
          padding: '4px 0',
          marginBottom: '1.5rem',
          textAlign: 'center',
        }}>
          <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            Research Publications
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.7s ease 0.4s',
        }}>
          {research.map((paper, i) => (
            <div
              key={i}
              style={{
                border: '2px solid var(--ink)',
                borderTop: '4px solid var(--ink)',
                padding: '1.25rem',
                backgroundColor: 'var(--paper)',
                position: 'relative',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '4px 4px 0 var(--ink)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Venue badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span className="tag-newspaper-filled" style={{ fontSize: '0.6rem' }}>
                  {paper.venueType}
                </span>
                <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-light)' }}>
                  {paper.venue}
                </span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: '1.05rem',
                fontWeight: 700,
                fontStyle: 'italic',
                color: 'var(--ink)',
                lineHeight: 1.35,
                margin: '0 0 1rem',
                borderBottom: '1px dashed var(--ink-light)',
                paddingBottom: '0.75rem',
              }}>
                {paper.title}
              </h3>

              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: paper.link ? '1rem' : 0 }}>
                {paper.bullets.map((b, j) => (
                  <li key={j} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    color: 'var(--ink)',
                    paddingLeft: '1.2rem',
                    position: 'relative',
                  }}>
                    <span style={{ position: 'absolute', left: 0, fontFamily: 'var(--font-special)', fontSize: '0.65rem' }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              {paper.link && (
                <div style={{ borderTop: '1px solid var(--ink-light)', paddingTop: '0.75rem' }}>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-newspaper"
                    style={{ fontSize: '0.62rem', padding: '5px 12px' }}
                  >
                    Read Paper →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="divider-star" style={{ marginTop: '1rem' }}>✦ ✦ ✦</div>
      </div>
    </section>
  );
}

export default Experience;
