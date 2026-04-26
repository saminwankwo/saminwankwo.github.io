import React from 'react'
import { Link } from 'react-router-dom'
import { CONFIG } from '../data/config'

export default function Footer() {
  const socialLinks = [
    { label: 'GitHub', url: CONFIG.githubUrl },
    { label: 'LinkedIn', url: CONFIG.linkedinUrl },
    { label: 'Twitter / X', url: CONFIG.twitterUrl },
    { label: 'Instagram', url: CONFIG.instagramUrl },
    { label: 'Telegram', url: CONFIG.telegramUrl },
    { label: 'npm', url: CONFIG.npmUrl },
    { label: 'YouTube', url: CONFIG.youtubeUrl },
    { label: 'Hashnode', url: CONFIG.hashnodeUrl },
  ]

  return (
    <footer role="contentinfo" aria-label="Site footer" style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '2.5rem 2rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      {/* Row 1 — Availability */}
      <div style={{ marginBottom: '1.25rem' }}>
        <span style={{
          background: 'rgba(0, 255, 157, 0.1)',
          color: 'var(--green)',
          border: '1px solid rgba(0, 255, 157, 0.3)',
          fontSize: '11px',
          fontFamily: 'var(--mono)',
          padding: '4px 12px',
          borderRadius: '2px'
        }}>
          ● Available for hire
        </span>
      </div>

      {/* Row 2 — Social links */}
      <div style={{
        display: 'flex',
        gap: '1.25rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '1.25rem 0'
      }}>
        {socialLinks.map(link => (
          <a 
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow Samuel on ${link.label}`}
            style={{
              fontSize: '11px',
              fontFamily: 'var(--mono)',
              color: 'var(--text3)',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--green)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text3)'}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Row 3 — Copyright + utility links */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        fontSize: '11px',
        fontFamily: 'var(--mono)',
        color: 'var(--text3)'
      }}>
        <span>© 2025 Samuel Nwankwo · Backend Engineer · Port Harcourt, Nigeria</span>
        <span aria-hidden="true" style={{ color: 'var(--border2)' }}>·</span>
        <Link to="/blog" style={{ color: 'var(--text3)' }} className="footer-util">Blog</Link>
        <a href="/sitemap.xml" target="_blank" rel="noopener" style={{ color: 'var(--text3)' }} className="footer-util">Sitemap</a>
        <a href={CONFIG.resumePath} download style={{ color: 'var(--text3)' }} className="footer-util">Resume</a>
      </div>

      <style>{`
        .footer-util:hover {
          color: var(--green) !important;
        }
      `}</style>
    </footer>
  )
}
