import React from 'react'
import CONFIG from '@config'
import SectionHeader from '@ui/SectionHeader'
import ErrorBoundary from '@ui/ErrorBoundary'
import ArticleList from '@features/ArticleList'
import Button from '@ui/Button'

export default function Writing() {
  return (
    <section 
      id="writing" 
      aria-labelledby="writing-title"
      style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: 'var(--section-py) var(--section-px)'
      }}
    >
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <SectionHeader id="writing-title" tag="Tech Content" title="Articles & Writing" />

        <ErrorBoundary>
          <div style={{ marginTop: '3rem' }}>
            <ArticleList first={4} />
          </div>
        </ErrorBoundary>

        <div style={{ 
          marginTop: '2rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '1.5rem' 
        }}>
          <a 
            href={CONFIG.hashnodeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ fontSize: '12px', fontFamily: 'var(--mono)', color: 'var(--green)' }}
          >
            View all articles on Hashnode →
          </a>

          <div style={{ 
            border: '1px solid var(--border)', 
            padding: '0.9rem 1.4rem', 
            background: 'var(--bg3)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            borderRadius: '2px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#ff0000', fontSize: '18px' }}>▶</span>
              <span style={{ fontSize: '13px', color: 'var(--text2)', fontFamily: 'var(--mono)' }}>Backend dev content on YouTube</span>
            </div>
            <Button variant="outline" size="sm" as="a" href={CONFIG.youtubeUrl} target="_blank">
              Subscribe →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
