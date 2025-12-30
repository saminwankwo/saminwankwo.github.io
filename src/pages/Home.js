import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from "../components/Footer";
import img from '../profile.png'
import Skills from '../components/Skills';
import FeaturedProjects from '../components/FeaturedProjects';

const Home = () => {
  return (
    <>
      <Header />

      {/* Hero Section - refined, not too tall */}
      <section className="hero-modern" style={{ background: `linear-gradient(135deg, ${getComputedStyle(document.documentElement).getPropertyValue('--bg-primary')} 0%, ${getComputedStyle(document.documentElement).getPropertyValue('--bg-secondary')} 100%)` }}>
        <div className="hero-content-modern">
          <h1>Nwankwo Samuel</h1>
          <p className="lead">
            Backend Engineer | Full-Stack Developer
          </p>
          <p className="text-secondary" style={{ maxWidth: "600px", margin: "0 auto 2.5rem" }}>
            Building scalable APIs, cloud-native applications, and robust backend systems with 7+ years of experience.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/portfolio" className="btn-primary">
              View Portfolio
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="card">
            <div className="row align-items-center" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
              <div style={{ flex: "0 0 auto", textAlign: "center" }}>
                <img
                  src={img}
                  alt="Nwankwo Samuel"
                  className="img-fluid rounded-circle"
                  style={{
                    maxWidth: "220px",
                    width: "100%",
                    border: `3px solid var(--border-strong)`,
                    boxShadow: "var(--shadow-md)"
                  }}
                  loading="lazy"
                />
              </div>
              <div style={{ flex: "1", minWidth: "300px" }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "1.25rem" }}>About Me</h2>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "1.75rem", color: "var(--text-secondary)" }}>
                  I specialize in building scalable APIs, cloud-native applications, and backend systems.
                  With 7+ years of experience in PHP/Laravel and 5+ years in Node.js, I've delivered
                  fintech, e-commerce, and healthtech solutions serving thousands of users.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <Link to="/portfolio" className="btn-primary">
                    View Portfolio
                  </Link>
                  <Link to="/resume" className="btn-outline-secondary">
                    View Resume
                  </Link>
                  <a href="mailto:nwankwosami@gmail.com" className="btn-outline-dark">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section style={{ padding: "4rem 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "3rem", fontSize: "2.25rem" }}>
            Technical Expertise
          </h2>
          <Skills />
        </div>
      </section>

      {/* Featured Projects */}
      <section style={{ padding: "4rem 0 6rem" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "3rem", fontSize: "2.25rem" }}>
            Featured Work
          </h2>
          <FeaturedProjects />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home