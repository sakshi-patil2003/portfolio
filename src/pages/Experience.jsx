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
      role: 'Robotics Software Developer',
      company: 'Kinisi Robotics',
      type: 'Full-time',
      duration: 'Oct 2025 – Present',
      location: 'Bristol, UK',
      logo: '/images/kinisi_robotics_logo.jpeg',
      delay: 100,
      points: [
        'Collaborated on enhancing perception capabilities in Kinisi\'s advanced robotics systems',
        'Designed and implemented Holoscan applications to improve robot functionality',
        'Integrated NITROS into the perception pipeline for optimizing data processing',
        'Worked with Jetson embedded devices to boost hardware acceleration in robotic applications'
      ]
    },
    {
      role: 'Robotics Engineer',
      company: 'Kinisi Robotics',
      type: 'Part-time',
      duration: 'Jan 2025 – Oct 2025',
      location: 'Bristol, UK',
      logo: '/images/kinisi_robotics_logo.jpeg',
      delay: 150,
      points: [
        'Developed ROS packages for robots at Kinisi Robotics',
        'Integrated Nvidia packages with ROS for seamless operation of the robots',
        'Deployed packages in Docker for efficient use with robots'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Caterpillar Inc.',
      type: 'Full-time',
      duration: 'Feb 2024 – May 2024',
      location: 'Bengaluru, India',
      logo: '/images/Caterpillar_Logo.jpg',
      delay: 200,
      points: [
        'Developed site simulation software for Caterpillar machines to autonomously move using real-time data',
        'Collaborated with team to ensure accurate load and dump site simulations',
        'Implemented innovative solutions to optimize robot movements for efficiency and safety'
      ]
    },
    {
      role: 'Automation Engineer',
      company: 'Caterpillar Inc.',
      type: 'Full-time',
      duration: 'Jul 2021 – Aug 2022',
      location: 'Chennai, India',
      logo: '/images/Caterpillar_Logo.jpg',
      delay: 300,
      points: [
        'Simulated various weather conditions in CARLA using Unreal Engine 4 for Caterpillar Inc.',
        'Selected sensors based on simulation data to enhance accuracy and efficiency',
        'Utilized CARLA Expert and C++ to optimize simulations for improved performance'
      ]
    },
    {
      role: 'College Intern',
      company: 'Caterpillar Inc.',
      type: 'Internship',
      duration: 'Dec 2020 – Jun 2021',
      location: 'Chennai, India',
      logo: '/images/Caterpillar_Logo.jpg',
      delay: 400,
      points: [
        'Developed Python REST API services for global path planning algorithm using A* algorithm',
        'Integrated sales methods in Microsoft HoloLens for customers to view machines in augmented reality',
        'Collaborated with team to integrate global path planning with local path planning for real-time accuracy'
      ]
    },
    {
      role: 'In-Plant Training',
      company: 'Caterpillar Inc.',
      type: 'Internship',
      duration: 'Dec 2019 – Jan 2020',
      location: 'Chennai, India',
      logo: '/images/Caterpillar_Logo.jpg',
      delay: 500,
      points: [
        'Worked on Xilinx FPGA to make it flashed and ready to deploy image pipeline'
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
