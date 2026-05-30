import React, { useState, useEffect, useRef } from 'react'
import CONFIG from '@config'

export default function TerminalWidget() {
  const [history, setHistory] = useState([])
  const [input, setInput] = useState('')
  const [isInteractive, setIsInteractive] = useState(false)
  const [booting, setBooting] = useState(true)
  const [bootText, setBootText] = useState('')
  const terminalEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [history, bootText, booting])

  useEffect(() => {
    if (!booting && inputRef.current) {
      inputRef.current.focus()
    }
  }, [booting])

  useEffect(() => {
    let isCancelled = false
    const bootSequence = async () => {
      const lines = [
        { text: 'Initializing portfolio kernel...', delay: 400 },
        { text: 'Loading backend modules...', delay: 300 },
        { text: 'Establishing secure connection to samuel.dev...', delay: 500 },
        { text: 'Node.js v20.10.0 detected.', delay: 200 },
        { text: 'Type "help" to see available commands.', delay: 400 },
      ]

      for (const line of lines) {
        if (isCancelled) return
        setBootText(prev => prev + line.text + '\n')
        await new Promise(r => setTimeout(r, line.delay))
      }
      
      if (!isCancelled) {
        setBooting(false)
        setIsInteractive(true)
      }
    }

    bootSequence()
    return () => { isCancelled = true }
  }, [])

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase()
      let output = ''

      switch (cmd) {
        case 'help':
          output = 'Available commands:\n  whoami   - Show short bio\n  ls       - List projects\n  exp      - Show recent experience\n  contact  - Get contact info\n  clear    - Clear terminal\n  stats    - View system metrics'
          break
        case 'whoami':
          output = `Name: ${CONFIG.fullName}\nRole: ${CONFIG.title}\nBio: ${CONFIG.tagline}`
          break
        case 'ls':
          output = 'Featured Projects:\n- Auth SDK for Express\n- Multitenant SaaS\n- E-Commerce API\n- AI Intrusion Detection'
          break
        case 'exp':
          output = 'Recent Roles:\n- Sweeftly (Backend Engineer)\n- Olotu Square (Backend Engineer)\n- Webxiel (Laravel Developer)'
          break
        case 'contact':
          output = `Email: ${CONFIG.email}\nGitHub: ${CONFIG.socials.github}\nLinkedIn: ${CONFIG.socials.linkedin}`
          break
        case 'clear':
          setHistory([])
          setInput('')
          return
        case 'stats':
          output = 'Metrics:\n- $1M+ Payments Processed\n- 99.9% System Uptime\n- 200+ App Installs'
          break
        case '':
          output = ''
          break
        default:
          output = `command not found: ${cmd}. Type "help" for a list of commands.`
      }

      setHistory([...history, { cmd: input, output }])
      setInput('')
    }
  }

  const Blinker = () => (
    <span className="animate-blink" style={{ display: 'inline-block', width: '7px', height: '13px', background: 'var(--green)', marginLeft: '4px', verticalAlign: 'middle' }} />
  )

  return (
    <div 
      className="hero-terminal" 
      aria-label="Interactive Terminal"
      onClick={() => inputRef.current?.focus()}
      style={{
        width: '450px',
        height: '320px',
        flexShrink: 0,
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        fontFamily: 'var(--mono)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
        cursor: 'text'
      }}
    >
      <div style={{
        background: 'var(--bg3)',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        borderBottom: '1px solid var(--border)',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28ca41' }} />
        </div>
        <span style={{ fontSize: '11px', color: 'var(--text3)', marginLeft: 'auto' }}>samuel@dev — zsh</span>
      </div>

      <div style={{ 
        padding: '16px', 
        fontSize: '12px', 
        lineHeight: 1.6, 
        overflowY: 'auto',
        flex: 1,
        scrollbarWidth: 'none'
      }}>
        <pre style={{ whiteSpace: 'pre-wrap', color: 'var(--text2)', margin: 0 }}>
          {bootText}
        </pre>

        {history.map((item, i) => (
          <div key={i} style={{ marginTop: '8px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ color: 'var(--green)' }}>›</span>
              <span style={{ color: 'var(--text)' }}>{item.cmd}</span>
            </div>
            {item.output && (
              <pre style={{ 
                whiteSpace: 'pre-wrap', 
                color: 'var(--blue)', 
                marginTop: '4px',
                paddingLeft: '16px',
                margin: 0
              }}>
                {item.output}
              </pre>
            )}
          </div>
        ))}

        {!booting && (
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px', alignItems: 'center' }}>
            <span style={{ color: 'var(--green)' }}>›</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text)',
                fontFamily: 'var(--mono)',
                fontSize: '12px',
                outline: 'none',
                width: '100%',
                padding: 0
              }}
              autoFocus
            />
          </div>
        )}
        <div ref={terminalEndRef} />
      </div>
    </div>
  )
}
