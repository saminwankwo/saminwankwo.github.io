import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (e, path, hash) => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname !== path) {
      navigate(path + hash)
    } else {
      if (hash) {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo(0, 0)
      }
    }
  }

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '56px',
        zIndex: 100,
        background: 'rgba(10,12,15,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '18px' }} onClick={() => setMenuOpen(false)}>
          <span style={{ color: 'var(--green)' }}>Samuel</span>
          <span style={{ color: 'var(--text3)', fontWeight: 400 }}>.dev</span>
        </Link>

        {/* Desktop Nav Links */}
        <div style={{ display: 'none' }} className="nav-desktop">
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="/#skills" onClick={(e) => handleNavClick(e, '/', '#skills')} className="nav-link">Skills</a>
            <a href="/#experience" onClick={(e) => handleNavClick(e, '/', '#experience')} className="nav-link">Experience</a>
            <a href="/#projects" onClick={(e) => handleNavClick(e, '/', '#projects')} className="nav-link">Projects</a>
            <a href="/#freelance" onClick={(e) => handleNavClick(e, '/', '#freelance')} className="nav-link">Freelance</a>
            <a href="/#writing" onClick={(e) => handleNavClick(e, '/', '#writing')} className="nav-link">Writing</a>
            <NavLink to="/blog" className="nav-link" style={({isActive}) => isActive ? {color: 'var(--green)'} : {}}>Blog</NavLink>
            <a href="/#contact" onClick={(e) => handleNavClick(e, '/', '#contact')} className="nav-link">Contact</a>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginLeft: '2rem' }}>
            <a href="/Samuel_Nwankwo_Resume.pdf" download className="nav-btn-ghost">Resume ↓</a>
            <a href="mailto:nwankwosami@gmail.com" className="nav-btn-filled">Hire Me</a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button className="nav-hamburger" onClick={() => setMenuOpen(true)}>
          ☰
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--bg)',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem'
        }}>
          <button style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '10px'
          }} onClick={() => setMenuOpen(false)}>✕</button>
          
          <a href="/#skills" onClick={(e) => handleNavClick(e, '/', '#skills')} className="mobile-link">Skills</a>
          <a href="/#experience" onClick={(e) => handleNavClick(e, '/', '#experience')} className="mobile-link">Experience</a>
          <a href="/#projects" onClick={(e) => handleNavClick(e, '/', '#projects')} className="mobile-link">Projects</a>
          <a href="/#freelance" onClick={(e) => handleNavClick(e, '/', '#freelance')} className="mobile-link">Freelance</a>
          <a href="/#writing" onClick={(e) => handleNavClick(e, '/', '#writing')} className="mobile-link">Writing</a>
          <NavLink to="/blog" className="mobile-link" onClick={() => setMenuOpen(false)}>Blog</NavLink>
          <a href="/#contact" onClick={(e) => handleNavClick(e, '/', '#contact')} className="mobile-link">Contact</a>
        </div>
      )}

      {/* Inline styles for hover states and media queries that can't be easily done inline */}
      <style>{`
        .nav-desktop { display: flex; align-items: center; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
        }
        .nav-link {
          font-family: var(--mono); font-size: 12px; text-transform: uppercase;
          letter-spacing: 0.08em; color: var(--text2); transition: color 0.2s;
        }
        .nav-link:hover, .nav-link:active { color: var(--green); }
        .nav-btn-ghost {
          border: 1px solid var(--green); color: var(--green); background: transparent;
          padding: 6px 14px; font-size: 11px; text-transform: uppercase;
          letter-spacing: 0.1em; transition: 0.2s; border-radius: 2px;
        }
        .nav-btn-ghost:hover { background: var(--green); color: var(--bg); }
        .nav-btn-filled {
          background: var(--green); color: var(--bg); border: 1px solid var(--green);
          padding: 6px 14px; font-size: 11px; text-transform: uppercase;
          letter-spacing: 0.1em; transition: 0.2s; border-radius: 2px;
        }
        .nav-btn-filled:hover { background: var(--green-dim); border-color: var(--green-dim); }
        .nav-hamburger {
          background: none; border: 1px solid var(--border); color: var(--text);
          font-size: 12px; font-family: var(--mono); padding: 4px 8px; cursor: pointer;
        }
        .mobile-link {
          font-family: var(--mono); font-size: 18px; text-transform: uppercase;
          letter-spacing: 0.08em; color: var(--text); transition: color 0.2s;
        }
        .mobile-link:hover { color: var(--green); }
      `}</style>
    </>
  )
}
