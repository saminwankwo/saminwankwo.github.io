import React from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

export default function FeaturedProjects() {
  // Grab top 3 featured projects
  const featured = projects.slice(0, 3);

  return (
    <section id="featured" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Featured Projects</h2>
        <div className="row">
          {featured.map((p) => (
            <div key={p.id} className="col-md-6 col-lg-4 mb-4">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
