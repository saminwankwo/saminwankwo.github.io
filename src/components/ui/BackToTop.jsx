import React, { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 90,
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        color: 'var(--green)',
        width: '40px',
        height: '40px',
        display: visible ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)'
      }}
      className="back-to-top"
    >
      ↑
      <style>{`
        .back-to-top:hover {
          background: var(--green);
          color: var(--bg);
          border-color: var(--green);
          box-shadow: 0 0 15px rgba(0, 255, 157, 0.3);
        }
      `}</style>
    </button>
  )
}
