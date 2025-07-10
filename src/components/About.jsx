import React from "react";
import gam1 from "../assets/images/nia.jpg";
function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={gam1} alt="Salma Monia" className="profile-image" />
        </div>

        <div className="about-content">
          <h2 className="about-title">Hello, I'm Salma Monia</h2>
          <p className="about-text">
            A passionate frontend developer with an eye for design and a love
            for creating interactive digital experiences. I combine technical
            skills with creative problem-solving to build beautiful, functional
            web applications.
          </p>

          <div className="skills-highlight">
            <h3>What I Bring to the Table:</h3>
            <ul className="skills-list">
              <li>🚀 React enthusiast with hands-on project experience</li>
              <li>🎨 UI/UX sensibility with clean, modern designs</li>
              <li>💡 Problem solver who loves coding challenges</li>
              <li>📈 Continuous learner always expanding my skill set</li>
            </ul>
          </div>

          <p className="about-closing">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sketching design ideas.
            Let's build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
