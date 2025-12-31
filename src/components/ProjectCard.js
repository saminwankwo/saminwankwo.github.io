import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {project.image && (
        <img
          src={project.image}
          className="card-img-top"
          alt={project.title}
          loading="lazy"
        />
      )}

      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        {project.tagline && <p className="tagline">{project.tagline}</p>}
        <p className="desc">{project.description}</p>

        {project.tech && project.tech.length > 0 && (
          <ul className="tech">
            {project.tech.slice(0, 5).map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        )}

        <div className="links" style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          {project.links?.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn-neon" style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}>
              Demo
            </a>
          )}
          {project.links?.repo && (
            <a href={project.links.repo} target="_blank" rel="noreferrer" className="btn-neon btn-neon-purple" style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}>
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
