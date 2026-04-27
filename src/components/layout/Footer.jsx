import React from 'react'
import { Link } from 'react-router-dom'
import CONFIG from '@config'

export default function Footer() {
  return (
    <footer role="contentinfo" aria-label="Site footer" style={{ 
      background: 'var(--bg)', 
      borderTop: '1px solid var(--border)', 
      padding: '2.5rem 2rem 2rem',
      textAlign: 'center'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
        
        {/* Row 1: Availability */}
        {CONFIG.available && (
          <span style={{
            background: 'rgba(0, 255, 157, 0.1)',
            color: 'var(--green)',
            border: '1px solid rgba(0, 255, 157, 0.3)',
            fontSize: '11px',
            fontFamily: 'var(--mono)',
            padding: '4px 12px',
            borderRadius: '20px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)' }} />
            Available for hire
          </span>
        )}

        {/* Row 2: Socials */}
        <nav aria-label="Social media links" style={{
          display: 'flex',
          gap: '1.25rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          fontSize: '11px',
          fontFamily: 'var(--mono)',
          color: 'var(--text3)'
        }}>
          {CONFIG.socials.map(s => (
            <a 
              key={s.label} 
              href={s.url} 
              aria-label={s.ariaLabel}
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Row 3: Copyright & Utility */}
        <div style={{
          fontSize: '11px',
          fontFamily: 'var(--mono)',
          color: 'var(--text3)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <p>© 2025 {CONFIG.name} · {CONFIG.title} · {CONFIG.location}</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <Link to="/blog" className="footer-link">Blog</Link>
            <span aria-hidden>·</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener" className="footer-link">Sitemap</a>
            <span aria-hidden>·</span>
            <a href={CONFIG.resumePath} download={CONFIG.resumeFilename} className="footer-link">Resume</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link { transition: color 0.2s; }
        .footer-link:hover { color: var(--green); }
      `}</style>
    </footer>
  )
}
