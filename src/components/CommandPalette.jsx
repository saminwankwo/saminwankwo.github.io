import { useState, useEffect, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const NAV_ITEMS = [
  { id: 'home', title: 'Home', path: '/', type: 'page', icon: '🏠' },
  { id: 'blog', title: 'Blog', path: '/blog', type: 'page', icon: '📝' },
  { id: 'skills', title: 'Skills', path: '/', hash: '#skills', type: 'section', icon: '🛠️' },
  { id: 'experience', title: 'Experience', path: '/', hash: '#experience', type: 'section', icon: '💼' },
  { id: 'projects', title: 'Projects', path: '/', hash: '#projects', type: 'section', icon: '🚀' },
  { id: 'freelance', title: 'Freelance', path: '/', hash: '#freelance', type: 'section', icon: '🌍' },
  { id: 'writing', title: 'Writing', path: '/', hash: '#writing', type: 'section', icon: '✍️' },
  { id: 'contact', title: 'Contact', path: '/', hash: '#contact', type: 'section', icon: '📧' },
  { id: 'resume', title: 'Download Resume', path: '/Samuel_Nwankwo_Resume.pdf', type: 'external', icon: '📄' },
]

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const navigate = useNavigate()
  const inputRef = useRef(null)

  const filteredItems = NAV_ITEMS.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.type.toLowerCase().includes(search.toLowerCase())
  )

  const closePalette = useCallback(() => {
    setIsOpen(false)
    setSearch('')
    setSelectedIndex(0)
  }, [])

  const handleSelect = useCallback((item) => {
    closePalette()
    if (item.type === 'external') {
      window.open(item.path, '_blank')
    } else if (item.hash) {
      if (window.location.pathname !== item.path) {
        navigate(item.path + item.hash)
      } else {
        const el = document.querySelector(item.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(item.path)
    }
  }, [navigate, closePalette])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(prev => !prev)
      } else if (e.key === 'Escape') {
        closePalette()
      } else if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          setSelectedIndex(prev => (prev + 1) % filteredItems.length)
        } else if (e.key === 'ArrowUp') {
          e.preventDefault()
          setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length)
        } else if (e.key === 'Enter') {
          e.preventDefault()
          if (filteredItems[selectedIndex]) {
            handleSelect(filteredItems[selectedIndex])
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filteredItems, selectedIndex, handleSelect, closePalette])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  if (!isOpen) return (
    <button 
      onClick={() => setIsOpen(true)}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: 'var(--green)',
        color: 'var(--bg)',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 90,
        boxShadow: '0 4px 12px rgba(0, 255, 157, 0.3)',
        fontSize: '18px'
      }}
      title="Press CMD+K to search"
    >
      ⌘
    </button>
  )

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '15vh'
      }}
      onClick={closePalette}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '540px',
          background: 'var(--bg2)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
          overflow: 'hidden'
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ padding: '1rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ color: 'var(--text3)', fontSize: '14px' }}>🔍</span>
          <input 
            ref={inputRef}
            type="text"
            placeholder="Search for pages or sections..."
            value={search}
            onChange={e => {
              setSearch(e.target.value)
              setSelectedIndex(0)
            }}
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              color: 'var(--text)',
              fontFamily: 'var(--mono)',
              fontSize: '14px'
            }}
          />
          <span style={{ fontSize: '10px', color: 'var(--text3)', fontFamily: 'var(--mono)', border: '1px solid var(--border)', padding: '2px 6px', borderRadius: '4px' }}>
            ESC
          </span>
        </div>

        <div style={{ maxHeight: '360px', overflowY: 'auto', padding: '0.5rem' }}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setSelectedIndex(index)}
                style={{
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  background: index === selectedIndex ? 'var(--bg3)' : 'transparent',
                  transition: '0.15s'
                }}
              >
                <span style={{ fontSize: '16px' }}>{item.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', color: index === selectedIndex ? 'var(--green)' : 'var(--text)', fontFamily: 'var(--sans)', fontWeight: 600 }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '10px', color: 'var(--text3)', fontFamily: 'var(--mono)', textTransform: 'uppercase' }}>
                    {item.type} {item.hash ? `· ${item.hash}` : ''}
                  </div>
                </div>
                {index === selectedIndex && (
                  <span style={{ fontSize: '11px', color: 'var(--text3)', fontFamily: 'var(--mono)' }}>ENTER ↵</span>
                )}
              </div>
            ))
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text3)', fontSize: '12px', fontFamily: 'var(--mono)' }}>
              No results found for "{search}"
            </div>
          )}
        </div>

        <div style={{ padding: '0.75rem 1rem', background: 'var(--bg3)', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <span style={{ fontSize: '10px', color: 'var(--text3)', fontFamily: 'var(--mono)', border: '1px solid var(--border)', padding: '2px 4px', borderRadius: '4px' }}>↑↓</span>
              <span style={{ fontSize: '10px', color: 'var(--text3)', fontFamily: 'var(--mono)' }}>Navigate</span>
            </div>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <span style={{ fontSize: '10px', color: 'var(--text3)', fontFamily: 'var(--mono)', border: '1px solid var(--border)', padding: '2px 4px', borderRadius: '4px' }}>↵</span>
              <span style={{ fontSize: '10px', color: 'var(--text3)', fontFamily: 'var(--mono)' }}>Select</span>
            </div>
          </div>
          <div style={{ fontSize: '10px', color: 'var(--text3)', fontFamily: 'var(--mono)' }}>
            Quick Navigation
          </div>
        </div>
      </div>
    </div>
  )
}
