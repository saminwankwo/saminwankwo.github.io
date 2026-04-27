import React, { useState } from 'react'
import projects from '@data/projects'
import SectionHeader from '@ui/SectionHeader'
import FadeIn from '@ui/FadeIn'
import CaseStudyModal from '@features/CaseStudyModal'
import { trackEvent } from '@lib/analytics'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section 
      id="projects" 
      aria-labelledby="projects-title"
      style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: 'var(--section-py) var(--section-px)'
      }}
    >
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <SectionHeader id="projects-title" tag="Featured Work" title="Project Highlights" />

        <ul style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem',
          listStyle: 'none',
          padding: 0,
          marginTop: '3rem'
        }}>
          {projects.map((p, i) => (
            <FadeIn key={p.name} as="li" delay={i * 55}>
              <article
                className="project-card"
                onClick={() => p.caseStudy && setActiveProject(p)}
                style={{
                  background: 'var(--bg3)',
                  border: '1px solid var(--border)',
                  padding: '1.75rem',
                  height: '100%',
                  position: 'relative',
                  cursor: p.caseStudy ? 'pointer' : 'default',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Accent bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--green)', opacity: 0.4 }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--green)', textTransform: 'uppercase' }}>{p.cat}</span>
                  <span style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>{p.num}</span>
                </div>

                <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '20px', color: 'var(--text)', margin: '0 0 0.75rem' }}>
                  {p.name}
                </h3>

                <p style={{ fontSize: '13px', color: 'var(--text2)', lineHeight: 1.7, marginBottom: '1.5rem', flex: 1 }}>
                  {p.desc}
                </p>

                <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--green)' }}>{p.metric}</span>
                  
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {p.caseStudy && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); setActiveProject(p); trackEvent('Project Case Study', { name: p.name }) }}
                        aria-label={`View case study for ${p.name}`}
                        style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', transition: 'color 0.2s' }}
                        className="project-link-btn"
                      >
                        case study ↗
                      </button>
                    )}
                    {p.link && (
                      <a 
                        href={p.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', transition: 'color 0.2s' }}
                        className="project-link-btn"
                      >
                        live ↗
                      </a>
                    )}
                  </div>
                </footer>
              </article>
            </FadeIn>
          ))}
        </ul>
      </div>

      {activeProject && (
        <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}

      <style>{`
        .project-card:hover { 
          transform: translateY(-4px); 
          border-color: var(--green) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .project-link-btn:hover { color: var(--green) !important; }
      `}</style>
    </section>
  )
}
