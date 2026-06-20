import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="section page-section">
      <h1 className="section-title" data-animate>Get In Touch</h1>

      <div className="contact-grid">
        <div className="glass-card" data-animate data-delay="100">
          <div className="contact-info-item">
            <div className="icon">
              <svg viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
            </div>
            <div className="details">
              <h4>Email</h4>
              <a href="mailto:tarundandekar128@gmail.com">tarundandekar128@gmail.com</a>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="icon">
              <svg viewBox="0 0 24 24"><path d="M12 0C7.453 0 3.623 3.853 3.623 8.429c0 6.502 7.18 14.587 7.489 14.927a1.192 1.192 0 001.776 0c.309-.34 7.489-8.424 7.489-14.927C20.377 3.853 16.547 0 12 0zm0 12.643a4.214 4.214 0 110-8.428 4.214 4.214 0 010 8.428z"/></svg>
            </div>
            <div className="details">
              <h4>Location</h4>
              <p>Bristol, United Kingdom</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="icon">
              <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </div>
            <div className="details">
              <h4>Phone</h4>
              <p>+44 7553685355</p>
            </div>
          </div>

          <div className="contact-social">
            <a href="https://www.linkedin.com/in/tarun-dandekar-9a1174230?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:tarundandekar128@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
            </a>
          </div>
        </div>

        <div className="glass-card" data-animate data-delay="200">
          <form action="https://formsubmit.co/tarundandekar128@gmail.com" method="POST" className="contact-form">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={window.location.origin} />
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;