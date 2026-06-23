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
      role: 'Drone Technician & UAV Systems Member',
      company: 'University Drone Society',
      type: 'Part-time',
      duration: 'Dec 2025 – Sep 2026',
      location: 'Bristol, UK',
      logo: '/images/drone-society-logo.jpeg',
      delay: 100,
      points: [
        'Built and assembled multirotor drones and RC aircraft',
        'Configured flight controllers and radio transmitters/receivers',
        'Performed soldering, wiring, and power distribution setup',
        'Conducted pre-flight inspections and functional testing',
        'Tuned PID parameters for stable and responsive flight',
        'Calibrated ESCs, IMUs, and radio systems',
        'Troubleshot hardware and communication issues',
        'Assisted in flight testing and performance optimization',
        'Worked with LiPo batteries and safety procedures',
        'Gained practical experience with UAV hardware integration and maintenance'
      ]
    },
    {
      role: 'Robotic Engineer',
      company: 'ROBOTRY',
      type: 'Full-time',
      duration: '1 Year Experience',
      location: 'Bristol, UK',
      logo: '/images/kinisi_robotics_logo.jpeg',
      delay: 200,
      points: [
        'Developed ROS packages for robotic systems',
        'Worked with NVIDIA Jetson embedded devices for hardware acceleration',
        'Integrated perception pipelines for advanced robotics applications',
        'Deployed Docker containers for efficient robot operations'
      ]
    },
    {
      role: 'Workshop Resource Person (FPV & UAV Technology)',
      company: 'S.B. Jain Institute of Technology, Management and Research, Nagpur',
      type: 'Workshop',
      duration: 'July 2025',
      location: 'Nagpur, India',
      logo: '/images/sb-jain-logo.jpeg',
      delay: 300,
      points: [
        'Invited as a Resource Person to conduct a two-day workshop on "Design & Development of FPVs for Innovation and Startup Applications"',
        'Delivered technical sessions on FPV drone systems, UAV technologies, and development methodologies',
        'Conducted practical demonstrations and interactive discussions for engineering students from various disciplines',
        'Shared insights on drone innovation, system integration, and entrepreneurial opportunities in UAV technology'
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