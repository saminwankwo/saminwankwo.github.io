import React, { useState, useEffect } from 'react'
import { CONFIG } from '../data/config'

export default function Hero() {
  const [stage, setStage] = useState(0)
  const [text, setText] = useState('')
  const [showInfo, setShowInfo] = useState(false)
  const [showLog, setShowLog] = useState([false, false, false])
  const [showAvail, setShowAvail] = useState(false)

  const commands = [
    'node --info samuel.json',
    'git log --oneline',
    'cat available.json'
  ]

  useEffect(() => {
    let currentText = ''
    let charIndex = 0
    let currentCommand = ''

    const type = (cmdIndex, callback) => {
      currentCommand = commands[cmdIndex]
      charIndex = 0
      const interval = setInterval(() => {
        setText(currentCommand.slice(0, charIndex))
        charIndex++
        if (charIndex > currentCommand.length) {
          clearInterval(interval)
          setTimeout(callback, 600)
        }
      }, 75)
    }

    if (stage === 0) {
      type(0, () => {
        setShowInfo(true)
        setStage(1)
      })
    } else if (stage === 1) {
      setTimeout(() => setStage(2), 500)
    } else if (stage === 2) {
      type(1, () => {
        setStage(3)
      })
    } else if (stage === 3) {
      // Sequential log items
      setTimeout(() => setShowLog([true, false, false]), 400)
      setTimeout(() => setShowLog([true, true, false]), 800)
      setTimeout(() => {
        setShowLog([true, true, true])
        setStage(4)
      }, 1200)
    } else if (stage === 4) {
      setTimeout(() => setStage(5), 500)
    } else if (stage === 5) {
      type(2, () => {
        setShowAvail(true)
        setStage(6)
      })
    }
  }, [stage])

  return (
    <section id="hero" aria-label="Introduction" role="banner" style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 'calc(var(--nav-h) + var(--strip-h) + 2rem) 2rem 4rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative bg */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 157, 0.03) 0%, transparent 70%), linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        opacity: 0.4,
        zIndex: -1
      }} />

      <div style={{
        maxWidth: 'var(--max-w)',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: '4rem',
        justifyContent: 'space-between'
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '12px', display: 'flex', gap: '8px', color: 'var(--text3)', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--green)' }} aria-hidden="true">$</span>
            <span>whoami</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--sans)',
            fontWeight: 800,
            fontSize: 'clamp(46px, 8vw, 84px)',
            lineHeight: 1,
            letterSpacing: '-3px',
            marginBottom: '1.5rem'
          }}>
            <span style={{ color: 'var(--text)' }}>Samuel</span>
            <br />
            <span style={{ color: 'var(--green)' }}>Nwankwo</span>
          </h1>

          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: 'clamp(17px, 2.8vw, 24px)',
            color: 'var(--text2)',
            letterSpacing: '-0.5px',
            marginBottom: '1.5rem'
          }}>
            Backend Engineer — <span style={{ color: 'var(--blue)' }}>Node.js · PHP · Cloud</span>
          </p>

          <p style={{
            fontSize: '13px',
            color: 'var(--text2)',
            lineHeight: 1.9,
            maxWidth: '520px',
            borderLeft: '2px solid var(--green)',
            paddingLeft: '1.25rem',
            marginBottom: '2.5rem'
          }}>
            {CONFIG.tagline} Focused on high-availability systems, payment integrations, and microservices architecture.
          </p>

          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '30px', color: 'var(--green)' }}>7+</div>
              <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years PHP/Laravel</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '30px', color: 'var(--green)' }}>5+</div>
              <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years Node.js</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '30px', color: 'var(--green)' }}>$1M+</div>
              <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Payments Processed</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a 
              href="#experience"
              style={{
                background: 'var(--green)',
                color: 'var(--bg)',
                padding: '11px 26px',
                fontSize: '12px',
                fontFamily: 'var(--mono)',
                textTransform: 'uppercase',
                fontWeight: 600,
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = 'var(--green-dim)'}
              onMouseLeave={(e) => e.target.style.background = 'var(--green)'}
            >
              View Experience
            </a>
            <a 
              href="#contact"
              style={{
                border: '1px solid var(--border2)',
                color: 'var(--text2)',
                padding: '11px 26px',
                fontSize: '12px',
                fontFamily: 'var(--mono)',
                textTransform: 'uppercase',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--green)'
                e.target.style.color = 'var(--green)'
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--border2)'
                e.target.style.color = 'var(--text2)'
              }}
            >
              Get In Touch
            </a>
          </div>

          <a 
            href={CONFIG.resumePath} 
            download
            style={{
              display: 'block',
              marginTop: '1.25rem',
              fontSize: '12px',
              fontFamily: 'var(--mono)',
              color: 'var(--text3)',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--green)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text3)'}
          >
            ↓ Download Resume (PDF)
          </a>
        </div>

        <div className="hero-terminal" aria-hidden="true" style={{
          width: '400px',
          flexShrink: 0,
          background: 'var(--bg2)',
          border: '1px solid var(--border)',
          fontFamily: 'var(--mono)',
          marginLeft: '4rem',
          transform: stage === 6 ? 'translateX(40px)' : 'none',
          transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>

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
            {/* Command 1 */}
            <div>
              <span style={{ color: 'var(--green)' }}>› </span>
              <span>{stage >= 2 ? commands[0] : (stage === 0 ? text : '')}</span>
              {stage === 0 && <span className="cursor" />}
            </div>

            {showInfo && (
              <div style={{ marginBottom: '12px' }}>
                <div><span style={{ color: 'var(--amber)' }}>name:</span> <span style={{ color: 'var(--blue)' }}>"{CONFIG.fullName}"</span></div>
                <div><span style={{ color: 'var(--amber)' }}>role:</span> <span style={{ color: 'var(--blue)' }}>"{CONFIG.title}"</span></div>
                <div><span style={{ color: 'var(--amber)' }}>location:</span> <span style={{ color: 'var(--blue)' }}>"{CONFIG.location}, {CONFIG.country}"</span></div>
                <div><span style={{ color: 'var(--amber)' }}>stack:</span> <span style={{ color: 'var(--blue)' }}>["Express.js","Laravel","AWS"]</span></div>
                <div><span style={{ color: 'var(--amber)' }}>available:</span> <span style={{ color: 'var(--green)' }}>true</span></div>
              </div>
            )}

            {/* Command 2 */}
            {(stage >= 2) && (
              <div>
                <span style={{ color: 'var(--green)' }}>› </span>
                <span>{stage >= 4 ? commands[1] : (stage === 2 ? text : '')}</span>
                {stage === 2 && <span className="cursor" />}
              </div>
            )}

            {stage >= 3 && (
              <div style={{ marginBottom: '12px' }}>
                {showLog[0] && <div style={{ color: 'var(--green)' }}>✓ 200+ npm installs (auth-sdk)</div>}
                {showLog[1] && <div style={{ color: 'var(--green)' }}>✓ 99.7% uptime prediction-api</div>}
                {showLog[2] && <div style={{ color: 'var(--green)' }}>✓ 50+ tenants on SaaS platform</div>}
              </div>
            )}

            {/* Command 3 */}
            {(stage >= 4) && (
              <div>
                <span style={{ color: 'var(--green)' }}>› </span>
                <span>{stage >= 6 ? commands[2] : (stage === 5 ? text : '')}</span>
                {stage === 5 && <span className="cursor" />}
              </div>
            )}

            {showAvail && (
              <div>
                <div style={{ color: 'var(--blue)' }}>{`{ "status": "open",`}</div>
                <div style={{ color: 'var(--blue)', paddingLeft: '12px' }}>{`"type": "remote",`}</div>
                <div style={{ color: 'var(--blue)', paddingLeft: '12px' }}>{`"notice": "immediate" }`}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .cursor {
          display: inline-block;
          width: 7px;
          height: 13px;
          background: var(--green);
          margin-left: 4px;
          vertical-align: middle;
          animation: blink 1s steps(1) infinite;
        }
        @media (max-width: 1250px) {
          .hero-terminal { width: 340px !important; margin-left: 2rem !important; }
        }
        @media (max-width: 1150px) {
          .hero-terminal { display: none !important; }
        }

        @media (max-width: 768px) {
          #hero > div { gap: 2rem; }
        }
      `}</style>
    </section>
  )
}

