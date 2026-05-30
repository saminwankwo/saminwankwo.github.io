import React from 'react'

export default function NowStrip() {
  return (
    <div 
      role="status" 
      aria-label="Availability status"
      style={{ 
        background: 'var(--green)', 
        height: 'var(--strip-h)',
        position: 'sticky', 
        top: 'var(--nav-h)', 
        zIndex: 98,
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 12,
        fontFamily: 'var(--mono)', 
        fontSize: 12 
      }}
    >
      <span className="animate-blink" aria-hidden style={{ width: 8, height: 8, borderRadius: '50%', background: '#0a0c0f' }} />
      <strong style={{ color: '#0a0c0f' }}>Currently available</strong>
      <span className="now-strip-detail" style={{ color: 'var(--green-dk)' }}>
        · Open to full-time remote & contract · Node.js / PHP / Cloud
      </span>

      <style>{`
        @media (max-width: 480px) {
          .now-strip-detail { display: none; }
        }
      `}</style>
    </div>
  )
}
