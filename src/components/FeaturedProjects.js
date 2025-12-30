import React from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <div className="grid">
      {featured.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
