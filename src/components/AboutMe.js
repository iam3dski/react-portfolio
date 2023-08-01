import React from 'react';
import '../assets/css/main.css';
import avatar1 from '../assets/images/gallery/1.jpg';
import avatar2 from '../assets/images/gallery/2.jpg';
import avatar3 from '../assets/images/gallery/3.jpg';
import avatar4 from '../assets/images/gallery/4.jpg';

const AboutMe = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="avatar-container">
          <div className="avatar-image">
            <img src={avatar1} alt="Avatar 1" />
          </div>
          <div className="avatar-image">
            <img src={avatar2} alt="Avatar 2" />
          </div>
          <div className="avatar-image">
            <img src={avatar3} alt="Avatar 3" />
          </div>
          <div className="avatar-image">
            <img src={avatar4} alt="Avatar 4" />
          </div>
        </div><h2>About Me</h2>
        <div className="bio-container">
          
          <div className="bio">
            <p>
              I am excited to finally be at the end of the starting point of my coding journey. After completing my 6 month journey of the Michigan State University Coding Bootcamp I finally feel ready to say that I am able to code! While this is just the first step in my life long journey of coding, I look forward to continually learning the ins and out of foundation I have built these past 6 months. I continue to look into different ways to code along side my constant desire for improvement.
            </p>
            <p>
              A little bit of background on who I am. My name is Dylan Wednieski. I am a single father of 2 beautiful children. I have a passion for continually learning, striving to be both a better person and an even better father. I am incredibly fond of music, concerts, and festivals. During my free time, I enjoy spending time with my kids, video games, and walks with my dog.
            </p>
            <p>
              My goal in putting together this page is to be able to show off the things that I have been accomplishing while taking this course. I hope to show the different projects I have put together, as well as the collaborative projects I have worked on as a team member.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
