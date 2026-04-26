import React from 'react'
import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import testimonialsData from '../data/testimonials'

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" style={{
      background: 'var(--bg2)',
      padding: 'var(--section-py) var(--section-px)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <SectionHeader 
          tag="Social Proof" 
          title="What People Say" 
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem'
        }}>
          {testimonialsData.map((t, index) => (
            <FadeIn key={index} delay={index * 70}>
              <figure style={{
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                margin: 0,
                height: '100%'
              }}>
                <span 
                  aria-hidden="true"
                  style={{ fontSize: '22px', color: 'var(--green)', fontFamily: 'Georgia, serif', lineHeight: 1 }}
                >
                  “
                </span>
                
                <blockquote cite={t.name} style={{ margin: 0, flex: 1 }}>
                  <p style={{
                    fontSize: '12px',
                    fontFamily: 'var(--mono)',
                    color: 'var(--text2)',
                    fontStyle: 'italic',
                    lineHeight: 1.9,
                    margin: 0
                  }}>
                    {t.quote}
                  </p>
                </blockquote>

                <figcaption style={{ borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
                  <strong style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '13px', color: 'var(--text)' }}>
                    {t.name}
                  </strong>
                  <span style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', display: 'block', marginTop: '2px' }}>
                    {t.role}
                  </span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
