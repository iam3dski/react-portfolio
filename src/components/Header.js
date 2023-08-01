import React from 'react';
import '../assets/css/main.css'; 

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1>Dylan Wednieski</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
