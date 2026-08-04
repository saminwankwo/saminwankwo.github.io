import React from 'react'
import CONFIG from '@config'
import SEO from '@components/seo/SEO'
import { buildStructuredData } from '@lib/seo'
import Contact from '@sections/Contact'

export default function ContactPage() {
  return (
    <>
      <SEO 
        title={`Contact & Hire — ${CONFIG.name}`}
        description={`Get in touch with ${CONFIG.name} for remote opportunities, backend engineering consulting, or technical collaboration.`}
        canonical={CONFIG.siteUrl + '/contact'}
        structuredData={buildStructuredData('webpage', {
          title: `Contact & Hire — ${CONFIG.name}`,
          description: `Get in touch with ${CONFIG.name} for remote opportunities, backend engineering consulting, or technical collaboration.`,
          url: CONFIG.siteUrl + '/contact',
          breadcrumbName: 'Contact'
        })}
      />
      <main id="main-content" style={{ paddingTop: 'calc(var(--nav-h) + 2rem)' }}>
        <Contact />
      </main>
    </>
  )
}
