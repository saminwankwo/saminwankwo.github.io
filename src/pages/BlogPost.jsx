import { useParams, Link } from 'react-router-dom'
import posts from '../data/posts'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  
  if (!post) {
    return <NotFound />
  }

  const otherPosts = posts.filter(p => p.slug !== slug).slice(0, 2)

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '56px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '6rem 2rem 4rem' }} className="blog-post-container">
        
        <Link to="/blog" style={{
          fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)',
          display: 'inline-block', marginBottom: '2rem', transition: '0.2s'
        }} className="back-link">
          ← Back to blog
        </Link>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '1rem' }}>
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

        <h1 style={{
          fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 'clamp(26px, 4vw, 40px)',
          letterSpacing: '-1px', lineHeight: 1.15, color: 'var(--text)', marginBottom: '0.5rem'
        }}>
          {post.title}
        </h1>

        <div style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
          {post.readTime} · by Samuel Nwankwo
        </div>

        <div style={{ borderTop: '1px solid var(--border)', margin: '2rem 0' }} />

        <div 
          className="post-body" 
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        <div style={{ marginTop: '4rem' }}>
          <h4 style={{ fontSize: '14px', fontFamily: 'var(--mono)', color: 'var(--text3)', marginBottom: '1rem' }}>
            More Posts
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {otherPosts.map(p => (
              <Link to={`/blog/${p.slug}`} key={p.slug} style={{
                border: '1px solid var(--border)', padding: '1rem', background: 'var(--bg2)',
                display: 'flex', flexDirection: 'column', transition: '0.2s'
              }} className="more-post-card">
                <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '14px', color: 'var(--text)', marginBottom: '0.25rem' }}>
                  {p.title}
                </div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
                  {p.tag} · {p.readTime}
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
      <style>{`
        .back-link:hover { color: var(--green) !important; }
        .more-post-card:hover { border-color: var(--green) !important; }
        @media (max-width: 768px) {
          .blog-post-container { padding: 4rem 1.25rem 4rem !important; }
        }
      `}</style>
    </div>
  )
}
