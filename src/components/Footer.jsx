import { CONFIG } from '../data/config'

export default function Footer() {
  return (
    <footer 
      role="contentinfo"
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        padding: '2.5rem 2rem',
        textAlign: 'center',
        fontFamily: 'var(--mono)'
      }}
    >
      {/* Row 1 - Availability */}
      <div style={{ marginBottom: '1.5rem' }}>
        <span style={{
          background: 'rgba(0,255,157,0.1)',
          color: 'var(--green)',
          border: '1px solid rgba(0,255,157,0.3)',
          fontSize: '11px',
          padding: '4px 12px',
          borderRadius: '20px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ width: '6px', height: '6px', background: 'var(--green)', borderRadius: '50%', animation: 'blink 1.2s steps(1) infinite' }} />
          Available for hire
        </span>
      </div>

      {/* Row 2 - Social Links */}
      <nav 
        aria-label="Social media links"
        style={{ 
          display: 'flex', 
          gap: '1.5rem', 
          justifyContent: 'center', 
          marginBottom: '1.5rem',
          flexWrap: 'wrap'
        }}
      >
        {[
          { label: 'GitHub', href: `https://github.com/${CONFIG.github}` },
          { label: 'LinkedIn', href: `https://linkedin.com/in/${CONFIG.linkedin}` },
          { label: 'npm', href: `https://npmjs.com/~${CONFIG.npm}` },
          { label: 'Hashnode', href: `https://hashnode.com/@${CONFIG.hashnode}` },
          { label: 'YouTube', href: CONFIG.youtubeUrl }
        ].map(link => (
          <a 
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Samuel's ${link.label} profile`}
            className="footer-link"
            style={{
              fontSize: '11px',
              color: 'var(--text3)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: '0.2s'
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Row 3 - Copyright & Misc */}
      <div style={{ fontSize: '11px', color: 'var(--text3)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p>
          © {new Date().getFullYear()} {CONFIG.name} · {CONFIG.title} · {CONFIG.location}
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
          <a href="#" className="footer-link">Privacy</a>
          <span>·</span>
          <a href="/sitemap.xml" className="footer-link">Sitemap</a>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--green) !important; }
      `}</style>
    </footer>
  )
}
