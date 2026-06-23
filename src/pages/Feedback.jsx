import React, { useEffect, useState } from 'react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: 0
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [feedbacks, setFeedbacks] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ GOOGLE SHEETS URL - YAHAN DAALO
  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbx71FWqwoutGf4rZGlTqHZv3xAj4xtbU-4z9AOahFR130ydGFpDrIhmjPULUgIGj6qwkg/exec';
  // Admin check - Sirf Tarun delete kar sakta hai
  const isAdmin = (email) => {
    return email === 'tarundandekar128@gmail.com';
  };

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

  // Load feedbacks from Google Sheets
  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(GOOGLE_SHEETS_URL);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setFeedbacks(data);
    } catch (err) {
      console.error('Error fetching feedback:', err);
      alert('Failed to load feedback. Please refresh the page.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRating = (rating) => {
    setFormData({
      ...formData,
      rating: rating
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.rating === 0) {
      alert('Please select a rating! ⭐');
      return;
    }

    try {
      console.log('Submitting feedback...');
      
      // 1. Google Sheets mein save karo
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors', // CORS issue ko bypass
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name || 'Anonymous',
          email: formData.email || 'No email provided',
          rating: formData.rating,
          ratingLabel: ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][formData.rating],
          feedback: formData.feedback || 'No feedback provided'
        })
      });

      console.log('Google Sheets response:', response);

      // 2. FormSubmit se email bhejo (Tarun ko)
      try {
        await fetch('https://formsubmit.co/ajax/tarundandekar128@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name || 'Anonymous',
            email: formData.email || 'No email provided',
            rating: ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][formData.rating],
            feedback: formData.feedback || 'No feedback provided'
          })
        });
      } catch (emailErr) {
        console.error('Email send failed:', emailErr);
        // Email fail hone par bhi feedback save ho jayega
      }

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);

      setFormData({ name: '', email: '', feedback: '', rating: 0 });
      setHoverRating(0);

      // Reload feedbacks
      await fetchFeedback();

    } catch (err) {
      console.error('Submit error:', err);
      alert(`Failed to submit feedback: ${err.message}`);
    }
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      const updated = feedbacks.filter((_, index) => index !== id);
      setFeedbacks(updated);
    }
  };

  const ratingLabels = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <main className="section page-section">
      <h1 className="section-title" data-animate>Feedback</h1>

      <div className="feedback-container">
        {isSubmitted && (
          <div className="feedback-success glass-card" data-animate data-delay="50">
            <span>✅</span>
            <p>Thank you for your feedback! Your feedback has been saved.</p>
          </div>
        )}

        <div className="feedback-card glass-card" data-animate data-delay="100">
          <p className="feedback-subtitle">
            Your feedback helps me improve. Share your thoughts about my work, projects, or anything else!
          </p>

          <form className="feedback-form" onSubmit={handleSubmit}>
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
              <label>Rate Your Experience</label>
              <div className="star-rating-wrapper">
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`star-btn ${star <= (hoverRating || formData.rating) ? 'active' : ''}`}
                      onClick={() => handleRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <span className="rating-label">
                  {formData.rating > 0 ? ratingLabels[formData.rating] : 'Click a star to rate'}
                </span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="feedback">Your Feedback</label>
              <textarea
                id="feedback"
                name="feedback"
                rows="4"
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

        {/* Feedback List */}
        <div className="feedback-list-section" data-animate data-delay="200">
          <div className="feedback-list-header">
            <h3 className="feedback-list-title">📋 Previous Feedback</h3>
            <span className="feedback-count">{feedbacks.length} entries</span>
          </div>

          {isLoading ? (
            <div className="feedback-empty glass-card">
              <p>Loading feedback...</p>
            </div>
          ) : feedbacks.length === 0 ? (
            <div className="feedback-empty glass-card">
              <p>No feedback yet. Be the first to share your thoughts! 🎉</p>
            </div>
          ) : (
            <div className="feedback-list">
              {feedbacks.map((fb, index) => (
                <div key={index} className="feedback-item glass-card">
                  <div className="feedback-item-header">
                    <div className="feedback-item-user">
                      <span className="feedback-item-name">{fb.Name || fb.name || 'Anonymous'}</span>
                      <span className="feedback-item-date">{fb.Date || fb.date || 'Recent'}</span>
                    </div>
                    <div className="feedback-item-right">
                      <div className="feedback-item-rating">
                        <span className="stars">{renderStars(parseInt(fb.Rating || fb.rating) || 0)}</span>
                        <span className="rating-text">{fb.RatingLabel || fb.ratingLabel}</span>
                      </div>
                      {isAdmin(formData.email) && (
                        <button 
                          className="feedback-delete-btn"
                          onClick={() => deleteFeedback(index)}
                          title="Delete feedback"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="feedback-item-text">{fb.Feedback || fb.feedback}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Feedback;