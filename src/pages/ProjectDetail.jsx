import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const projectData = {
  'fruit-detection': {
    title: 'Apple Detection in Orchards',
    meta: 'Machine Learning · Computer Vision · Agricultural Automation',
    desc: 'This project was implemented using models like YOLO and FRCNN to address challenges in agricultural automation by enabling efficient and precise fruit detection.',
    sections: [
      {
        title: 'What is YOLO (You Only Look Once)?',
        type: 'text-list-image',
        text: 'YOLO is a state-of-the-art real-time object detection algorithm. It processes the entire image in one go and predicts bounding boxes and class probabilities directly from the image pixels. YOLO is fast and efficient, making it suitable for applications like real-time fruit detection in agriculture.',
        list: [
          'Single-stage detector that provides high-speed predictions',
          'Divides the image into grids and predicts bounding boxes for each grid cell',
          'Achieves great balance between accuracy and speed'
        ],
        image: '/images/yolo.png',
        imageAlt: 'YOLO Architecture Diagram'
      },
      {
        title: 'What is FRCNN (Faster R-CNN)?',
        type: 'text-list-image',
        text: 'Faster R-CNN is a two-stage object detection model that improves upon previous versions like R-CNN and Fast R-CNN. It uses a Region Proposal Network (RPN) to generate regions of interest, significantly improving detection speed while maintaining accuracy.',
        list: [
          'Two-stage detector for higher accuracy',
          'Uses a Region Proposal Network (RPN) to generate candidate object proposals',
          'Highly accurate but slower compared to YOLO'
        ],
        image: '/images/frcnn.png',
        imageAlt: 'FRCNN Architecture Diagram'
      },
      {
        title: 'Results',
        type: 'results-table',
        text: 'The lower accuracy is due to the dataset used and its ground truth. The dataset had no ground truth bounding boxes for apples fallen on the floor, resulting in many false positives and reduced precision.'
      },
      {
        title: 'Test Results',
        type: 'image-grid',
        images: [
          '/images/test1.png',
          '/images/test2.png',
          '/images/test3.png',
          '/images/test4.png',
          '/images/test5.png',
          '/images/test6.png'
        ]
      }
    ],
    links: [
      {
        label: 'Source Code',
        url: 'https://github.com/snknitheesh/AppleDetectionML',
        icon: 'github'
      }
    ]
  },
  'nvidia-jetson-vision': {
    title: 'Exploring Vision with NVIDIA Jetson Orin Nano & Intel RealSense D457',
    meta: 'Machine Vision · Depth Sensing · Real-time Processing',
    desc: 'I recently worked on a project where I combined the NVIDIA Jetson Orin Nano and the Intel Corporation RealSense D457 depth camera to develop a machine vision application. This setup allowed me to perform basic object detection, motion tracking, and utilize point cloud data, unlocking huge possibilities for real-world applications.\n\nThis project emphasizes the importance of depth perception and real-time analysis in machine vision. With the Jetson Orin Nano\'s incredible processing power and the depth camera\'s spatial data, I explored how these technologies can bridge the gap between perception and action.',
    sections: [
      {
        title: 'Hardware',
        type: 'two-column-list',
        cols: [
          {
            title: 'Intel RealSense D457 Depth Camera',
            list: [
              'Resolution: Up to 1280x720 pixels',
              'Frame Rate: Up to 90 frames per second',
              'Depth Range: 0.2 to 20 meters',
              'Field of View: Wide field of view for enhanced depth perception',
              'Connectivity: USB 3.1 Gen 1 for fast data transfer'
            ]
          },
          {
            title: 'NVIDIA Jetson Orin Nano (8GB)',
            list: [
              'GPU: 1024-core NVIDIA Ampere architecture GPU',
              'CPU: 6-core ARM Cortex-A78AE',
              'Memory: 8GB LPDDR5',
              'Performance: Up to 40 TOPS (Tera Operations Per Second)',
              'Connectivity: Gigabit Ethernet, multiple USB ports, and camera interfaces'
            ]
          }
        ]
      },
      {
        title: 'Software',
        type: 'list-only',
        list: [
          'NVIDIA SDK: Tools for accelerated AI computations and seamless deployment',
          'RealSense SDK: Software for processing depth data and integrating point clouds',
          'Ubuntu: Operating system used for development and deployment'
        ]
      },
      {
        title: 'Implemented Projects',
        type: 'list-only',
        list: [
          'Object detection using a trained model',
          'Motion detection',
          'Point cloud viewing',
          'Depth image acquisition'
        ]
      },
      {
        title: 'Hardware Assets',
        type: 'two-col-images',
        images: [
          '/images/jetson.jpg',
          '/images/realsense.png'
        ]
      },
      {
        title: 'Project Output',
        type: 'single-image',
        image: '/images/realsense.gif',
        imageAlt: 'Project Output - Object Detection Demo'
      }
    ],
    links: [
      {
        label: 'Source Code',
        url: 'https://github.com/snknitheesh/Intel-Realsense-D457',
        icon: 'github'
      }
    ]
  },
  'pololu-disaster-management': {
    title: 'Pololu 3pi+ Robot Disaster Management Simulation',
    meta: 'Arduino · Robotics · PID Control · Magnetometer',
    desc: 'In this project, I programmed the Pololu 3pi+ robot using the Arduino IDE to simulate a disaster management scenario. The robot\'s mission is to locate magnets, which represent injured individuals, and follow a predefined workflow to indicate their positions.\n\nThe robot\'s primary objective is to locate injured individuals (magnets) in disaster zones and promptly return to alert rescue teams. Additionally, it marks the location of each magnet for further action.',
    sections: [
      {
        title: 'Key Tasks',
        type: 'list-only',
        list: [
          'Task 1: The robot starts from its home position and navigates to the search zone on the right side of the map. It searches for a magnet in this area.',
          'Task 2: Once the robot detects a magnet at a random location (simulated by a dice roll), it returns to its home position. It then alerts the user and navigates back to the magnet\'s location.',
          'Task 3: This task repeats Task 2 to ensure consistency and repeatability.'
        ]
      },
      {
        title: 'Hardware',
        type: 'list-only',
        list: [
          'Pololu 3pi+ robot',
          'Magnet to simulate injured individuals',
          'Batteries and a pre-defined map for navigation'
        ]
      },
      {
        title: 'Software',
        type: 'list-only',
        list: [
          'Arduino IDE: The Pololu 3pi+ controller is based on Arduino Leonardo',
          'pid.h: Implements smooth control using a PID algorithm for precise navigation',
          'magnetometer.h: Initializes the magnetometer to detect magnetic fields in the search zone',
          'kinematics.h: Localizes the robot\'s position and orientation within the map',
          'motors.h: Initializes and controls motor speeds to ensure smooth movement',
          'encoders.h: Provides a subset of kinematics for accurate localization and distance tracking'
        ]
      },
      {
        title: 'Closing Thoughts',
        type: 'text-only',
        text: 'This project showcases how compact robotic platforms, such as the Pololu 3pi+, can be scaled and utilized in disaster management scenarios to offer precise search, localization, and alerting functionalities. Special thanks to Paul O\'Dowd for formulating a scalable application.'
      },
      {
        title: 'Robot Image',
        type: 'single-image',
        image: '/images/pololu.jpg',
        imageAlt: 'Pololu 3pi+ Robot'
      }
    ],
    links: [
      {
        label: 'Source Code',
        url: 'https://github.com/snknitheesh/pololu3pi',
        icon: 'github'
      },
      {
        label: 'Video Demo',
        url: 'https://youtu.be/OT463JCGn8Y?si=wrWv4jhDMjV-BxqB',
        icon: 'video'
      }
    ]
  },
  'first-tech-challenge': {
    title: 'FTC Rover Ruckus Challenge',
    meta: 'Jan 2019 – Jul 2019 · PSG College of Technology · Competitive Robotics',
    desc: 'In the FTC Rover Ruckus Challenge, I was part of a robotics team that designed, programmed, and operated a robot to compete in a fast-paced, multi-phase robotics competition. The challenge included the Autonomous Period, Driver-Controlled Period, and Endgame, requiring innovative engineering and strategic gameplay.',
    sections: [
      {
        title: 'Key Phases of the Competition',
        type: 'phases',
        phases: [
          {
            title: 'Autonomous Period',
            text: 'Our robot successfully performed tasks such as landing, identifying and knocking over the gold mineral, placing a team marker in the depot, and parking on the crater, achieving the maximum possible points.'
          },
          {
            title: 'Driver-Controlled Period',
            text: 'We excelled in collecting and sorting minerals, ensuring the gold and silver minerals were deposited in their respective locations. Our efficient and precise robot design allowed us to outperform the competition.'
          },
          {
            title: 'Endgame',
            text: 'We showcased our robot\'s advanced capabilities by latching back onto the lander and parking inside the crater, maximizing our score in the final seconds of the match.'
          }
        ]
      },
      {
        title: 'Technical Details',
        type: 'text-only',
        text: 'We utilized a BeagleBone as the main hardware platform and developed the control logic using Python. For wireless communication, we implemented a ZigBee module, enabling seamless control and coordination during the competition.\n\nThis project honed my skills in programming, mechanical design, teamwork, and strategic thinking, further solidifying my passion for robotics and innovation.'
      },
      {
        title: 'Robot In Action',
        type: 'two-col-images',
        images: [
          '/images/rover1.png',
          '/images/rover2.jpg'
        ]
      }
    ],
    links: [
      {
        label: 'Theme Explanation',
        url: 'https://www.youtube.com/watch?v=rR4gR4l2XA8',
        icon: 'video'
      }
    ]
  },
  'self-driving-car': {
    title: 'Self-Driving Car',
    meta: 'Sep 2019 – May 2020 · Computer Vision · Kalman Filter · Autonomous Driving',
    desc: 'I worked on a Self-Driving Car team project based on Mahindra Tech\'s E2o vehicle for autonomous driving. My primary contribution was integrating a conventional machine vision approach to aid in detecting lanes during driving.\n\nAdditionally, I implemented this approach to detect lanes and signs to integrate it with a machine learning-based approach using Kalman filters.',
    sections: [
      {
        title: 'Vehicle',
        type: 'single-image',
        image: '/images/self-driving.png',
        imageAlt: 'Self-Driving Car Project'
      }
    ],
    links: [
      {
        label: 'Project Details',
        url: 'https://sarath-menon.github.io/car_new.html',
        icon: 'external-link'
      }
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

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

    return () => {
      observer.disconnect();
    };
  }, [projectId]);

  if (!project) {
    return (
      <main className="project-detail" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 data-animate>Project Not Found</h1>
        <p data-animate style={{ marginTop: '1rem' }}>The requested project detail page does not exist.</p>
        <Link to="/projects" className="back-link" data-animate style={{ marginTop: '2rem' }}>
          Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="project-detail">
      <Link to="/projects" className="back-link" data-animate>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        Back to Projects
      </Link>

      <h1 data-animate>{project.title}</h1>
      <p className="project-meta" data-animate>{project.meta}</p>

      <div className="project-detail-section glass-card" data-animate>
        {project.desc.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {project.sections && project.sections.map((section, idx) => {
        if (section.type === 'text-list-image') {
          return (
            <div key={idx} className="project-detail-section glass-card" data-animate>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
              <ul>
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {section.image && (
                <img src={section.image} alt={section.imageAlt} className="project-image" loading="lazy" />
              )}
            </div>
          );
        }

        if (section.type === 'results-table') {
          return (
            <div key={idx} className="project-detail-section glass-card" data-animate>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Average T<sup>+</sup></th>
                    <th>Average F<sup>+</sup></th>
                    <th>Average F<sup>-</sup></th>
                    <th>mAP</th>
                    <th>mAR</th>
                    <th>Avg Inference Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>21.85</td>
                    <td>8.98</td>
                    <td>17.71</td>
                    <td>0.71</td>
                    <td>0.54</td>
                    <td>2.5 ms</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }

        if (section.type === 'image-grid') {
          return (
            <div key={idx} className="project-detail-section" data-animate>
              <h2 className="section-title">{section.title}</h2>
              <div className="image-grid">
                {section.images.map((img, i) => (
                  <img key={i} src={img} alt={`Grid Item ${i + 1}`} loading="lazy" />
                ))}
              </div>
            </div>
          );
        }

        if (section.type === 'two-column-list') {
          return (
            <div key={idx} className="project-detail-section glass-card" data-animate>
              <h2>{section.title}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
                {section.cols.map((col, i) => (
                  <div key={i}>
                    <h3 style={{ color: 'var(--text-heading)', marginBottom: '0.5rem' }}>{col.title}</h3>
                    <ul>
                      {col.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (section.type === 'list-only') {
          return (
            <div key={idx} className="project-detail-section glass-card" data-animate>
              <h2>{section.title}</h2>
              <ul>
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }

        if (section.type === 'text-only') {
          return (
            <div key={idx} className="project-detail-section glass-card" data-animate>
              <h2>{section.title}</h2>
              {section.text.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          );
        }

        if (section.type === 'two-col-images') {
          return (
            <div key={idx} className="project-detail-section" data-animate>
              <div className="two-col-images">
                {section.images.map((img, i) => (
                  <img key={i} src={img} alt={`Two Column Item ${i + 1}`} loading="lazy" />
                ))}
              </div>
            </div>
          );
        }

        if (section.type === 'single-image') {
          return (
            <div key={idx} className="project-detail-section glass-card" data-animate style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h2>{section.title}</h2>
              <img src={section.image} alt={section.imageAlt} className="project-image" loading="lazy" style={{ width: '100%', maxWidth: '800px' }} />
            </div>
          );
        }

        if (section.type === 'phases') {
          return (
            <div key={idx} className="project-detail-section glass-card" data-animate>
              <h2>{section.title}</h2>
              {section.phases.map((phase, i) => (
                <div key={i} style={{ marginBottom: '1.5rem' }}>
                  <h3>{phase.title}</h3>
                  <p>{phase.text}</p>
                </div>
              ))}
            </div>
          );
        }

        return null;
      })}

      <div className="project-links" data-animate>
        {project.links && project.links.map((link, idx) => (
          <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
            {link.icon === 'github' && (
              <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            )}
            {link.icon === 'video' && (
              <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            )}
            {link.icon === 'external-link' && (
              <svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
            )}
            {link.label}
          </a>
        ))}
      </div>
    </main>
  );
};

export default ProjectDetail;
