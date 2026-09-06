import React, { useEffect, useRef } from 'react'

export default function Modal({ 
  children, 
  onClose, 
  ariaLabelledBy, 
  maxWidth = '540px',
  fullScreenOnMobile = true 
}) {
  const panelRef = useRef()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    
    // Focus trap
    const focusableElements = panelRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusableElements.length > 0) focusableElements[0].focus()

    const handleTab = (e) => {
      if (e.key !== 'Tab') return
      const first = focusableElements[0]
      const last = focusableElements[focusableElements.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', handleTab)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEsc)
      window.removeEventListener('keydown', handleTab)
    }
  }, [onClose])

  return (
    <div 
      className="modal-backdrop"
      onClick={onClose} 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 200,
        background: 'rgba(0,0,0,0.8)', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center', 
        padding: '2rem' 
      }}
    >
      <div 
        ref={panelRef}
        className="modal-panel"
        onClick={e => e.stopPropagation()}
        role="dialog" 
        aria-modal="true" 
        aria-labelledby={ariaLabelledBy}
        style={{ 
          background: 'var(--bg2)', 
          border: '1px solid var(--border2)',
          padding: '2rem', 
          maxWidth, 
          width: '100%', 
          maxHeight: '90vh', 
          overflowY: 'auto',
          position: 'relative' 
        }}
      >
        {children}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .modal-backdrop { padding: 0 !important; align-items: stretch !important; }
          .modal-panel {
            ${fullScreenOnMobile ? `
              position: fixed !important;
              inset: 0 !important;
              max-width: none !important;
              max-height: 100vh !important;
              width: 100vw !important;
              height: 100vh !important;
              border: none !important;
              border-radius: 0 !important;
              margin: 0 !important;
            ` : ''}
          }
        }
      `}</style>
    </div>
  )
}
