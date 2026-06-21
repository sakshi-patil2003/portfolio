import React, { useEffect, useState } from 'react';

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificateImages = [
    { id: 1, src: '/images/drone-competition.jpeg', alt: 'Drone Competition' },
    { id: 2, src: '/images/drone-prize.jpeg', alt: 'Drone Prize' },
    { id: 3, src: '/images/fpv-certificate.jpeg', alt: 'FPV Certificate' },
    { id: 4, src: '/images/humanoid-robot.jpeg', alt: 'Humanoid Robot' },
    { id: 5, src: '/images/irrigation-system.jpeg', alt: 'Irrigation System' },
    { id: 6, src: '/images/robot-photo2.jpeg', alt: 'Robot Photo' },
    { id: 7, src: '/images/student-of-year.jpeg', alt: 'Student of the Year' },
    { id: 8, src: '/images/volunteer-robot.jpeg', alt: 'Volunteer Robot' },
    { id: 9, src: '/images/celestial-certificate.jpeg', alt: 'Celestial Certificate' }
  ];

  // Duplicate images for smooth infinite loop
  const totalSlides = certificateImages.length;
  const extendedImages = [...certificateImages, ...certificateImages, ...certificateImages];
  const [isTransitioning, setIsTransitioning] = useState(true);

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

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle infinite loop
  useEffect(() => {
    if (currentIndex >= totalSlides * 2) {
      setIsTransitioning(false);
      setTimeout(() => {
        setCurrentIndex(totalSlides);
        setIsTransitioning(true);
      }, 50);
    }
  }, [currentIndex, totalSlides]);

  const goToPrevious = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(totalSlides * 2 - 1);
      setTimeout(() => setIsTransitioning(true), 50);
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  const goToNext = () => {
    if (currentIndex >= totalSlides * 2 - 1) {
      setIsTransitioning(false);
      setCurrentIndex(totalSlides);
      setTimeout(() => setIsTransitioning(true), 50);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  const goToSlide = (index) => {
    setIsTransitioning(false);
    setCurrentIndex(index + totalSlides);
    setTimeout(() => setIsTransitioning(true), 50);
  };

  const getRealIndex = () => {
    return ((currentIndex % totalSlides) + totalSlides) % totalSlides;
  };

  return (
    <main className="section page-section">
      <h1 className="section-title" data-animate>Achievements</h1>

      {/* Top: 2 Cards Side by Side */}
      <div className="achievements-grid">
        <div className="achievement-card glass-card" data-animate data-delay="100">
          <div className="achievement-card-top">
            <span className="achievement-icon">🎖️</span>
            <span className="achievement-badge">Media Recognition</span>
          </div>
          <h3 className="achievement-title">Student of the Year – Live Media Feature</h3>
          <p className="achievement-subtitle">
            Selected and featured in the live <strong>Student of the Year</strong> programme organised by <strong>Raj Ki Baat</strong> and presented by <strong>Parekh Brothers Jewellers</strong>.
          </p>
          <div className="achievement-points">
            <div className="achievement-point">
              <span className="point-icon">▸</span>
              <span>Recognition for robotics achievements</span>
            </div>
            <div className="achievement-point">
              <span className="point-icon">▸</span>
              <span>Recognition for drone projects</span>
            </div>
            <div className="achievement-point">
              <span className="point-icon">▸</span>
              <span>Technology innovation showcase</span>
            </div>
            <div className="achievement-point">
              <span className="point-icon">▸</span>
              <span>Live media appearance</span>
            </div>
            <div className="achievement-point">
              <span className="point-icon">▸</span>
              <span>Leadership and engineering excellence recognition</span>
            </div>
          </div>
        </div>

        <div className="achievement-card glass-card" data-animate data-delay="200">
          <div className="achievement-card-top">
            <span className="achievement-icon">🏅</span>
            <span className="achievement-badge patent">Patent</span>
          </div>
          <h3 className="achievement-title">Smart and Secure Jewellery Box</h3>
          <p className="achievement-subtitle">
            <strong>Published Indian Patent Application</strong>
          </p>
          <p className="achievement-desc">
            Developed a smart security solution designed to improve the safety and protection of valuable jewellery through intelligent monitoring and secure access mechanisms.
          </p>
          <div className="patent-details">
            <div className="patent-row">
              <span className="patent-label">Application Number:</span>
              <span className="patent-value">202321073617</span>
            </div>
            <div className="patent-row">
              <span className="patent-label">Status:</span>
              <span className="patent-value">Published Indian Patent Application</span>
            </div>
            <div className="patent-row">
              <span className="patent-label">Publication Date:</span>
              <span className="patent-value">08 December 2023</span>
            </div>
          </div>
          <a 
            href="https://iprsearch.ipindia.gov.in/PatentSearch/PatentSearch/ViewApplicationStatus" 
            target="_blank" 
            rel="noopener noreferrer"
            className="patent-link"
          >
            View Patent Status →
          </a>
        </div>
      </div>

      {/* Simple Image Slider - Sirf Images */}
      <div className="slider-section" data-animate data-delay="300">
        <h2 className="slider-title"> Certificates & Achievements</h2>

        <div className="slider-container">
          <button className="slider-btn prev-btn" onClick={goToPrevious}>
            ‹
          </button>

          <div className="slider-wrapper">
            <div 
              className="slider-track"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: isTransitioning ? 'transform 0.6s ease-in-out' : 'none'
              }}
            >
              {extendedImages.map((img, index) => (
                <div key={`${img.id}-${index}`} className="slider-slide">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <p className="slide-label">{img.alt}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn next-btn" onClick={goToNext}>
            ›
          </button>
        </div>

        <div className="slider-dots">
          {certificateImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === getRealIndex() ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Achievements;