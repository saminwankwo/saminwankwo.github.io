import React from 'react'
import CONFIG from '@config'
import SEO from '@components/seo/SEO'
import { buildStructuredData } from '@lib/seo'
import Freelance from '@sections/Freelance'

export default function FreelancePage() {
  return (
    <>
      <SEO 
        title={`Freelance Engagements — ${CONFIG.name}`}
        description={`Global freelance work and client engagements by ${CONFIG.name} in Fintech, Marketplace, and EdTech sectors.`}
        canonical={CONFIG.siteUrl + '/freelance'}
        structuredData={buildStructuredData('home', {})}
      />
      <main id="main-content" style={{ paddingTop: 'calc(var(--nav-h) + 2rem)' }}>
        <Freelance />
      </main>
    </>
  )
}
