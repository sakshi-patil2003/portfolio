import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const projectData = {
  'multifunction-humanoid-robot': {
    title: 'Multifunction Humanoid Robot',
    meta: 'Robotics · SLAM · IoT · Voice Interaction · Health Monitoring',
    desc: 'Designed and developed a height-adjustable multifunction humanoid robot capable of voice interaction, autonomous navigation, and real-time monitoring. The robot features a touchscreen interface, IoT-based control, SLAM-enabled autonomous movement, a custom in-house human-like hand, a 3D-printed robotic gripper, and integrated health and environmental sensors including heart rate, SpO₂, stress monitoring, and gas detection. The robot can extend up to 5.5 feet for surveillance applications and was recognized through publication in local newspapers.',
    sections: [
      {
        title: 'Key Features',
        type: 'list-only',
        list: [
          'Voice interaction for hands-free control',
          'SLAM-enabled autonomous navigation',
          'Touchscreen interface for user interaction',
          'IoT-based remote control and monitoring',
          'Height-adjustable mechanism extending up to 5.5 feet',
          'Custom human-like hand and 3D-printed robotic gripper',
          'Health sensors: Heart Rate, SpO₂, Stress Monitoring',
          'Environmental sensors: Gas detection'
        ]
      },
      {
        title: 'Robot Image',
        type: 'single-image',
        image: '/images/humanoid-robot.jpg',
        imageAlt: 'Multifunction Humanoid Robot'
      },
      {
        title: 'Recognition',
        type: 'text-only',
        text: 'This project was recognized through publication in local newspapers, highlighting its innovative approach to humanoid robotics and practical applications in surveillance and monitoring.'
      }
    ],
    links: [
      {
        label: 'Watch Demo Video',
        url: 'https://drive.google.com/file/d/1RYSNQFmxy3GvkFZgMdcNBSvpNKfY2Ys2/view?usp=drive_link',
        icon: 'video'
      }
    ]
  },
  'volunteer-service-robot': {
    title: 'Volunteer Service Robot',
    meta: 'ESP32 · IoT · Robotics · Prize Distribution',
    desc: 'Designed and developed a client-focused volunteer service robot for automated prize distribution and public engagement activities. The robot is powered by an ESP32 microcontroller and controlled through an IoT-based mobile interface, enabling wireless operation and real-time movement control. A key feature of the robot is its height-adjustable mechanism, allowing it to extend according to operational requirements and efficiently distribute prizes to participants during events.',
    sections: [
      {
        title: 'Technical Specifications',
        type: 'list-only',
        list: [
          'ESP32 microcontroller for processing and control',
          'IoT-based mobile interface for wireless operation',
          'Height-adjustable mechanism for flexible prize distribution',
          'Real-time movement control',
          'Designed for public engagement activities'
        ]
      },
      {
        title: 'Robot Image',
        type: 'single-image',
        image: '/images/volunteer-robot.jpg',
        imageAlt: 'Volunteer Service Robot'
      }
    ],
    links: [
      {
        label: 'Watch Demo Video',
        url: 'https://drive.google.com/file/d/1YfseJY5O2eZma2jhbxoXlnzfOWp4Mnmj/view?usp=drive_link',
        icon: 'video'
      }
    ]
  },
  'smart-irrigation-system': {
    title: 'Smart Irrigation System',
    meta: 'IoT · Embedded Systems · Sensor Integration · Smart Agriculture',
    desc: 'Designed and implemented a Wi-Fi-enabled smart irrigation system in a real backyard environment using home automation technology. The system utilizes soil moisture sensors, humidity sensors, and a microcontroller to continuously monitor environmental conditions and automate watering based on plant requirements. By integrating wireless connectivity, the system enables remote monitoring and control, helping to reduce water consumption while maintaining optimal soil conditions.',
    sections: [
      {
        title: 'Key Components',
        type: 'list-only',
        list: [
          'Soil moisture sensors for real-time monitoring',
          'Humidity sensors for environmental conditions',
          'Wi-Fi connectivity for remote monitoring and control',
          'Automated watering based on plant requirements',
          'Water consumption optimization'
        ]
      },
      {
        title: 'System Image',
        type: 'single-image',
        image: '/images/irrigation-system.jpg',
        imageAlt: 'Smart Irrigation System'
      },
      {
        title: 'Impact',
        type: 'text-only',
        text: 'This project demonstrates practical experience in IoT, embedded systems, sensor integration, and smart agriculture applications, contributing to sustainable water management practices.'
      }
    ],
    links: [
      {
        label: 'Watch Demo Video',
        url: 'https://drive.google.com/file/d/1JakOQaKpexbzCDcJAiQ7VX9yAH4AozzY/view?usp=drive_link',
        icon: 'video'
      }
    ]
  },
  'ir-leader-follower-robot': {
    title: 'IR-Based Leader–Follower Robot',
    meta: 'Pololu 3Pi · PID Control · Sensor Navigation · Robotics',
    desc: 'Developed a leader–follower robotic system using Pololu 3Pi robots and infrared sensors. The follower robot detects and tracks the leader while maintaining a safe and consistent distance. PID control was implemented to improve tracking accuracy, stability, distance control, and smooth movement, while robot kinematics were used to calculate and control the robots\' motion.',
    sections: [
      {
        title: 'Technical Approach',
        type: 'list-only',
        list: [
          'Infrared sensors for leader detection and tracking',
          'PID control for improved tracking accuracy and stability',
          'Robot kinematics for motion calculation and control',
          'Distance maintenance for safe following',
          'Multi-robot coordination and communication'
        ]
      }
    ],
    links: [
      {
        label: 'Watch Demo Video',
        url: 'https://drive.google.com/file/d/1EAUdv86B91_d1qLeZKF1qZJoeEvkf8YW/view?usp=drive_link',
        icon: 'video'
      }
    ]
  },
  'bluetooth-home-automation': {
    title: 'Bluetooth Home Automation System',
    meta: 'Bluetooth · Embedded Systems · Home Automation',
    desc: 'Developed a Bluetooth-enabled home automation system that allows household lights and electrical devices to be controlled wirelessly through a mobile phone interface. The system enables users to switch devices ON and OFF remotely, demonstrating practical skills in Bluetooth communication, embedded systems, and home automation.',
    sections: [
      {
        title: 'Features',
        type: 'list-only',
        list: [
          'Wireless control via Bluetooth',
          'Mobile phone interface for user interaction',
          'Remote ON/OFF control of lights and devices',
          'Cost-effective home automation solution'
        ]
      }
    ],
    links: [
      {
        label: 'Watch Demo Video',
        url: 'https://drive.google.com/file/d/19BqqyGUtO3TALolH5K9fLx0FgrEurOZl/view?usp=drive_link',
        icon: 'video'
      }
    ]
  },
  'custom-drone-simulation': {
    title: 'Custom Drone Simulation for Client',
    meta: 'ROS 2 · PX4 · Gazebo · Drone Simulation · Ubuntu',
    desc: 'Developed a customized drone simulation based on a client\'s requirements using Ubuntu Linux, ROS 2, PX4, and Gazebo. The drone model was modified to include a specially designed display screen mounted underneath the drone according to the required specifications. The screen was integrated into the simulation while maintaining stable drone operation, including take-off, controlled flight, and landing.',
    sections: [
      {
        title: 'Technical Stack',
        type: 'list-only',
        list: [
          'Ubuntu Linux operating system',
          'ROS 2 for robotic middleware',
          'PX4 for flight control',
          'Gazebo for simulation environment',
          'Custom drone modelling with display screen integration'
        ]
      },
      {
        title: 'Skills Demonstrated',
        type: 'list-only',
        list: [
          'Robotic simulation and modelling',
          'Custom drone design and integration',
          'ROS 2 architecture and communication',
          'PX4 flight control systems',
          'Client-specific requirement implementation'
        ]
      }
    ],
    links: [
      {
        label: 'Watch Demo Video',
        url: 'https://drive.google.com/file/d/1Z8i5tUWYv9itS5EuI7Qd26i6nMAEX2rk/view?usp=drive_link',
        icon: 'video'
      }
    ]
  },
  'edge-detection-robot': {
    title: 'Edge Detection Robot Using Pololu 3Pi',
    meta: 'Pololu 3Pi · C++ · Sensor Integration · Robotics',
    desc: 'Developed an edge detection robot using the Pololu 3Pi platform, infrared sensors, and C++ programming. The robot detects the edge of a surface in real time and automatically changes its direction to prevent falling.',
    sections: [
      {
        title: 'Technical Details',
        type: 'list-only',
        list: [
          'Pololu 3Pi robot platform',
          'Infrared sensors for edge detection',
          'C++ programming for real-time control',
          'Automatic direction change to prevent falls'
        ]
      }
    ],
    links: [
      {
        label: 'Watch Demo Video',
        url: 'https://drive.google.com/file/d/1lnBip0pKpTGogD7jkPxh8SyS-0T_yflD/view?usp=drive_link',
        icon: 'video'
      }
    ]
  },
  'anti-sleep-smart-helmet': {
    title: 'Anti-Sleep Smart Helmet',
    meta: 'Embedded Systems · GPS · Safety · IoT',
    desc: 'Developed an anti-sleep smart helmet designed to reduce road accidents caused by rider drowsiness. The system detects signs of sleep and alerts the rider to remain awake. It also includes a GPS module for real-time location tracking and a messaging system that sends the rider\'s location to a family member during an emergency, helping them arrange assistance quickly.',
    sections: [
      {
        title: 'Key Features',
        type: 'list-only',
        list: [
          'Sleep detection system to identify drowsiness',
          'Real-time alerts to wake the rider',
          'GPS module for location tracking',
          'Emergency messaging system to notify family members',
          'Safety-focused hardware development'
        ]
      }
    ],
    links: [
      {
        label: 'Watch Demo Video',
        url: 'https://drive.google.com/file/d/1ffsRnTZ2VPWbSwsHWBqlUhOjdOf0RMrN/view?usp=drive_link',
        icon: 'video'
      }
    ]
  },
  'smart-bicycle': {
    title: 'Cloud-Connected Smart Bicycle for Children',
    meta: 'IoT · Cloud Computing · GPS · Safety Innovation · IEEE Award',
    desc: 'This project was inspired by a real incident in which a child riding at high speed collided with my car. To improve cycling safety, I developed a smart bicycle that allows parents to monitor their child\'s speed, health information, and real-time location through a cloud-connected mobile application.\n\nThe bicycle can be operated through both traditional pedals and app-based control. It also includes GPS tracking and an experimental assisted braking system designed to reduce the risk of accidents. Depending on the rider\'s weight and operating conditions, the bicycle can reach speeds of up to approximately 40 km/h. This project received First Prize at an IEEE competition for its innovation and safety-focused design.',
    sections: [
      {
        title: 'Key Features',
        type: 'list-only',
        list: [
          'Cloud-connected mobile application for monitoring',
          'Speed tracking and health information monitoring',
          'GPS location tracking for parental supervision',
          'Traditional pedal and app-based operation',
          'Experimental assisted braking system',
          'Top speed of approximately 40 km/h'
        ]
      },
      {
        title: 'Award & Recognition',
        type: 'text-only',
        text: 'This project received First Prize at an IEEE competition for its innovation and safety-focused design, recognizing its potential to improve child safety during cycling.'
      }
    ],
    links: [
      {
        label: 'Watch Demo Video',
        url: 'https://drive.google.com/file/d/12Oz2quMzi2rqDnBDwsuffeJqWaBNxzk4/view?usp=drive_link',
        icon: 'video'
      }
    ]
  },
  'national-drone-competition': {
    title: 'National-Level Drone Flying Competition',
    meta: 'Drone Piloting · Precision Control · Competition · Second Prize',
    desc: 'Demonstrated advanced drone piloting skills in a national-level competition, achieving Second Prize. The performance highlighted precise control, focused flying, stable manoeuvring, quick decision-making, and the ability to operate the drone accurately under competitive conditions.',
    sections: [
      {
        title: 'Skills Demonstrated',
        type: 'list-only',
        list: [
          'Precise drone control and manoeuvring',
          'Stable flight performance under competition pressure',
          'Quick decision-making during challenging conditions',
          'Accurate drone operation and navigation',
          'Competitive drone piloting skills'
        ]
      },
      {
        title: 'Competition Achievement',
        type: 'single-image',
        image: '/images/drone-prize.jpg',
        imageAlt: 'Second Prize in National Drone Competition'
      }
    ],
    links: [
      {
        label: 'Watch Competition Highlights',
        url: 'https://youtu.be/pyZlFBVpmgI?si=H_TS-QB08cTSMc8A',
        icon: 'video'
      },
      {
        label: 'Watch Drone Video',
        url: 'https://drive.google.com/file/d/1xxYX7mtvbg1DNM-3qcy2mdcupnFTn7Ze/view?usp=drive_link',
        icon: 'video'
      }
    ]
  },
  'custom-fpv-drone-naza': {
    title: 'Custom-Built FPV Drone – DJI Naza V2',
    meta: 'Drone Building · FPV · DJI Naza V2 · Flight Testing · World Robotics Championship',
    desc: 'Designed, assembled, and flight-tested a custom FPV drone using the DJI Naza V2 flight controller. I built the complete drone on an FPV frame, including component selection, wiring, configuration, calibration, and PID tuning to achieve stable and responsive flight performance.\n\nI also participated with this drone in the World Robotics Championship, demonstrating my practical skills in drone construction, troubleshooting, flight-controller setup, and focused piloting. The flight testing involved controlled take-off and landing, altitude and orientation control, precise manoeuvring, stable hovering, throttle management, and smooth directional flight.',
    sections: [
      {
        title: 'Build Details',
        type: 'list-only',
        list: [
          'DJI Naza V2 flight controller',
          'Custom FPV frame design and assembly',
          'Component selection and integration',
          'Wiring and system configuration',
          'Calibration and PID tuning',
          'Stable and responsive flight performance'
        ]
      },
      {
        title: 'Flight Testing',
        type: 'list-only',
        list: [
          'Controlled take-off and landing',
          'Altitude and orientation control',
          'Precise manoeuvring and handling',
          'Stable hovering capabilities',
          'Throttle management for smooth flight',
          'Smooth directional flight and turns'
        ]
      },
      {
        title: 'Certificate & Recognition',
        type: 'single-image',
        image: '/images/fpv-certificate.jpg',
        imageAlt: 'FPV Pilot Certificate'
      },
      {
        title: 'World Robotics Championship 2022',
        type: 'text-only',
        text: 'Participated in the Technoxian World Robotics Championship 2022, demonstrating practical skills in drone construction, troubleshooting, flight-controller setup, and focused piloting under competitive conditions.'
      },
      {
        title: 'Watch Championship Video',
        type: 'single-image',
        image: 'https://img.youtube.com/vi/pyZlFBVpmgI/maxresdefault.jpg',
        imageAlt: 'Technoxian World Robotics Championship 2022'
      }
    ],
    links: [
      {
        label: 'Watch Championship Video',
        url: 'https://youtu.be/pyZlFBVpmgI?si=H_TS-QB08cTSMc8A',
        icon: 'video'
      },
      {
        label: 'Watch Demo Video',
        url: 'https://drive.google.com/file/d/1oZEuqmsZRZVFX6DYhzRs6mOtTgO5fAuW/view?usp=drive_link',
        icon: 'video'
      }
    ]
  },
  'custom-fpv-whoop-drone': {
    title: 'Custom-Built FPV Whoop Racing Drone',
    meta: 'FPV Racing · SpeedyBee · Speed 100km/h · PID Tuning',
    desc: 'Designed, assembled, configured, and flight-tested a custom FPV whoop racing drone using a SpeedyBee flight controller and an open-source flight-control platform. The drone was developed for high-speed racing and agile flight, reaching speeds of approximately 100 km/h under suitable conditions.\n\nThe build involved component selection, frame assembly, electronic wiring, receiver and video-system integration, firmware configuration, calibration, and PID tuning. Flight testing demonstrated rapid acceleration, responsive handling, stable cornering, precise throttle control, fast directional changes, and controlled take-off and landing.',
    sections: [
      {
        title: 'Build Specifications',
        type: 'list-only',
        list: [
          'SpeedyBee flight controller',
          'Open-source flight-control platform',
          'High-speed racing and agile flight design',
          'Top speed of approximately 100 km/h',
          'Component selection and frame assembly',
          'Electronic wiring and system integration'
        ]
      },
      {
        title: 'Flight Performance',
        type: 'list-only',
        list: [
          'Rapid acceleration and responsive handling',
          'Stable cornering and precise throttle control',
          'Fast directional changes and manoeuvring',
          'Controlled take-off and landing',
          'PID tuning for optimal performance'
        ]
      }
    ],
    links: [
      {
        label: 'Watch Demo Video',
        url: 'https://drive.google.com/file/d/1oZEuqmsZRZVFX6DYhzRs6mOtTgO5fAuW/view?usp=drive_link', // Same as Naza, update if different
        icon: 'video'
      }
    ]
  },
  'student-of-the-year': {
    title: 'Student of the Year – Live Media Feature',
    meta: 'Recognition · Media Feature · Leadership · Innovation',
    desc: 'I was selected and featured in the live Student of the Year programme organised by Raj Ki Baat and presented by Parekh Brothers Jewellers. This recognition highlighted my achievements as a student, my contribution to robotics and drone projects, and my continuous interest in developing practical technology-based solutions.\n\nDuring the live programme, I had the opportunity to speak about my technical journey, project development experience, competition achievements, challenges, and motivation to work in robotics and innovation. The feature also recognised my dedication to learning, creativity, leadership, and practical engineering skills.\n\nBeing invited to this programme was an important milestone in my journey and encouraged me to continue building innovative systems that can solve real-world problems.',
    sections: [
      {
        title: 'Topics Discussed',
        type: 'list-only',
        list: [
          'Technical journey and project development experience',
          'Competition achievements and challenges',
          'Motivation to work in robotics and innovation',
          'Dedication to learning and creativity',
          'Leadership and practical engineering skills'
        ]
      },
      {
        title: 'Media Feature',
        type: 'single-image',
        image: '/images/student-of-year.jpg',
        imageAlt: 'Student of the Year Award'
      },
      {
        title: 'Impact',
        type: 'text-only',
        text: 'This recognition was an important milestone that encouraged me to continue building innovative systems that can solve real-world problems, validating my commitment to robotics and technology development.'
      }
    ],
    links: [
      {
        label: 'Watch Feature',
        url: 'https://youtu.be/pyZlFBVpmgI?si=H_TS-QB08cTSMc8A',
        icon: 'video'
      }
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

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