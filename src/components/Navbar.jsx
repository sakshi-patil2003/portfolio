import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const linksRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        toggleRef.current &&
        !toggleRef.current.contains(e.target) &&
        linksRef.current &&
        !linksRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        Tarun<span className="accent">.</span>
      </Link>
      
      <button 
        ref={toggleRef}
        className={`nav-toggle ${isOpen ? 'open' : ''}`}
        aria-label="Toggle navigation" 
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="hamburger"></span>
      </button>

      <div ref={linksRef} className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Projects</NavLink>
        <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Experience</NavLink>
        <NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Education</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Skills</NavLink>
        <NavLink to="/achievements" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Achievements</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Blog</NavLink>
        <NavLink to="/feedback" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Feedback</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;