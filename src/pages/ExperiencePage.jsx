import React from 'react'
import CONFIG from '@config'
import SEO from '@components/seo/SEO'
import { buildStructuredData } from '@lib/seo'
import Experience from '@sections/Experience'

export default function ExperiencePage() {
  return (
    <>
      <SEO 
        title={`Work Experience — ${CONFIG.name}`}
        description={`Professional work history of ${CONFIG.name}, backend engineer specializing in high-availability systems and scalable APIs.`}
        canonical={CONFIG.siteUrl + '/experience'}
        structuredData={buildStructuredData('home', {})}
      />
      <main id="main-content" style={{ paddingTop: 'calc(var(--nav-h) + 2rem)' }}>
        <Experience />
      </main>
    </>
  )
}
