import React from 'react'

export default function NowStrip() {
  return (
    <div className="now-strip" style={{
      width: '100%',
      background: 'var(--green)',
      height: 'var(--strip-h)',
      position: 'sticky',
      top: 'var(--nav-h)',
      zIndex: 98,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px',
      fontFamily: 'var(--mono)',
      fontSize: '12px',
      overflow: 'hidden'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span 
          aria-hidden="true"
          style={{
            width: '8px',
            height: '8px',
            background: '#0a0c0f',
            borderRadius: '50%',
            animation: 'blink 1.2s steps(1) infinite'
          }}
        />
        <span style={{ fontWeight: 600, color: '#0a0c0f' }}>Currently available</span>
      </div>
      <span className="strip-right" style={{ color: 'var(--green-dk)' }}>
        · Open to full-time remote & contract · Node.js / PHP / Cloud
      </span>

      <style>{`
        @media (max-width: 480px) {
          .strip-right { display: none; }
        }
      `}</style>
    </div>
  )
}
