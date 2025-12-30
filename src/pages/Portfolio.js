import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
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
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero-modern" style={{ minHeight: "50vh" }}>
        <div className="hero-content-modern">
          <h1>My Portfolio</h1>
          <p className="lead">
            A collection of projects, experiments, and open source contributions.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section style={{ padding: "5rem 2rem" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 className="text-center" style={{ marginBottom: "3rem" }}>Featured Work</h2>
          <div className="grid">
            {projects.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      {/* GitHub Repos */}
      <section style={{ padding: "3rem 2rem 5rem" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 className="text-center" style={{ marginBottom: "3rem" }}>Open Source Contributions</h2>
          {loading ? (
            <p className="text-center text-secondary">Loading repositories...</p>
          ) : (
            <div className="grid">
              {repos.slice(0, 12).map(r => (
                <div key={r.id} className="glass-card" style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                    <a href={r.html_url} target="_blank" rel="noreferrer" style={{ color: "var(--accent-cyan)" }}>
                      {r.name}
                    </a>
                  </h3>
                  {r.description && <p className="text-secondary" style={{ fontSize: "0.875rem", marginBottom: "1rem" }}>{r.description}</p>}
                  <div style={{ display: "flex", gap: "1rem", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                    <span>{r.language || "Unknown"}</span>
                    <span>★ {r.stargazers_count}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
