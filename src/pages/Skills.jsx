import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Scroll animations trigger
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

    // Skill bars animation trigger
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 150);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const categories = [
    {
      title: 'Robotics & Hardware',
      delay: 100,
      skills: [
        { name: 'ROS-2', level: '100%' },
        { name: 'ArduPilot', level: '85%' },
        { name: 'NVIDIA Jetson', level: '100%' },
        { name: 'Intel RealSense', level: '85%' },
        { name: 'ZED Camera', level: '85%' },
        { name: 'ARM/AMD Processors', level: '100%' }
      ]
    },
    {
      title: 'Programming',
      delay: 200,
      skills: [
        { name: 'Python', level: '100%' },
        { name: 'C++', level: '80%' },
        { name: 'MATLAB', level: '75%' },
        { name: 'Machine Learning', level: '65%' }
      ]
    },
    {
      title: 'Simulation & Tools',
      delay: 300,
      skills: [
        { name: 'CARLA Simulator', level: '70%' },
        { name: 'Unreal Engine', level: '80%' },
        { name: 'AirSim', level: '60%' },
        { name: 'Simulation', level: '85%' }
      ]
    },
    {
      title: 'DevOps & Platforms',
      delay: 400,
      skills: [
        { name: 'Docker', level: '100%' },
        { name: 'Linux', level: '100%' },
        { name: 'GitHub', level: '100%' }
      ]
    }
  ];

  return (
    <main className="section page-section">
      <h1 className="section-title" data-animate>Technical Skills</h1>

      <div className="skills-categories">
        {categories.map((cat, idx) => (
          <div key={idx} className="skill-category glass-card" data-animate data-delay={cat.delay}>
            <h3>{cat.title}</h3>
            {cat.skills.map((skill, sIdx) => (
              <div key={sIdx} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-bar-fill" 
                    style={{ width: isLoaded ? skill.level : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Skills;
