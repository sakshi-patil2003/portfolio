import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [showMore, setShowMore] = useState(false);

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

  // Google Drive Embed URL
  const getDriveEmbedUrl = (url) => {
    const match = url.match(/\/d\/(.+?)\/view/);
    if (match) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return null;
  };

  // 8 Video Projects - Smart Bicycle yahan, Anti-Sleep Helmet hata diya
  const videoProjects = [
    {
      id: 'multifunction-humanoid-robot',
      title: 'Multifunction Humanoid Robot',
      desc: 'Height-adjustable humanoid robot with voice interaction, SLAM navigation, health monitoring, and IoT control.',
      videoUrl: 'https://drive.google.com/file/d/1RYSNQFmxy3GvkFZgMdcNBSvpNKfY2Ys2/view?usp=drive_link',
      tags: ['Humanoid', 'SLAM', 'IoT', 'Voice Interaction'],
      delay: 100,
      icon: '🤖'
    },
    {
      id: 'volunteer-service-robot',
      title: 'Volunteer Service Robot',
      desc: 'ESP32-based robot for automated prize distribution with IoT control and height-adjustable mechanism.',
      videoUrl: 'https://drive.google.com/file/d/1YfseJY5O2eZma2jhbxoXlnzfOWp4Mnmj/view?usp=drive_link',
      tags: ['ESP32', 'IoT', 'Robotics'],
      delay: 150,
      icon: '🤝'
    },
    {
      id: 'smart-irrigation-system',
      title: 'Smart Irrigation System',
      desc: 'Wi-Fi-enabled irrigation system with soil moisture sensors for automated watering and water conservation.',
      videoUrl: 'https://drive.google.com/file/d/1JakOQaKpexbzCDcJAiQ7VX9yAH4AozzY/view?usp=drive_link',
      tags: ['IoT', 'Sensors', 'Agriculture'],
      delay: 200,
      icon: '🌱'
    },
    {
      id: 'ir-leader-follower-robot',
      title: 'IR-Based Leader–Follower Robot',
      desc: 'Pololu 3Pi robot with IR sensors and PID control for accurate leader tracking and distance maintenance.',
      videoUrl: 'https://drive.google.com/file/d/1EAUdv86B91_d1qLeZKF1qZJoeEvkf8YW/view?usp=drive_link',
      tags: ['Pololu 3Pi', 'PID', 'Sensors'],
      delay: 250,
      icon: '🚗'
    },
    {
      id: 'bluetooth-home-automation',
      title: 'Bluetooth Home Automation',
      desc: 'Wireless home automation system for controlling lights and devices via Bluetooth and mobile interface.',
      videoUrl: 'https://drive.google.com/file/d/19BqqyGUtO3TALolH5K9fLx0FgrEurOZl/view?usp=drive_link',
      tags: ['Bluetooth', 'Embedded Systems', 'IoT'],
      delay: 300,
      icon: '💡'
    },
    {
      id: 'custom-drone-simulation',
      title: 'Custom Drone Simulation',
      desc: 'ROS 2, PX4, and Gazebo simulation with custom drone model featuring integrated display screen.',
      videoUrl: 'https://drive.google.com/file/d/1Z8i5tUWYv9itS5EuI7Qd26i6nMAEX2rk/view?usp=drive_link',
      tags: ['ROS 2', 'PX4', 'Gazebo', 'Drone'],
      delay: 350,
      icon: '🛸'
    },
    {
      id: 'edge-detection-robot',
      title: 'Edge Detection Robot',
      desc: 'Pololu 3Pi robot with IR sensors for real-time edge detection and automatic direction control.',
      videoUrl: 'https://drive.google.com/file/d/1lnBip0pKpTGogD7jkPxh8SyS-0T_yflD/view?usp=drive_link',
      tags: ['C++', 'Sensors', 'Robotics'],
      delay: 400,
      icon: '🔲'
    },
    {
      id: 'smart-bicycle',  // ← Smart Bicycle yahan aa gaya (Video ke saath)
      title: 'Cloud-Connected Smart Bicycle',
      desc: '🏆 IEEE First Prize - IoT bicycle with cloud monitoring, GPS, and assisted braking system.',
      videoUrl: 'https://drive.google.com/file/d/12Oz2quMzi2rqDnBDwsuffeJqWaBNxzk4/view?usp=drive_link',
      tags: ['IoT', 'Cloud', 'GPS', 'IEEE Award'],
      delay: 450,
      icon: '🚲'
    }
  ];

  // More Projects - Anti-Sleep Helmet yahan aa gaya (Bina video ke)
  const moreProjects = [
    {
      id: 'anti-sleep-smart-helmet',  // ← Anti-Sleep Helmet yahan aa gaya
      title: 'Anti-Sleep Smart Helmet',
      desc: 'Safety helmet with sleep detection, GPS tracking, and emergency messaging for rider protection.',
      tags: ['GPS', 'IoT', 'Safety'],
      icon: '⛑️'
    },
    {
      id: 'national-drone-competition',
      title: 'National-Level Drone Competition',
      desc: '🏆 Second Prize - Advanced drone piloting with precision control and stable manoeuvring.',
      tags: ['Drone', 'Competition', 'Second Prize'],
      icon: '🏆'
    },
    {
      id: 'custom-fpv-drone-naza',
      title: 'Custom FPV Drone - DJI Naza V2',
      desc: 'Full custom FPV drone build with DJI Naza V2, featured in World Robotics Championship 2022.',
      tags: ['FPV', 'DJI Naza', 'World Championship'],
      icon: '✈️'
    },
    {
      id: 'custom-fpv-whoop-drone',
      title: 'Custom FPV Whoop Racing Drone',
      desc: 'High-speed racing drone reaching 100km/h with SpeedyBee controller and PID tuning.',
      tags: ['FPV Racing', 'SpeedyBee', 'Speed 100km/h'],
      icon: '🏁'
    },
    {
      id: 'student-of-the-year',
      title: 'Student of the Year – Live Media Feature',
      desc: '🌟 Featured on live television for achievements in robotics, innovation, and practical engineering.',
      tags: ['Recognition', 'Media', 'Leadership'],
      icon: '⭐'
    }
  ];

  const VideoPlayer = ({ videoUrl, title, onClose }) => {
    const [isMinimized, setIsMinimized] = useState(false);
    const embedUrl = getDriveEmbedUrl(videoUrl);

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
        {videoProjects.map((project) => (
          <div 
            key={project.id}
            className="project-card glass-card" 
            data-animate 
            data-delay={project.delay}
          >
            <div 
              className="project-card-thumbnail" 
              onClick={(e) => {
                e.stopPropagation();
                if (project.videoUrl) setActiveVideo(project);
              }}
            >
              <div className="thumbnail-content">
                <span className="thumbnail-icon">{project.icon}</span>
                <p className="thumbnail-title">Click to play video</p>
              </div>
            </div>
            
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

        <div className="project-card view-more-card glass-card" data-animate data-delay="500">
          <div 
            className="view-more-content" 
            onClick={() => setShowMore(!showMore)}
            style={{ cursor: 'pointer' }}
          >
            <span className="view-more-icon">📂</span>
            <h3 className="view-more-title">
              {showMore ? 'Hide Extra Projects' : 'View More Projects'}
            </h3>
            <p className="view-more-desc">
              {showMore 
                ? 'Click to hide additional projects' 
                : `Click to view ${moreProjects.length} more projects`}
            </p>
            <span className="view-more-arrow">{showMore ? '↑' : '↓'}</span>
          </div>
        </div>
      </div>

      {showMore && (
        <div className="extra-projects-grid">
          {moreProjects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="extra-project-card glass-card">
              <div className="extra-project-icon">{project.icon}</div>
              <div className="extra-project-info">
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <div className="extra-project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

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