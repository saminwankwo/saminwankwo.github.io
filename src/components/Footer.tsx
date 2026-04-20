export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border)',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontSize: '11px',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-jetbrains), monospace',
          letterSpacing: '0.5px',
        }}
      >
        Built by{' '}
        <span style={{ color: 'var(--accent-green)' }}>Samuel Nwankwo</span>
        {' '}· Backend Engineer · Port Harcourt, Nigeria · {year}
      </p>
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {[
          { href: 'https://github.com/saminwankwo',        label: 'GitHub'   },
          { href: 'https://linkedin.com/in/saminwankwo',   label: 'LinkedIn' },
          { href: 'https://twitter.com/saminwankwo',       label: 'Twitter'  },
          { href: 'https://hashnode.com/@saminwankwo',     label: 'Hashnode' },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '11px',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontFamily: 'var(--font-jetbrains), monospace',
              letterSpacing: '1px',
              transition: 'color .2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-green)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
