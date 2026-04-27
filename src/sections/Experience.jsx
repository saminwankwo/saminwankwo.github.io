import React from 'react'
import experience from '@data/experience'
import SectionHeader from '@ui/SectionHeader'
import FadeIn from '@ui/FadeIn'
import Tag from '@ui/Tag'

export default function Experience() {
  return (
    <section 
      id="experience" 
      aria-labelledby="experience-title"
      style={{
        background: 'var(--bg)',
        padding: 'var(--section-py) var(--section-px)'
      }}
    >
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <SectionHeader id="experience-title" tag="Work History" title="Professional Experience" />

        <ol aria-label="Work history" style={{ 
          position: 'relative', 
          listStyle: 'none', 
          padding: 0,
          marginTop: '3rem'
        }}>
          {/* Vertical line */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            left: '4px',
            top: '8px',
            bottom: '8px',
            width: '1px',
            background: 'var(--border)'
          }} />

          {experience.map((job, i) => (
            <FadeIn key={`${job.company}-${i}`} as="li" delay={i * 70} style={{ paddingLeft: '2.5rem', marginBottom: '3.5rem', position: 'relative' }}>
              {/* Timeline dot */}
              <div aria-hidden="true" style={{
                position: 'absolute',
                left: 0,
                top: '8px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: job.current ? 'var(--green)' : 'var(--bg)',
                border: `2px solid ${job.current ? 'var(--green)' : 'var(--border)'}`,
                zIndex: 1
              }} />

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '12px', marginBottom: '4px' }}>
                <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '18px', color: 'var(--text)', margin: 0 }}>
                  {job.company}
                </h3>
                {job.current && <Tag size="sm" primary>Current</Tag>}
              </div>

              <p style={{ fontSize: '14px', fontFamily: 'var(--sans)', color: 'var(--blue)', fontWeight: 600, marginBottom: '4px' }}>
                {job.role}
              </p>

              <p style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {job.loc} · {job.date}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' }}>
                {job.tech.map(t => (
                  <Tag key={t} size="sm">{t}</Tag>
                ))}
              </div>

              <ul style={{ listStyle: 'none', padding: 0 }}>
                {job.bullets.map((bullet, idx) => (
                  <li key={idx} style={{ 
                    fontSize: '13px', 
                    color: 'var(--text2)', 
                    lineHeight: 1.8, 
                    marginBottom: '8px',
                    display: 'flex',
                    gap: '12px'
                  }}>
                    <span style={{ color: 'var(--green)', fontSize: '12px' }}>▹</span>
                    <span>{bullet}</span>
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
