import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { CONFIG } from '../data/config'

export default function Contact() {
  const [formState, setFormState] = useState('idle') // idle, submitting, success, error
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [copiedEmail, setCopiedEmail] = useState(false)

  const copyEmail = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(CONFIG.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    setFormState('submitting')

    if (!CONFIG.formspreeId) {
      console.warn('Formspree ID missing. Simulating success in dev mode.')
      setTimeout(() => setFormState('success'), 1000)
      return
    }

    try {
      const response = await fetch(`https://formspree.io/f/${CONFIG.formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setFormState('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setFormState('error')
      }
    } catch (err) {
      setFormState('error')
    }
  }

  const socialLinks = [
    { label: 'Twitter / X', url: CONFIG.twitterUrl },
    { label: 'Instagram', url: CONFIG.instagramUrl },
    { label: 'Telegram', url: CONFIG.telegramUrl },
    { label: 'YouTube', url: CONFIG.youtubeUrl },
    { label: 'Hashnode', url: CONFIG.hashnodeUrl },
  ]

  const contactRows = [
    { icon: '@', label: CONFIG.email, url: `mailto:${CONFIG.email}`, aria: 'Send email' },
    { icon: '#', label: CONFIG.phone, url: `tel:${CONFIG.phone.replace(/\s/g, '')}`, aria: 'Call me' },
    { icon: '⌥', label: 'github.com/saminwankwo', url: CONFIG.githubUrl, aria: 'GitHub profile' },
    { icon: '⌘', label: 'linkedin.com/saminwankwo', url: CONFIG.linkedinUrl, aria: 'LinkedIn profile' },
    { icon: '◉', label: 'npmjs.com/~saminwankwo', url: CONFIG.npmUrl, aria: 'npm profile' },
  ]

  return (
    <section id="contact" aria-labelledby="contact-heading" style={{
      background: 'var(--bg2)',
      padding: 'var(--section-py) var(--section-px)',
      borderTop: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="contact-grid">
        {/* LEFT COLUMN */}
        <div>
          <SectionHeader 
            tag="Open to Opportunities" 
            title={<>Let's Build<br/><span style={{ color: 'var(--green)' }}>Something.</span></>} 
          />
          <p style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--text2)', lineHeight: 1.9, marginBottom: '2rem' }}>
            Available for full-time remote roles, contract work, and technical consultations. 
            Node.js · PHP/Laravel · AWS · Microservices.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ position: 'relative' }}>
              <a 
                href={`mailto:${CONFIG.email}`}
                aria-label="Send email"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  border: '1px solid var(--border)',
                  padding: '11px 14px',
                  fontSize: '12px',
                  fontFamily: 'var(--mono)',
                  color: 'var(--text2)',
                  transition: 'all 0.2s',
                  width: '100%'
                }}
                className="contact-row"
              >
                <span style={{ color: 'var(--green)' }}>@</span>
                <span>{CONFIG.email}</span>
              </a>
              <button 
                onClick={copyEmail}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '10px',
                  color: copiedEmail ? 'var(--green)' : 'var(--text3)',
                  fontFamily: 'var(--mono)',
                  textTransform: 'uppercase',
                  padding: '4px 8px',
                  border: '1px solid var(--border)',
                  background: 'var(--bg2)',
                  transition: 'all 0.2s'
                }}
                className="copy-btn"
              >
                {copiedEmail ? 'Copied!' : 'Copy'}
              </button>
            </div>
            
            {contactRows.slice(1).map(row => (
              <a 
                key={row.url}
                href={row.url}
                aria-label={row.aria}
                target={row.url.startsWith('http') ? '_blank' : undefined}
                rel={row.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  border: '1px solid var(--border)',
                  padding: '11px 14px',
                  fontSize: '12px',
                  fontFamily: 'var(--mono)',
                  color: 'var(--text2)',
                  transition: 'all 0.2s'
                }}
                className="contact-row"
              >
                <span style={{ color: 'var(--green)' }}>{row.icon}</span>
                <span>{row.label}</span>
              </a>
            ))}
          </div>


          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '1rem' }}>
            {socialLinks.map(link => (
              <a 
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--mono)',
                  border: '1px solid var(--border2)',
                  padding: '4px 10px',
                  color: 'var(--text3)',
                  transition: 'all 0.2s'
                }}
                className="contact-social-pill"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', padding: '1rem', marginTop: '1.5rem' }}>
            <div style={{ fontSize: '10px', color: 'var(--green)', fontFamily: 'var(--mono)', marginBottom: '8px' }}>
              // availability
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '8px', fontSize: '12px', fontFamily: 'var(--mono)' }}>
              <span style={{ color: 'var(--text3)', textTransform: 'uppercase', fontSize: '10px' }}>Timezone</span>
              <span style={{ color: 'var(--green)' }}>{CONFIG.timezone} · {CONFIG.timezoneNote}</span>
              
              <span style={{ color: 'var(--text3)', textTransform: 'uppercase', fontSize: '10px' }}>Available</span>
              <span style={{ color: 'var(--green)' }}>{CONFIG.availableFrom}</span>
              
              <span style={{ color: 'var(--text3)', textTransform: 'uppercase', fontSize: '10px' }}>Work type</span>
              <span style={{ color: 'var(--green)' }}>{CONFIG.workPreference}</span>
              
              <span style={{ color: 'var(--text3)', textTransform: 'uppercase', fontSize: '10px' }}>Notice</span>
              <span style={{ color: 'var(--green)' }}>{CONFIG.noticeRequired}</span>
            </div>
          </div>

          <a 
            href={CONFIG.resumePath} 
            download 
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              marginTop: '1rem',
              width: '100%',
              border: '1px solid var(--border2)',
              color: 'var(--text2)',
              padding: '12px',
              fontSize: '12px',
              fontFamily: 'var(--mono)',
              textTransform: 'uppercase',
              transition: 'all 0.2s'
            }}
            className="contact-resume-btn"
          >
            ↓ Download Resume (PDF)
          </a>
        </div>

        {/* RIGHT COLUMN — Form */}
        <div>
          {formState === 'success' ? (
            <div role="alert" aria-live="polite" style={{
              border: '1px solid rgba(0, 255, 157, 0.4)',
              background: 'rgba(0, 255, 157, 0.04)',
              padding: '3rem 2rem',
              textAlign: 'center',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{ fontSize: '48px', color: 'var(--green)', marginBottom: '1rem' }}>✓</div>
              <p style={{ fontSize: '13px', color: 'var(--green)', fontFamily: 'var(--mono)' }}>
                Message sent. I'll get back to you soon.
              </p>
              <button 
                onClick={() => setFormState('idle')}
                style={{ marginTop: '2rem', fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textDecoration: 'underline' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form aria-label="Contact form" onSubmit={handleSubmit} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '1rem' }}>
                <label htmlFor="name" style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase' }}>Name</label>
                <input 
                  id="name" 
                  type="text" 
                  required 
                  aria-required="true" 
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    background: 'var(--bg3)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                    padding: '10px 14px',
                    fontSize: '13px',
                    fontFamily: 'var(--mono)',
                    outline: 'none',
                    width: '100%',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--green)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '1rem' }}>
                <label htmlFor="email" style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase' }}>Email</label>
                <input 
                  id="email" 
                  type="email" 
                  required 
                  aria-required="true" 
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    background: 'var(--bg3)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                    padding: '10px 14px',
                    fontSize: '13px',
                    fontFamily: 'var(--mono)',
                    outline: 'none',
                    width: '100%',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--green)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '1rem', flex: 1 }}>
                <label htmlFor="message" style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase' }}>Message</label>
                <textarea 
                  id="message" 
                  rows="8" 
                  required 
                  aria-required="true" 
                  placeholder="Tell me about your project or role..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    background: 'var(--bg3)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                    padding: '10px 14px',
                    fontSize: '13px',
                    fontFamily: 'var(--mono)',
                    outline: 'none',
                    width: '100%',
                    resize: 'none',
                    height: '100%',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--green)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              {formState === 'error' && (
                <div role="alert" style={{ marginBottom: '1rem', padding: '1rem', background: 'rgba(255, 107, 107, 0.04)', border: '1px solid rgba(255, 107, 107, 0.4)' }}>
                  <p style={{ fontSize: '12px', color: 'var(--red)', fontFamily: 'var(--mono)', margin: 0 }}>
                    Something went wrong. Please email me directly at {CONFIG.email}
                  </p>
                </div>
              )}

              <button 
                type="submit" 
                disabled={formState === 'submitting'}
                style={{
                  background: 'var(--green)',
                  color: 'var(--bg)',
                  padding: '13px',
                  fontSize: '12px',
                  fontFamily: 'var(--mono)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  width: '100%',
                  opacity: formState === 'submitting' ? 0.7 : 1,
                  cursor: formState === 'submitting' ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => { if (formState !== 'submitting') e.target.style.background = 'var(--green-dim)' }}
                onMouseLeave={(e) => { if (formState !== 'submitting') e.target.style.background = 'var(--green)' }}
              >
                {formState === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              <p style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textAlign: 'center', marginTop: '0.75rem' }}>
                Response time: usually within 24 hours
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-row:hover, .contact-social-pill:hover, .contact-resume-btn:hover {
          border-color: var(--green) !important;
          color: var(--green) !important;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
