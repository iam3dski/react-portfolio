import React, { useState, useEffect } from 'react';
import '../assets/css/main.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const portfolioSection = document.getElementById('portfolio');
      const contactSection = document.getElementById('contact');
      const resumeSection = document.getElementById('resume');

      const scrollY = window.scrollY;

      if (scrollY >= aboutSection.offsetTop && scrollY < portfolioSection.offsetTop) {
        setActiveSection('about');
      } else if (scrollY >= portfolioSection.offsetTop && scrollY < contactSection.offsetTop) {
        setActiveSection('portfolio');
      } else if (scrollY >= contactSection.offsetTop && scrollY < resumeSection.offsetTop) {
        setActiveSection('contact');
      } else if (scrollY >= resumeSection.offsetTop) {
        setActiveSection('resume');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <ul>
        <li className={activeSection === 'about' ? 'active' : ''}>
          <a href="#about">About Me</a>
        </li>
        <li className={activeSection === 'portfolio' ? 'active' : ''}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className={activeSection === 'contact' ? 'active' : ''}>
          <a href="#contact">Contact</a>
        </li>
        <li className={activeSection === 'resume' ? 'active' : ''}>
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
