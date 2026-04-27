import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CONFIG from '@config'
import SEO from '@components/seo/SEO'
import { buildStructuredData } from '@lib/seo'
import NowStrip from '@layout/NowStrip'
import Hero from '@sections/Hero'
import Skills from '@sections/Skills'
import Experience from '@sections/Experience'
import Projects from '@sections/Projects'
import Freelance from '@sections/Freelance'
import Testimonials from '@sections/Testimonials'
import GitHub from '@sections/GitHub'
import Writing from '@sections/Writing'
import Contact from '@sections/Contact'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location.state])

  return (
    <>
      <SEO 
        title={`${CONFIG.name} — ${CONFIG.title}`}
        description={`Backend engineer with 7+ years PHP/Laravel and 5+ years Node.js. Scalable APIs, microservices, AWS. Available for remote roles from ${CONFIG.location}.`}
        canonical={CONFIG.siteUrl + '/'}
        structuredData={buildStructuredData('home', {})}
      />
      
      <main id="main-content" aria-label={`Portfolio of ${CONFIG.name}`}>
        <NowStrip />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Freelance />
        <Testimonials />
        <GitHub />
        <Writing />
        <Contact />
      </main>
    </>
  )
}
