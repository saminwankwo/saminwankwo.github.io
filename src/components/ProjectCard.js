import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="card project-card h-100 shadow-sm">
      {/* Thumbnail / Image */}
      {project.image && (
        <img
          src={project.image}
          className="card-img-top"
          alt={project.title}
        />
      )}

      {/* Card Body */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{project.title}</h5>

        {/* Tech stack badges */}
        {project.tech && project.tech.length > 0 && (
          <div className="mb-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="badge bg-secondary me-1"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <p className="card-text flex-grow-1">{project.description}</p>

        {/* Footer buttons */}
        <div className="mt-auto">
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary me-2"
            >
              Live Demo
            </a>
          )}
          {project.links?.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-outline-secondary me-2"
            >
              Source Code
            </a>
          )}
          {project.links?.readme && (
            <a
              href={project.links.readme}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-outline-dark"
            >
              Read More
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
