import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import CaseStudyModal from '../components/CaseStudyModal'
import projectsData from '../data/projects'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" aria-labelledby="projects-heading" style={{
      background: 'var(--bg2)',
      padding: 'var(--section-py) var(--section-px)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <SectionHeader 
          tag="Featured Work" 
          title="Project Highlights" 
        />

        <ul style={{
          listStyle: 'none',
          padding: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '1.25rem'
        }}>
          {projectsData.map((project, index) => (
            <FadeIn as="li" key={project.name} delay={index * 55}>
              <article 
                style={{
                  background: 'var(--bg3)',
                  border: '1px solid var(--border)',
                  padding: '1.4rem',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  cursor: project.caseStudy ? 'pointer' : 'default',
                  transition: 'transform 0.3s'
                }}
                className="project-card"
                onClick={() => project.caseStudy && setActiveProject(project)}
              >
                {/* Top accent bar */}
                <div className="project-accent" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--green)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s'
                }} />

                <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', marginBottom: '4px' }}>
                  {project.num} / {project.cat}
                </div>
                
                <h3 style={{ 
                  fontFamily: 'var(--sans)', 
                  fontWeight: 700, 
                  fontSize: '15px', 
                  color: 'var(--text)',
                  marginBottom: '0.75rem'
                }}>
                  {project.name}
                </h3>

                <p style={{
                  fontSize: '12px',
                  fontFamily: 'var(--mono)',
                  color: 'var(--text2)',
                  lineHeight: 1.8,
                  flex: 1,
                  marginBottom: '1rem'
                }}>
                  {project.desc}
                </p>

                <div style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: '0.75rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ color: 'var(--green)', fontSize: '11px', fontFamily: 'var(--mono)' }}>
                    {project.metric}
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {project.caseStudy && (
                      <button 
                        aria-label={`View case study for ${project.name}`}
                        style={{
                          fontSize: '10px',
                          fontFamily: 'var(--mono)',
                          color: 'var(--text3)',
                          transition: 'color 0.2s'
                        }}
                        className="project-link-btn"
                      >
                        case study ↗
                      </button>
                    )}
                    {project.link && project.link !== '#' && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} live`}
                        style={{
                          fontSize: '10px',
                          fontFamily: 'var(--mono)',
                          color: 'var(--text3)',
                          transition: 'color 0.2s'
                        }}
                        className="project-link-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        live ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </ul>

        {activeProject && (
          <CaseStudyModal 
            project={activeProject} 
            onClose={() => setActiveProject(null)} 
          />
        )}
      </div>

      <style>{`
        .project-card:hover {
          transform: translateY(-2px);
        }
        .project-card:hover .project-accent {
          transform: scaleX(1) !important;
        }
        .project-link-btn:hover {
          color: var(--green) !important;
        }
      `}</style>
    </section>
  )
}
