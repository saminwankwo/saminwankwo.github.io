import React from 'react'

export default function Spinner({ size = 20, color = 'var(--green)' }) {
  const style = {
    width: size,
    height: size,
    borderRadius: '50%',
    border: '2px solid transparent',
    borderTop: `2px solid ${color}`,
    animation: 'spin 1s linear infinite'
  }

  return <div style={style} aria-label="Loading" role="status" />
}
