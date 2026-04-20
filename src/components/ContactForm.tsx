'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim()
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim()
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim()
    if (!name || !email || !message) return

    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      form.reset()
      setTimeout(() => setStatus('idle'), 6000)
    }, 1200)
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ marginBottom: '1.25rem' }}>
        <label className="form-label" htmlFor="cf-name">Name</label>
        <input
          className="form-input"
          id="cf-name"
          name="name"
          type="text"
          placeholder="Your name"
          required
        />
      </div>
      <div style={{ marginBottom: '1.25rem' }}>
        <label className="form-label" htmlFor="cf-email">Email</label>
        <input
          className="form-input"
          id="cf-email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
        />
      </div>
      <div style={{ marginBottom: '1.25rem' }}>
        <label className="form-label" htmlFor="cf-message">Message</label>
        <textarea
          className="form-input"
          id="cf-message"
          name="message"
          placeholder="Tell me about your project..."
          rows={6}
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          width: '100%',
          padding: '14px',
          background: 'var(--accent-green)',
          color: '#0a0c0f',
          border: 'none',
          borderRadius: '4px',
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          opacity: status === 'sending' ? 0.7 : 1,
          transition: 'background .2s, opacity .2s',
        }}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'sent' && (
        <div
          role="alert"
          style={{
            marginTop: '1rem',
            padding: '1rem',
            background: 'rgba(0,255,157,.1)',
            border: '1px solid rgba(0,255,157,.3)',
            borderRadius: '4px',
            color: 'var(--accent-green)',
            fontSize: '13px',
            textAlign: 'center',
            fontFamily: 'var(--font-jetbrains), monospace',
          }}
        >
          ✓ Message sent! I&apos;ll get back to you within 24 hours.
        </div>
      )}
    </form>
  )
}
