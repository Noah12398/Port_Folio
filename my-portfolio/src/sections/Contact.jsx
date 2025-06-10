import { useState, useEffect } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
    console.log('Sending to Google Form:', formBody.toString());

    await fetch(googleFormURL, {
      method: 'POST',
      mode: 'no-cors', // Google requires no-cors
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "noahjohnputhayathu05@gmail.com",
      link: "mailto:noahjohnputhayathu05@gmail.com",
      color: "from-purple-500 to-purple-400"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: "LinkedIn",
      value: "noah-john-puthayathu",
      link: "https://www.linkedin.com/in/noah-john-puthayathu/",
      color: "from-indigo-500 to-indigo-400"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: "GitHub",
      value: "Noah12398",
      link: "https://github.com/Noah12398",
      color: "from-violet-500 to-violet-400"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "Kerala, India",
      link: "https://www.google.com/maps/place/Muvattupuzha,+Ernakulam,+Kerala",
      color: "from-emerald-500 to-emerald-400"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-indigo-950 via-gray-950 to-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's collaborate and create something 
            <span className="text-purple-400 font-medium"> extraordinary</span> together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Cards */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I'm always excited to discuss new opportunities, innovative projects, or dive deep into conversations about web development and technology.
            </p>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="group">
                  {contact.link ? (
                    <a href={contact.link} target={contact.link.startsWith('mailto:') ? '_self' : '_blank'} rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group-hover:bg-black/40 hover:scale-105">
                      <div className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center text-white transition-all`}>
                        {contact.icon}
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-bold text-white group-hover:text-purple-300">{contact.label}</h4>
                        <p className="text-gray-400 group-hover:text-gray-300">{contact.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-purple-500/20">
                      <div className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center text-white`}>
                        {contact.icon}
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-bold text-white">{contact.label}</h4>
                        <p className="text-gray-400">{contact.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Name*" value={formData.name} onChange={handleChange} className="bg-black/20 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} className="bg-black/20 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="w-full bg-black/20 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <textarea name="message" placeholder="Message*" rows="6" value={formData.message} onChange={handleChange} className="w-full bg-black/20 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
            <button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-8 rounded-lg font-semibold hover:opacity-90 transition-all">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus && (
              <p className={`text-sm ${submitStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {submitStatus === 'success' ? 'Message sent successfully!' : submitStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
