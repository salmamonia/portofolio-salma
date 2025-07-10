import React from "react";

function Projects() {
  const projects = [
    {
      emoji: "✨",
      title: "Portfolio Website",
      description: "Modern personal portfolio with smooth animations",
      tags: ["React", "CSS3", "Responsive"],
    },
    {
      emoji: "📱",
      title: "Mobile UI with Figma",
      description: "Clean mobile app interface design",
      tags: ["Figma", "UI/UX", "Prototyping"],
    },
    {
      emoji: "📝",
      title: "To-Do List App (React)",
      description: "Interactive task manager with local storage",
      tags: ["React Hooks", "JavaScript", "LocalStorage"],
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-emoji">{project.emoji}</div>
            <h3 className="project-name">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
