import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import CONFIG from '@config'
import Button from '@ui/Button'
import ThemeToggle from '@ui/ThemeToggle'

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
  const containerRef = useRef(null)
  const previousActiveRef = useRef(null)

  useEffect(() => {
    previousActiveRef.current = document.activeElement
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)

    // Focus first element inside menu only
    requestAnimationFrame(() => {
      const focusable = containerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (focusable?.length > 0) focusable[0].focus()
    })

    const handleTab = (e) => {
      if (e.key !== 'Tab') return
      const focusable = containerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (!focusable || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', handleTab)

    return () => {
      window.removeEventListener('keydown', handleEsc)
      window.removeEventListener('keydown', handleTab)
      if (previousActiveRef.current instanceof HTMLElement) {
        previousActiveRef.current.focus()
      }
    }
  }, [onClose])

  const content = (
    <div 
      ref={containerRef}
      role="dialog" 
      aria-modal="true" 
      aria-label="Navigation menu"
      onClick={(e) => {
        // Close when clicking backdrop (not content)
        if (e.target === e.currentTarget) onClose()
      }}
      style={{ 
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'var(--bg)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <Link to="/" onClick={onClose} aria-label={`${CONFIG.name} — home`} style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
          <span style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '18px', color: 'var(--green)' }}>Samuel</span>
          <span style={{ color: 'var(--text3)', fontWeight: 400, fontSize: '18px' }}>.dev</span>
        </Link>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <ThemeToggle />
          <button 
            type="button"
            onClick={onClose} 
            aria-label="Close menu"
            style={{ fontSize: '24px', color: 'var(--text)', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
          >
            ✕
          </button>
        </div>
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
              key={s.label} 
              href={s.url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={s.ariaLabel}
              style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase' }}
            >
              {s.label}
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

  return createPortal(content, document.body)
}
