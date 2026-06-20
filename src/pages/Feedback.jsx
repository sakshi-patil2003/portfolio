import React, { useEffect, useState } from 'react';

const Feedback = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    setFormData({ name: '', email: '', feedback: '', rating: '' });
  };

  return (
    <main className="section page-section">
      <h1 className="section-title" data-animate>Feedback</h1>

      <div className="feedback-container">
        <div className="feedback-card glass-card" data-animate data-delay="100">
          <p className="feedback-subtitle">
            Your feedback helps me improve. Share your thoughts about my work, projects, or anything else!
          </p>

          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <select
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
              >
                <option value="">Select rating...</option>
                <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                <option value="4">⭐⭐⭐⭐ Good</option>
                <option value="3">⭐⭐⭐ Average</option>
                <option value="2">⭐⭐ Below Average</option>
                <option value="1">⭐ Poor</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="feedback">Your Feedback</label>
              <textarea
                id="feedback"
                name="feedback"
                rows="5"
                value={formData.feedback}
                onChange={handleChange}
                placeholder="Share your feedback..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Submit Feedback
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Feedback; // ← YEH LINE HONI CHAHIYE