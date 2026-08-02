import React, { useState, useEffect } from 'react';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const skills = ['React & Svelte', 'FastAPI & Python', 'TypeScript & Node.js', 'Flutter & Mobile', 'AI & Machine Learning'];
  const [displayText, setDisplayText] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Puzzle data
  const puzzles = [
    { clue: 'Web framework of choice for Python APIs?', answer: 'FASTAPI' },
    { clue: 'Facebook\'s UI library for building components?', answer: 'REACT' },
    { clue: 'Google\'s open-source container orchestration?', answer: 'KUBERNETES' },
    { clue: 'Version control system by Linus Torvalds?', answer: 'GIT' },
    { clue: 'NoSQL document database from MongoDB?', answer: 'MONGODB' },
    { clue: 'Static type checker for JavaScript?', answer: 'TYPESCRIPT' },
    { clue: 'Linux command to list directory contents?', answer: 'LS' },
    { clue: 'Protocol used by the World Wide Web?', answer: 'HTTP' },
    { clue: 'Svelte\'s compile-time approach removes this?', answer: 'VIRTUALDOM' },
    { clue: 'Python library for data manipulation?', answer: 'PANDAS' },
  ];
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [revealedWord, setRevealedWord] = useState(false);
  const [telegramSent, setTelegramSent] = useState(false);

  const currentPuzzle = puzzles[puzzleIndex];
  const nextPuzzle = () => {
    setPuzzleIndex(prev => (prev + 1) % puzzles.length);
    setRevealedWord(false);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const targetWord = skills[skillIndex];
    let speed = isDeleting ? 40 : 85;

    if (!isDeleting && displayText === targetWord) {
      speed = 2000;
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setSkillIndex(prev => (prev + 1) % skills.length);
      speed = 400;
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
          maxWidth: '1150px',
          margin: '0 auto',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'none' : 'translateY(20px)',
          transition: 'all 0.8s ease',
        }}
      >
        {/* Section rule */}
        <div style={{ borderTop: '4px solid var(--ink)', borderBottom: '1px solid var(--ink)', padding: '4px 0', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--ink)' }}>
            ✦ Breaking News Edition ✦
          </span>
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
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
            fontSize: 'clamp(2rem, 5.5vw, 4.2rem)',
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
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
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

        {/* ─── HOME LAYOUT GRID (MAIN BIO + FUN SIDE PANEL) ─── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) 310px',
            gap: '2rem',
            marginBottom: '2.5rem',
            alignItems: 'start',
          }}
          className="home-grid"
        >

          {/* MAIN PROFILE BODY */}
          <div>
            <div style={{
              border: '1px solid var(--ink)',
              borderTop: '4px solid var(--ink)',
              padding: '1.75rem',
              backgroundColor: 'var(--paper-dark)',
              position: 'relative',
              boxShadow: '3px 3px 0 var(--ink)',
            }}>
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'var(--paper-dark)',
                padding: '0 12px',
                fontFamily: 'var(--font-special)',
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--ink-light)',
                border: '1px solid var(--ink)',
              }}>
                ✦ Lead Editorial ✦
              </div>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: 'var(--ink)',
                textAlign: 'justify',
                margin: '0 0 1rem',
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
              justifyContent: 'flex-start',
              marginTop: '2rem',
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
          </div>

          {/* FUN VINTAGE NEWSPAPER SIDE PANEL */}
          <aside
            style={{
              border: '2px solid var(--ink)',
              backgroundColor: 'var(--paper)',
              padding: '1.25rem',
              position: 'relative',
              boxShadow: '4px 4px 0 var(--ink)',
            }}
          >
            {/* Header */}
            <div style={{
              borderBottom: '3px double var(--ink)',
              paddingBottom: '6px',
              marginBottom: '1rem',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--font-special)', fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--ink-light)' }}>
                ✦ Daily Fun Corner ✦
              </div>
              <h3 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: '1.15rem',
                fontWeight: 900,
                color: 'var(--ink)',
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                The Frontpage Extra
              </h3>
            </div>

            {/* Fun Feature 1: Mini Dev Puzzle */}
            <div style={{ borderBottom: '1px solid var(--ink-light)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-special)', fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-light)', marginBottom: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span> Mini Dev Puzzle</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setRevealedWord(!revealedWord)}>
                    {revealedWord ? 'Hide' : 'Reveal'}
                  </span>
                  <span style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={nextPuzzle}>
                    Next ↻
                  </span>
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--ink)', marginBottom: '6px', lineHeight: 1.3 }}>
                <em>Puzzle #{puzzleIndex + 1}:</em> {currentPuzzle.clue}
              </div>
              <div style={{ display: 'flex', gap: '3px', justifyContent: 'center', flexWrap: 'wrap', margin: '6px 0' }}>
                {currentPuzzle.answer.split('').map((char, idx) => (
                  <span
                    key={idx}
                    onClick={() => setRevealedWord(true)}
                    style={{
                      width: '22px',
                      height: '24px',
                      border: '1px solid var(--ink)',
                      backgroundColor: revealedWord ? 'var(--paper-dark)' : 'var(--paper)',
                      fontFamily: 'var(--font-special)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                  >
                    {revealedWord ? char : '?'}
                  </span>
                ))}
              </div>
              <div style={{ fontFamily: 'var(--font-special)', fontSize: '0.52rem', color: 'var(--ink-light)', textAlign: 'center' }}>
                {puzzleIndex + 1} of {puzzles.length} puzzles
              </div>
            </div>

            {/* Fun Feature 2: Daily Developer Horoscope */}
            <div style={{ borderBottom: '1px solid var(--ink-lasight)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-special)', fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-light)', marginBottom: '4px' }}>
                 Recruiter's Horoscope
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', lineHeight: 1.4, color: 'var(--ink)', margin: 0, fontStyle: 'italic' }}>
                "Stars align today for those who connect with Noah. A high-performing CS engineer brings clarity & clean code to your team."
              </p>
            </div>

            {/* Fun Feature 3: Telegram Dispatch Button */}
            <div style={{ marginBottom: '1rem' }}>
              <button
                onClick={() => setTelegramSent(true)}
                className="btn-newspaper-outline"
                style={{ width: '100%', fontSize: '0.62rem', padding: '6px 10px', justifyContent: 'center' }}
              >
                {telegramSent ? ' Dispatch Sent via Telegram!' : '✉ Send Quick Telegram'}
              </button>

              {telegramSent && (
                <div style={{
                  border: '1px dashed var(--ink)',
                  backgroundColor: 'var(--paper-dark)',
                  padding: '6px 8px',
                  marginTop: '8px',
                  fontFamily: 'var(--font-special)',
                  fontSize: '0.6rem',
                  color: 'var(--ink)',
                }}>
                  STOP. INQUIRY RECEIVED. PLEASE SCROLL TO CONTACT SECTION OR DIRECT MAIL TO NOAHJOHNPUTHAYATHU05@GMAIL.COM. STOP.
                </div>
              )}
            </div>

            {/* Fun Feature 4: Reward Classified */}
            <div style={{
              border: '1px solid var(--ink)',
              padding: '6px',
              textAlign: 'center',
              backgroundColor: 'var(--paper-dark)',
            }}>
              <div style={{ fontFamily: 'var(--font-special)', fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, color: 'var(--ink)' }}>
                ★ $10,000 BOUNTY ★
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--ink)', fontStyle: 'italic' }}>
                For bringing challenging Web & AI projects to Noah's desk!
              </div>
            </div>
          </aside>

        </div>

        {/* Bottom ornament */}
        <div className="divider-star">
          ✦ ✦ ✦
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .home-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default Home;
