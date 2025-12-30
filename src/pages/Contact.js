import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="hero-modern" style={{ minHeight: "50vh" }}>
                <div className="hero-content-modern">
                    <h1>Get In Touch</h1>
                    <p className="lead">
                        Let's build something amazing together.
                    </p>
                </div>
            </section>

            {/* Contact Cards */}
            <section style={{ padding: "3rem 2rem 5rem" }}>
                <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>

                        {/* Collaboration */}
                        <div className="glass-card" style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>☕</div>
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--accent-cyan)" }}>Collaboration</h3>
                            <p className="text-secondary" style={{ marginBottom: "1.5rem" }}>
                                Have a project and think I can help?
                            </p>
                            <a href="mailto:nwankwosami@gmail.com" className="btn-neon">
                                Email Me
                            </a>
                        </div>

                        {/* Hire */}
                        <div className="glass-card" style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚀</div>
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--accent-purple)" }}>Hire Me</h3>
                            <p className="text-secondary" style={{ marginBottom: "1.5rem" }}>
                                Interested in hiring me for your project?
                            </p>
                            <a href="/resume" className="btn-neon btn-neon-purple">
                                View Resume
                            </a>
                        </div>

                        {/* Mentorship */}
                        <div className="glass-card" style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎓</div>
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--accent-pink)" }}>Mentorship</h3>
                            <p className="text-secondary" style={{ marginBottom: "1.5rem" }}>
                                Need help learning web development?
                            </p>
                            <a href="https://www.twitter.com/saminwankwo" target="_blank" rel="noreferrer" className="btn-neon btn-neon-pink">
                                DM on Twitter
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="glass-card" style={{ marginTop: "3rem", textAlign: "center", padding: "3rem 2rem" }}>
                        <h3 style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Connect With Me</h3>
                        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", fontSize: "2rem" }}>
                            <a href="https://www.twitter.com/saminwankwo" target="_blank" rel="noreferrer" style={{ color: "var(--accent-cyan)", transition: "all 0.3s ease" }}>
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/saminwankwo" target="_blank" rel="noreferrer" style={{ color: "var(--accent-cyan)", transition: "all 0.3s ease" }}>
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/saminwankwo" target="_blank" rel="noreferrer" style={{ color: "var(--accent-cyan)", transition: "all 0.3s ease" }}>
                                <i className="fab fa-github-alt"></i>
                            </a>
                            <a href="https://t.me/saminwankwo" target="_blank" rel="noreferrer" style={{ color: "var(--accent-cyan)", transition: "all 0.3s ease" }}>
                                <i className="fab fa-telegram"></i>
                            </a>
                            <a href="https://web.facebook.com/nwankwo.samuel" target="_blank" rel="noreferrer" style={{ color: "var(--accent-cyan)", transition: "all 0.3s ease" }}>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://hashnode.com/@saminwankwo" target="_blank" rel="noreferrer" style={{ color: "var(--accent-cyan)", transition: "all 0.3s ease" }}>
                                <i className="fab fa-hashnode"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Contact