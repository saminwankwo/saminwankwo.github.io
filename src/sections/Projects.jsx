import React, { useState, useMemo } from 'react'
import projects from '@data/projects'
import SectionHeader from '@ui/SectionHeader'
import FadeIn from '@ui/FadeIn'
import CaseStudyModal from '@features/CaseStudyModal'
import { trackEvent } from '@lib/analytics'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const [filter, setFilter] = useState('All')

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(projects.map(p => p.cat))]
    return cats.sort()
  }, [])

  const filteredProjects = useMemo(() => {
    let list = [...projects]
    if (filter !== 'All') {
      list = list.filter(p => p.cat === filter)
    }
    return list.sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return 0
    })
  }, [filter])

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 8)

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

        {/* Filter Bar */}
        <div className="projects-filter-bar" style={{ 
          display: 'flex', 
          gap: '8px', 
          overflowX: 'auto', 
          padding: '2rem 0 1rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat)
                setFilter('All') // reset showAll when filter changes
                setShowAll(false)
                setFilter(cat)
                trackEvent('Filter Projects', { category: cat })
              }}
              style={{
                padding: '10px 16px',
                minHeight: '44px',
                fontSize: '11px',
                fontFamily: 'var(--mono)',
                background: filter === cat ? 'var(--green-dim)' : 'transparent',
                color: filter === cat ? 'var(--green)' : 'var(--text3)',
                border: filter === cat ? '1px solid var(--green)' : '1px solid var(--border)',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="projects-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
          gap: '1.5rem',
          listStyle: 'none',
          padding: 0,
          marginTop: '1rem'
        }}>
          {displayedProjects.map((p, i) => (
            <FadeIn key={p.name} as="li" delay={i * 55}>
              <article
                className="project-card"
                onClick={() => p.caseStudy && setActiveProject(p)}
                style={{
                  background: 'var(--bg3)',
                  border: p.featured ? '1px solid var(--green-dim)' : '1px solid var(--border)',
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
                <div style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  height: '2px', 
                  background: 'var(--green)', 
                  opacity: p.featured ? 1 : 0.4 
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--green)', textTransform: 'uppercase' }}>{p.cat}</span>
                    {p.featured && (
                      <span style={{ 
                        fontSize: '9px', 
                        fontFamily: 'var(--mono)', 
                        background: 'var(--green-dim)', 
                        color: 'var(--green)', 
                        padding: '2px 6px',
                        borderRadius: '2px',
                        textTransform: 'uppercase'
                      }}>Featured</span>
                    )}
                  </div>
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

        {filteredProjects.length > 8 && (
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <button 
              onClick={() => {
                setShowAll(!showAll);
                trackEvent('Toggle All Projects', { show: !showAll });
              }}
              style={{
                background: 'transparent',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                padding: '12px 32px',
                fontFamily: 'var(--mono)',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              className="show-more-btn"
            >
              {showAll ? 'Show Featured Only' : `View All ${filteredProjects.length} ${filter === 'All' ? '' : filter} Projects`}
            </button>
          </div>
        )}
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
        .show-more-btn:hover { border-color: var(--green); color: var(--green); }
        @media (max-width: 480px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .projects-filter-bar { padding: 1.25rem 0 0.75rem !important; gap: 6px !important; }
        }
      `}</style>
    </section>
  )
}
