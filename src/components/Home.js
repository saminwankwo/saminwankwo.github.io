import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100 bg-light text-dark"
    >
      {/* Hero Heading */}
      <h1 className="display-3 fw-bold mb-3">
        Hi, I’m <span className="text-primary">Samuel Nwankwo</span>
      </h1>

      {/* Subtext */}
      <p className="lead mb-4 col-lg-8">
        Backend Engineer with 7+ years of experience in PHP/Laravel and Node.js.  
        I build scalable APIs, microservices, and secure payment integrations for fintech, healthtech, and e-commerce products.
      </p>

      {/* Call-to-action buttons */}
      <div className="d-flex justify-content-center gap-3">
        <a
          href="/Samuel_Nwankwo_CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-lg"
        >
          📄 Download CV
        </a>
        <a href="#contact" className="btn btn-outline-primary btn-lg">
          💬 Get in Touch
        </a>
      </div>
    </section>
  );
}
