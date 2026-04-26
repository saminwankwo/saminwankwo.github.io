import React from 'react'
import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import Tag from '../components/Tag'
import skillsData from '../data/skills'
import { CONFIG } from '../data/config'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" style={{
      background: 'var(--bg2)',
      padding: 'var(--section-py) var(--section-px)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <SectionHeader 
          id="skills-heading" 
          tag="Technical Stack" 
          title="Skills & Technologies" 
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem'
        }}>
          {skillsData.map((group, index) => (
            <FadeIn key={group.cat} delay={index * 60}>
              <article style={{
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                padding: '1.4rem',
                height: '100%',
                transition: 'border-color 0.2s'
              }} className="skill-card">
                <header style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                  <span style={{ color: 'var(--green)', fontSize: '17px' }} aria-hidden="true">{group.icon}</span>
                  <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '13px', color: 'var(--text)' }}>
                    {group.cat}
                  </h3>
                </header>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {group.tags.map(tag => (
                    <Tag key={tag.l} primary={tag.p === 1}>{tag.l}</Tag>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={420} style={{ marginTop: '1.25rem' }}>
          <div style={{
            background: 'var(--bg3)',
            border: '1px solid var(--border)',
            padding: '1rem 1.4rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <span style={{ fontSize: '11px', color: 'var(--green)', fontFamily: 'var(--mono)', textTransform: 'uppercase' }}>
              // currently exploring
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {CONFIG.currentlyLearning.map(item => (
                <Tag key={item} size="sm">{item}</Tag>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .skill-card:hover {
          border-color: var(--green) !important;
        }
      `}</style>
    </section>
  )
}
