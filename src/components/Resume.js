import React from 'react';
import '../assets/css/main.css';

const Resume = () => {
  const proficiencies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Bootstraps',
    'MongoDB',
    'JSON',
    'jQuery'
    // Add more proficiencies as needed
  ];

  // Replace 'resume.pdf' with the actual URL or path to your resume file
  const resumeUrl = '/assets/documents/Resume.pdf';

  return (
    <section id="resume">
      <div className="resume-container">
        <h2>Resume</h2>
        <div className="proficiencies">
          <h3>Development Proficiencies</h3>
          <ul>
            {proficiencies.map((proficiency, index) => (
              <li key={index}>{proficiency}</li>
            ))}
          </ul>
        </div>
        <div className="resume-download">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
