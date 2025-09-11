import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import FeaturedProjects from '../components/FeaturedProjects';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const GITHUB_USER = "saminwankwo";

export default function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`);
        const data = await res.json();
        setRepos(Array.isArray(data) ? data : []);
      } catch (e) {
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <div>
      <Header title="Projects Portfolio" />
      		<section className="cta-section theme-bg-light py-5">
				<div className="container text-center single-col-max-width">
					<h2 className="heading">My Portfolio</h2>
                       
					</div>
			</section>

      <main className="container-md my-5">
        <FeaturedProjects />

        <section className="all-projects mt-5">
          <h2 className='section-title font-weight-bold mb-5'>All Featured Work</h2>
          <div className="grid">
            {projects.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </section>

       <section className="github-projects mt-5">
  <h2 className='section-title font-weight-bold mb-5'>Open Source Repos</h2>
  {loading ? <p>Loading GitHub repos…</p> : (
    <ul className="list-group">
      {repos.slice(0, 12).map(r => (
        <li key={r.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <a href={r.html_url} target="_blank" rel="noreferrer" className="fw-bold text-decoration-none">
              {r.name}
            </a>
            {r.description && <p className="mb-0 small text-muted">{r.description}</p>}
          </div>
          <span className="badge bg-secondary">
            {r.language || "Unknown"} • ★ {r.stargazers_count}
          </span>
        </li>
      ))}
    </ul>
  )}
</section>

      </main>
    </div>
  );
}
