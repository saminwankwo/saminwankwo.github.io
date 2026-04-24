import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      background: 'var(--bg)',
      padding: '2rem'
    }}>
      <h1 style={{
        fontFamily: 'var(--sans)',
        fontWeight: 800,
        fontSize: '80px',
        color: 'var(--green)',
        lineHeight: 1
      }}>404</h1>
      <p style={{
        fontFamily: 'var(--sans)',
        fontWeight: 600,
        fontSize: '24px',
        color: 'var(--text)',
        margin: '1rem 0'
      }}>Page not found.</p>
      <p style={{
        fontSize: '13px',
        fontFamily: 'var(--mono)',
        color: 'var(--text2)',
        marginBottom: '2rem'
      }}>The page you are looking for doesn't exist or has been moved.</p>
      
      <Link to="/" style={{
        background: 'var(--green)',
        color: 'var(--bg)',
        border: '1px solid var(--green)',
        padding: '11px 26px',
        fontSize: '12px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontFamily: 'var(--mono)',
        borderRadius: '2px',
        transition: '0.2s'
      }} className="btn-404">
        ← Back home
      </Link>
      
      <style>{`
        .btn-404:hover { background: var(--green-dim); }
      `}</style>
    </div>
  )
}
