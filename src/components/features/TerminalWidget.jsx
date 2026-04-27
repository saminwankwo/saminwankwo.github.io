import React, { useState, useEffect } from 'react'
import CONFIG from '@config'

export default function TerminalWidget() {
  const [typed, setTyped] = useState('')
  const [outputVisible, setOutputVisible] = useState(false)
  const command = 'node --info samuel.json'

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTyped(command.slice(0, i))
      i++
      if (i > command.length) {
        clearInterval(interval)
        setTimeout(() => setOutputVisible(true), 600)
      }
    }, 55)
    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      className="hero-terminal" 
      aria-label="Terminal showing developer info" 
      aria-hidden="true"
      style={{
        width: '400px',
        flexShrink: 0,
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        fontFamily: 'var(--mono)',
        marginLeft: '4rem',
        // We can add the shift logic here or in the section. 
        // V2 prompt says TerminalWidget is self-contained.
        transform: outputVisible ? 'translateX(60px)' : 'none',
        transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div style={{
        background: 'var(--bg3)',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        borderBottom: '1px solid var(--border)'
      }}>
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28ca41' }} />
        <span style={{ fontSize: '11px', color: 'var(--text3)', marginLeft: 'auto' }}>samuel@dev ~ portfolio</span>
      </div>

      <div style={{ padding: '16px', fontSize: '12px', lineHeight: 2.1 }}>
        <div>
          <span style={{ color: 'var(--green)' }}>› </span>
          <span>{typed}</span>
          {!outputVisible && <span className="animate-blink" style={{ display: 'inline-block', width: '7px', height: '13px', background: 'var(--green)', marginLeft: '4px', verticalAlign: 'middle' }} />}
        </div>

        {outputVisible && (
          <>
            <div style={{ marginBottom: '12px' }}>
              <div><span style={{ color: 'var(--amber)' }}>name:</span> <span style={{ color: 'var(--blue)' }}>"{CONFIG.fullName}"</span></div>
              <div><span style={{ color: 'var(--amber)' }}>role:</span> <span style={{ color: 'var(--blue)' }}>"{CONFIG.title}"</span></div>
              <div><span style={{ color: 'var(--amber)' }}>location:</span> <span style={{ color: 'var(--blue)' }}>"{CONFIG.location}"</span></div>
              <div><span style={{ color: 'var(--amber)' }}>stack:</span> <span style={{ color: 'var(--blue)' }}>["NestJS","Laravel","AWS"]</span></div>
              <div><span style={{ color: 'var(--amber)' }}>available:</span> <span style={{ color: 'var(--green)' }}>true</span></div>
            </div>

            <div>
              <span style={{ color: 'var(--green)' }}>› </span>
              <span>git log --oneline</span>
              <div style={{ color: 'var(--green)' }}>✓ 200+ npm installs (auth-sdk)</div>
              <div style={{ color: 'var(--green)' }}>✓ 99.7% uptime prediction-api</div>
              <div style={{ color: 'var(--green)' }}>✓ 50+ tenants on SaaS platform</div>
            </div>

            <div style={{ marginTop: '12px' }}>
              <span style={{ color: 'var(--green)' }}>› </span>
              <span>cat available.json</span>
              <div style={{ color: 'var(--blue)' }}>{`{ "status": "open",`}</div>
              <div style={{ color: 'var(--blue)', paddingLeft: '12px' }}>{`"type": "remote",`}</div>
              <div style={{ color: 'var(--blue)', paddingLeft: '12px' }}>{`"notice": "immediate" }`}</div>
            </div>

            <div style={{ marginTop: '12px' }}>
              <span style={{ color: 'var(--green)' }}>› </span>
              <span className="animate-blink" style={{ display: 'inline-block', width: '7px', height: '13px', background: 'var(--green)', marginLeft: '4px', verticalAlign: 'middle' }} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
