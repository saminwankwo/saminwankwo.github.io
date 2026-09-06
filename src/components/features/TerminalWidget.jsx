import React, { useState, useEffect } from 'react'
import CONFIG from '@config'

export default function TerminalWidget() {
  const [text1, setText1] = useState('')
  const [showOut1, setShowOut1] = useState(0)
  const [started2, setStarted2] = useState(false)
  const [text2, setText2] = useState('')
  const [showOut2, setShowOut2] = useState(false)
  const [started3, setStarted3] = useState(false)
  const [text3, setText3] = useState('')
  const [showOut3, setShowOut3] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let isCancelled = false

    const typeCmd = (cmd, setter, callback) => {
      let i = 0
      setter('')
      const interval = setInterval(() => {
        if (isCancelled) return clearInterval(interval)
        setter(cmd.slice(0, i + 1))
        i++
        if (i >= cmd.length) {
          clearInterval(interval)
          setTimeout(() => {
            if (!isCancelled && callback) callback()
          }, 400)
        }
      }, 50)
    }

    typeCmd('node --info samuel.json', setText1, () => {
      let line = 0
      const jsonInt = setInterval(() => {
        if (isCancelled) return clearInterval(jsonInt)
        line++
        setShowOut1(line)
        if (line >= 5) {
          clearInterval(jsonInt)
          setTimeout(() => {
            if (isCancelled) return
            setStarted2(true)
            typeCmd('git log --oneline', setText2, () => {
              setTimeout(() => {
                if (isCancelled) return
                setShowOut2(true)
                setTimeout(() => {
                  if (isCancelled) return
                  setStarted3(true)
                  typeCmd('cat available.json', setText3, () => {
                    setTimeout(() => {
                      if (isCancelled) return
                      setShowOut3(true)
                      setTimeout(() => {
                        if (!isCancelled) setDone(true)
                      }, 400)
                    }, 300)
                  })
                }, 1000)
              }, 800)
            })
          }, 1000)
        }
      }, 400) // slowly show lines
    })

    return () => { isCancelled = true }
  }, [])

  const Blinker = () => (
    <span className="animate-blink" style={{ display: 'inline-block', width: '7px', height: '13px', background: 'var(--green)', marginLeft: '4px', verticalAlign: 'middle' }} />
  )

  return (
    <div 
      className="hero-terminal" 
      aria-label="Terminal showing developer info" 
      aria-hidden="true"
      style={{
        width: '400px',
        maxWidth: '90vw',
        flexShrink: 0,
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        fontFamily: 'var(--mono)',
        marginLeft: '0.1rem',
        transform: showOut1 > 0 ? 'translateX(60px)' : 'none',
        transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div style={{
        background: 'var(--bg3)',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        borderBottom: '1px solid var(--border)'
      }}>
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28ca41' }} />
        <span style={{ fontSize: '11px', color: 'var(--text3)', marginLeft: 'auto' }}>samuel@dev ~ portfolio</span>
      </div>

      <div style={{ padding: '16px', fontSize: '12px', lineHeight: 2.1 }}>
        <div>
          <span style={{ color: 'var(--green)' }}>› </span>
          <span>{text1}</span>
          {showOut1 === 0 && !started2 && <Blinker />}
        </div>

        {showOut1 > 0 && (
          <div style={{ marginBottom: '12px' }}>
            {showOut1 >= 1 && <div><span style={{ color: 'var(--amber)' }}>name:</span> <span style={{ color: 'var(--blue)' }}>"{CONFIG.fullName}"</span></div>}
            {showOut1 >= 2 && <div><span style={{ color: 'var(--amber)' }}>role:</span> <span style={{ color: 'var(--blue)' }}>"{CONFIG.title}"</span></div>}
            {/* {showOut1 >= 3 && <div><span style={{ color: 'var(--amber)' }}>location:</span> <span style={{ color: 'var(--blue)' }}>"{CONFIG.location}"</span></div>} */}
            {showOut1 >= 4 && <div><span style={{ color: 'var(--amber)' }}>stack:</span> <span style={{ color: 'var(--blue)' }}>["Expressjs","Laravel","AWS"]</span></div>}
            {showOut1 >= 5 && <div><span style={{ color: 'var(--amber)' }}>available:</span> <span style={{ color: 'var(--green)' }}>true</span></div>}
          </div>
        )}

        {started2 && (
          <div>
            <span style={{ color: 'var(--green)' }}>› </span>
            <span>{text2}</span>
            {!showOut2 && !started3 && <Blinker />}
            {showOut2 && (
              <>
                <div style={{ color: 'var(--green)' }}>✓ 200+ npm installs (auth-sdk)</div>
                <div style={{ color: 'var(--green)' }}>✓ 99.7% uptime prediction-api</div>
                <div style={{ color: 'var(--green)' }}>✓ 50+ tenants on SaaS platform</div>
              </>
            )}
          </div>
        )}

        {started3 && (
          <div style={{ marginTop: '12px' }}>
            <span style={{ color: 'var(--green)' }}>› </span>
            <span>{text3}</span>
            {!showOut3 && !done && <Blinker />}
            {showOut3 && (
              <>
                <div style={{ color: 'var(--blue)' }}>{`{ "status": "open",`}</div>
                <div style={{ color: 'var(--blue)', paddingLeft: '12px' }}>{`"type": "remote",`}</div>
                <div style={{ color: 'var(--blue)', paddingLeft: '12px' }}>{`"notice": "immediate" }`}</div>
              </>
            )}
          </div>
        )}

        {done && (
          <div style={{ marginTop: '12px' }}>
            <span style={{ color: 'var(--green)' }}>› </span>
            <Blinker />
          </div>
        )}
      </div>
    </div>
  )
}
