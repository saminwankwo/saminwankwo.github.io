import React from 'react'
import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import experienceData from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" style={{
      background: 'var(--bg)',
      padding: 'var(--section-py) var(--section-px)'
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <SectionHeader 
          id="experience-heading" 
          tag="Work History" 
          title="Professional Experience" 
        />

        <ol 
          aria-label="Work history timeline"
          style={{
            listStyle: 'none',
            position: 'relative',
            paddingLeft: 0
          }}
        >
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'var(--border)'
          }} aria-hidden="true" />

          {experienceData.map((job, index) => (
            <FadeIn as="li" key={`${job.company}-${index}`} delay={index * 70} style={{
              paddingLeft: '2rem',
              paddingBottom: '2.75rem',
              position: 'relative'
            }}>
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '-5px',
                top: '5px',
                width: '11px',
                height: '11px',
                borderRadius: '50%',
                background: job.current ? 'var(--green)' : 'var(--bg)',
                border: job.current ? 'none' : '2px solid var(--green)'
              }} aria-hidden="true" />

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '17px', color: 'var(--text)' }}>
                  {job.company}
                </h3>
                {job.current && (
                  <span 
                    aria-label="Current position"
                    style={{
                      background: 'rgba(0, 255, 157, 0.1)',
                      color: 'var(--green)',
                      border: '1px solid rgba(0, 255, 157, 0.3)',
                      fontSize: '10px',
                      fontFamily: 'var(--mono)',
                      textTransform: 'uppercase',
                      padding: '2px 8px',
                      borderRadius: '2px'
                    }}
                  >
                    Current
                  </span>
                )}
              </div>

              <div style={{ color: 'var(--blue)', fontSize: '13px', fontFamily: 'var(--mono)', marginBottom: '4px' }}>
                {job.role}
              </div>

              <div style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', marginBottom: '0.75rem' }}>
                {job.loc} · {job.date}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' }}>
                {job.tech.map(t => (
                  <span 
                    key={t}
                    style={{
                      fontSize: '10px',
                      fontFamily: 'var(--mono)',
                      color: 'var(--amber)',
                      border: '1px solid rgba(255, 209, 102, 0.25)',
                      background: 'rgba(255, 209, 102, 0.05)',
                      padding: '2px 8px',
                      borderRadius: '2px'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul aria-label={`Key achievements at ${job.company}`} style={{ listStyle: 'none', paddingLeft: 0 }}>
                {job.bullets.map((bullet, i) => (
                  <li 
                    key={i}
                    style={{
                      fontSize: '12px',
                      fontFamily: 'var(--mono)',
                      color: 'var(--text2)',
                      lineHeight: 1.9,
                      paddingLeft: '1.2rem',
                      position: 'relative',
                      marginBottom: '4px'
                    }}
                  >
                    <span 
                      style={{ position: 'absolute', left: 0, color: 'var(--green)' }}
                      aria-hidden="true"
                    >
                      ›
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  )
}
