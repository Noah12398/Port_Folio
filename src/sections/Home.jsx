import React, { useState, useEffect } from 'react';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const skills = ['React & Svelte', 'FastAPI & Python', 'TypeScript & Node.js', 'Flutter & Mobile', 'AI & Machine Learning'];
  const [displayText, setDisplayText] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const targetWord = skills[skillIndex];
    let speed = isDeleting ? 40 : 85;

    if (!isDeleting && displayText === targetWord) {
      speed = 2000; // Pause when word is fully typed
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setSkillIndex(prev => (prev + 1) % skills.length);
      speed = 400; // Brief pause before starting next word
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(prev =>
        isDeleting ? targetWord.substring(0, prev.length - 1) : targetWord.substring(0, prev.length + 1)
      );
      if (!isDeleting && displayText === targetWord) {
        setIsDeleting(true);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, skillIndex, skills]);

  return (
    <section
      id="home"
      className="newsprint"
      style={{
        minHeight: '100vh',
        paddingTop: '160px',
        paddingBottom: '60px',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative corner marks */}
      <div style={{ position: 'absolute', top: '170px', left: '20px', fontFamily: 'var(--font-special)', fontSize: '0.6rem', color: 'var(--ink-light)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Vol. I</div>
      <div style={{ position: 'absolute', top: '170px', right: '20px', fontFamily: 'var(--font-special)', fontSize: '0.6rem', color: 'var(--ink-light)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>No. 1</div>

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'none' : 'translateY(20px)',
          transition: 'all 0.8s ease',
        }}
      >
        {/* Section rule */}
        <div style={{ borderTop: '4px solid var(--ink)', borderBottom: '1px solid var(--ink)', padding: '4px 0', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--ink)' }}>
            ✦ Breaking News ✦
          </span>
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            fontWeight: 900,
            lineHeight: 1.0,
            textAlign: 'center',
            color: 'var(--ink)',
            marginBottom: '0.5rem',
            letterSpacing: '-0.01em',
          }}
        >
          Hello, I'm
        </h1>
        <h1
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2rem, 6vw, 4.5rem)',
            fontWeight: 900,
            fontStyle: 'italic',
            lineHeight: 1.05,
            textAlign: 'center',
            color: 'var(--ink)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em',
          }}
        >
          Noah John Puthayathu
        </h1>

        {/* Rule under headline */}
        <div style={{ borderTop: '3px double var(--ink)', marginBottom: '1.5rem' }} />

        {/* Typewriter Skill Cycling */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.3rem',
            color: 'var(--ink-light)',
            fontStyle: 'italic',
          }}>
            Specializing in{' '}
            <span
              style={{
                fontFamily: 'var(--font-headline)',
                fontWeight: 700,
                color: 'var(--ink)',
                fontStyle: 'normal',
                borderBottom: '1px solid var(--ink)',
                paddingBottom: '1px',
              }}
            >
              {displayText}
              <span className="blink" style={{ fontWeight: 300, opacity: 0.5, marginLeft: '2px' }}>|</span>
            </span>
          </p>
        </div>

        {/* Column layout body text */}
        <div style={{
          border: '1px solid var(--ink)',
          borderTop: '4px solid var(--ink)',
          padding: '1.5rem',
          marginBottom: '2.5rem',
          backgroundColor: 'var(--paper-dark)',
          position: 'relative',
        }}>
          {/* Column label */}
          <div style={{
            position: 'absolute',
            top: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'var(--paper-dark)',
            padding: '0 10px',
            fontFamily: 'var(--font-special)',
            fontSize: '0.6rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'var(--ink-light)',
          }}>
            ✦ Profile ✦
          </div>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            color: 'var(--ink)',
            textAlign: 'justify',
            margin: 0,
          }}
            className="dropcap"
          >
            "Motivated Computer Science and Engineering student with skills in full-stack web development, machine learning, and Android development. Passionate about building scalable software solutions for real-world problems and exploring AI/ML research through practical projects and experimentation."
          </p>
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '3rem',
        }}>
          <a href="#projects" className="btn-newspaper">
            <span>View My Work</span>
            <span>→</span>
          </a>
          <a href="#contact" className="btn-newspaper-outline">
            <span>Let's Connect</span>
          </a>
          <a
            href="./Noah_Resume.pdf"
            download="Noah_Resume.pdf"
            rel="noopener noreferrer"
            className="btn-newspaper-outline"
          >
            <span>↓ Download Resume</span>
          </a>
        </div>

        {/* Bottom ornament */}
        <div className="divider-star">
          ✦ ✦ ✦
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
      }}>
        <div style={{ fontFamily: 'var(--font-special)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--ink-light)', marginBottom: '6px' }}>
          Scroll Down
        </div>
        <div style={{ width: '1px', height: '30px', background: 'var(--ink-light)', margin: '0 auto' }} className="scroll-anim" />
      </div>
    </section>
  );
}

export default Home;
