import React from 'react'
import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import { useHashnode } from '../hooks/useHashnode'
import staticArticles from '../data/articles'
import { CONFIG } from '../data/config'

export default function Writing() {
  const { posts, loading, error } = useHashnode({ first: 4 })

  const displayPosts = (error || (!loading && posts.length === 0)) ? staticArticles : posts

  return (
    <section id="writing" aria-labelledby="writing-heading" style={{
      background: 'var(--bg2)',
      padding: 'var(--section-py) var(--section-px)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <SectionHeader tag="Tech Content" title="Articles & Writing" />

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid var(--border)',
          overflow: 'hidden'
        }}>
          {loading && !error ? (
            [1,2,3,4].map(i => (
              <div key={i} className="skeleton" style={{ height: '70px', width: '100%', marginBottom: '1px' }} />
            ))
          ) : (
            displayPosts.map((article, index) => (
              <FadeIn key={article.slug || article.href} delay={index * 60}>
                <article>
                  <a 
                    href={article.url || article.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1.5rem',
                      padding: '1.1rem 1.4rem',
                      background: 'var(--bg3)',
                      borderBottom: index === displayPosts.length - 1 ? 'none' : '1px solid var(--border)',
                      transition: 'background 0.2s'
                    }}
                    className="writing-row"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{
                        fontSize: '9px',
                        fontFamily: 'var(--mono)',
                        color: 'var(--green)',
                        border: '1px solid rgba(0, 255, 157, 0.3)',
                        background: 'rgba(0, 255, 157, 0.06)',
                        padding: '3px 8px',
                        borderRadius: '2px',
                        flexShrink: 0
                      }}>
                        {article.tag}
                      </span>
                      <h3 style={{
                        fontFamily: 'var(--sans)',
                        fontWeight: 600,
                        fontSize: '14px',
                        color: 'var(--text)',
                        lineHeight: 1.4
                      }}>
                        {article.title}
                      </h3>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexShrink: 0 }}>
                      <span style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
                        {article.readTime}
                      </span>
                      <span style={{ fontSize: '14px', color: 'var(--text3)' }}>↗</span>
                    </div>
                  </a>
                </article>
              </FadeIn>
            ))
          )}
        </div>

        <div style={{
          marginTop: '1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <a 
            href={CONFIG.hashnodeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--green)' }}
          >
            View all articles →
          </a>

          <div style={{
            background: 'var(--bg3)',
            border: '1px solid var(--border)',
            padding: '0.9rem 1.4rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            flex: '1',
            maxWidth: '400px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '13px' }}>
              <span style={{ color: 'var(--red)' }} aria-hidden="true">▶</span>
              <span>Backend dev content on YouTube</span>
            </div>
            <a 
              href={CONFIG.youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--green)' }}
            >
              Subscribe →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .writing-row:hover {
          background: var(--bg) !important;
        }
      `}</style>
    </section>
  )
}
