import React from 'react'

export default function Toast({ message, visible, position = 'bottom-center' }) {
  const styles = {
    position: 'fixed',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'var(--bg3)',
    border: '1px solid var(--border2)',
    color: 'var(--text)',
    padding: '8px 16px',
    fontSize: 12,
    fontFamily: 'var(--mono)',
    zIndex: 300,
    opacity: visible ? 1 : 0,
    pointerEvents: visible ? 'auto' : 'none',
    transition: 'opacity 0.2s ease',
    animation: visible ? 'toastIn 0.2s ease' : 'none'
  }

  return (
    <div role="status" aria-live="polite" aria-atomic="true" style={styles}>
      {message}
    </div>
  )
}
