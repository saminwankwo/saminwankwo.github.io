import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useHashnode } from '../hooks/useHashnode'
import { CONFIG } from '../data/config'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams()
  const { post, loading, error } = useHashnode({ slug })
  
  if (loading) {
    return <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '100px', padding: '0 2rem' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div className="skeleton" style={{ height: '30px', width: '150px', marginBottom: '2rem' }} />
        <div className="skeleton" style={{ height: '50px', width: '80%', marginBottom: '1rem' }} />
        <div className="skeleton" style={{ height: '400px', width: '100%' }} />
      </div>
    </div>
  }

  if (error || !post) {
    return <NotFound />
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.brief,
    "author": { "@type": "Person", "name": CONFIG.name, "url": CONFIG.siteUrl },
    "publisher": { "@type": "Person", "name": CONFIG.name },
    "datePublished": post.publishedAt,
    "image": post.coverImage?.url || CONFIG.ogImage,
    "url": post.url,
    "mainEntityOfPage": { "@type": "WebPage", "@id": post.url }
  }

  return (
    <main id="main-content" style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '56px' }}>
      <SEO 
        title={post.title}
        description={post.brief.slice(0, 155)}
        canonical={post.url}
        ogType="article"
        ogImage={post.coverImage?.url}
        articleDate={post.publishedAt}
        articleTags={post.tags.map(t => t.name)}
        structuredData={structuredData}
      />

      <article style={{ maxWidth: '720px', margin: '0 auto', padding: '6rem 2rem 4rem' }} className="blog-post-container">
        <header>
          <Link to="/blog" style={{
            fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)',
            display: 'inline-block', marginBottom: '2rem', transition: '0.2s'
          }} className="back-link">
            ← Back to blog
          </Link>

          {post.coverImage && (
            <img 
              src={post.coverImage.url} 
              alt={post.title} 
              style={{ width: '100%', height: 'auto', borderRadius: '4px', marginBottom: '2rem', border: '1px solid var(--border)' }} 
            />
          )}

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '1rem' }}>
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
          </div>

          <h1 style={{
            fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 'clamp(26px, 4vw, 40px)',
            letterSpacing: '-1px', lineHeight: 1.15, color: 'var(--text)', marginBottom: '0.5rem'
          }}>
            {post.title}
          </h1>

          <div style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
            {post.readTimeInMinutes} min read · by {CONFIG.name}
          </div>
        </header>

        <div style={{ borderTop: '1px solid var(--border)', margin: '2rem 0' }} />

        <div 
          className="post-body" 
          dangerouslySetInnerHTML={{ __html: post.content.html }} 
        />

        <footer style={{ marginTop: '4rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
          <p style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
            Originally published on <a href={post.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>Hashnode</a>.
          </p>
          
          <div style={{ marginTop: '2rem' }}>
            <Link to="/blog" style={{ color: 'var(--green)', fontSize: '13px', fontFamily: 'var(--mono)' }}>
              More Articles →
            </Link>
          </div>
        </footer>
      </article>

      <style>{`
        .back-link:hover { color: var(--green) !important; }
        @media (max-width: 768px) {
          .blog-post-container { padding: 4rem 1.25rem 4rem !important; }
        }
      `}</style>
    </main>
  )
}
