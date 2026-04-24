import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import { CONFIG } from '../data/config'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(CONFIG.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch(`https://formspree.io/f/${CONFIG.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        throw new Error('Failed to send message.')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" aria-label="Contact" style={{ background: 'var(--bg2)', padding: '5rem 2rem', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
          
          <FadeIn>
            <div>
              <SectionHeader tag="Contact" title="Let's Build Something." />
              <p style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--text2)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                {CONFIG.workPreference}. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                {[
                  { icon: '✉', label: CONFIG.email, href: `mailto:${CONFIG.email}`, copyable: true },
                  { icon: '', label: `github.com/${CONFIG.github}`, href: `https://github.com/${CONFIG.github}` },
                  { icon: '💼', label: `linkedin.com/in/${CONFIG.linkedin}`, href: `https://linkedin.com/in/${CONFIG.linkedin}` },
                  { icon: '𝕏', label: CONFIG.twitterHandle, href: `https://twitter.com/${CONFIG.github}` }
                ].map((link, i) => (
                  <a 
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={link.copyable ? handleCopyEmail : undefined}
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
                      transition: '0.2s',
                      position: 'relative'
                    }}
                  >
                    <span style={{ fontSize: '14px', width: '20px', textAlign: 'center' }}>{link.icon}</span>
                    <span>{link.label}</span>
                    {link.copyable && copied && (
                      <span style={{ position: 'absolute', right: '1rem', fontSize: '10px', color: 'var(--green)', fontFamily: 'var(--mono)' }}>Copied!</span>
                    )}
                  </a>
                ))}
              </div>

              {/* Availability Detail Card */}
              <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', padding: '1.25rem', borderRadius: '4px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { label: 'Timezone', value: `${CONFIG.timezone} · Overlap with EU & US East` },
                    { label: 'Available from', value: CONFIG.availableFrom },
                    { label: 'Work type', value: 'Remote · Contract · Full-time' },
                    { label: 'Notice period', value: CONFIG.noticeRequired }
                  ].map(row => (
                    <div key={row.label}>
                      <div style={{ fontSize: '10px', color: 'var(--text3)', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'var(--mono)' }}>{row.label}</div>
                      <div style={{ fontSize: '12px', color: 'var(--green)', fontFamily: 'var(--mono)' }}>{row.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={150}>
            {!submitted ? (
              <form 
                onSubmit={handleSubmit} 
                aria-label="Contact form"
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Name</label>
                  <input required id="name" name="name" type="text" aria-required="true" style={{ width: '100%', background: 'var(--bg3)', border: '1px solid var(--border)', padding: '12px 14px', color: 'var(--text)', fontFamily: 'var(--mono)', fontSize: '13px', borderRadius: '2px', outline: 'none' }} className="contact-input" />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Email</label>
                  <input required id="email" name="email" type="email" aria-required="true" style={{ width: '100%', background: 'var(--bg3)', border: '1px solid var(--border)', padding: '12px 14px', color: 'var(--text)', fontFamily: 'var(--mono)', fontSize: '13px', borderRadius: '2px', outline: 'none' }} className="contact-input" />
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Message</label>
                  <textarea required id="message" name="message" aria-required="true" style={{ width: '100%', background: 'var(--bg3)', border: '1px solid var(--border)', padding: '12px 14px', color: 'var(--text)', fontFamily: 'var(--mono)', fontSize: '13px', borderRadius: '2px', outline: 'none', minHeight: '140px', resize: 'vertical' }} className="contact-input" />
                </div>
                
                {error && <p role="alert" style={{ color: 'var(--red)', fontSize: '12px', fontFamily: 'var(--mono)' }}>{error}</p>}

                <button 
                  type="submit" 
                  disabled={loading}
                  aria-label="Send message"
                  style={{
                    background: 'var(--green)',
                    color: 'var(--bg)',
                    padding: '12px',
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontFamily: 'var(--mono)',
                    borderRadius: '2px',
                    transition: '0.2s',
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? 'not-allowed' : 'pointer'
                  }}
                  className="contact-btn"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            ) : (
              <div role="alert" style={{ padding: '3rem 2rem', background: 'var(--bg3)', border: '1px solid var(--green)', textAlign: 'center', borderRadius: '4px' }}>
                <h3 style={{ color: 'var(--green)', fontSize: '20px', marginBottom: '1rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text2)', fontSize: '13px', fontFamily: 'var(--mono)', lineHeight: 1.6 }}>
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button onClick={() => setSubmitted(false)} style={{ marginTop: '2rem', color: 'var(--green)', fontSize: '12px', textTransform: 'uppercase', borderBottom: '1px solid var(--green)' }}>Send another message</button>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
      <style>{`
        .contact-input:focus { border-color: var(--green) !important; }
        .contact-btn:hover:not(:disabled) { background: var(--green-dim) !important; }
        .contact-link:hover { border-color: var(--green) !important; color: var(--green) !important; }
      `}</style>
    </section>
  )
}
