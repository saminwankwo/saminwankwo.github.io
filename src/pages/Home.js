import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer";
import img from '../profile.png'
import Skills from '../components/Skills';
import FeaturedProjects from '../components/FeaturedProjects';

const Home = () => {
  const [items, setItems] = useState([])
  const [user] = useState("saminwankwo")

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${user}/repos?per_page=8&sort=updated`
        )
        const data = await res.json()
        setItems(data)
      } catch (error) {
        console.error("Error fetching repos:", error)
      }
    }

    fetchRepos()
  }, [user])

  return (
    <>
      <Header />

      <section className="hero-section py-5 d-flex align-items-center" style={{ minHeight: "60vh", background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)", color: "white" }}>
        <div className="container text-center single-col-max-width">
          <div className="hero-content">
            <h2 className="heading display-4 fw-bold mb-3">Hello, I'm Samuel</h2>
            <div className="intro">
              <p className="lead mb-4 fs-3">Backend Engineer | Full-Stack Developer</p>
              <p className="mb-5 text-white-50" style={{ maxWidth: "600px", margin: "0 auto" }}>
                Building scalable APIs, cloud-native applications, and robust backend systems.
                Turning complex problems into elegant solutions.
              </p>
              <a href="/portfolio" className="btn btn-light btn-lg me-3 fw-bold shadow-sm">View Portfolio</a>
              <a href="/contact" className="btn btn-outline-light btn-lg fw-bold">Contact Me</a>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-3 px-lg-5">
        <article className="resume-wrapper mx-auto theme-bg-light p-4 mb-4 my-4 shadow-lg">

          {/* About Me Card */}
          <div className="theme-bg-light shadow-sm p-4 p-lg-5 mb-4 bg-white">
            <div className="row align-items-center">
              <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
                <img
                  src={img}
                  alt="Nwankwo Samuel profile"
                  className="img-fluid rounded-circle shadow-sm"
                  style={{ maxWidth: "200px" }}
                />
              </div>
              <div className="col-12 col-md-8">
                <h5 className="mb-3">About Me</h5>
                <p className="lead mb-4">
                  I specialize in building scalable APIs, cloud-native applications, and backend systems.
                  With 7+ years of experience in PHP/Laravel and 5+ years in Node.js, I’ve delivered
                  fintech, e-commerce, and healthtech solutions serving thousands of users.
                </p>
                <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
                  <a href="/portfolio" className="btn btn-primary">
                    <i className="fas fa-arrow-alt-circle-right me-2"></i> View Portfolio
                  </a>
                  <a href="/resume" className="btn btn-outline-secondary">
                    <i className="fas fa-file-alt me-2"></i> View Resume
                  </a>
                  <a href="mailto:nwankwosami@gmail.com" className="btn btn-outline-dark">
                    <i className="fas fa-envelope me-2"></i> Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className="theme-bg-light shadow-sm p-4 p-lg-5 mb-4 bg-white">
            <Skills />
          </div>

          {/* Featured Projects Card */}
          <div className="theme-bg-light shadow-sm p-4 p-lg-5 mb-4 bg-white">
            <FeaturedProjects />
          </div>

        </article>
      </div>

      <Footer />
    </>
  )
}

export default Home