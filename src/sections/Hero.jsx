import { useEffect, useState } from 'react'

export default function Hero() {
  const [typedCommand, setTypedCommand] = useState('')
  const [typingComplete, setTypingComplete] = useState(false)
  const fullCommand = 'node --info samuel.json'
  
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTypedCommand(fullCommand.slice(0, index))
      index++
      if (index > fullCommand.length) {
        clearInterval(interval)
        setTypingComplete(true)
      }
    }, 55)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '80px 2rem 4rem',
      position: 'relative',
      overflow: 'hidden'
    }} className="hero-section">
      {/* Background Grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,255,157,0.03) 0px, rgba(0,255,157,0.03) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(0,255,157,0.03) 0px, rgba(0,255,157,0.03) 1px, transparent 1px, transparent 40px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      {/* Radial Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0,255,157,0.04), transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '960px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '4rem',
        position: 'relative',
        zIndex: 1
      }} className="hero-inner">
        
        {/* Left Content */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '12px', color: 'var(--text3)', display: 'flex', gap: '8px', marginBottom: '1rem', fontFamily: 'var(--mono)' }}>
            <span style={{ color: 'var(--green)' }}>$</span> whoami
          </div>
          <h1 style={{
            fontFamily: 'var(--sans)',
            fontWeight: 800,
            fontSize: 'clamp(46px, 8vw, 84px)',
            lineHeight: 1,
            letterSpacing: '-3px',
            marginBottom: '0.4rem'
          }} className="hero-name">
            <div style={{ color: 'var(--text)' }}>Samuel</div>
            <div style={{ color: 'var(--green)' }}>Nwankwo</div>
          </h1>
          <div style={{
            fontFamily: 'var(--sans)',
            fontSize: 'clamp(17px, 2.8vw, 24px)',
            color: 'var(--text2)',
            marginBottom: '1.75rem',
            letterSpacing: '-0.5px'
          }}>
            Backend Engineer — <span style={{ color: 'var(--blue)' }}>Node.js · PHP · Cloud</span>
          </div>
          <p style={{
            fontSize: '13px',
            color: 'var(--text2)',
            lineHeight: 1.9,
            maxWidth: '520px',
            marginBottom: '2.25rem',
            borderLeft: '2px solid var(--green)',
            paddingLeft: '1.25rem',
            fontFamily: 'var(--mono)'
          }} className="hero-summary">
            I design and build scalable backend systems — from RESTful APIs and
            event-driven microservices to multi-tenant SaaS platforms and
            payment-integrated commerce infrastructure. 7+ years shipping
            production software.
          </p>
          
          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '2.25rem' }} className="hero-stats">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '30px', color: 'var(--green)', lineHeight: 1 }}>7+</span>
              <span style={{ fontSize: '10px', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--mono)' }}>Years PHP/Laravel</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '30px', color: 'var(--green)', lineHeight: 1 }}>5+</span>
              <span style={{ fontSize: '10px', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--mono)' }}>Years Node.js</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '30px', color: 'var(--green)', lineHeight: 1 }}>$1M+</span>
              <span style={{ fontSize: '10px', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--mono)' }}>Payments Processed</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '30px', color: 'var(--green)', lineHeight: 1 }}>200+</span>
              <span style={{ fontSize: '10px', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--mono)' }}>Auth SDK Installs</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#experience" style={{
              background: 'var(--green)',
              color: 'var(--bg)',
              padding: '11px 26px',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontFamily: 'var(--mono)',
              border: '1px solid var(--green)',
              transition: '0.2s',
              borderRadius: '2px'
            }} className="hero-btn-filled">View Experience</a>
            <a href="#contact" style={{
              background: 'transparent',
              color: 'var(--text2)',
              padding: '11px 26px',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontFamily: 'var(--mono)',
              border: '1px solid var(--border2)',
              transition: '0.2s',
              borderRadius: '2px'
            }} className="hero-btn-ghost">Get In Touch</a>
          </div>
        </div>

        {/* Right Terminal */}
        <div style={{
          width: '370px',
          flexShrink: 0,
          background: 'var(--bg2)',
          border: '1px solid var(--border)'
        }} className="hero-terminal">
          <div style={{
            background: 'var(--bg3)',
            padding: '10px 16px',
            display: 'flex',
            gap: '8px',
            borderBottom: '1px solid var(--border)',
            alignItems: 'center'
          }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28ca41' }} />
            <div style={{ fontSize: '11px', color: 'var(--text3)', marginLeft: 'auto', fontFamily: 'var(--mono)' }}>samuel@dev ~ portfolio</div>
          </div>
          <div style={{ padding: '16px', fontSize: '12px', lineHeight: 2.1, fontFamily: 'var(--mono)' }}>
            <div>
              <span style={{ color: 'var(--green)' }}>›</span>{' '}
              <span style={{ color: 'var(--text)' }}>{typedCommand}</span>
              {!typingComplete && <span style={{
                display: 'inline-block', width: '7px', height: '13px', background: 'var(--green)',
                animation: 'blink 1s steps(1) infinite', verticalAlign: 'middle', marginLeft: '4px'
              }} />}
            </div>
            {typingComplete && (
              <div style={{ marginTop: '16px' }}>
                <div><span style={{ color: 'var(--amber)' }}>"name"</span>: <span style={{ color: 'var(--blue)' }}>"Samuel Nwankwo"</span>,</div>
                <div><span style={{ color: 'var(--amber)' }}>"role"</span>: <span style={{ color: 'var(--blue)' }}>"Backend Engineer"</span>,</div>
                <div><span style={{ color: 'var(--amber)' }}>"location"</span>: <span style={{ color: 'var(--blue)' }}>"Port Harcourt, NG"</span>,</div>
                <div><span style={{ color: 'var(--amber)' }}>"stack"</span>: [<span style={{ color: 'var(--blue)' }}>"Node.js"</span>, <span style={{ color: 'var(--blue)' }}>"PHP"</span>, <span style={{ color: 'var(--blue)' }}>"AWS"</span>],</div>
                <div><span style={{ color: 'var(--amber)' }}>"available"</span>: <span style={{ color: 'var(--green)' }}>true</span></div>
                <div style={{ marginTop: '16px' }}>
                  <span style={{ color: 'var(--green)' }}>✓</span> <span style={{ color: 'var(--text)' }}>System loaded successfully.</span>
                </div>
                <div style={{ marginTop: '16px' }}>
                  <span style={{ color: 'var(--green)' }}>›</span> <span style={{
                    display: 'inline-block', width: '7px', height: '13px', background: 'var(--green)',
                    animation: 'blink 1s steps(1) infinite', verticalAlign: 'middle', marginLeft: '4px'
                  }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .hero-btn-filled:hover { background: var(--green-dim) !important; }
        .hero-btn-ghost:hover { border-color: var(--green) !important; color: var(--green) !important; }
        @media (max-width: 1100px) {
          .hero-terminal { display: none !important; }
        }
        @media (max-width: 768px) {
          .hero-section { padding: 4rem 1.25rem !important; }
          .hero-inner { flex-direction: column !important; }
          .hero-stats { gap: 2rem !important; }
          .hero-summary { font-size: 12px !important; }
        }
        @media (max-width: 480px) {
          .hero-name { font-size: clamp(38px, 10vw, 60px) !important; }
          .hero-stats { flex-wrap: wrap !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
