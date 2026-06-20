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
        'Artificial Intelligence and Vision',
        'Unmanned Aerial Vehicles (UAV)',
        'Machine Vision and Human-Robot Interaction',
        'Robotics Fundamentals and Teleoperation'
      ]
    },
    {
      degree: 'MSc Astrophysics',
      school: 'University of Hertfordshire',
      duration: '2022 – 2023',
      location: 'Hatfield, United Kingdom',
      delay: 200,
      points: [
        'Astrophysics and Space Science'
      ]
    },
    {
      degree: 'Leeds International Summer School',
      school: 'University of Leeds',
      duration: 'Jun 2019 – Jul 2019',
      location: 'Leeds, United Kingdom',
      delay: 300,
      points: [
        'Robotics and Autonomous Systems',
        'Robotics and Data Mining',
        'Grade: 78%'
      ]
    },
    {
      degree: 'B.E. Electronics and Communication Engineering',
      school: 'PSG College of Technology',
      duration: '2017 – 2021',
      location: 'Coimbatore, India',
      delay: 400,
      points: [
        'Embedded Systems and Microprocessors',
        'Signal Processing and Communication',
        'Robotics and Automation',
        'Participated in FTC Rover Ruckus Challenge'
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
