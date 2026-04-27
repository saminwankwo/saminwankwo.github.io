import React from 'react'
import SectionHeader from '@ui/SectionHeader'
import ErrorBoundary from '@ui/ErrorBoundary'
import GitHubStats from '@features/GitHubStats'

export default function GitHub() {
  return (
    <section 
      id="github" 
      aria-labelledby="github-title"
      style={{
        background: 'var(--bg)',
        padding: 'var(--section-py) var(--section-px)'
      }}
    >
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <SectionHeader id="github-title" tag="Open Source" title="GitHub Activity" />

        <ErrorBoundary>
          <div style={{ marginTop: '3rem' }}>
            <GitHubStats />
          </div>
        </ErrorBoundary>
      </div>
    </section>
  )
}
