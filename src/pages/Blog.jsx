import React, { useState } from 'react'
import SEO from '../components/SEO'
import FadeIn from '../components/FadeIn'
import { useHashnode } from '../hooks/useHashnode'
import { CONFIG } from '../data/config'

export default function Blog() {
  const { posts, loading, error } = useHashnode({ first: 20 })
  const [activeTag, setActiveTag] = useState('All')

  const tags = ['All', 'Architecture', 'Performance', 'API Design', 'DevOps', 'Node.js', 'Laravel']

  const filteredPosts = activeTag === 'All' 
    ? posts 
    : posts.filter(post => post.tag === activeTag || post.tags?.some(t => t.name === activeTag))

  const blogSEO = {
    title: "Blog — Backend Engineering Articles",
    description: "Articles by Samuel Nwankwo on Node.js, PHP/Laravel, Redis, GraphQL, Docker, AWS, and production backend engineering.",
    canonical: CONFIG.siteUrl + "/blog",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Samuel Nwankwo's Blog",
      "url": CONFIG.siteUrl + "/blog",
      "description": "Thoughts on backend architecture, performance, and engineering craft."
    }
  }

  return (
    <>
      <SEO {...blogSEO} />
      <main id="main-content" aria-label="Blog posts" style={{
        background: 'var(--bg)',
        minHeight: '100vh',
        paddingTop: 'var(--nav-h)'
      }}>
        {/* Header area */}
        <header style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem 2rem' }}>
          <p className="section-tag"> // Blog </p>
          <h1 style={{
            fontFamily: 'var(--sans)',
            fontWeight: 800,
            fontSize: 'clamp(28px, 5vw, 48px)',
            letterSpacing: '-1.5px',
            margin: 0,
            color: 'var(--text)'
          }}>
            Writing & Notes
          </h1>
          <p style={{
            fontSize: '13px',
            fontFamily: 'var(--mono)',
            color: 'var(--text2)',
            lineHeight: 1.9,
            marginTop: '0.75rem'
          }}>
            Thoughts on backend architecture, performance, and engineering craft.
          </p>
          <div className="section-line" style={{ marginTop: '1rem' }} />
        </header>

        {/* Filter bar */}
        <nav aria-label="Filter posts by topic" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem 1.5rem' }}>
          <div className="filter-scroll" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                aria-pressed={activeTag === tag}
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--mono)',
                  textTransform: 'uppercase',
                  padding: '5px 12px',
                  borderRadius: '2px',
                  border: '1px solid',
                  borderColor: activeTag === tag ? 'var(--green)' : 'var(--border2)',
                  background: activeTag === tag ? 'var(--green)' : 'transparent',
                  color: activeTag === tag ? 'var(--bg)' : 'var(--text2)',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                className={activeTag !== tag ? 'filter-btn-inactive' : ''}
              >
                {tag}
              </button>
            ))}
          </div>
        </nav>

        {/* Post list */}
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem 4rem' }}>
          {loading ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              {[1, 2, 3].map(i => (
                <div key={i} className="skeleton" style={{ height: '120px', width: '100%', marginBottom: '1px' }} />
              ))}
            </div>
          ) : error ? (
            <div style={{ textAlign: 'center', padding: '3rem', border: '1px solid var(--border)' }}>
              <p style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--text3)', marginBottom: '1rem' }}>
                Couldn't load posts.
              </p>
              <button 
                onClick={() => window.location.reload()}
                style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--green)', textDecoration: 'underline' }}
              >
                Retry
              </button>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', border: '1px solid var(--border)' }}>
              <p style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
                No posts found for this topic.
              </p>
            </div>
          ) : (
            <ul aria-label="Blog posts" style={{ listStyle: 'none', padding: 0 }}>
              {filteredPosts.map((post, index) => (
                <FadeIn as="li" key={post.slug} delay={index * 50}>
                  <article>
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        border: '1px solid var(--border)',
                        padding: '1.5rem',
                        background: 'var(--bg2)',
                        marginBottom: '1px',
                        transition: 'all 0.2s'
                      }}
                      className="blog-post-card"
                    >
                      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{
                          fontSize: '9px',
                          fontFamily: 'var(--mono)',
                          color: 'var(--green)',
                          border: '1px solid rgba(0, 255, 157, 0.3)',
                          background: 'rgba(0, 255, 157, 0.06)',
                          padding: '3px 8px',
                          borderRadius: '2px'
                        }}>
                          {post.tag}
                        </span>
                        <time dateTime={post.date} style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </time>
                      </header>

                      <h2 style={{
                        fontFamily: 'var(--sans)',
                        fontWeight: 700,
                        fontSize: '18px',
                        color: 'var(--text)',
                        margin: '0.5rem 0',
                        lineHeight: 1.3
                      }}>
                        {post.title}
                      </h2>

                      <p style={{
                        fontSize: '12px',
                        fontFamily: 'var(--mono)',
                        color: 'var(--text2)',
                        lineHeight: 1.8,
                        marginBottom: '0.75rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {post.brief}
                      </p>

                      <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
                          {post.readTime}
                        </span>
                        <span style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--green)' }}>
                          Read on Hashnode ↗
                        </span>
                      </footer>
                    </a>
                  </article>
                </FadeIn>
              ))}
            </ul>
          )}
        </div>

        {/* Newsletter Section */}
        <section style={{ maxWidth: '800px', margin: '2rem auto 6rem', padding: '0 2rem' }}>
          <div style={{
            background: 'var(--bg3)',
            border: '1px solid var(--border)',
            padding: '2.5rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <span style={{ fontSize: '10px', color: 'var(--green)', fontFamily: 'var(--mono)', textTransform: 'uppercase' }}>// newsletter</span>
            <h2 style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '24px', color: 'var(--text)', margin: 0 }}>
              Subscribe for backend insights
            </h2>
            <p style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--text2)', maxWidth: '450px', lineHeight: 1.8 }}>
              I send deep dives into Node.js, Laravel, and system design every few weeks. No spam, ever.
            </p>
            <a 
              href={`${CONFIG.hashnodeUrl}/newsletter`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--green)',
                color: 'var(--bg)',
                padding: '12px 32px',
                fontSize: '12px',
                fontFamily: 'var(--mono)',
                fontWeight: 600,
                textTransform: 'uppercase',
                transition: 'background 0.2s',
                marginTop: '0.5rem'
              }}
              onMouseEnter={(e) => e.target.style.background = 'var(--green-dim)'}
              onMouseLeave={(e) => e.target.style.background = 'var(--green)'}
            >
              Join the newsletter →
            </a>
          </div>
        </section>
      </main>


      <style>{`
        .filter-btn-inactive:hover {
          border-color: var(--green) !important;
          color: var(--green) !important;
        }
        .blog-post-card:hover {
          background: var(--bg3) !important;
          border-color: var(--green) !important;
        }
        @media (max-width: 480px) {
          .filter-scroll {
            flex-wrap: nowrap !important;
            overflow-x: auto;
            padding-bottom: 8px;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .filter-scroll::-webkit-scrollbar { display: none; }
        }
      `}</style>
    </>
  )
}
