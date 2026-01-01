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

      {/* Hero Section */}
      <section className="hero-modern">
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
             <Link to="/resume" className="btn-outline-secondary">
                    View Resume
                  </Link>
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