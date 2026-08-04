import React from 'react'
import CONFIG from '@config'
import SEO from '@components/seo/SEO'
import { buildStructuredData } from '@lib/seo'
import Projects from '@sections/Projects'

export default function ProjectsPage() {
  return (
    <>
      <SEO 
        title={`Portfolio Projects — ${CONFIG.name}`}
        description={`Featured projects and case studies by ${CONFIG.name}, covering e-commerce APIs, SaaS platforms, and developer tools.`}
        canonical={CONFIG.siteUrl + '/projects'}
        structuredData={buildStructuredData('webpage', {
          title: `Portfolio Projects — ${CONFIG.name}`,
          description: `Featured projects and case studies by ${CONFIG.name}, covering e-commerce APIs, SaaS platforms, and developer tools.`,
          url: CONFIG.siteUrl + '/projects',
          breadcrumbName: 'Projects'
        })}
      />
      <main id="main-content" style={{ paddingTop: 'calc(var(--nav-h) + 2rem)' }}>
        <Projects />
      </main>
    </>
  )
}
