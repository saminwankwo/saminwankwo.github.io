import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { CONFIG } from '../data/config'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    const handleEsc = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const handleHashClick = (e, id) => {
    e.preventDefault()
    if (location.pathname === '/') {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
    setMenuOpen(false)
  }

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
    <header style={{
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
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
        <Link to="/" aria-label="Samuel Nwankwo — home" style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
          <span style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '18px', color: 'var(--green)' }}>Samuel</span>
          <span style={{ color: 'var(--text3)', fontWeight: 400, fontSize: '18px' }}>.dev</span>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '1.25rem' }}>
            {navLinks.map(link => (
              <li key={link.id}>
                <a 
                  href={`/#${link.id}`}
                  onClick={(e) => handleHashClick(e, link.id)}
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--mono)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text2)',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--green)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text2)'}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <NavLink 
                to="/blog"
                style={({ isActive }) => ({
                  fontSize: '11px',
                  fontFamily: 'var(--mono)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: isActive ? 'var(--green)' : 'var(--text2)',
                  transition: 'color 0.2s'
                })}
              >
                Blog
              </NavLink>
            </li>
          </ul>

          <div style={{ display: 'flex', gap: '8px', marginLeft: '1.5rem' }}>
            <a 
              href={CONFIG.resumePath} 
              download="Samuel_Nwankwo_Resume.pdf"
              aria-label="Download Samuel Nwankwo's resume PDF"
              className="nav-btn-outline"
            >
              Resume ↓
            </a>
            <a 
              href={`mailto:${CONFIG.email}`} 
              aria-label="Send email to hire Samuel"
              className="nav-btn-primary"
            >
              Hire Me
            </a>
          </div>
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

      {/* Mobile Overlay */}
      {menuOpen && (
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
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem'
          }}
        >
          <button 
            onClick={() => setMenuOpen(false)}
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
                  onClick={(e) => handleHashClick(e, link.id)}
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '200px' }}>
            <a 
              href={CONFIG.resumePath} 
              download="Samuel_Nwankwo_Resume.pdf"
              className="nav-btn-outline"
              style={{ textAlign: 'center', display: 'block' }}
            >
              Resume ↓
            </a>
            <a 
              href={`mailto:${CONFIG.email}`} 
              className="nav-btn-primary"
              style={{ textAlign: 'center', display: 'block' }}
            >
              Hire Me
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href={CONFIG.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text3)' }}>GitHub</a>
            <a href={CONFIG.linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text3)' }}>LinkedIn</a>
          </div>
        </div>
      )}

      <style>{`
        .nav-btn-outline {
          border: 1px solid var(--green);
          color: var(--green);
          background: transparent;
          padding: 6px 14px;
          font-size: 11px;
          font-family: var(--mono);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: all 0.2s;
        }
        .nav-btn-outline:hover {
          background: var(--green);
          color: var(--bg);
        }
        .nav-btn-primary {
          background: var(--green);
          color: var(--bg);
          border: 1px solid var(--green);
          padding: 6px 14px;
          font-size: 11px;
          font-family: var(--mono);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: all 0.2s;
        }
        .nav-btn-primary:hover {
          background: var(--green-dim);
          border-color: var(--green-dim);
        }
        .nav-mobile-toggle {
          display: none;
          border: 1px solid var(--border);
          color: var(--text);
          padding: 6px 10px;
          font-size: 12px;
          font-family: var(--mono);
        }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-mobile-toggle { display: block; }
        }
      `}</style>
    </header>
  )
}
