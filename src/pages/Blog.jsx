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

  return (
    <main className="section page-section">
      <h1 className="section-title" data-animate>Blog</h1>

      <div className="blog-container">
        <article className="blog-card glass-card" data-animate data-delay="100">
          <p className="blog-date">January 2025</p>
          <h2>Exploring the Frontier: Space Robots</h2>

          <p>The final frontier has always captivated humanity, and space exploration continues to be one of the most exciting areas of scientific advancement. Central to these missions are space robots—autonomous machines designed to operate in the harshest environments known to mankind. From navigating distant planets to assembling structures in zero gravity, space robots are pushing the boundaries of what is possible.</p>

          <h3>Robotic Explorers</h3>
          <p>One of the key roles of space robots is to act as explorers. NASA's Mars rovers, such as Perseverance and Curiosity, have provided invaluable data about the Martian surface. These robots are equipped with cutting-edge technology, including AI for autonomous navigation, advanced sensors for data collection, and robust designs to withstand extreme temperatures and radiation.</p>

          <h3>Construction &amp; Maintenance</h3>
          <p>Beyond exploration, space robots are crucial for construction and maintenance tasks. In the near future, robots may build habitats on the Moon or Mars, paving the way for human colonization. Autonomous robotic arms, like those on the International Space Station, are already performing complex assembly tasks in microgravity, showcasing their importance in space missions.</p>

          <h3>Engineering Challenges</h3>
          <p>However, the challenges of designing space robots are immense. Engineers must account for communication delays, energy efficiency, and durability in unforgiving conditions. Innovations like self-repairing materials and AI-driven decision-making are helping overcome these hurdles.</p>

          <p>As space agencies and private companies invest heavily in robotic technologies, the dream of humans living and working in space becomes more attainable. Space robots will not only enhance our understanding of the universe but also ensure the safety and efficiency of future missions.</p>

          <p>The future of space exploration is undoubtedly intertwined with the advancement of robotics. With each mission, space robots are bringing us closer to answering profound questions about our place in the cosmos.</p>
        </article>
      </div>
    </main>
  );
};

export default Blog;
