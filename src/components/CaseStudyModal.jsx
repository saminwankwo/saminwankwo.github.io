import { useEffect } from 'react'

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!project || !project.caseStudy) return null

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(0,0,0,0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: 'var(--bg2)',
          border: '1px solid var(--border2)',
          padding: '2rem',
          maxWidth: '540px',
          width: '100%',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: '1px solid var(--border2)',
            color: 'var(--text)',
            fontSize: '12px',
            fontFamily: 'var(--mono)',
            padding: '4px 8px',
            cursor: 'pointer'
          }}
        >
          ✕
        </button>
        
        <div style={{ fontSize: '10px', color: 'var(--green)', textTransform: 'uppercase', marginBottom: '6px', fontFamily: 'var(--mono)' }}>
          Case Study
        </div>
        <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '20px', color: 'var(--text)', marginBottom: '1.5rem' }}>
          {project.name}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <div style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '4px', fontFamily: 'var(--mono)' }}>Problem</div>
            <div style={{ fontSize: '12px', color: 'var(--text2)', fontFamily: 'var(--mono)', lineHeight: 1.8 }}>
              {project.caseStudy.problem}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '4px', fontFamily: 'var(--mono)' }}>Solution</div>
            <div style={{ fontSize: '12px', color: 'var(--text2)', fontFamily: 'var(--mono)', lineHeight: 1.8 }}>
              {project.caseStudy.solution}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '4px', fontFamily: 'var(--mono)' }}>Stack</div>
            <div style={{ fontSize: '12px', color: 'var(--text2)', fontFamily: 'var(--mono)', lineHeight: 1.8 }}>
              {project.caseStudy.stack}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '4px', fontFamily: 'var(--mono)' }}>Outcome</div>
            <div style={{ fontSize: '12px', color: 'var(--green)', fontFamily: 'var(--mono)', lineHeight: 1.8 }}>
              {project.caseStudy.outcome}
            </div>
          </div>
        </div>

        {project.link && (
          <div style={{ marginTop: '1.5rem' }}>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                border: '1px solid var(--green)',
                color: 'var(--green)',
                padding: '8px 20px',
                fontSize: '11px',
                textTransform: 'uppercase',
                fontFamily: 'var(--mono)',
                marginTop: '8px',
                transition: '0.2s'
              }}
              className="case-study-btn"
            >
              View Live →
            </a>
          </div>
        )}
        <style>{`
          .case-study-btn:hover { background: var(--green); color: var(--bg) !important; }
        `}</style>
      </div>
    </div>
  )
}
