import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null);

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

  // YouTube Embed URL
  const getYouTubeEmbedUrl = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0&modestbranding=1`;
    }
    return null;
  };

  // Google Drive Embed URL
  const getDriveEmbedUrl = (url) => {
    const match = url.match(/\/d\/(.+?)\/view/);
    if (match) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return null;
  };

  // Get Embed URL (auto-detect YouTube or Drive)
  const getEmbedUrl = (url) => {
    return getYouTubeEmbedUrl(url) || getDriveEmbedUrl(url);
  };

  const projectList = [
    {
      id: 'multifunction-humanoid-robot',
      title: 'Multifunction Humanoid Robot',
      desc: 'Height-adjustable humanoid robot with voice interaction, SLAM navigation, health monitoring, and IoT control.',
      img: '/images/humanoid-robot.jpg',
      videoUrl: 'https://drive.google.com/file/d/1RYSNQFmxy3GvkFZgMdcNBSvpNKfY2Ys2/view?usp=drive_link',
      tags: ['Humanoid', 'SLAM', 'IoT', 'Voice Interaction'],
      delay: 100
    },
    {
      id: 'volunteer-service-robot',
      title: 'Volunteer Service Robot',
      desc: 'ESP32-based robot for automated prize distribution with IoT control and height-adjustable mechanism.',
      img: '/images/volunteer-robot.jpg',
      videoUrl: 'https://drive.google.com/file/d/1YfseJY5O2eZma2jhbxoXlnzfOWp4Mnmj/view?usp=drive_link',
      tags: ['ESP32', 'IoT', 'Robotics'],
      delay: 150
    },
    {
      id: 'smart-irrigation-system',
      title: 'Smart Irrigation System',
      desc: 'Wi-Fi-enabled irrigation system with soil moisture sensors for automated watering and water conservation.',
      img: '/images/irrigation-system.jpg',
      videoUrl: 'https://drive.google.com/file/d/1JakOQaKpexbzCDcJAiQ7VX9yAH4AozzY/view?usp=drive_link',
      tags: ['IoT', 'Sensors', 'Agriculture'],
      delay: 200
    },
    {
      id: 'ir-leader-follower-robot',
      title: 'IR-Based Leader–Follower Robot',
      desc: 'Pololu 3Pi robot with IR sensors and PID control for accurate leader tracking and distance maintenance.',
      img: '/images/leader-follower.jpg',
      videoUrl: 'https://drive.google.com/file/d/1EAUdv86B91_d1qLeZKF1qZJoeEvkf8YW/view?usp=drive_link',
      tags: ['Pololu 3Pi', 'PID', 'Sensors'],
      delay: 250
    },
    {
      id: 'bluetooth-home-automation',
      title: 'Bluetooth Home Automation',
      desc: 'Wireless home automation system for controlling lights and devices via Bluetooth and mobile interface.',
      img: '/images/home-automation.jpg',
      videoUrl: 'https://drive.google.com/file/d/19BqqyGUtO3TALolH5K9fLx0FgrEurOZl/view?usp=drive_link',
      tags: ['Bluetooth', 'Embedded Systems', 'IoT'],
      delay: 300
    },
    {
      id: 'custom-drone-simulation',
      title: 'Custom Drone Simulation',
      desc: 'ROS 2, PX4, and Gazebo simulation with custom drone model featuring integrated display screen.',
      img: '/images/drone-simulation.jpg',
      videoUrl: 'https://drive.google.com/file/d/1Z8i5tUWYv9itS5EuI7Qd26i6nMAEX2rk/view?usp=drive_link',
      tags: ['ROS 2', 'PX4', 'Gazebo', 'Drone'],
      delay: 350
    },
    {
      id: 'edge-detection-robot',
      title: 'Edge Detection Robot',
      desc: 'Pololu 3Pi robot with IR sensors for real-time edge detection and automatic direction control.',
      img: '/images/edge-robot.jpg',
      videoUrl: 'https://drive.google.com/file/d/1lnBip0pKpTGogD7jkPxh8SyS-0T_yflD/view?usp=drive_link',
      tags: ['C++', 'Sensors', 'Robotics'],
      delay: 400
    },
    {
      id: 'anti-sleep-smart-helmet',
      title: 'Anti-Sleep Smart Helmet',
      desc: 'Safety helmet with sleep detection, GPS tracking, and emergency messaging for rider protection.',
      img: '/images/smart-helmet.jpg',
      videoUrl: 'https://drive.google.com/file/d/1ffsRnTZ2VPWbSwsHWBqlUhOjdOf0RMrN/view?usp=drive_link',
      tags: ['GPS', 'IoT', 'Safety'],
      delay: 450
    },
    {
      id: 'smart-bicycle',
      title: 'Cloud-Connected Smart Bicycle',
      desc: '🏆 IEEE First Prize - IoT bicycle with cloud monitoring, GPS, and assisted braking system for child safety.',
      img: '/images/smart-bicycle.jpg',
      videoUrl: 'https://drive.google.com/file/d/12Oz2quMzi2rqDnBDwsuffeJqWaBNxzk4/view?usp=drive_link',
      tags: ['IoT', 'Cloud', 'GPS', 'IEEE Award'],
      delay: 500
    },
    {
      id: 'national-drone-competition',
      title: 'National-Level Drone Competition',
      desc: '🏆 Second Prize - Advanced drone piloting with precision control and stable manoeuvring.',
      img: '/images/drone-prize.jpg',
      videoUrl: 'https://drive.google.com/file/d/1xxYX7mtvbg1DNM-3qcy2mdcupnFTn7Ze/view?usp=drive_link',
      tags: ['Drone', 'Competition', 'Second Prize'],
      delay: 550
    },
    {
      id: 'custom-fpv-drone-naza',
      title: 'Custom FPV Drone - DJI Naza V2',
      desc: 'Full custom FPV drone build with DJI Naza V2, featured in World Robotics Championship 2022.',
      img: '/images/fpv-certificate.jpg',
      videoUrl: 'https://drive.google.com/file/d/1oZEuqmsZRZVFX6DYhzRs6mOtTgO5fAuW/view?usp=drive_link',
      tags: ['FPV', 'DJI Naza', 'World Championship'],
      delay: 600
    },
    {
      id: 'custom-fpv-whoop-drone',
      title: 'Custom FPV Whoop Racing Drone',
      desc: 'High-speed racing drone reaching 100km/h with SpeedyBee controller and PID tuning.',
      img: '/images/whoop-drone.jpg',
      videoUrl: 'https://drive.google.com/file/d/1oZEuqmsZRZVFX6DYhzRs6mOtTgO5fAuW/view?usp=drive_link',
      tags: ['FPV Racing', 'SpeedyBee', 'Speed 100km/h'],
      delay: 650
    },
    {
      id: 'student-of-the-year',
      title: 'Student of the Year – Live Media Feature',
      desc: '🌟 Featured on live television for achievements in robotics, innovation, and practical engineering.',
      img: '/images/student-of-year.jpg',
      videoUrl: 'https://youtu.be/pyZlFBVpmgI?si=H_TS-QB08cTSMc8A',
      tags: ['Recognition', 'Media', 'Leadership'],
      delay: 700
    }
  ];

  // Video Player Component
  const VideoPlayer = ({ videoUrl, title, onClose }) => {
    const [isMinimized, setIsMinimized] = useState(false);
    const embedUrl = getEmbedUrl(videoUrl);

    if (!embedUrl) {
      return (
        <div className="video-error">
          <p>Video not available</p>
          <button onClick={onClose} className="video-close-btn">✕</button>
        </div>
      );
    }

    return (
      <div className={`video-player-container ${isMinimized ? 'minimized' : ''}`}>
        <div className="video-player-header">
          <span className="video-title">{title}</span>
          <div className="video-controls">
            <button 
              className="video-minimize-btn"
              onClick={() => setIsMinimized(!isMinimized)}
              title={isMinimized ? 'Maximize' : 'Minimize'}
            >
              {isMinimized ? '⤢' : '⤡'}
            </button>
            <button className="video-close-btn" onClick={onClose}>✕</button>
          </div>
        </div>
        <div className="video-player-body">
          <iframe
            src={embedUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };

  return (
    <main className="section page-section">
      <h1 className="section-title" data-animate>Projects</h1>

      <div className="projects-grid">
        {projectList.map((project) => (
          <div 
            key={project.id}
            className="project-card glass-card" 
            data-animate 
            data-delay={project.delay}
          >
            {/* Image - Click se video open hogi */}
            <div 
              className="project-card-image" 
              onClick={(e) => {
                e.stopPropagation();
                if (project.videoUrl) setActiveVideo(project);
              }}
            >
              <img src={project.img} alt={project.title} loading="lazy" />
              {project.videoUrl && (
                <div className="project-card-play">
                  <svg viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}
              <div className="project-card-overlay"></div>
            </div>
            
            {/* Body - Click se project detail page open hogi */}
            <Link to={`/projects/${project.id}`} className="project-card-body-link">
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <span className="project-detail-link">View Details →</span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Video Player Overlay */}
      {activeVideo && (
        <div className="video-overlay" onClick={() => setActiveVideo(null)}>
          <div className="video-overlay-content" onClick={(e) => e.stopPropagation()}>
            <VideoPlayer 
              videoUrl={activeVideo.videoUrl} 
              title={activeVideo.title} 
              onClose={() => setActiveVideo(null)} 
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Projects;