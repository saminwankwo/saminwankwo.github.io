import React, { useState } from 'react'

export default function Tag({ children, primary = false, size = 'md' }) {
  const [hover, setHover] = useState(false)

  const styles = {
    display: 'inline-block',
    fontFamily: 'var(--mono)',
    fontSize: size === 'sm' ? '10px' : '11px',
    padding: size === 'sm' ? '2px 8px' : '3px 10px',
    borderRadius: '2px',
    border: primary 
      ? '1px solid rgba(0, 255, 157, 0.6)' 
      : (hover ? '1px solid var(--green)' : '1px solid var(--border2)'),
    color: primary || hover ? 'var(--green)' : 'var(--text2)',
    background: primary ? 'rgba(0, 255, 157, 0.06)' : 'transparent',
    transition: 'all 0.15s ease',
    cursor: 'default'
  }

  return (
    <span 
      style={styles}
      onMouseEnter={() => !primary && setHover(true)}
      onMouseLeave={() => !primary && setHover(false)}
    >
      {children}
    </span>
  )
}
