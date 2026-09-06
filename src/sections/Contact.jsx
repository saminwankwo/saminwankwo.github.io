import React from 'react'
import CONFIG from '@config'
import SectionHeader from '@ui/SectionHeader'
import ContactForm from '@features/ContactForm'
import Button from '@ui/Button'
import Tag from '@ui/Tag'
import { useClipboard } from '@hooks/useClipboard'
import { trackEvent } from '@lib/analytics'

export default function Contact() {
  const { copied, copy } = useClipboard()

  const contactRows = [
    { label: 'Email', value: CONFIG.email, href: `mailto:${CONFIG.email}`, icon: '✉' },
    { label: 'Phone', value: CONFIG.phone, href: `tel:${CONFIG.phone}`, icon: '✆' },
    { label: 'GitHub', value: `@${CONFIG.handle}`, href: CONFIG.githubUrl, icon: '⌨' },
    { label: 'LinkedIn', value: `/in/${CONFIG.handle}`, href: CONFIG.linkedinUrl, icon: '💼' },
    { label: 'npm', value: `~${CONFIG.handle}`, href: CONFIG.npmUrl, icon: '📦' },
  ]

  const socialLinks = [
    { name: 'Twitter', url: CONFIG.twitterUrl },
    { name: 'Instagram', url: CONFIG.instagramUrl },
    { name: 'Telegram', url: CONFIG.telegramUrl },
    { name: 'YouTube', url: CONFIG.youtubeUrl },
    { name: 'Hashnode', url: CONFIG.hashnodeUrl },
  ]

  return (
    <section 
      id="contact" 
      aria-labelledby="contact-title"
      style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        padding: 'var(--section-py) var(--section-px)'
      }}
    >
      <div className="contact-grid" style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem' }}>
        
        {/* LEFT SIDE */}
        <div>
          <SectionHeader 
            id="contact-title" 
            tag="Open to Opportunities" 
            title={<>Let's Build <span style={{ color: 'var(--green)' }}>Something.</span></>} 
          />
          <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.8, marginBottom: '2rem', marginTop: '1rem' }}>
            I'm currently open to new remote opportunities, contract work, or technical consulting. 
            If you have a project that needs a scalable backend, I'd love to hear from you.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {contactRows.map(row => (
              <div key={row.label} className="contact-row" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                transition: 'all 0.2s',
                borderRadius: '2px'
              }}>
                <a 
                  href={row.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={row.label}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0, overflow: 'hidden' }}
                >
                  <span style={{ color: 'var(--green)', fontSize: '14px', flexShrink: 0 }}>{row.icon}</span>
                  <span style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--text2)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.value}</span>
                </a>
                {row.label === 'Email' && (
                  <button 
                    onClick={() => copy(row.value)}
                    style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: copied ? 'var(--green)' : 'var(--text3)', transition: 'color 0.2s', minHeight: '44px', padding: '8px 10px', flexShrink: 0 }}
                  >
                    {copied ? 'COPIED' : 'COPY'}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '1.25rem' }}>
            {socialLinks.map(s => (
              <a 
                key={s.name} 
                href={s.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', transition: 'color 0.2s' }}
                className="social-pill-link"
              >
                {s.name}
              </a>
            ))}
          </div>

          <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', padding: '1.5rem', marginTop: '2rem', borderRadius: '2px' }}>
            <span style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              // availability
            </span>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { k: 'Timezone', v: CONFIG.timezone },
                { k: 'Available', v: CONFIG.availableFrom },
                { k: 'Work type', v: CONFIG.workPreference },
                { k: 'Notice', v: CONFIG.noticeRequired }
              ].map(row => (
                <div key={row.k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontFamily: 'var(--mono)' }}>
                  <span style={{ color: 'var(--text3)' }}>{row.k}</span>
                  <span style={{ color: 'var(--text2)' }}>{row.v}</span>
                </div>
              ))}
            </div>
          </div>

          <Button 
            variant="outline" 
            as="a" 
            href={CONFIG.resumePath} 
            download={CONFIG.resumeFilename}
            onClick={() => trackEvent('Resume Download')}
            style={{ width: '100%', marginTop: '1rem' }}
          >
            ↓ Download Resume (PDF)
          </Button>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-col" style={{ marginTop: '4.5rem' }}>
          <ContactForm />
        </div>
      </div>

      <style>{`
        .contact-row:hover { border-color: var(--green) !important; background: rgba(0, 255, 157, 0.02) !important; }
        .social-pill-link:hover { color: var(--green) !important; }
        @media (max-width: 768px) {
          .contact-grid { gap: 2.5rem !important; }
          .contact-form-col { margin-top: 0 !important; }
        }
        @media (max-width: 480px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
