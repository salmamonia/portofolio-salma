import React from "react";

function Skills() {
  const skills = [
    { name: "HTML & CSS", level: 90, icon: "💻" },
    { name: "JavaScript", level: 70, icon: "📜" },
    { name: "React", level: 30, icon: "⚛️" },
    { name: "Figma", level: 55, icon: "🎨" },
    { name: "Canva", level: 70, icon: "✏️" },
    { name: "UI/UX Design", level: 10, icon: "🖌️" },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="section-header">
        <h2 className="section-title">My Skills</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">Technologies I work with</p>
      </div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-info">
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level">
                <div
                  className="skill-level-bar"
                  style={{ width: `${skill.level}%` }}
                  aria-label={`${skill.level}% proficiency`}
                ></div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
