import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CONFIG from '@config'
import SEO from '@components/seo/SEO'
import { buildStructuredData } from '@lib/seo'
import { useHashnode } from '@hooks/useHashnode'
import { truncate, formatShortDate } from '@lib/formatters'
import Spinner from '@ui/Spinner'
import FadeIn from '@ui/FadeIn'
import Tag from '@ui/Tag'
import Button from '@ui/Button'

const FILTER_TAGS = ['All', 'Architecture', 'Performance', 'API Design', 'DevOps', 'Node.js', 'Laravel']

export default function Blog() {
  const [activeTag, setActiveTag] = useState('All')
  const [retryKey, setRetryKey] = useState(0)
  const { posts, loading, error } = useHashnode({ first: 20 })

  const filteredPosts = (posts || []).filter(post => 
    activeTag === 'All' || post.tag === activeTag
  )

  return (
    <>
      <SEO 
        title={`Blog — Backend Engineering Articles`}
        description={`Articles by ${CONFIG.name} on Node.js, PHP/Laravel, Redis, GraphQL, Docker, AWS, and production backend engineering.`}
        canonical={CONFIG.siteUrl + '/blog'}
        structuredData={buildStructuredData('blog', {})}
      />

      <main id="main-content" style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: 'calc(var(--nav-h) + 4rem)', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 2rem' }}>
          
          <header style={{ marginBottom: '4rem' }}>
            <p style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '8px' }}>
              // technical writing
            </p>
            <h1 style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--text)', margin: 0, letterSpacing: '-1.5px' }}>
              Engineering Blog
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--text2)', maxWidth: '540px', marginTop: '1rem', lineHeight: 1.7 }}>
              Deep dives into backend architecture, system design, and production engineering.
            </p>

            <nav aria-label="Filter posts by topic" style={{ 
              marginTop: '2.5rem', 
              display: 'flex', 
              gap: '8px', 
              overflowX: 'auto', 
              paddingBottom: '1rem',
              scrollbarWidth: 'none'
            }}>
              {FILTER_TAGS.map(tag => (
                <button 
                  key={tag}
                  aria-pressed={activeTag === tag}
                  onClick={() => setActiveTag(tag)}
                  style={{
                    padding: '8px 16px',
                    fontSize: '12px',
                    fontFamily: 'var(--mono)',
                    background: activeTag === tag ? 'rgba(0, 255, 157, 0.1)' : 'var(--bg2)',
                    border: activeTag === tag ? '1px solid var(--green)' : '1px solid var(--border)',
                    color: activeTag === tag ? 'var(--green)' : 'var(--text2)',
                    borderRadius: '2px',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s'
                  }}
                >
                  {tag}
                </button>
              ))}
            </nav>
          </header>

          {loading ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '4rem' }}>
              <Spinner size={32} />
              <p style={{ fontSize: '12px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>Fetching articles from Hashnode...</p>
            </div>
          ) : error ? (
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <p style={{ color: 'var(--red)', fontFamily: 'var(--mono)', fontSize: '13px' }}>Failed to load blog posts.</p>
              <Button variant="outline" size="sm" onClick={() => window.location.reload()} style={{ marginTop: '1rem' }}>
                Retry
              </Button>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text3)', fontFamily: 'var(--mono)', fontSize: '13px' }}>
              No articles found for this topic.
            </div>
          ) : (
            <ul aria-label="Blog posts" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {filteredPosts.map((post, i) => (
                <FadeIn key={post.slug} as="li" delay={i * 50}>
                  <article style={{
                    background: 'var(--bg2)',
                    border: '1px solid var(--border)',
                    padding: '2rem',
                    transition: 'all 0.2s',
                    position: 'relative'
                  }} className="blog-card">
                    <Link to={`/blog/${post.slug}`} style={{ display: 'block' }}>
                      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <Tag primary size="sm">{post.tag}</Tag>
                        <time style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
                          {formatShortDate(post.date)}
                        </time>
                      </header>
                      
                      <h2 style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '22px', color: 'var(--text)', margin: '0 0 1rem', letterSpacing: '-0.5px' }}>
                        {post.title}
                      </h2>
                      
                      <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: '700px' }}>
                        {truncate(post.brief, 180)}
                      </p>
                      
                      <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>{post.readTime} read</span>
                        <span style={{ fontSize: '12px', fontFamily: 'var(--mono)', color: 'var(--green)' }}>Read on Hashnode ↗</span>
                      </footer>
                    </Link>
                  </article>
                </FadeIn>
              ))}
            </ul>
          )}
        </div>
      </main>

      <style>{`
        .blog-card:hover { border-color: var(--green); transform: translateY(-2px); }
      `}</style>
    </>
  )
}
