import React from 'react'
import Modal from '@ui/Modal'
import Button from '@ui/Button'
import Tag from '@ui/Tag'
import { trackEvent } from '@lib/analytics'

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null

  return (
    <Modal onClose={onClose} ariaLabelledBy="case-study-title" maxWidth="600px">
      <div style={{ position: 'relative' }}>
        <p style={{ fontSize: '10px', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Case Study</p>
        <h2 id="case-study-title" style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '22px', color: 'var(--text)', margin: 0 }}>
          {project.name}
        </h2>
        <p style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', marginTop: '4px' }}>{project.cat}</p>
        
        <button 
          onClick={onClose} 
          aria-label="Close case study"
          style={{ position: 'absolute', top: 0, right: 0, color: 'var(--text2)', fontSize: '20px' }}
        >
          ✕
        </button>
      </div>

      <div style={{ width: '100%', height: '1px', background: 'var(--border)', margin: '1.5rem 0' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {[
          { label: 'Problem', value: project.caseStudy?.problem },
          { label: 'Solution', value: project.caseStudy?.solution },
          { label: 'Stack', value: project.caseStudy?.stack },
          { label: 'Outcome', value: project.caseStudy?.outcome, color: 'var(--green)' }
        ].map(row => row.value && (
          <div key={row.label} style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
            <p style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>
              {row.label}
            </p>
            <p style={{ fontSize: '13px', fontFamily: 'var(--mono)', lineHeight: 1.9, color: row.color || 'var(--text2)' }}>
              {row.value}
            </p>
          </div>
        ))}

        {project.techDetail && (
          <div>
            <p style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '12px' }}>
              Architecture
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.techDetail.map(tech => (
                <Tag key={tech} size="sm">{tech}</Tag>
              ))}
            </div>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '2rem' }}>
        {project.link && (
          <Button 
            variant="ghost" 
            size="sm" 
            as="a" 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => trackEvent('Project Live Link', { name: project.name })}
          >
            View Live →
          </Button>
        )}
        {project.github && (
          <Button 
            variant="outline" 
            size="sm" 
            as="a" 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub →
          </Button>
        )}
        {project.caseStudyUrl && (
          <Button 
            variant="outline" 
            size="sm" 
            as="a" 
            href={project.caseStudyUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => trackEvent('Project Case Study External', { name: project.name })}
          >
            Full Case Study →
          </Button>
        )}
      </div>
    </Modal>
  )
}
