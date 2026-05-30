import React, { useState, useEffect } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const onMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('a')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isHovering ? '40px' : '12px',
        height: isHovering ? '40px' : '12px',
        background: isHovering ? 'rgba(0, 255, 157, 0.1)' : 'var(--green)',
        border: isHovering ? '1px solid var(--green)' : 'none',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate(${position.x - (isHovering ? 20 : 6)}px, ${position.y - (isHovering ? 20 : 6)}px)`,
        transition: 'width 0.2s, height 0.2s, background 0.2s, border 0.2s',
        display: 'none' // Hidden by default, show via media query
      }}
      className="custom-cursor"
    >
      <style>{`
        @media (pointer: fine) {
          .custom-cursor { display: block !important; }
          * { cursor: none !important; }
        }
      `}</style>
    </div>
  )
}
