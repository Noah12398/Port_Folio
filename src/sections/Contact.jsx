import { useState, useEffect } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSc_Q8gPFjSu7w4IEqhKNUiYUi-dXTUlcYGfSifU-xIPzx-anA/formResponse';
    const formFieldData = {
      'entry.1612441351': formData.name,
      'entry.1111688242': formData.email,
      'entry.263961427': formData.subject,
      'entry.670730498': formData.message,
    };
    const formBody = new URLSearchParams(formFieldData);
    try {
      await fetch(googleFormURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setSubmitStatus('Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'noahjohnputhayathu05@gmail.com',
      link: 'mailto:noahjohnputhayathu05@gmail.com',
      symbol: '✉',
    },
    {
      label: 'LinkedIn',
      value: 'noah-john-puthayathu',
      link: 'https://www.linkedin.com/in/noah-john-puthayathu/',
      symbol: 'in',
    },
    {
      label: 'GitHub',
      value: 'Noah12398',
      link: 'https://github.com/Noah12398',
      symbol: '⌥',
    },
    {
      label: 'Location',
      value: 'Kerala, India',
      link: 'https://www.google.com/maps/place/Muvattupuzha,+Ernakulam,+Kerala',
      symbol: '◉',
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: '4rem 1.5rem 5rem',
        backgroundColor: 'var(--paper-dark)',
        borderTop: '3px double var(--ink)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2.5rem',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.7s ease',
        }}>
          <div style={{ fontFamily: 'var(--font-special)', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--ink-light)', marginBottom: '0.5rem' }}>
            — Correspondence —
          </div>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            color: 'var(--ink)',
            margin: '0 0 0.5rem',
            lineHeight: 1,
          }}>
            Get In Touch
          </h2>
          <div style={{ borderTop: '3px double var(--ink)', margin: '0.8rem auto', width: '180px' }} />
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink-light)', margin: 0 }}>
            Ready to bring your ideas to life? Let's collaborate and create something{' '}
            <strong>extraordinary</strong> together.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.7s ease 0.2s',
        }}>

          {/* Contact Info Column */}
          <div>
            <div style={{ borderBottom: '2px solid var(--ink)', paddingBottom: '8px', marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>
                Let's Connect
              </h3>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--ink)', marginBottom: '2rem', textAlign: 'justify' }}>
              I'm always excited to discuss new opportunities, innovative projects, or dive deep into conversations about web development and technology.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: '1px solid var(--ink)' }}>
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target={contact.link.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.9rem 1rem',
                    textDecoration: 'none',
                    color: 'var(--ink)',
                    borderBottom: index < contactInfo.length - 1 ? '1px solid var(--ink-light)' : 'none',
                    backgroundColor: 'var(--paper)',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--ink)'; e.currentTarget.style.color = 'var(--paper)'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--paper)'; e.currentTarget.style.color = 'var(--ink)'; }}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid currentColor',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-headline)',
                    fontSize: '0.85rem',
                    flexShrink: 0,
                  }}>
                    {contact.symbol}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-special)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.7 }}>
                      {contact.label}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
                      {contact.value}
                    </div>
                  </div>
                  <span style={{ marginLeft: 'auto', fontSize: '1rem' }}>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form Column */}
          <div>
            <div style={{ borderBottom: '2px solid var(--ink)', paddingBottom: '8px', marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontFamily: 'var(--font-special)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '4px', color: 'var(--ink-light)' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-newspaper"
                    placeholder="Your name..."
                    required
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'var(--font-special)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '4px', color: 'var(--ink-light)' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-newspaper"
                    placeholder="your@email.com..."
                    required
                  />
                </div>
              </div>

              <div>
                <label style={{ fontFamily: 'var(--font-special)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '4px', color: 'var(--ink-light)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-newspaper"
                  placeholder="Regarding..."
                />
              </div>

              <div>
                <label style={{ fontFamily: 'var(--font-special)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '4px', color: 'var(--ink-light)' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="input-newspaper"
                  placeholder="Your message..."
                  required
                  style={{ resize: 'vertical', fontFamily: 'var(--font-mono)' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-newspaper"
                  style={{ opacity: isSubmitting ? 0.6 : 1 }}
                >
                  {isSubmitting ? 'Dispatching...' : 'Dispatch Message →'}
                </button>

                {submitStatus && (
                  <p style={{
                    fontFamily: 'var(--font-special)',
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: submitStatus === 'success' ? 'var(--ink)' : '#8b0000',
                    borderLeft: '3px solid currentColor',
                    paddingLeft: '10px',
                    margin: 0,
                  }}>
                    {submitStatus === 'success' ? '✓ Message sent!' : submitStatus}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
