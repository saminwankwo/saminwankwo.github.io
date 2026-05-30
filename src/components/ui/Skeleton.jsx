import React from 'react'

export default function Skeleton({ 
  width = '100%', 
  height = '1rem', 
  count = 1, 
  gap = '0.5rem', 
  borderRadius = '2px' 
}) {
  const items = Array.from({ length: count })

  const style = {
    width,
    height,
    borderRadius
  }

  if (count > 1) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap }}>
        {items.map((_, i) => (
          <div key={i} className="skeleton" style={style} />
        ))}
      </div>
    )
  }

  return <div className="skeleton" style={style} />
}
