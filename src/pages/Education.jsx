import React, { useEffect } from 'react';

const Education = () => {
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

  const degrees = [
    {
      degree: 'MSc Robotics',
      school: 'University of Bristol',
      duration: '2024 – 2025',
      location: 'Bristol, United Kingdom',
      delay: 100,
      points: [
        'Artificial Intelligence and Robotics',
        'Unmanned Aerial Vehicle (UAV) Systems',
        'Human-Robot Interaction (HRI)',
        'Robotics Systems and Assistive Robotics',
        'Autonomous Drones and Navigation',
        'Machine Vision and Perception'
      ]
    },
    {
      degree: 'B.Tech Artificial Intelligence and Data Science',
      school: 'Priyadarshani College of Engineering,',
      duration: '2017 – 2021',
      location: 'Nagpur',
      delay: 200,
      points: [
        'Artificial Intelligence and Machine Learning',
        'Data Science and Analytics',
        'Programming and Algorithms',
        'Robotics and Automation'
      ]
    }
  ];

  return (
    <main className="section page-section">
      <h1 className="section-title" data-animate>Education</h1>

      <div className="timeline">
        {degrees.map((edu, index) => (
          <div key={index} className="timeline-item" data-animate data-delay={edu.delay}>
            <div className="timeline-card glass-card">
              <h3>{edu.degree}</h3>
              <p className="company">{edu.school}</p>
              <p className="meta">{edu.duration} &middot; {edu.location}</p>
              <ul>
                {edu.points.map((pt, idx) => (
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

export default Education;