import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: 'var(--ink)',
        color: 'var(--paper)',
        borderTop: '4px solid var(--ink)',
      }}
    >
      {/* Top rule */}
      <div style={{ borderBottom: '1px solid rgba(245,240,232,0.2)', padding: '1rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(245,240,232,0.5)' }}>
            Portfolio Edition
          </span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { label: 'GitHub', link: 'https://github.com/Noah12398' },
              { label: 'LinkedIn', link: 'https://www.linkedin.com/in/noah-john-puthayathu/' },
              { label: 'Email', link: 'mailto:noahjohnputhayathu05@gmail.com' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target={item.link.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-special)',
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'rgba(245,240,232,0.7)',
                  textDecoration: 'underline',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--paper)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(245,240,232,0.7)'; }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(245,240,232,0.5)' }}>
            Kerala, India
          </span>
        </div>
      </div>

      {/* Masthead */}
      <div style={{ textAlign: 'center', padding: '1.5rem 1.5rem 1rem', borderBottom: '1px solid rgba(245,240,232,0.15)' }}>
        <div style={{
          fontFamily: 'var(--font-fraktur)',
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          color: 'var(--paper)',
          letterSpacing: '0.02em',
          lineHeight: 1,
        }}>
          Noah John Puthayathu
        </div>
        <div style={{ fontFamily: 'var(--font-special)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(245,240,232,0.4)', marginTop: '4px' }}>
          ✦ Developer's Chronicle ✦
        </div>
      </div>

      {/* Copyright */}
      <div style={{ textAlign: 'center', padding: '1rem 1.5rem' }}>
        <div style={{ fontFamily: 'var(--font-special)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(245,240,232,0.5)' }}>
          © {year} Noah Puthayathu · All Rights Reserved · Crafted with React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}

export default Footer;
