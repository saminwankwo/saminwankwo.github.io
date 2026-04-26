import React, { useEffect } from 'react'
import Tag from './Tag'

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  if (!project) return null

  const { caseStudy } = project

  return (
    <div 
      className="modal-backdrop"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
      }}
    >
      <div 
        className="modal-panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        style={{
          background: 'var(--bg2)',
          border: '1px solid var(--border2)',
          padding: '2rem',
          maxWidth: '580px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative'
        }}
      >
        <button 
          onClick={onClose}
          aria-label="Close case study"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            border: '1px solid var(--border2)',
            color: 'var(--text2)',
            fontSize: '12px',
            fontFamily: 'var(--mono)',
            padding: '4px 10px',
            transition: 'all 0.2s'
          }}
          className="modal-close-btn"
        >
          ✕
        </button>

        <header>
          <span style={{
            fontSize: '10px',
            color: 'var(--green)',
            textTransform: 'uppercase',
            fontFamily: 'var(--mono)',
            display: 'block',
            marginBottom: '6px'
          }}>
            Case Study
          </span>
          <h2 id="modal-title" style={{
            fontFamily: 'var(--sans)',
            fontWeight: 800,
            fontSize: '22px',
            color: 'var(--text)'
          }}>
            {project.name}
          </h2>
          <span style={{
            fontSize: '11px',
            fontFamily: 'var(--mono)',
            color: 'var(--text3)',
            display: 'block',
            marginTop: '2px'
          }}>
            {project.cat}
          </span>
        </header>

        <div style={{ height: '1px', background: 'var(--border)', margin: '1.25rem 0' }} />

        {caseStudy && (
          <div className="modal-content">
            <section style={{ padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
              <h3 className="modal-label">Problem</h3>
              <p className="modal-value">{caseStudy.problem}</p>
            </section>

            <section style={{ padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
              <h3 className="modal-label">Solution</h3>
              <p className="modal-value">{caseStudy.solution}</p>
            </section>

            <section style={{ padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
              <h3 className="modal-label">Stack</h3>
              <p className="modal-value">{caseStudy.stack}</p>
            </section>

            <section style={{ padding: '1rem 0' }}>
              <h3 className="modal-label">Outcome</h3>
              <p className="modal-value" style={{ color: 'var(--green)' }}>{caseStudy.outcome}</p>
            </section>
          </div>
        )}

        {project.techDetail && (
          <div style={{ marginTop: '1.5rem' }}>
            <h3 className="modal-label" style={{ marginBottom: '0.75rem' }}>Architecture</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.techDetail.map(tech => (
                <Tag key={tech} size="sm">{tech}</Tag>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {project.link && project.link !== '#' && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="modal-action-primary"
            >
              View Live →
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="modal-action-secondary"
            >
              View on GitHub →
            </a>
          )}
        </div>
      </div>

      <style>{`
        .modal-label {
          font-size: 10px;
          font-family: var(--mono);
          color: var(--text3);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 6px;
        }
        .modal-value {
          font-size: 13px;
          font-family: var(--mono);
          line-height: 1.9;
          color: var(--text2);
        }
        .modal-close-btn:hover {
          border-color: var(--green);
          color: var(--green);
        }
        .modal-action-primary {
          border: 1px solid var(--green);
          color: var(--green);
          padding: 10px 24px;
          font-size: 11px;
          text-transform: uppercase;
          font-family: var(--mono);
          transition: all 0.2s;
        }
        .modal-action-primary:hover {
          background: var(--green);
          color: var(--bg);
        }
        .modal-action-secondary {
          border: 1px solid var(--border2);
          color: var(--text2);
          padding: 10px 24px;
          font-size: 11px;
          text-transform: uppercase;
          font-family: var(--mono);
          transition: all 0.2s;
        }
        .modal-action-secondary:hover {
          border-color: var(--green);
          color: var(--green);
        }
        @media (max-width: 580px) {
          .modal-panel {
            max-height: 100vh;
            border-radius: 0;
            margin: 0;
            align-self: stretch;
          }
          .modal-backdrop {
            padding: 0;
          }
        }
      `}</style>
    </div>
  )
}
