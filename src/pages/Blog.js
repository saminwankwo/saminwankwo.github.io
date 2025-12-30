import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer";
import BlogPost from '../components/BlogPost';

const Blog = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero-modern" style={{ minHeight: "40vh" }}>
        <div className="hero-content-modern">
          <h1>Blog</h1>
          <p className="lead">
            Thoughts on code, architecture, and building things.
          </p>
        </div>
      </section>

      <BlogPost />
      <Footer />
    </>
  )
}

export default Blog