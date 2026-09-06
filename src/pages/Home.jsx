import React from 'react'
import CONFIG from '@config'
import SEO from '@components/seo/SEO'
import { buildStructuredData } from '@lib/seo'
import NowStrip from '@layout/NowStrip'
import Hero from '@sections/Hero'

export default function Home() {
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
        
        {/* We can add a "Learn more" or "Explore" section here if needed */}
        <section style={{ 
          padding: '4rem 2rem', 
          maxWidth: 'var(--max-w)', 
          margin: '0 auto',
          borderTop: '1px solid var(--border)'
        }}>
          <div className="home-explore-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '2rem' }}>
            {[
              { label: 'Technical Stack', path: '/skills', desc: 'Core technologies and tools I use.' },
              { label: 'Work History', path: '/experience', desc: 'Professional journey and roles.' },
              { label: 'Featured Work', path: '/projects', desc: 'Showcase of built applications.' }
            ].map(link => (
              <a key={link.path} href={link.path} style={{ display: 'block' }} className="home-explore-card">
                <h3 style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--green)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {link.label} →
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.5 }}>{link.desc}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <style>{`
        .home-explore-card {
          background: var(--bg2);
          border: 1px solid var(--border);
          padding: 1.5rem;
          transition: all 0.2s;
        }
        .home-explore-card:hover {
          border-color: var(--green);
          background: var(--bg3);
          transform: translateY(-2px);
        }
        @media (max-width: 480px) {
          .home-explore-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
