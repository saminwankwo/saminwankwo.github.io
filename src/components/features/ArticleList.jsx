import React from 'react'
import { useHashnode } from '@hooks/useHashnode'
import articlesFallback from '@data/articles'
import Tag from '@ui/Tag'
import Skeleton from '@ui/Skeleton'
import FadeIn from '@ui/FadeIn'

export default function ArticleList({ first = 4 }) {
  const { posts, loading, error } = useHashnode({ first })

  if (loading) {
    return <Skeleton count={first} height="70px" gap="1rem" />
  }

  // Use live posts if available, otherwise fallback to static data
  const data = (posts && posts.length > 0) ? posts : articlesFallback

  return (
    <div style={{ border: '1px solid var(--border)', overflow: 'hidden', borderRadius: '2px' }}>
      {data.map((post, index) => (
        <FadeIn key={post.slug || post.href} delay={index * 60}>
          <article>
            <a 
              href={post.url || post.href} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Read: ${post.title}`}
              className="article-row"
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                gap: '1.5rem', 
                padding: '1.25rem 1.5rem', 
                background: 'var(--bg3)',
                borderBottom: index < data.length - 1 ? '1px solid var(--border)' : 'none',
                transition: 'background 0.2s' 
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Tag size="sm" primary>{post.tag || 'Backend'}</Tag>
                  {post.date && (
                    <span style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', marginTop: '2px' }}>
                      {new Date(post.date).getFullYear()}
                    </span>
                  )}
                </div>
                <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '15px', color: 'var(--text)', margin: 0 }}>
                  {post.title}
                </h3>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                <span style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
                  {post.readTime}
                </span>
                <span style={{ fontSize: '14px', color: 'var(--text3)' }}>↗</span>
              </div>
            </a>
          </article>
        </FadeIn>
      ))}

      <style>{`
        .article-row:hover { background: var(--bg) !important; }
        @media (max-width: 480px) {
          .article-row { padding: 1rem !important; align-items: flex-start !important; }
          .article-row div:first-child { min-width: 0; }
        }
      `}</style>
    </div>
  )
}
