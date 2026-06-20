import React, { useEffect } from 'react';

const Blog = () => {
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

  const blogCategories = [
    {
      id: 'robotics-engineering',
      icon: '🤖',
      title: 'Robotics Engineering',
      posts: [
        'Building a 5.5-Foot Multifunction Humanoid Robot from Scratch',
        'Designing a Height-Adjustable Volunteer Service Robot',
        'Developing an IR-Based Leader–Follower Robot Using PID Control',
        'Edge Detection and Autonomous Navigation with Pololu 3Pi',
        'Designing Custom Robotic Grippers and Human-Like Robotic Hands',
        'Integrating SLAM and Autonomous Navigation into Mobile Robots'
      ],
      delay: 100
    },
    {
      id: 'drones-uav',
      icon: '🚁',
      title: 'Drones & UAV Systems',
      posts: [
        'Developing Autonomous Drone Systems Using PX4 and ROS 2',
        'Building Autonomous UAV Applications with PX4, Gazebo, and ROS 2',
        'Integrating ROS 2 and PX4 for Autonomous Drone Operations',
        'Autonomous Drone Development Using Open-Source UAV Technologies',
        'From Simulation to Autonomy: Developing Intelligent Drone Systems',
        'Implementing Autonomous Navigation in UAV Simulation Environments',
        'Developing Drone Applications Using PX4, ROS 2, and Gazebo',
        'Building Intelligent UAV Systems for Real-World Applications'
      ],
      delay: 150
    },
    {
      id: 'iot-embedded',
      icon: '🌐',
      title: 'IoT & Embedded Systems',
      posts: [
        'Developing a Smart Irrigation System for Real-World Agriculture',
        'Bluetooth Home Automation Using Embedded Systems',
        'Designing a Cloud-Connected Smart Bicycle for Child Safety',
        'Building an Anti-Sleep Smart Helmet for Road Safety',
        'Sensor Integration Techniques for Embedded Systems',
        'Developing IoT Solutions Using ESP32 and Raspberry Pi'
      ],
      delay: 200
    },
    {
      id: 'competitions',
      icon: '🏆',
      title: 'Competitions & Technical Achievements',
      posts: [
        'How My Smart Bicycle Won First Prize at an IEEE Competition',
        'Winning Awards Through Practical Engineering Projects',
        'My Journey to Becoming Student of the Year',
        'Lessons Learned from National Robotics and Drone Competitions',
        'Presenting Robotics Projects to Industry and Public Audiences',
        'What Engineering Competitions Taught Me About Problem Solving'
      ],
      delay: 250
    },
    {
      id: 'msc-robotics',
      icon: '🎓',
      title: 'MSc Robotics & Research Journey',
      posts: [
        'My Journey into Robotics Engineering',
        'Building Robots Before Starting My MSc Robotics Degree',
        'Learning ROS 2 as a Beginner',
        'Challenges I Faced While Developing Robotics Projects',
        'From Hardware Projects to Advanced Robotics Research',
        'Developing a Drone Sound Localization System for My MSc Dissertation',
        'Applying Computer Vision and Autonomous Systems in Robotics',
        'Skills I Learned During My MSc Robotics Journey'
      ],
      delay: 300
    },
    {
      id: 'engineering-skills',
      icon: '🔧',
      title: 'Engineering Skills & Development',
      posts: [
        'Understanding PID Control in Robotics and Drones',
        'Raspberry Pi Projects for Robotics Applications',
        'ESP32-Based Embedded System Development',
        'Practical Sensor Integration for Intelligent Systems',
        'Designing Real-World Robotics Solutions from Concept to Deployment',
        'Lessons Learned from Building More Than 10 Robotics Projects'
      ],
      delay: 350
    }
  ];

  return (
    <main className="section page-section">
      <h1 className="section-title" data-animate>Blog</h1>

      <div className="blog-grid">
        {blogCategories.map((category) => (
          <div 
            key={category.id} 
            className="blog-card glass-card" 
            data-animate 
            data-delay={category.delay}
          >
            <div className="blog-card-header">
              <span className="blog-icon">{category.icon}</span>
              <h3 className="blog-card-title">{category.title}</h3>
            </div>
            <div className="blog-posts-list">
              {category.posts.map((post, index) => (
                <div key={index} className="blog-post-item">
                  <span className="blog-post-bullet">▸</span>
                  <span className="blog-post-text">{post}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blog;