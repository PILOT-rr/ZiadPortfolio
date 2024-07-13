import React from "react";
import "./SkillsComponent.css"; // Import your CSS file for styling

const SkillsComponent = () => {
  // Define your skills data
  const skills = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 80 },
    { name: "JavaScript", percentage: 60 },
    { name: "PHP", percentage: 55 },
    { name: "React", percentage: 85 },
    { name: "Laravel", percentage: 55 },
    // Add more skills as needed
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h1>My Skills</h1>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>
              <div className="skill-name">
                {skill.name}
                <span className="skill-percentage"> {skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsComponent;
