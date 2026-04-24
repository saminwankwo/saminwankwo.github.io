import { useState } from 'react'
import { Link } from 'react-router-dom'
import posts from '../data/posts'

export default function Blog() {
  const [filter, setFilter] = useState('All')
  
  const tags = ['All', 'Architecture', 'Performance', 'API Design', 'DevOps']
  
  const filteredPosts = filter === 'All' 
    ? posts 
    : posts.filter(p => p.tag === filter)

  return (
    <div style={{
      background: 'var(--bg)',
      minHeight: '100vh',
      paddingTop: '80px' // for nav
    }}>
      <div style={{ padding: '4rem 2rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', color: 'var(--green)', textTransform: 'uppercase', fontFamily: 'var(--mono)', marginBottom: '0.5rem' }}>
          // Blog
        </p>
        <h1 style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 'clamp(28px,5vw,48px)', letterSpacing: '-1.5px', color: 'var(--text)', marginBottom: '1rem' }}>
          Writing & Notes
        </h1>
        <p style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--text2)', lineHeight: 1.9, marginBottom: '2rem' }}>
          Thoughts on backend engineering, system design, and building products.
        </p>
        <div style={{ width: '40px', height: '2px', background: 'var(--green)', marginBottom: '3rem' }} />
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '3rem' }}>
          {tags.map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
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
                transition: '0.2s'
              }}
              className={filter !== t ? "filter-btn-inactive" : ""}
            >
              {t}
            </button>
          ))}
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {filteredPosts.map(post => (
            <Link 
              to={`/blog/${post.slug}`} 
              key={post.slug}
              className="blog-card"
              style={{
                display: 'block',
                border: '1px solid var(--border)',
                padding: '1.5rem',
                background: 'var(--bg2)',
                marginBottom: '1px',
                transition: 'background 0.2s'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ 
                  fontSize: '9px', fontFamily: 'var(--mono)', color: 'var(--green)',
                  border: '1px solid rgba(0,255,157,0.4)', background: 'rgba(0,255,157,0.05)',
                  padding: '2px 8px', borderRadius: '2px'
                }}>
                  {post.tag}
                </span>
                <span style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
                  {post.date}
                </span>
              </div>
              <h2 style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '18px', color: 'var(--text)', margin: '0.5rem 0', lineHeight: 1.3 }}>
                {post.title}
              </h2>
              <p style={{ fontSize: '12px', fontFamily: 'var(--mono)', color: 'var(--text2)', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                {post.excerpt}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>{post.readTime}</span>
                <span style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--green)' }}>Read post →</span>
              </div>
            </Link>
          ))}
          {filteredPosts.length === 0 && (
            <div style={{ color: 'var(--text3)', fontFamily: 'var(--mono)', fontSize: '12px', textAlign: 'center', padding: '2rem 0' }}>
              No posts found for this category.
            </div>
          )}
        </div>
      </div>
      <style>{`
        .filter-btn-inactive:hover { color: var(--green) !important; border-color: var(--green) !important; }
        .blog-card:hover { background: var(--bg3) !important; }
      `}</style>
    </div>
  )
}
