import React, { useEffect } from 'react';

const Experience = () => {
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

  const workExperience = [
    {
      role: 'Robotic Engineer',
      company: 'ROBOTRY',
      type: 'Full-time',
      duration: '1 Year Experience',
      location: 'Bristol, UK',
      logo: '/images/kinisi_robotics_logo.jpeg',
      delay: 100,
      points: [
        'Developed ROS packages for robotic systems',
        'Worked with NVIDIA Jetson embedded devices for hardware acceleration',
        'Integrated perception pipelines for advanced robotics applications',
        'Deployed Docker containers for efficient robot operations'
      ]
    }
  ];

  return (
    <main className="section page-section">
      <h1 className="section-title" data-animate>Work Experience</h1>

      <div className="timeline">
        {workExperience.map((exp, index) => (
          <div key={index} className="timeline-item" data-animate data-delay={exp.delay}>
            <div className="timeline-card glass-card">
              <img src={exp.logo} alt={exp.company} className="company-logo" />
              <h3>{exp.role}</h3>
              <p className="company">{exp.company} &middot; {exp.type}</p>
              <p className="meta">{exp.duration} &middot; {exp.location}</p>
              <ul>
                {exp.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Experience;