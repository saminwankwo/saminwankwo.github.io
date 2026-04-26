import React from 'react'
import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import freelanceData from '../data/freelance'

export default function Freelance() {
  return (
    <section id="freelance" aria-labelledby="freelance-heading" style={{
      background: 'var(--bg)',
      padding: 'var(--section-py) var(--section-px)'
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <SectionHeader 
          tag="Global Clients" 
          title="Freelance Engagements" 
        />

        <ul 
          aria-label="Freelance client list"
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}
        >
          {freelanceData.map((client, index) => (
            <FadeIn as="li" key={client.name} delay={index * 50}>
              <article style={{
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                padding: '1rem 1.2rem',
                transition: 'border-color 0.2s'
              }} className="freelance-card">
                <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '13px', color: 'var(--text)', marginBottom: '4px' }}>
                  {client.name}
                </h3>
                <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  {client.country} · {client.sector}
                </div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text2)', lineHeight: 1.5 }}>
                  {client.stack}
                </div>
              </article>
            </FadeIn>
          ))}
        </ul>
      </div>

      <style>{`
        .freelance-card:hover {
          border-color: var(--green) !important;
        }
      `}</style>
    </section>
  )
}
