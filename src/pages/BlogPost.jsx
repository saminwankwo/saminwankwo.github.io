import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import CONFIG from '@config'
import SEO from '@components/seo/SEO'
import { buildStructuredData, truncateDescription } from '@lib/seo'
import { useHashnodePost } from '@hooks/useHashnode'
import { formatShortDate } from '@lib/formatters'
import { useClipboard } from '@hooks/useClipboard'
import { trackEvent } from '@lib/analytics'
import Spinner from '@ui/Spinner'
import Toast from '@ui/Toast'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams()
  const { post, loading, error } = useHashnodePost(slug)
  const { copy, copied } = useClipboard()

  useEffect(() => {
    if (post) {
      trackEvent('Blog Post View', { title: post.title })
    }
  }, [post])

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', gap: '1rem' }}>
        <Spinner size={40} />
        <p style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>Loading post...</p>
      </div>
    )
  }

  if (error || !post) {
    return <NotFound />
  }

  const shareUrl = post.url
  const tweetText = encodeURIComponent(`Check out "${post.title}" by @${CONFIG.handle}`)
  const twitterShare = `https://twitter.com/intent/tweet?text=${tweetText}&url=${shareUrl}`
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`

  return (
    <>
      <SEO 
        title={post.title}
        description={truncateDescription(post.brief, 155)}
        canonical={post.url} // Authority remains with Hashnode
        ogType="article"
        ogImage={post.coverImage?.url}
        articleDate={post.date}
        articleTags={[post.tag]}
        structuredData={buildStructuredData('article', post)}
      />

      <main id="main-content" style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        <article className="blog-post-article" style={{ maxWidth: '720px', margin: '0 auto', padding: '8rem 2rem 6rem' }}>
          
          <header style={{ marginBottom: '3rem' }}>
            <Link to="/blog" style={{ fontSize: '12px', fontFamily: 'var(--mono)', color: 'var(--green)', display: 'block', marginBottom: '2.5rem' }}>
              ← Back to all articles
            </Link>

            {post.coverImage?.url && (
              <img 
                src={post.coverImage.url} 
                alt={post.title}
                style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', border: '1px solid var(--border)', marginBottom: '2.5rem', borderRadius: '2px' }}
              />
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '11px', background: 'rgba(0, 255, 157, 0.1)', color: 'var(--green)', padding: '4px 10px', borderRadius: '2px', fontFamily: 'var(--mono)' }}>
                {post.tag}
              </span>
              <time style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
                {formatShortDate(post.date)}
              </time>
            </div>

            <h1 style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 'clamp(28px, 6vw, 42px)', color: 'var(--text)', margin: '0 0 1.5rem', letterSpacing: '-1px', lineHeight: 1.1 }}>
              {post.title}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1rem 0' }}>
              <span style={{ fontSize: '12px', color: 'var(--text2)', fontFamily: 'var(--mono)' }}>Originally published on </span>
              <a href={post.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', fontSize: '12px', fontFamily: 'var(--mono)', textDecoration: 'underline' }}>
                Hashnode ↗
              </a>
            </div>
          </header>

          <div 
            className="post-body" 
            dangerouslySetInnerHTML={{ __html: post.content?.html }} 
            style={{ marginBottom: '4rem' }}
          />

          <footer style={{ borderTop: '1px solid var(--border)', paddingTop: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: 'var(--text3)', fontFamily: 'var(--mono)' }}>Share:</span>
                <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="share-link">X →</a>
                <a href={linkedinShare} target="_blank" rel="noopener noreferrer" className="share-link">LinkedIn →</a>
                <button onClick={() => copy(post.url)} className="share-link">Copy Link</button>
              </div>

              <Link to="/blog" style={{ fontSize: '12px', fontFamily: 'var(--mono)', color: 'var(--green)' }}>
                View all articles →
              </Link>
            </div>
          </footer>
        </article>
      </main>

      <Toast message="Link copied to clipboard!" visible={copied} />

      <style>{`
        .share-link { font-size: 12px; color: var(--text2); font-family: var(--mono); transition: color 0.2s; min-height: 44px; display: inline-flex; align-items: center; }
        .share-link:hover { color: var(--green); }
        @media (max-width: 768px) {
          .blog-post-article { padding: calc(var(--nav-h) + 1.5rem) 1.25rem 3rem !important; }
        }
      `}</style>
    </>
  )
}
