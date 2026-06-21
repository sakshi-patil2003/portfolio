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
      title: '🤖 Robotics & Autonomy',
      delay: 100,
      skills: [
        { name: 'ROS 2', level: '90%' },
        { name: 'PX4', level: '85%' },
        { name: 'ArduPilot', level: '85%' },
        { name: 'SLAM', level: '80%' },
        { name: 'Path Planning', level: '75%' },
        { name: 'PID Tuning', level: '85%' }
      ]
    },
    {
      title: '🚁 UAV Systems & Flight Control',
      delay: 150,
      skills: [
        { name: 'Drone Integration', level: '85%' },
        { name: 'QGroundControl', level: '80%' },
        { name: 'Mission Planner', level: '80%' },
        { name: 'MAVLink', level: '75%' },
        { name: 'FPV Systems', level: '85%' }
      ]
    },
    {
      title: '🔧 Hardware & Embedded',
      delay: 200,
      skills: [
        { name: 'Raspberry Pi', level: '85%' },
        { name: 'NVIDIA Jetson', level: '85%' },
        { name: 'ESP32', level: '80%' },
        { name: 'ARM Processors', level: '80%' },
        { name: 'UART / I2C / SPI', level: '85%' },
        { name: 'Sensor Interfacing', level: '85%' }
      ]
    },
    {
      title: '💻 Programming & Simulation',
      delay: 250,
      skills: [
        { name: 'Python', level: '90%' },
        { name: 'C++', level: '80%' },
        { name: 'Linux', level: '90%' },
        { name: 'OpenCV', level: '75%' },
        { name: 'Gazebo', level: '80%' },
        { name: 'CARLA Simulator', level: '70%' },
        { name: 'Machine Learning', level: '65%' }
      ]
    },
    {
      title: '📡 Sensors & Perception',
      delay: 300,
      skills: [
        { name: 'LiDAR', level: '80%' },
        { name: 'IMU', level: '85%' },
        { name: 'GPS', level: '80%' },
        { name: 'Cameras', level: '85%' },
        { name: 'Microphone Arrays', level: '70%' },
        { name: 'Ultrasonic Sensors', level: '85%' },
        { name: 'IR Sensors', level: '80%' }
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