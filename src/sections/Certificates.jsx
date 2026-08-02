import React, { useState, useEffect } from 'react';

function Certificates() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const achievements = [
    {
      title: 'GATE CS 2026',
      detail: 'All India Rank 4105',
      type: 'Competitive Exam',
    },
    {
      title: 'NPTEL Elite + Silver',
      detail: 'Ethical Hacking — IIT Kharagpur, Oct 2024. Awarded to top performers among all enrolled candidates.',
      type: 'Academic Excellence',
    },
  ];

  const certificates = [
    {
      title: 'Ethical Hacking',
      issuer: 'NPTEL (IIT Kharagpur)',
      date: 'Aug 2024 – Nov 2024',
      category: 'cybersecurity',
      level: 'Elite + Silver',
      skills: ['Vulnerability Analysis', 'Penetration Testing', 'Network Security'],
      url: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS94S35710000303850615',
    },
    {
      title: 'Full-Stack JavaScript Developer',
      issuer: 'IBM (Coursera)',
      date: 'May 2024 – Jul 2024',
      category: 'fullstack',
      level: 'Advanced',
      skills: ['Node.js', 'React', 'Express', 'MongoDB'],
      url: 'https://coursera.org/share/570259f0b437896d8bf933ce9bcd252b',
    },
    {
      title: 'Cybersecurity Certificate',
      issuer: 'Google (Coursera)',
      date: '2024',
      category: 'cybersecurity',
      level: 'Intermediate',
      skills: ['Security Foundations', 'Threat Management', 'Risk Assessment'],
      url: 'https://coursera.org/share/42c9108bd3343f02d16d2bdad914165a',
    },
    {
      title: 'Backend JavaScript Developer',
      issuer: 'IBM (Coursera)',
      date: '2024',
      category: 'backend',
      level: 'Advanced',
      skills: ['Node.js', 'Express', 'APIs', 'Databases'],
      url: 'https://coursera.org/share/55fe8ea36c7c565f95884b6df0276ddb',
    },
    {
      title: 'Google AI Essentials',
      issuer: 'Google (Coursera)',
      date: '2024',
      category: 'ai-ml',
      level: 'Intermediate',
      skills: ['Generative AI', 'Artificial Intelligence', 'Machine Learning'],
      url: 'https://coursera.org/share/6ffcd6b8aa3061ec8c33a446f855b06b',
    },
  ];

  const categories = [
    { name: 'all', label: 'All', count: certificates.length },
    { name: 'backend', label: 'Backend', count: certificates.filter(c => c.category === 'backend').length },
    { name: 'cybersecurity', label: 'Cybersecurity', count: certificates.filter(c => c.category === 'cybersecurity').length },
    { name: 'fullstack', label: 'Fullstack', count: certificates.filter(c => c.category === 'fullstack').length },
    { name: 'ai-ml', label: 'AI / ML', count: certificates.filter(c => c.category === 'ai-ml').length },
  ];

  const filtered = activeCategory === 'all' ? certificates : certificates.filter(c => c.category === activeCategory);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Certificate link copied!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];

  return (
    <section
      id="certificates"
      className="newsprint"
      style={{ padding: '4rem 1.5rem', borderTop: '3px double var(--ink)' }}
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
            — Credentials & Achievements —
          </div>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            color: 'var(--ink)',
            margin: '0 0 0.5rem',
            lineHeight: 1,
          }}>
            Certificates & Honours
          </h2>
          <div style={{ borderTop: '3px double var(--ink)', margin: '0.8rem auto', width: '220px' }} />
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink-light)', margin: 0 }}>
            A continuous learning journey through verified certifications and professional achievements
          </p>
        </div>

        {/* ─── ACHIEVEMENTS banner ─── */}
        <div style={{
          borderTop: '4px solid var(--ink)',
          borderBottom: '1px solid var(--ink)',
          padding: '4px 0',
          marginBottom: '1.25rem',
          textAlign: 'center',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.7s ease 0.1s',
        }}>
          <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            Notable Achievements
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '0',
          border: '2px solid var(--ink)',
          marginBottom: '3rem',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.7s ease 0.15s',
        }}>
          {achievements.map((ach, i) => (
            <div
              key={i}
              style={{
                padding: '1.25rem 1.5rem',
                borderRight: i < achievements.length - 1 ? '1px solid var(--ink)' : 'none',
                backgroundColor: i === 0 ? 'var(--ink)' : 'var(--paper-dark)',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
            >
              <div>
                <div style={{
                  fontFamily: 'var(--font-special)',
                  fontSize: '0.58rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: i === 0 ? 'rgba(245,240,232,0.6)' : 'var(--ink-light)',
                }}>
                  {ach.type}
                </div>
                <div style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: i === 0 ? 'var(--paper)' : 'var(--ink)',
                  lineHeight: 1.2,
                  marginBottom: '4px',
                }}>
                  {ach.title}
                </div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: i === 0 ? 'rgba(245,240,232,0.8)' : 'var(--ink)',
                  lineHeight: 1.5,
                }}>
                  {ach.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── CERTIFICATES ─── */}
        <div style={{
          borderTop: '4px solid var(--ink)',
          borderBottom: '1px solid var(--ink)',
          padding: '4px 0',
          marginBottom: '1.5rem',
          textAlign: 'center',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.7s ease 0.2s',
        }}>
          <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            Certifications
          </span>
        </div>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0',
          border: '1px solid var(--ink)',
          marginBottom: '2rem',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.7s ease 0.25s',
        }}>
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              style={{
                fontFamily: 'var(--font-special)',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                padding: '8px 16px',
                border: 'none',
                borderRight: i < categories.length - 1 ? '1px solid var(--ink-light)' : 'none',
                background: activeCategory === cat.name ? 'var(--ink)' : 'transparent',
                color: activeCategory === cat.name ? 'var(--paper)' : 'var(--ink)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat.label} <span style={{ fontSize: '0.6rem', opacity: 0.7 }}>({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.7s ease 0.35s',
        }}>
          {filtered.map((cert, index) => (
            <div
              key={index}
              style={{
                border: '1px solid var(--ink)',
                borderTop: '4px solid var(--ink)',
                backgroundColor: index % 2 === 0 ? 'var(--paper)' : 'var(--paper-dark)',
                padding: '1.25rem',
                position: 'relative',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '4px 4px 0 var(--ink)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Roman numeral watermark */}
              <div style={{
                position: 'absolute', top: '10px', right: '14px',
                fontFamily: 'var(--font-headline)', fontSize: '2.5rem',
                color: 'rgba(0,0,0,0.05)', fontWeight: 900, lineHeight: 1, userSelect: 'none',
              }}>
                {numerals[index]}
              </div>

              <div style={{ marginBottom: '0.75rem' }}>
                <div style={{ fontFamily: 'var(--font-special)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--ink-light)', marginBottom: '4px' }}>
                  {cert.issuer} · {cert.date}
                </div>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--ink)', margin: 0, lineHeight: 1.3 }}>
                  {cert.title}
                </h3>
              </div>

              <div style={{ borderTop: '1px solid var(--ink-light)', borderBottom: '1px dashed var(--ink-light)', padding: '5px 0', margin: '0.75rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="tag-newspaper">{cert.level}</span>
                <span style={{ fontFamily: 'var(--font-special)', fontSize: '0.58rem', color: 'var(--ink-light)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Verified
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '1rem' }}>
                {cert.skills.map((skill, si) => (
                  <span key={si} className="tag-newspaper">{skill}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid var(--ink-light)', paddingTop: '0.75rem' }}>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-newspaper"
                  style={{ flex: 1, fontSize: '0.62rem', padding: '6px 10px', justifyContent: 'center' }}
                >
                  View Certificate
                </a>
                <button
                  onClick={() => copyToClipboard(cert.url)}
                  className="btn-newspaper-outline"
                  style={{ fontSize: '0.7rem', padding: '6px 10px' }}
                  title="Copy link"
                >
                  ⎘
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <div className="divider-star">✦ ✦ ✦</div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;