import { useState } from 'react'
import SEO from '../components/SEO'
import { useHashnode } from '../hooks/useHashnode'
import { CONFIG } from '../data/config'

export default function Blog() {
  const [filter, setFilter] = useState('All')
  const { posts, loading, error } = useHashnode({ first: 20 })
  
  const tags = ['All', 'Architecture', 'Performance', 'API Design', 'DevOps', 'Node.js', 'Laravel']
  
  const filteredPosts = filter === 'All' 
    ? posts 
    : posts.filter(p => p.tags.some(t => t.name === filter) || p.tag === filter)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": `${CONFIG.name} — Engineering Blog`,
    "description": "Backend engineering articles on Node.js, PHP, Laravel, AWS, GraphQL, and microservices.",
    "url": `${CONFIG.siteUrl}/blog`,
    "author": { "@type": "Person", "name": CONFIG.name }
  }

  return (
    <main id="main-content" style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '80px' }}>
      <SEO 
        title="Blog — Backend Engineering Articles"
        description="Articles by Samuel Nwankwo on backend architecture, Node.js, PHP/Laravel, Redis, GraphQL, Docker, and production engineering."
        canonical={`${CONFIG.siteUrl}/blog`}
        structuredData={structuredData}
      />

      <div style={{ padding: '4rem 2rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <header>
          <p className="section-tag">Blog</p>
          <h1 style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 'clamp(28px,5vw,48px)', letterSpacing: '-1.5px', color: 'var(--text)', marginBottom: '1rem' }}>
            Writing & Notes
          </h1>
          <p style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--text2)', lineHeight: 1.9, marginBottom: '2rem' }}>
            Thoughts on backend engineering, system design, and building products.
            Live from <a href={`https://hashnode.com/@${CONFIG.hashnode}`} target="_blank" rel="noreferrer" style={{ color: 'var(--green)' }}>Hashnode</a>.
          </p>
          <div className="section-line" style={{ marginBottom: '3rem' }} />
        </header>
        
        <nav aria-label="Filter posts by topic" style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', gap: '8px', marginBottom: '3rem', paddingBottom: '10px' }} className="filter-bar">
          {tags.map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              role="button"
              aria-pressed={filter === t}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                textTransform: 'uppercase',
                padding: '5px 12px',
                border: filter === t ? '1px solid var(--green)' : '1px solid var(--border2)',
                background: filter === t ? 'var(--green)' : 'transparent',
                color: filter === t ? 'var(--bg)' : 'var(--text2)',
                cursor: 'pointer',
                borderRadius: '2px',
                transition: '0.2s',
                whiteSpace: 'nowrap'
              }}
              className={filter !== t ? "filter-btn-inactive" : ""}
            >
              {t}
            </button>
          ))}
        </nav>
        
        <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none' }}>
          {loading ? (
            Array(5).fill(0).map((_, i) => (
              <li key={i} className="skeleton" style={{ height: '160px', marginBottom: '1rem', borderRadius: '4px' }} />
            ))
          ) : error ? (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <p style={{ color: 'var(--red)', marginBottom: '1rem' }}>Error loading posts: {error}</p>
              <button onClick={() => window.location.reload()} style={{ color: 'var(--green)', border: '1px solid var(--green)', padding: '8px 16px' }}>Retry</button>
            </div>
          ) : filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <li key={post.id} style={{ marginBottom: '1px' }}>
                <article className="blog-card">
                  <a 
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      border: '1px solid var(--border)',
                      padding: '1.5rem',
                      background: 'var(--bg2)',
                      transition: 'background 0.2s'
                    }}
                  >
                    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ 
                        fontSize: '9px', fontFamily: 'var(--mono)', color: 'var(--green)',
                        border: '1px solid rgba(0,255,157,0.4)', background: 'rgba(0,255,157,0.05)',
                        padding: '2px 8px', borderRadius: '2px'
                      }}>
                        {post.tags?.[0]?.name || 'Engineering'}
                      </span>
                      <time dateTime={post.publishedAt} style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </time>
                    </header>
                    <h2 style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '18px', color: 'var(--text)', margin: '0.5rem 0', lineHeight: 1.3 }}>
                      {post.title}
                    </h2>
                    <p style={{ fontSize: '12px', fontFamily: 'var(--mono)', color: 'var(--text2)', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                      {post.brief}
                    </p>
                    <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>{post.readTimeInMinutes} min read</span>
                      <span style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--green)' }}>Read on Hashnode ↗</span>
                    </footer>
                  </a>
                </article>
              </li>
            ))
          ) : (
            <li style={{ color: 'var(--text3)', fontFamily: 'var(--mono)', fontSize: '12px', textAlign: 'center', padding: '2rem 0' }}>
              No posts found for this category.
            </li>
          )}
        </ul>
      </div>
      <style>{`
        .filter-bar::-webkit-scrollbar { display: none; }
        .filter-btn-inactive:hover { color: var(--green) !important; border-color: var(--green) !important; }
        .blog-card:hover a { background: var(--bg3) !important; }
      `}</style>
    </main>
  )
}
