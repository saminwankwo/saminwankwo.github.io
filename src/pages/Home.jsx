import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../components/SEO'
import NowStrip from '../components/NowStrip'
import Hero from '../sections/Hero'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import Freelance from '../sections/Freelance'
import Testimonials from '../sections/Testimonials'
import GitHub from '../sections/GitHub'
import Writing from '../sections/Writing'
import Contact from '../sections/Contact'
import { CONFIG } from '../data/config'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  const homeSEO = {
    title: "Samuel Nwankwo — Backend Engineer",
    description: "Backend engineer with 7+ years PHP/Laravel and 5+ years Node.js. Scalable APIs, microservices, AWS cloud infrastructure. Available for remote roles from Port Harcourt, Nigeria.",
    canonical: CONFIG.siteUrl + "/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@id": "#person"
      }
    }
  }

  return (
    <>
      <SEO {...homeSEO} />
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
