import React from 'react'
import CONFIG from '@config'
import skills from '@data/skills'
import SectionHeader from '@ui/SectionHeader'
import FadeIn from '@ui/FadeIn'
import Tag from '@ui/Tag'
import ErrorBoundary from '@ui/ErrorBoundary'

export default function Skills() {
  return (
    <section 
      id="skills" 
      aria-labelledby="skills-title"
      style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: 'var(--section-py) var(--section-px)'
      }}
    >
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <SectionHeader id="skills-title" tag="Technical Stack" title="Skills & Technologies" />

        <ErrorBoundary>
          <div className="skills-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', 
            gap: '1.25rem' 
          }}>
            {skills.map((cat, i) => (
              <FadeIn key={cat.cat} delay={i * 60} as="article">
                <div className="skill-card" style={{
                  background: 'var(--bg3)',
                  border: '1px solid var(--border)',
                  padding: '1.5rem',
                  height: '100%',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                    <span aria-hidden="true" style={{ fontSize: '18px', color: 'var(--green)' }}>{cat.icon}</span>
                    <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '15px', color: 'var(--text)', margin: 0 }}>
                      {cat.cat}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {cat.tags.map(t => (
                      <Tag key={t.l} primary={!!t.p}>{t.l}</Tag>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={420} style={{ marginTop: '3rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase' }}>
                // currently exploring
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {CONFIG.currentlyLearning.map(skill => (
                  <Tag key={skill} size="sm">{skill}</Tag>
                ))}
              </div>
            </div>
          </FadeIn>
        </ErrorBoundary>
      </div>

      <style>{`
        .skill-card:hover { border-color: var(--green) !important; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); }
        @media (max-width: 480px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
