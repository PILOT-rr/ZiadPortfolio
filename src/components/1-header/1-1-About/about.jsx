import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <section>
          <h1>About Me</h1>
          <p>
            Hello! I'm Mohammad, a passionate web developer skilled in creating
            dynamic and responsive websites using React and Vite. I have a
            strong background in frontend development and a keen eye for design,
            ensuring that each project I work on is both functional and
            visually appealing.
          </p>
        </section>

        <section>
          <h2>My Journey</h2>
          <p>
            My journey into web development began a few years ago when I
            discovered my love for coding and problem-solving. Since then, I
            have dedicated myself to learning and mastering the latest
            technologies and frameworks in the web development industry.
          </p>
        </section>

        <section>
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML & CSS</li>
            <li>Responsive Web Design</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <section>
          <h2>Interests</h2>
          <p>
            Apart from coding, I enjoy exploring new technologies, reading tech
            blogs, and participating in coding challenges. When I'm not in front
            of my computer, I love spending time outdoors, hiking, and traveling
            to new places.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
