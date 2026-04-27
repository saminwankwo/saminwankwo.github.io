import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CONFIG from '@config'
import Button from '@ui/Button'

const NAV_LINKS = [
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Freelance', path: '/freelance' },
  { label: 'GitHub', path: '/github' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function MobileMenu({ onClose }) {
  const location = useLocation()

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)

    // Focus trap (simple)
    const focusable = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length > 0) focusable[0].focus()

    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <div 
      role="dialog" 
      aria-modal="true" 
      aria-label="Navigation menu"
      style={{ 
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'var(--bg)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <Link to="/" onClick={onClose} style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
          <span style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '18px', color: 'var(--green)' }}>Samuel</span>
          <span style={{ color: 'var(--text3)', fontWeight: 400, fontSize: '18px' }}>.dev</span>
        </Link>
        <button 
          onClick={onClose} 
          aria-label="Close menu"
          style={{ fontSize: '32px', color: 'var(--text)' }}
        >
          ✕
        </button>
      </div>

      <nav aria-label="Mobile navigation" style={{ flex: 1 }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {NAV_LINKS.map(link => (
            <li key={link.path}>
              <Link 
                to={link.path}
                onClick={onClose}
                style={{
                  fontSize: '24px',
                  fontFamily: 'var(--sans)',
                  fontWeight: 800,
                  color: location.pathname.startsWith(link.path) ? 'var(--green)' : 'var(--text)',
                  textDecoration: 'none'
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {CONFIG.socials.map(s => (
            <a 
              key={s.name} 
              href={s.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase' }}
            >
              {s.name}
            </a>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          as="a" 
          href={CONFIG.resumePath} 
          download={CONFIG.resumeFilename}
          style={{ width: '100%' }}
        >
          Download Resume ↓
        </Button>
        <Button 
          variant="filled" 
          as="a" 
          href={`mailto:${CONFIG.email}`}
          style={{ width: '100%' }}
        >
          Hire Me
        </Button>
      </div>
    </div>
  )
}
