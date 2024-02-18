import "./SkillsComponent.css"; // Import your CSS file for styling

const SkillsComponent = () => {
  // Define your skills data
  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "React", percentage: 75 },
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
                <div className="skill-name">{skill.name}<p className="skill-percentage">{skill.percentage}%</p></div>
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
