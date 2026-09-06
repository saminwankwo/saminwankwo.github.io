import React from 'react'
import freelance from '@data/freelance'
import SectionHeader from '@ui/SectionHeader'
import FadeIn from '@ui/FadeIn'

export default function Freelance() {
  return (
    <section 
      id="freelance" 
      aria-labelledby="freelance-title"
      style={{
        background: 'var(--bg)',
        padding: 'var(--section-py) var(--section-px)'
      }}
    >
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <SectionHeader id="freelance-title" tag="Global Clients" title="Freelance Engagements" />

        <ul className="freelance-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', 
          gap: '1.25rem',
          listStyle: 'none',
          padding: 0,
          marginTop: '3rem'
        }}>
          {freelance.map((client, i) => (
            <FadeIn key={client.name} as="li" delay={i * 50}>
              <article style={{
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                padding: '1.5rem',
                height: '100%',
                transition: 'border-color 0.2s'
              }} className="freelance-card">
                <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '15px', color: 'var(--text)', margin: '0 0 0.5rem' }}>
                  {client.name}
                </h3>
                <p style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  {client.country} · {client.sector}
                </p>
                <div style={{ fontSize: '12px', fontFamily: 'var(--mono)', color: 'var(--text2)', lineHeight: 1.6 }}>
                  {client.stack}
                </div>
              </article>
            </FadeIn>
          ))}
        </ul>
      </div>

      <style>{`
        .freelance-card:hover { border-color: var(--green) !important; }
        @media (max-width: 480px) {
          .freelance-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
        }
      `}</style>
    </section>
  )
}
