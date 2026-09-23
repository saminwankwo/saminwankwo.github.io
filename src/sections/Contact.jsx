import React from 'react'
import CONFIG from '@config'
import SectionHeader from '@ui/SectionHeader'
import ContactForm from '@features/ContactForm'
import Button from '@ui/Button'
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

  const availabilityRows = [
    { k: 'Timezone', v: CONFIG.timezone },
    { k: 'Available', v: CONFIG.availableFrom },
    { k: 'Work type', v: CONFIG.workPreference },
    { k: 'Notice', v: CONFIG.noticeRequired },
  ]

  // All layout/styling lives in styles/globals.css (BEM classes) — the inline
  // style props and the <style> tag were moved there (Issue 18).
  return (
    <section id="contact" aria-labelledby="contact-title" className="contact-section">
      <div className="contact-grid">

        {/* LEFT SIDE */}
        <div>
          <SectionHeader
            id="contact-title"
            tag="Open to Opportunities"
            title={<>Let's Build <span className="contact-accent">Something.</span></>}
          />
          <p className="contact-intro">
            I'm currently open to new remote opportunities, contract work, or technical consulting.
            If you have a project that needs a scalable backend, I'd love to hear from you.
          </p>

          <div className="contact-rows">
            {contactRows.map(row => (
              <div key={row.label} className="contact-row">
                <a
                  href={row.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={row.label}
                  className="contact-row__link"
                >
                  <span className="contact-row__icon" aria-hidden="true">{row.icon}</span>
                  <span className="contact-row__value">{row.value}</span>
                </a>
                {row.label === 'Email' && (
                  <button
                    type="button"
                    onClick={() => copy(row.value)}
                    className={`contact-row__copy${copied ? ' is-copied' : ''}`}
                  >
                    {copied ? 'COPIED' : 'COPY'}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="contact-socials">
            {socialLinks.map(s => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-link"
              >
                {s.name}
              </a>
            ))}
          </div>

          <div className="contact-availability">
            <span className="contact-availability__label">
              // availability
            </span>
            <div className="contact-availability__list">
              {availabilityRows.map(row => (
                <div key={row.k} className="contact-availability__row">
                  <span className="contact-availability__key">{row.k}</span>
                  <span className="contact-availability__value">{row.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-resume">
            <Button
              variant="outline"
              as="a"
              href={CONFIG.resumePath}
              download={CONFIG.resumeFilename}
              onClick={() => trackEvent('Resume Download')}
            >
              ↓ Download Resume (PDF)
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-col">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
