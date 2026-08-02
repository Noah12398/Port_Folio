import React, { useState, useEffect } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const skills = [
    {
      category: 'Frontend & UI',
      mark: '§ I',
      items: ['React', 'HTML & CSS', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      category: 'Backend & Fullstack',
      mark: '§ II',
      items: ['Node.js & Express', 'MongoDB / PostgreSQL', 'Firebase / REST APIs', 'Django / Flask'],
    },
    {
      category: 'AI / Game / Mobile',
      mark: '§ III',
      items: ['AI Integration (OpenAI, ML)', 'LibGDX & Game Logic', 'Kotlin + Android Studio', 'Flutter'],
    },
    {
      category: 'Tools & Contributions',
      mark: '§ IV',
      items: ['Git, GitHub, CI/CD', 'Postman', 'Hackathons & Projects', 'Open Source & Clubs'],
    },
  ];

  const stats = [
    { number: '2+', label: 'Years Learning' },
    { number: '10+', label: 'Projects Built' },
    { number: '100%', label: 'Commitment' },
  ];

  return (
    <section
      id="about"
      className="newsprint"
      style={{
        padding: '5rem 1.5rem 4rem',
        borderTop: '3px double var(--ink)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2.5rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'none' : 'translateY(16px)',
          transition: 'all 0.7s ease',
        }}>
          <div style={{ fontFamily: 'var(--font-special)', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--ink-light)', marginBottom: '0.5rem' }}>
            — Profile & Background —
          </div>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 900,
            color: 'var(--ink)',
            margin: '0 0 0.5rem',
            lineHeight: 1,
          }}>
            About Me
          </h2>
          <div style={{ borderTop: '3px double var(--ink)', margin: '1rem auto', width: '200px' }} />
        </div>

        {/* Two-column intro text */}
        <div style={{
          columnCount: 2,
          columnGap: '2.5rem',
          columnRule: '1px solid var(--ink-light)',
          marginBottom: '3rem',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.2s',
        }} className="responsive-cols">
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--ink)', textAlign: 'justify', margin: '0 0 1rem' }} className="dropcap">
            I'm an enthusiastic <strong>Android Developer</strong> with a strong inclination toward solving real-world problems through mobile technology and artificial intelligence.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--ink)', textAlign: 'justify', margin: '0 0 1rem' }}>
            My development toolkit includes <strong>Kotlin, Flutter, and Firebase</strong>, which I use to craft intuitive and scalable mobile applications that prioritize performance and user experience.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--ink)', textAlign: 'justify', margin: '0 0 1rem' }}>
            With a growing passion for <strong>AI and Machine Learning</strong>, I actively integrate predictive models and intelligent features into my apps to enhance functionality and personalization.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--ink)', textAlign: 'justify', margin: 0 }}>
            I believe in continuous learning, clean code practices, and building solutions that are not only innovative but also accessible and impactful.
          </p>
        </div>

        {/* Pullquote */}
        <div className="pullquote" style={{ marginBottom: '3rem' }}>
          "Clean architecture is not a luxury — it is the foundation of every great application."
        </div>

        {/* Skills Section Header */}
        <div style={{ borderTop: '4px solid var(--ink)', borderBottom: '1px solid var(--ink)', textAlign: 'center', padding: '4px 0', marginBottom: '2rem' }}>
          <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            Technical Competencies
          </span>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5px',
          border: '1px solid var(--ink)',
          marginBottom: '3rem',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.4s',
        }}>
          {skills.map((group, i) => (
            <div
              key={i}
              style={{
                border: '1px solid var(--ink)',
                padding: '1.25rem',
                backgroundColor: i % 2 === 1 ? 'var(--paper-dark)' : 'var(--paper)',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.5rem',
                borderBottom: '1px solid var(--ink)',
                paddingBottom: '0.5rem',
                marginBottom: '1rem',
              }}>
                <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.65rem', color: 'var(--ink-light)' }}>{group.mark}</span>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: '1rem', color: 'var(--ink)', margin: 0 }}>
                  {group.category}
                </h3>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {group.items.map((item, j) => (
                  <li key={j} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    color: 'var(--ink)',
                    padding: '4px 0',
                    borderBottom: j < group.items.length - 1 ? '1px dashed var(--ink-light)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.6rem' }}>▪</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: '3px double var(--ink)',
          borderBottom: '1px solid var(--ink)',
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
        }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid var(--ink-light)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-headline)',
                fontSize: '2.5rem',
                fontWeight: 900,
                color: 'var(--ink)',
                lineHeight: 1,
                marginBottom: '0.25rem',
              }}>
                {stat.number}
              </div>
              <div style={{ fontFamily: 'var(--font-special)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--ink-light)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .responsive-cols { column-count: 1 !important; }
        }
      `}</style>
    </section>
  );
}

export default About;
