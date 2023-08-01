import React from 'react';
import '../assets/css/main.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-links">
          {/* Replace the '#' with the actual URLs to your profiles */}
          <a href="https://github.com/iam3dski" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" aria-label="GitHub"></i>
          </a>
          <a href="https://www.linkedin.com/in/dylan-wednieski/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" aria-label="LinkedIn"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            {/* Replace the 'fa-icon' with the icon for your third platform (e.g., Stack Overflow, Twitter) */}
            <i className="fa-brands fa-twitter" aria-label="twitter"></i>
          </a>
        </div>
        <p>© {new Date().getFullYear()} Dylan Wednieski. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
