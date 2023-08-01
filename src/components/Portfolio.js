import React from 'react';
import '../assets/css/main.css';
import weatherImage from '../assets/images/weather.png';
import pwaTextEditorImage from '../assets/images/pwa-text-editor.png';
import noteTakerImage from '../assets/images/note-taker.png';
import workDaySchedulerImage from '../assets/images/work-day-scheduler.png';
import techBlogImage from '../assets/images/tech-blog.png';
import volunteerFinderImage from '../assets/images/volunteer-finder.png';
import metaInsightImage from '../assets/images/meta-insight.png';
import passwordGeneratorImage from '../assets/images/password-generator.png';
import employeeDatabaseManagerImage from '../assets/images/employee-database-manager.png';
import codingQuizImage from '../assets/images/coding-quiz.png'
import eCommerBackendImage from '../assets/images/e-commerce-backend.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Weather Dashboard',
      imageUrl: weatherImage,
      deployedUrl: 'https://iam3dski.github.io/weather-api/',
      githubUrl: 'https://github.com/iam3dski/weather-api',
    },
    {
      title: 'PWA Text Editor',
      imageUrl: pwaTextEditorImage,
      deployedUrl: 'https://wednieski-pwa-text-editor-d266dfa4edf7.herokuapp.com/',
      githubUrl: 'https://github.com/iam3dski/PWA-text-editor',
    },
    {
      title: 'Note Taker',
      imageUrl: noteTakerImage,
      deployedUrl: 'https://wednieski-note-taker-55e5df87f5ab.herokuapp.com/',
      githubUrl: 'https://github.com/iam3dski/note-taker',
    },
    {
      title: 'Work Day Scheduler',
      imageUrl: workDaySchedulerImage,
      deployedUrl: 'https://iam3dski.github.io/daily-9-to-5-scheduler/',
      githubUrl: 'https://github.com/iam3dski/daily-9-to-5-scheduler',
    },
    {
      title: 'Tech Blog',
      imageUrl: techBlogImage,
      deployedUrl: 'https://tech-blog-wednieski-e46ec29ad833.herokuapp.com/',
      githubUrl: 'https://github.com/iam3dski/tech-blog-restart',
    },
    {
      title: 'Volunteer Finder (Collaboration Project)',
      imageUrl: volunteerFinderImage,
      deployedUrl: 'https://erin-m-keller.github.io/volunteer-finder/',
      githubUrl: 'https://github.com/iam3dski/volunteer-finder',
    },
    {
      title: 'Meta-Insight (Collaboration Project)',
      imageUrl: metaInsightImage,
      deployedUrl: 'https://meta-insight.herokuapp.com/',
      githubUrl: 'https://github.com/iam3dski/meta-insight',
    },
    {
      title: 'Password Generator',
      imageUrl: passwordGeneratorImage,
      deployedUrl: 'https://iam3dski.github.io/password-generator/',
      githubUrl: 'https://github.com/iam3dski/password-generator',
    },
    {
      title: 'Employee Database Manager',
      imageUrl: employeeDatabaseManagerImage,
      githubUrl: 'https://github.com/iam3dski/employee-tracker',
    },
    {
      title: 'Coding Quiz',
      imageUrl: codingQuizImage, // Replace with the URL or path to the project image
      deployedUrl: 'https://iam3dski.github.io/Coding-Quiz/', // Replace with the URL to the deployed application
      githubUrl: 'https://github.com/iam3dski/Coding-Quiz', // Replace with the URL to the GitHub repository
    },
    {
      title: 'E-Commerce Back End',
      imageUrl: eCommerBackendImage, // Replace with the URL or path to the project image
    //   deployedUrl: '#', // Replace with the URL to the deployed application
      githubUrl: 'https://github.com/iam3dski/e-commerce-back-end', // Replace with the URL to the GitHub repository
    },
    // Add more project objects as needed
  ];

  return (
    <section id="portfolio">
      <div className="portfolio-container">
        <h2>Portfolio</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.imageUrl} alt={project.title} />
              <div className="project-details">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                    View Live
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
