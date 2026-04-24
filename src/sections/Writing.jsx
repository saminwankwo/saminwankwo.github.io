import { useState, useEffect } from 'react'
import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import { useHashnode } from '../hooks/useHashnode'
import { CONFIG } from '../data/config'

export default function Writing() {
  const { posts, loading, error } = useHashnode({ first: 4 })

  return (
    <section id="writing" aria-label="Articles and writing" style={{
      background: 'var(--bg)',
      padding: '5rem 2rem'
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <SectionHeader tag="Tech Content" title="Articles & Writing" />
        
        <FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--border)' }}>
            {loading ? (
              Array(4).fill(0).map((_, i) => (
                <div key={i} className="skeleton" style={{ height: '80px', borderBottom: '1px solid var(--border)' }} />
              ))
            ) : error || posts.length === 0 ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text3)', fontFamily: 'var(--mono)', fontSize: '12px' }}>
                Check out my articles on <a href={`https://hashnode.com/@${CONFIG.hashnode}`} target="_blank" rel="noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>Hashnode</a>.
              </div>
            ) : (
              posts.map((art, i) => (
                <article key={art.id}>
                  <a 
                    href={art.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-row"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1.5rem',
                      padding: '1.1rem 1.4rem',
                      background: 'var(--bg2)',
                      borderBottom: i < posts.length - 1 ? '1px solid var(--border)' : 'none',
                      transition: '0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: '9px',
                        fontFamily: 'var(--mono)',
                        color: 'var(--green)',
                        border: '1px solid rgba(0,255,157,0.4)',
                        background: 'rgba(0,255,157,0.05)',
                        padding: '2px 8px',
                        borderRadius: '2px'
                      }}>
                        {art.tags?.[0]?.name || 'Engineering'}
                      </span>
                      <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '14px', color: 'var(--text)' }}>
                        {art.title}
                      </h3>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                      <span style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
                        {art.readTimeInMinutes} min
                      </span>
                      <span style={{ color: 'var(--text3)', fontSize: '14px' }}>↗</span>
                    </div>
                  </a>
                </article>
              ))
            )}
          </div>
        </FadeIn>
        
        <FadeIn delay={150}>
          <div style={{ textAlign: 'center', marginTop: '2.5rem', fontSize: '12px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
            Also creating backend dev content on YouTube →{' '}
            <a href={CONFIG.youtubeUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>
              Subscribe
            </a>
          </div>
        </FadeIn>
      </div>
      <style>{`
        .article-row:hover { background: var(--bg3) !important; }
      `}</style>
    </section>
  )
}
