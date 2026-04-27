import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CONFIG from '@config'

export default function MobileMenu({ onClose, handleNavClick }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)

    const focusable = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length > 0) focusable[0].focus()

    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  const navLinks = [
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Freelance', id: 'freelance' },
    { label: 'GitHub', id: 'github' },
    { label: 'Writing', id: 'writing' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <div 
      role="dialog" 
      aria-modal="true" 
      aria-label="Navigation menu"
      style={{ 
        position: 'fixed', 
        inset: 0, 
        background: 'var(--bg)', 
        zIndex: 200,
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center', 
        gap: '2rem' 
      }}
    >
      <button 
        onClick={onClose}
        aria-label="Close navigation menu"
        style={{ 
          position: 'absolute', 
          top: '1.5rem', 
          right: '1.5rem',
          fontSize: '24px',
          color: 'var(--text2)'
        }}
      >
        ✕
      </button>

      <ul style={{ listStyle: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {navLinks.map(link => (
          <li key={link.id}>
            <a 
              href={`/#${link.id}`}
              onClick={(e) => {
                handleNavClick(e, link.id)
                onClose()
              }}
              style={{
                fontSize: '18px',
                fontFamily: 'var(--sans)',
                fontWeight: 600,
                color: 'var(--text2)'
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <Link 
            to="/blog"
            onClick={onClose}
            style={{
              fontSize: '18px',
              fontFamily: 'var(--sans)',
              fontWeight: 600,
              color: 'var(--text2)'
            }}
          >
            Blog
          </Link>
        </li>
      </ul>

      <div style={{ width: '60px', height: '1px', background: 'var(--border)' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '200px' }}>
        <a 
          href={CONFIG.resumePath} 
          download={CONFIG.resumeFilename}
          className="nav-btn-outline"
          style={{ textAlign: 'center' }}
        >
          Resume ↓
        </a>
        <a 
          href={`mailto:${CONFIG.email}`} 
          className="nav-btn-primary"
          style={{ textAlign: 'center' }}
        >
          Hire Me
        </a>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '1rem', 
        marginTop: '1rem' 
      }}>
        {CONFIG.socials.map(s => (
          <a 
            key={s.label} 
            href={s.url} 
            aria-label={s.ariaLabel} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ fontSize: '12px', color: 'var(--text3)' }}
          >
            {s.label.substring(0, 2)}
          </a>
        ))}
      </div>
    </div>
  )
}
