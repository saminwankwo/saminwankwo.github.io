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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": CONFIG.name,
      "jobTitle": CONFIG.title,
      "url": CONFIG.siteUrl,
      "sameAs": [
        `https://github.com/${CONFIG.github}`,
        `https://linkedin.com/in/${CONFIG.linkedin}`,
        `https://npmjs.com/~${CONFIG.npm}`
      ]
    }
  };

  return (
    <main id="main-content">
      <SEO 
        title={`${CONFIG.name} — ${CONFIG.title}`}
        description={`${CONFIG.name} is a backend engineer with 7+ years in PHP/Laravel and 5+ years in Node.js/NestJS. Building scalable APIs, microservices, and cloud infrastructure on AWS. Available for remote roles.`}
        canonical={CONFIG.siteUrl + "/"}
        structuredData={structuredData}
      />
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
  )
}
