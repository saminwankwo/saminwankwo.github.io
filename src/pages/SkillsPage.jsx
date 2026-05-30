import React from 'react'
import CONFIG from '@config'
import SEO from '@components/seo/SEO'
import { buildStructuredData } from '@lib/seo'
import Skills from '@sections/Skills'

export default function SkillsPage() {
  return (
    <>
      <SEO 
        title={`Skills & Tech Stack — ${CONFIG.name}`}
        description={`Technical skills and technologies specialized by ${CONFIG.name}, including Node.js, PHP, Laravel, AWS, and more.`}
        canonical={CONFIG.siteUrl + '/skills'}
        structuredData={buildStructuredData('home', {})} // Using home schema as fallback or we can refine
      />
      <main id="main-content" style={{ paddingTop: 'calc(var(--nav-h) + 2rem)' }}>
        <Skills />
      </main>
    </>
  )
}
