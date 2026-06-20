import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
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

  const projectList = [
    {
      id: 'fruit-detection',
      title: 'Apple Detection in Orchards',
      desc: 'Fruit detection using YOLO and Faster R-CNN models for agricultural automation.',
      img: '/images/yolo.png',
      tags: ['YOLO', 'FRCNN', 'Python', 'ML'],
      delay: 100
    },
    {
      id: 'nvidia-jetson-vision',
      title: 'Object Detection & Motion Detection',
      desc: 'Machine vision with NVIDIA Jetson Orin Nano and Intel RealSense D457 depth camera.',
      img: '/images/jetson.jpg',
      tags: ['Jetson', 'RealSense', 'NVIDIA'],
      delay: 200
    },
    {
      id: 'pololu-disaster-management',
      title: 'Disaster Management (Pololu 3pi+)',
      desc: 'Robot simulation for locating injured individuals using magnetometer-based detection.',
      img: '/images/pololu.jpg',
      tags: ['Arduino', 'Robotics', 'PID'],
      delay: 300
    },
    {
      id: 'first-tech-challenge',
      title: 'FTC Rover Ruckus Challenge',
      desc: 'Competitive robotics challenge featuring autonomous navigation, mineral sorting, and precision control.',
      img: '/images/rover1.png',
      tags: ['BeagleBone', 'Python', 'ZigBee'],
      delay: 400
    },
    {
      id: 'self-driving-car',
      title: 'Self-Driving Car',
      desc: 'Autonomous driving on Mahindra E2o with machine vision lane detection and Kalman filters.',
      img: '/images/self-driving.png',
      tags: ['Computer Vision', 'ML', 'Kalman Filter'],
      delay: 500
    }
  ];

  return (
    <main className="section page-section">
      <h1 className="section-title" data-animate>Projects</h1>

      <div className="projects-grid">
        {projectList.map((project) => (
          <Link 
            key={project.id}
            to={`/projects/${project.id}`} 
            className="project-card glass-card" 
            data-animate 
            data-delay={project.delay}
          >
            <div className="project-card-image">
              <img src={project.img} alt={project.title} loading="lazy" />
              <div className="project-card-overlay"></div>
            </div>
            <div className="project-card-body">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Projects;
