export default function NowStrip() {
  return (
    <div style={{
      width: '100%',
      background: 'var(--green)',
      height: '38px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      fontFamily: 'var(--mono)',
      fontSize: '12px',
      padding: '0 1rem',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }}>
      <div style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: '#0a0c0f',
        animation: 'blink 1.2s steps(1) infinite',
        flexShrink: 0
      }} />
      <span style={{ fontWeight: 600, color: '#0a0c0f' }}>
        Currently available
      </span>
      <span style={{ color: 'var(--green-dk)' }} className="hide-on-mobile">
        · Open to full-time remote roles & contract work · Node.js / PHP / Cloud
      </span>
      <style>{`
        @media (max-width: 600px) {
          .hide-on-mobile { display: none; }
        }
      `}</style>
    </div>
  )
}
