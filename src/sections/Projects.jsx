import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import CaseStudyModal from '../components/CaseStudyModal'
import projects from '../data/projects'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" style={{
      background: 'var(--bg2)',
      padding: '5rem 2rem',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <SectionHeader tag="Featured Work" title="Project Highlights" />
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '1.25rem'
        }}>
          {projects.map((proj, i) => (
            <FadeIn key={`${proj.name}-${i}`} delay={i * 60}>
              <div 
                className="project-card"
                onClick={() => proj.caseStudy && setActiveProject(proj)}
                style={{
                  background: 'var(--bg3)',
                  border: '1px solid var(--border)',
                  padding: '1.4rem',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  cursor: proj.caseStudy ? 'pointer' : 'default'
                }}
              >
                <div className="project-card-line" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--green)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: '0.3s'
                }} />
                
                <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', marginBottom: '0.5rem' }}>
                  {proj.cat}
                </div>
                
                <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '15px', color: 'var(--text)', marginBottom: '0.5rem' }}>
                  {proj.name}
                </h3>
                
                <div style={{ fontSize: '12px', fontFamily: 'var(--mono)', color: 'var(--text2)', lineHeight: 1.8, flex: 1, marginBottom: '1rem' }}>
                  {proj.desc}
                </div>
                
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--green)', fontSize: '11px', fontFamily: 'var(--mono)' }}>{proj.metric}</span>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {proj.caseStudy && <span style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>case study ↗</span>}
                    {!proj.caseStudy && proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>live ↗</a>}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {activeProject && (
        <CaseStudyModal 
          project={activeProject} 
          onClose={() => setActiveProject(null)} 
        />
      )}

      <style>{`
        .project-card { transition: 0.3s; }
        .project-card:hover { transform: translateY(-2px); }
        .project-card:hover .project-card-line { transform: scaleX(1) !important; }
        @media (max-width: 768px) {
          #projects { padding: 4rem 1.25rem !important; }
        }
      `}</style>
    </section>
  )
}
