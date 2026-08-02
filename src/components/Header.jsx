import React, { useState, useEffect, useRef } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const clickTarget = useRef(null);
  const [currentDate] = useState(() => {
    const d = new Date();
    return d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  });

  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Certificates', 'Contact'];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Dynamically read the actual header height instead of guessing
    const getMargin = () => {
      const header = document.querySelector('header');
      return header ? header.getBoundingClientRect().height + 10 : 90;
    };
    let fallbackTimer = null;

    const detectActiveSection = () => {
      const ids = ['home', 'about', 'experience', 'projects', 'certificates', 'contact'];
      const margin = getMargin();
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= margin) {
          return ids[i];
        }
      }
      return 'home';
    };

    const confirmSection = () => {
      if (clickTarget.current) {
        setActiveSection(detectActiveSection());
        clickTarget.current = null;
      }
    };

    // During scroll: if a nav link was clicked, block detection entirely
    const onScroll = () => {
      if (clickTarget.current) {
        // Fallback: 600ms after last scroll event, confirm whatever is visible
        clearTimeout(fallbackTimer);
        fallbackTimer = setTimeout(confirmSection, 600);
        return;
      }
      setActiveSection(detectActiveSection());
    };

    // scrollend fires exactly once when smooth scroll fully completes
    const onScrollEnd = () => confirmSection();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('scrollend', onScrollEnd, { passive: true });
    setActiveSection(detectActiveSection());

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scrollend', onScrollEnd);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const handleNavClick = (id) => {
    clickTarget.current = id;
    setActiveSection(id);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);


  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'var(--paper)',
        borderBottom: isScrolled ? '3px double var(--ink)' : '1px solid var(--ink)',
        transition: 'border 0.3s',
        fontFamily: 'var(--font-special)',
      }}
    >
      {/* Masthead top bar */}
      <div style={{
        borderBottom: '1px solid var(--ink-light)',
        display: isScrolled ? 'none' : 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3px 1.5rem',
        transition: 'all 0.3s',
      }}>
        <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-light)' }}>
          Est. 2024
        </span>
        <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.10em', color: 'var(--ink-light)' }}>
          {currentDate}
        </span>
        <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-light)' }}>
          Portfolio Edition
        </span>
      </div>

      {/* Masthead name */}
      <div style={{
        textAlign: 'center',
        padding: isScrolled ? '4px 1.5rem 3px' : '8px 1.5rem 6px',
        borderBottom: '3px double var(--ink)',
        transition: 'all 0.3s',
      }}>
        <div style={{
          fontFamily: 'var(--font-fraktur)',
          fontSize: isScrolled ? 'clamp(1.4rem, 3.5vw, 2.2rem)' : 'clamp(2rem, 5vw, 3.5rem)',
          color: 'var(--ink)',
          lineHeight: 1,
          letterSpacing: '0.02em',
          transition: 'all 0.3s',
        }}>
          Noah John Puthayathu
        </div>
        {!isScrolled && (
          <div style={{
            fontFamily: 'var(--font-special)',
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: 'var(--ink-light)',
            marginTop: '3px',
          }}>
            ✦ Developer's Chronicle ✦
          </div>
        )}
      </div>

      {/* Navigation */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
        {/* Desktop nav */}
        <ul style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 0,
          listStyle: 'none',
          padding: '0',
          margin: '0',
        }} className="hidden md:flex">
          {navItems.map((item, i) => {
            const id = item.toLowerCase();
            return (
              <li key={item} style={{ borderRight: i < navItems.length - 1 ? '1px solid var(--ink-light)' : 'none' }}>
                <a
                  href={`#${id}`}
                  onClick={() => handleNavClick(id)}
                  style={{
                    display: 'block',
                    padding: '6px 20px',
                    fontFamily: 'var(--font-special)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    textDecoration: 'none',
                    color: activeSection === id ? 'var(--paper)' : 'var(--ink)',
                    backgroundColor: activeSection === id ? 'var(--ink)' : 'transparent',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    if (activeSection !== id) {
                      e.currentTarget.style.backgroundColor = 'var(--ink-mid)';
                      e.currentTarget.style.color = 'var(--paper)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (activeSection !== id) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--ink)';
                    }
                  }}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden mobile-menu-container" style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)' }}>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              border: '1px solid var(--ink)',
              padding: '4px 8px',
              cursor: 'pointer',
              fontFamily: 'var(--font-special)',
              fontSize: '1rem',
              color: 'var(--ink)',
            }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>

          {/* Mobile dropdown */}
          {isMobileMenuOpen && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              backgroundColor: 'var(--paper)',
              border: '2px solid var(--ink)',
              minWidth: '180px',
              zIndex: 100,
              boxShadow: '4px 4px 0 var(--ink)',
            }}>
              {navItems.map((item, i) => {
                const id = item.toLowerCase();
                return (
                  <a
                    key={item}
                    href={`#${id}`}
                    onClick={() => {
                      handleNavClick(id);
                      setIsMobileMenuOpen(false);
                    }}
                    style={{
                      display: 'block',
                      padding: '10px 20px',
                      fontFamily: 'var(--font-special)',
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      textDecoration: 'none',
                      color: activeSection === id ? 'var(--paper)' : 'var(--ink)',
                      backgroundColor: activeSection === id ? 'var(--ink)' : 'transparent',
                      borderBottom: i < navItems.length - 1 ? '1px solid var(--ink-light)' : 'none',
                    }}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;