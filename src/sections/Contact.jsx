import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated submit
    setTimeout(() => setSubmitted(true), 500)
  }

  return (
    <section id="contact" style={{
      background: 'var(--bg2)',
      padding: '5rem 2rem',
      borderTop: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          
          <FadeIn>
            <div>
              <SectionHeader tag="Contact" title="Let's Build Something." />
              <p style={{
                fontSize: '13px',
                fontFamily: 'var(--mono)',
                color: 'var(--text2)',
                lineHeight: 1.8,
                marginBottom: '2.5rem'
              }}>
                I'm currently available for full-time roles and freelance contracts.
                Whether you have a question or just want to say hi, I'll try my best
                to get back to you!
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { icon: '✉', label: 'nwankwosami@gmail.com', href: 'mailto:nwankwosami@gmail.com' },
                  { icon: '', label: 'github.com/saminwankwo', href: 'https://github.com/saminwankwo' },
                  { icon: '💼', label: 'linkedin.com/in/saminwankwo', href: 'https://linkedin.com/in/saminwankwo' },
                  { icon: '𝕏', label: '@saminwankwo', href: 'https://twitter.com/saminwankwo' }
                ].map((link, i) => (
                  <a 
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.875rem 1rem',
                      border: '1px solid var(--border)',
                      borderRadius: '2px',
                      color: 'var(--text2)',
                      fontSize: '13px',
                      fontFamily: 'var(--mono)',
                      transition: '0.2s'
                    }}
                  >
                    <span style={{ fontSize: '14px', width: '20px', textAlign: 'center' }}>{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={150}>
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                    Name
                  </label>
                  <input required type="text" style={{
                    width: '100%', background: 'var(--bg3)', border: '1px solid var(--border)', padding: '12px 14px',
                    color: 'var(--text)', fontFamily: 'var(--mono)', fontSize: '13px', borderRadius: '2px', outline: 'none'
                  }} className="contact-input" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                    Email
                  </label>
                  <input required type="email" style={{
                    width: '100%', background: 'var(--bg3)', border: '1px solid var(--border)', padding: '12px 14px',
                    color: 'var(--text)', fontFamily: 'var(--mono)', fontSize: '13px', borderRadius: '2px', outline: 'none'
                  }} className="contact-input" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                    Message
                  </label>
                  <textarea required style={{
                    width: '100%', background: 'var(--bg3)', border: '1px solid var(--border)', padding: '12px 14px',
                    color: 'var(--text)', fontFamily: 'var(--mono)', fontSize: '13px', borderRadius: '2px', outline: 'none',
                    minHeight: '140px', resize: 'vertical'
                  }} className="contact-input" />
                </div>
                <button type="submit" style={{
                  width: '100%', padding: '14px', background: 'var(--green)', color: 'var(--bg)',
                  border: 'none', borderRadius: '2px', fontFamily: 'var(--mono)', fontSize: '12px',
                  fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
                  transition: '0.2s', marginTop: '0.5rem'
                }} className="submit-btn">
                  Send Message
                </button>
              </form>
            ) : (
              <div style={{
                padding: '2rem', background: 'rgba(0,255,157,0.05)', border: '1px solid rgba(0,255,157,0.3)',
                borderRadius: '2px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center'
              }}>
                <div style={{ fontSize: '30px', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '20px', color: 'var(--text)', marginBottom: '0.5rem' }}>
                  Message Received
                </h3>
                <p style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--text2)', lineHeight: 1.8 }}>
                  Thanks for reaching out! I'll get back to you as soon as possible.
                </p>
                <button onClick={() => setSubmitted(false)} style={{
                  background: 'none', border: '1px solid var(--green)', color: 'var(--green)',
                  padding: '8px 16px', fontSize: '11px', fontFamily: 'var(--mono)', textTransform: 'uppercase',
                  marginTop: '1.5rem', cursor: 'pointer'
                }}>Send Another</button>
              </div>
            )}
          </FadeIn>

        </div>
      </div>
      <style>{`
        .contact-link:hover { border-color: var(--green) !important; color: var(--green) !important; background: rgba(0,255,157,0.02); }
        .contact-input:focus { border-color: var(--green) !important; outline: 1px solid var(--green); }
        .submit-btn:hover { background: var(--green-dim) !important; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          #contact { padding: 4rem 1.25rem !important; }
        }
      `}</style>
    </section>
  )
}
