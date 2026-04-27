import React from 'react'
import CONFIG from '@config'
import SEO from '@components/seo/SEO'
import { buildStructuredData } from '@lib/seo'
import GitHub from '@sections/GitHub'

export default function GitHubPage() {
  return (
    <>
      <SEO 
        title={`GitHub Activity — ${CONFIG.name}`}
        description={`Open source contributions and GitHub activity of ${CONFIG.name}. Explore my latest repositories and coding stats.`}
        canonical={CONFIG.siteUrl + '/github'}
        structuredData={buildStructuredData('home', {})}
      />
      <main id="main-content" style={{ paddingTop: 'calc(var(--nav-h) + 2rem)' }}>
        <GitHub />
      </main>
    </>
  )
}
