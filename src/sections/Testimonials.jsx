import React from 'react'
import testimonials from '@data/testimonials'
import SectionHeader from '@ui/SectionHeader'
import FadeIn from '@ui/FadeIn'

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      aria-labelledby="testimonials-title"
      style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: 'var(--section-py) var(--section-px)'
      }}
    >
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <SectionHeader id="testimonials-title" tag="Social Proof" title="What People Say" />

        <ul style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem',
          listStyle: 'none',
          padding: 0,
          marginTop: '3rem'
        }}>
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} as="li" delay={i * 70}>
              <figure style={{
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                padding: '2rem',
                height: '100%',
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                position: 'relative'
              }}>
                <span aria-hidden="true" style={{ 
                  position: 'absolute', 
                  top: '1rem', 
                  right: '1.5rem', 
                  fontSize: '40px', 
                  fontFamily: 'serif', 
                  color: 'var(--green)', 
                  opacity: 0.1,
                  lineHeight: 1
                }}>"</span>
                
                <blockquote cite={t.name} style={{ margin: 0 }}>
                  <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.8, fontStyle: 'italic', margin: 0 }}>
                    "{t.quote}"
                  </p>
                </blockquote>

                <figcaption style={{ marginTop: 'auto' }}>
                  <strong style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '15px', color: 'var(--text)' }}>
                    {t.name}
                  </strong>
                  <span style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', marginTop: '4px' }}>
                    {t.role}
                  </span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
