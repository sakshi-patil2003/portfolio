import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  
  // Typewriter effect
  useEffect(() => {
    const strings = [
      'Robotics Engineer',
      'AI Enthusiast',
      'Drone Pilot',
      'UAV and Embedded Systems Engineer',
      'Automation Specialist'
    ];

    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 70;
    let active = true;

    function type() {
      if (!active) return;
      const current = strings[stringIndex];

      if (isDeleting) {
        setTypedText(current.substring(0, charIndex - 1));
        charIndex--;
        typeSpeed = 35;
      } else {
        setTypedText(current.substring(0, charIndex + 1));
        charIndex++;
        typeSpeed = 70;
      }

      if (!isDeleting && charIndex === current.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        stringIndex = (stringIndex + 1) % strings.length;
        typeSpeed = 400;
      }

      setTimeout(type, typeSpeed);
    }

    type();

    return () => {
      active = false;
    };
  }, []);

  // Scroll animations trigger
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
    <>
      <section className="hero">
        <div className="hero-content" data-animate>
          {/* Photo - Center mein */}
          <div className="hero-photo-wrapper">
            <img 
              src="/images/dp.jpeg" 
              alt="Tarun Dandekar" 
              className="hero-photo"
            />
          </div>
          <h1>Tarun Dandekar</h1>
          <p className="hero-tagline">
            <span>{typedText}</span>
            <span className="typing-cursor"></span>
          </p>
          <div className="hero-social">
            <a href="https://www.linkedin.com/in/tarun-dandekar-9a1174230?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:tarundandekar128@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="currentColor"/></svg>
        </div>
      </section>

      <section className="section" id="about">
        <h2 className="section-title" data-animate>About Me</h2>
        <div className="about-grid">
          <div className="about-text glass-card" data-animate data-delay="100">
            <p>MSc Robotics student with hands-on experience in robotics and drone systems, with a strong focus on hardware integration, autonomous systems, and embedded technologies. Experienced in working with Raspberry Pi, ESP32 microcontrollers, LiDAR sensors, cameras, microphone arrays, and wireless communication modules.</p>
            <p>My work includes autonomous mobile robots using ROS 2 and LiDAR-based navigation, swarm robotics using ESP-NOW communication, and drone-related projects involving sound localization and autonomous operation. I have practical experience in sensor integration, hardware testing, system calibration, troubleshooting, and integrating hardware with software frameworks such as ROS 2, PX4, and Gazebo.</p>
            <p>I am particularly interested in robotics, unmanned aerial vehicles (UAVs), autonomous navigation, sensing technologies, and intelligent systems for real-world applications.</p>
          </div>
          <div className="about-right" data-animate data-delay="200">
            <div className="highlight-item glass-card">
              <span className="number">15+</span>
              <span className="label">Drones Built</span>
            </div>
            <div className="highlight-item glass-card">
              <span className="number">1+</span>
              <span className="label">Years Industry</span>
            </div>
            <div className="highlight-item glass-card">
              <span className="number">10+</span>
              <span className="label">Projects</span>
            </div>
            <div className="highlight-item glass-card">
              <span className="number">MSc</span>
              <span className="label">Robotics, Bristol</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;