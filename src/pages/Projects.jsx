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

  // Google Drive Embed URL
  const getDriveEmbedUrl = (url) => {
    const match = url.match(/\/d\/(.+?)\/view/);
    if (match) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return null;
  };

  // Extract video ID for thumbnail
  const getVideoId = (url) => {
    const match = url.match(/\/d\/(.+?)\/view/);
    if (match) {
      return match[1];
    }
    return null;
  };

  // Google Drive Video Thumbnail
  const getThumbnailUrl = (url) => {
    const videoId = getVideoId(url);
    if (videoId) {
      return `https://drive.google.com/thumbnail?authuser=0&sz=w640&id=${videoId}`;
    }
    return null;
  };

  // All Projects - Same Style
  const allProjects = [
    {
      id: 'multifunction-humanoid-robot',
      title: 'Multifunction Humanoid Robot',
      desc: 'Height-adjustable humanoid robot with voice interaction, SLAM navigation, health monitoring, and IoT control.',
      videoUrl: 'https://drive.google.com/file/d/1RYSNQFmxy3GvkFZgMdcNBSvpNKfY2Ys2/view?usp=drive_link',
      delay: 100
    },
    {
      id: 'smart-bicycle',
      title: 'Cloud-Connected Smart Bicycle',
      desc: '🏆 IEEE First Prize - IoT bicycle with cloud monitoring, GPS, and assisted braking system for child safety.',
      videoUrl: 'https://drive.google.com/file/d/1ffsRnTZ2VPWbSwsHWBqlUhOjdOf0RMrN/view?usp=drive_link',
      delay: 150
    },
    {
      id: 'volunteer-service-robot',
      title: 'Volunteer Service Robot',
      desc: 'ESP32-based robot for automated prize distribution with IoT control and height-adjustable mechanism.',
      videoUrl: 'https://drive.google.com/file/d/1YfseJY5O2eZma2jhbxoXlnzfOWp4Mnmj/view?usp=drive_link',
      delay: 200
    },
    {
      id: 'smart-irrigation-system',
      title: 'Smart Irrigation System',
      desc: 'Wi-Fi-enabled irrigation system with soil moisture sensors for automated watering and water conservation.',
      videoUrl: 'https://drive.google.com/file/d/1JakOQaKpexbzCDcJAiQ7VX9yAH4AozzY/view?usp=drive_link',
      delay: 250
    },
    {
      id: 'custom-fpv-whoop-drone',
      title: 'Custom FPV Whoop Racing Drone',
      desc: 'High-speed racing drone reaching 100km/h with SpeedyBee controller and PID tuning.',
      videoUrl: 'https://drive.google.com/file/d/19BqqyGUtO3TALolH5K9fLx0FgrEurOZl/view?usp=drive_link',
      delay: 550
    },
    {
      id: 'custom-drone-simulation',
      title: 'Custom Drone Simulation',
      desc: 'ROS 2, PX4, and Gazebo simulation with custom drone model featuring integrated display screen.',
      videoUrl: 'https://drive.google.com/file/d/1Z8i5tUWYv9itS5EuI7Qd26i6nMAEX2rk/view?usp=drive_link',
      delay: 300
    },
    
    {
      id: 'edge-detection-robot',
      title: 'Edge Detection Robot',
      desc: 'Pololu 3Pi robot with IR sensors for real-time edge detection and automatic direction control.',
      videoUrl: 'https://drive.google.com/file/d/12Oz2quMzi2rqDnBDwsuffeJqWaBNxzk4/view?usp=drive_link',
      delay: 400
    },
    {
      id: 'bluetooth-home-automation',
      title: 'Bluetooth Home Automation',
      desc: 'Wireless home automation system for controlling lights and devices via Bluetooth and mobile interface.',
      videoUrl: 'https://drive.google.com/file/d/1oZEuqmsZRZVFX6DYhzRs6mOtTgO5fAuW/view?usp=drive_link',
      delay: 450
    },
    {
      id: 'ir-leader-follower-robot',
      title: 'IR-Based Leader–Follower Robot',
      desc: 'Pololu 3Pi robot with IR sensors and PID control for accurate leader tracking and distance maintenance.',
      videoUrl: 'https://drive.google.com/file/d/1lnBip0pKpTGogD7jkPxh8SyS-0T_yflD/view?usp=drive_link',
      delay: 500
    },
    
    {
      id: 'anti-sleep-smart-helmet',
      title: 'Anti-Sleep Smart Helmet',
      desc: 'Safety helmet with sleep detection, GPS tracking, and emergency messaging for rider protection.',
      videoUrl: null,
      delay: 600,
      thumbnail: '/images/smart-helmet.jpeg'
    },
    {
      id: 'custom-fpv-drone-naza',
      title: 'DJI Naza V2',
      desc: 'Full custom FPV drone build with DJI Naza V2, featured in World Robotics Championship 2022.',
      videoUrl: 'https://drive.google.com/file/d/1xxYX7mtvbg1DNM-3qcy2mdcupnFTn7Ze/view?usp=drive_link',
      delay: 350
    },
    {
      id: 'national-drone-competition',  // ← Same style as others
      title: 'National-Level Drone Competition',
      desc: '🏆 Second Prize - Advanced drone piloting with precision control and stable manoeuvring.',
      videoUrl: 'https://drive.google.com/file/d/1EAUdv86B91_d1qLeZKF1qZJoeEvkf8YW/view?usp=drive_link',
      delay: 650
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
        {allProjects.map((project) => (
          <div 
            key={project.id}
            className="project-card glass-card" 
            data-animate 
            data-delay={project.delay}
          >
            {/* Thumbnail */}
            <div 
              className="project-card-thumbnail" 
              onClick={(e) => {
                e.stopPropagation();
                if (project.videoUrl) setActiveVideo(project);
              }}
              style={{
                backgroundImage: `url(${project.videoUrl ? getThumbnailUrl(project.videoUrl) : project.thumbnail})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: project.videoUrl ? 'pointer' : 'default'
              }}
            >
              <div className="thumbnail-overlay"></div>
            </div>
            
            <Link to={`/projects/${project.id}`} className="project-card-body-link">
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <span className="project-detail-link">View Details →</span>
              </div>
            </Link>
          </div>
        ))}
      </div>

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