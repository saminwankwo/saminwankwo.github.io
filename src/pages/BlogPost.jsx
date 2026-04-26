import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import NotFound from './NotFound'
import { useHashnodePost } from '../hooks/useHashnode'
import { CONFIG } from '../data/config'

export default function BlogPost() {
  const { slug } = useParams()
  const { post, loading, error } = useHashnodePost(slug)
  const [copied, setCopied] = useState(false)

  if (error || (!loading && !post)) return <NotFound />

  const handleCopy = () => {
    navigator.clipboard.writeText(post.url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const blogPostSEO = post ? {
    title: post.title,
    description: post.brief?.slice(0, 155),
    canonical: post.url,
    ogType: "article",
    ogImage: post.coverImage?.url || CONFIG.ogImage,
    articleDate: post.publishedAt,
    articleTags: post.tags?.map(t => t.name),
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "image": post.coverImage?.url || CONFIG.ogImage,
      "datePublished": post.publishedAt,
      "author": {
        "@type": "Person",
        "name": CONFIG.name
      }
    }
  } : {}

  return (
    <>
      {post && <SEO {...blogPostSEO} />}
      
      <main id="main-content" style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10rem 2rem' }}>
            <div style={{
              width: '8px',
              height: '16px',
              background: 'var(--green)',
              animation: 'blink 1s steps(1) infinite'
            }} />
            <p style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--text3)', marginTop: '1rem' }}>
              Loading post...
            </p>
          </div>
        ) : (
          <article style={{ maxWidth: '720px', margin: '0 auto', padding: '6rem 2rem 4rem' }}>
            <header>
              <Link to="/blog" style={{
                fontSize: '11px',
                fontFamily: 'var(--mono)',
                color: 'var(--text3)',
                display: 'inline-block',
                marginBottom: '2rem',
                transition: 'color 0.2s'
              }} className="back-link">
                ← Back to blog
              </Link>

              {post.coverImage?.url && (
                <img 
                  src={post.coverImage.url} 
                  alt={post.title}
                  width="1200"
                  height="630"
                  style={{ width: '100%', height: 'auto', maxHeight: '320px', objectFit: 'cover', border: '1px solid var(--border)', marginBottom: '1.5rem' }}
                  loading="lazy"
                />
              )}


              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
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
                <time dateTime={post.publishedAt} style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </time>
              </div>

              <h1 style={{
                fontFamily: 'var(--sans)',
                fontWeight: 800,
                fontSize: 'clamp(26px, 4vw, 40px)',
                letterSpacing: '-1px',
                lineHeight: 1.15,
                marginBottom: '0.5rem',
                color: 'var(--text)'
              }}>
                {post.title}
              </h1>

              <div style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', marginBottom: '0.5rem' }}>
                {post.readTime} · by {CONFIG.name}
              </div>

              <a 
                href={post.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', transition: 'color 0.2s' }}
                className="canonical-link"
              >
                Originally published on Hashnode →
              </a>

              <div style={{ height: '1px', background: 'var(--border)', margin: '2rem 0' }} />
            </header>

            <div 
              className="post-body" 
              dangerouslySetInnerHTML={{ __html: post.content?.html }} 
            />

            <footer style={{ borderTop: '1px solid var(--border)', marginTop: '3rem', paddingTop: '2rem' }}>
              <div style={{ fontSize: '11px', color: 'var(--text3)', fontFamily: 'var(--mono)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                Share this post:
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(post.url)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn"
                >
                  Share on X →
                </a>
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(post.url)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-btn"
                >
                  Share on LinkedIn →
                </a>
                <button 
                  onClick={handleCopy}
                  className="share-btn"
                >
                  {copied ? 'Copied!' : 'Copy link'}
                </button>
              </div>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                <h3 style={{ fontSize: '14px', fontFamily: 'var(--sans)', fontWeight: 700, color: 'var(--text)', marginBottom: '1.25rem' }}>
                  More from the blog
                </h3>
                <RecentPosts currentSlug={slug} />
              </div>

              <Link to="/blog" style={{ display: 'block', marginTop: '2rem', fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--green)' }}>
                View all articles →
              </Link>
            </footer>
          </article>
        )}
      </main>

      <style>{`
        .back-link:hover, .canonical-link:hover {
          color: var(--green) !important;
        }
        .share-btn {
          font-size: 11px;
          font-family: var(--mono);
          border: 1px solid var(--border2);
          padding: 6px 12px;
          color: var(--text2);
          transition: all 0.2s;
        }
        .share-btn:hover {
          border-color: var(--green);
          color: var(--green);
        }
        .post-body h2 { font-family: var(--sans); font-weight: 800; margin: 2rem 0 1rem; color: var(--text); }
        .post-body p { margin-bottom: 1.5rem; line-height: 1.9; color: var(--text2); }
        .post-body img { width: 100%; border: 1px solid var(--border); margin: 1rem 0; }
        .post-body pre { background: var(--bg2); padding: 1.5rem; overflow-x: auto; border: 1px solid var(--border); margin: 1.5rem 0; font-family: var(--mono); }
      `}</style>
    </>
  )
}

function RecentPosts({ currentSlug }) {
  const { posts, loading } = useHashnode({ first: 3 })
  
  if (loading) return <div className="skeleton" style={{ height: '100px', width: '100%' }} />
  
  const others = posts.filter(p => p.slug !== currentSlug).slice(0, 2)
  
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      {others.map(p => (
        <a 
          key={p.slug}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'var(--bg2)',
            border: '1px solid var(--border)',
            padding: '1rem',
            display: 'block',
            transition: 'border-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--green)'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
        >
          <div style={{ fontSize: '9px', color: 'var(--green)', fontFamily: 'var(--mono)', marginBottom: '4px' }}>{p.tag}</div>
          <div style={{ fontSize: '13px', fontFamily: 'var(--sans)', fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>{p.title}</div>
        </a>
      ))}
    </div>
  )
}

