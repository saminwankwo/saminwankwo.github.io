import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import CONFIG from '@config'
import { useScrollSpy } from '@hooks/useScrollSpy'
import { trackEvent } from '@lib/analytics'
import MobileMenu from './MobileMenu'

const NAV_LINKS = [
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Freelance', path: '/freelance' },
  { label: 'GitHub', path: '/github' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header role="banner" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--nav-h)',
      zIndex: 100,
      background: 'rgba(10, 12, 15, 0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      padding: '0 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
        <Link to="/" aria-label={`${CONFIG.name} — home`} style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
          <span style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '18px', color: 'var(--green)' }}>Samuel</span>
          <span style={{ color: 'var(--text3)', fontWeight: 400, fontSize: '18px' }}>.dev</span>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links-desktop">
          <ul style={{ listStyle: 'none', display: 'flex', gap: '1.25rem', alignItems: 'center', margin: 0, padding: 0 }}>
            {NAV_LINKS.map(link => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--mono)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: location.pathname.startsWith(link.path) ? 'var(--green)' : 'var(--text2)',
                    transition: 'color 0.2s'
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="nav-btns-desktop" style={{ display: 'flex', gap: '12px' }}>
          <a 
            href={CONFIG.resumePath} 
            download={CONFIG.resumeFilename}
            onClick={() => trackEvent('Resume Download')}
            className="nav-btn-outline"
          >
            Resume ↓
          </a>
          <a 
            href={`mailto:${CONFIG.email}`} 
            className="nav-btn-primary"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </nav>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}

      <style>{`
        .nav-btn-outline {
          border: 1px solid var(--green);
          color: var(--green);
          padding: 6px 14px;
          font-size: 11px;
          font-family: var(--mono);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: all 0.2s;
        }
        .nav-btn-outline:hover { background: var(--green); color: var(--bg); }

        .nav-btn-primary {
          background: var(--green);
          color: var(--bg);
          padding: 6px 14px;
          font-size: 11px;
          font-family: var(--mono);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: all 0.2s;
        }
        .nav-btn-primary:hover { background: var(--green-dim); }

        .nav-mobile-toggle {
          display: none;
          color: var(--text);
          font-size: 24px;
        }

        @media (max-width: 1024px) {
          .nav-links-desktop { display: none !important; }
          .nav-btns-desktop { display: none !important; }
          .nav-mobile-toggle { display: block; }
        }
      `}</style>
    </header>
  )
}
