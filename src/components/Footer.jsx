export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '1.5rem 2rem',
      textAlign: 'center',
      fontSize: '11px',
      color: 'var(--text3)',
      fontFamily: 'var(--mono)'
    }}>
      Built by <span style={{ color: 'var(--green)' }}>Samuel Nwankwo</span> · Backend Engineer · Port Harcourt, Nigeria · {new Date().getFullYear()}
    </footer>
  )
}
