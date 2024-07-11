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
    <section>
      <div className="skills ">
        <h1> My Skills</h1>
        <br />
        <br />
        <div className="left-section ">
          {" "}
          <ul className="skills-list">
            <br />
            {skills.map((skill, index) => (
              <li key={index}>
                <div className="skill-name">
                  {skill.name}
                  <span className="skill-percentage"> {skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: `${skill.percentage}%`,
                      animation: "slideIn 2.5s ease-in-out",
                    }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
