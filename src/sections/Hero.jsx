import React from 'react'
import CONFIG from '@config'
import Button from '@ui/Button'
import TerminalWidget from '@features/TerminalWidget'
import ErrorBoundary from '@ui/ErrorBoundary'

export default function Hero() {
  return (
    <section 
      id="hero" 
      aria-label="Introduction" 
      role="banner"
      className="hero-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'calc(var(--nav-h) + var(--strip-h) + 2rem) 2rem 4rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative bg */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 157, 0.03) 0%, transparent 70%), linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        opacity: 0.4,
        zIndex: -1
      }} />

      <div className="hero-inner" style={{
        maxWidth: 'var(--max-w)',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: '4rem',
        justifyContent: 'space-between'
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '12px', display: 'flex', gap: '8px', color: 'var(--text3)', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--green)' }} aria-hidden="true">$</span>
            <span>whoami</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--sans)',
            fontWeight: 800,
            fontSize: 'clamp(36px, 8vw, 84px)',
            lineHeight: 1,
            letterSpacing: '-3px',
            marginBottom: '1.5rem'
          }}>
            <span style={{ color: 'var(--text)' }}>Samuel</span>
            <br />
            <span style={{ color: 'var(--green)' }}>Nwankwo</span>
          </h1>

          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: 'clamp(17px, 2.8vw, 24px)',
            color: 'var(--text2)',
            letterSpacing: '-0.5px',
            marginBottom: '1.5rem'
          }}>
            Backend Engineer — <span style={{ color: 'var(--blue)' }}>Node.js · PHP · Cloud</span>
          </p>

          <p style={{
            fontSize: '13px',
            color: 'var(--text2)',
            lineHeight: 1.9,
            maxWidth: '520px',
            borderLeft: '2px solid var(--green)',
            paddingLeft: '1.25rem',
            marginBottom: '2.5rem'
          }}>
            {CONFIG.tagline} Focused on high-availability systems, payment integrations, and microservices architecture.
          </p>

          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '30px', color: 'var(--green)' }}>7+</div>
              <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years PHP/Laravel</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '30px', color: 'var(--green)' }}>5+</div>
              <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years Node.js</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '30px', color: 'var(--green)' }}>$1M+</div>
              <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Payments Processed</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="filled" as="a" href="/experience">
              View Experience
            </Button>
            <Button variant="outline" as="a" href="/contact">
              Get In Touch
            </Button>
          </div>

          <a 
            href={CONFIG.resumePath} 
            download={CONFIG.resumeFilename}
            style={{
              display: 'block',
              marginTop: '1.25rem',
              fontSize: '12px',
              fontFamily: 'var(--mono)',
              color: 'var(--text3)',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--green)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text3)'}
          >
            ↓ Download Resume (PDF)
          </a>
        </div>

        <div className="hero-terminal-container">
          <ErrorBoundary>
            <TerminalWidget />
          </ErrorBoundary>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .hero-terminal-container { display: none !important; }
        }
        @media (max-width: 768px) {
          .hero-section { padding: calc(var(--nav-h) + var(--strip-h) + 1rem) 1.25rem 2.5rem !important; min-height: auto !important; }
          .hero-inner { flex-direction: column !important; gap: 2rem !important; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  )
}
