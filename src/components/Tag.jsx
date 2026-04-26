import React from 'react'

export default function Tag({ children, primary = false, size = 'md' }) {
  const isSm = size === 'sm';
  
  const styles = {
    fontSize: isSm ? '10px' : '11px',
    padding: isSm ? '2px 8px' : '3px 10px',
    borderRadius: '2px',
    fontFamily: 'var(--mono)',
    display: 'inline-block',
    border: primary ? '1px solid rgba(0, 255, 157, 0.6)' : '1px solid var(--border2)',
    color: primary ? 'var(--green)' : 'var(--text2)',
    background: primary ? 'rgba(0, 255, 157, 0.06)' : 'transparent',
    transition: 'all 0.2s'
  };

  return (
    <span 
      className={!primary ? 'tag-normal' : ''}
      style={styles}
    >
      {children}
      <style>{`
        .tag-normal:hover {
          border-color: var(--green) !important;
          color: var(--green) !important;
        }
      `}</style>
    </span>
  )
}
