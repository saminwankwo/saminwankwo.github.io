import React, { useState } from 'react'
import CONFIG from '@config'
import Button from '@ui/Button'
import { trackEvent } from '@lib/analytics'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    if (!CONFIG.formspreeId) {
      console.warn('No Formspree ID found in CONFIG')
      setTimeout(() => setStatus('success'), 1000)
      return
    }

    try {
      const response = await fetch(`https://formspree.io/f/mykvvqgv`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        trackEvent('Contact Form Submit')
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.warn('Form submission failed:', err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div 
        role="alert" 
        aria-live="polite"
        style={{
          background: 'rgba(0, 255, 157, 0.05)',
          border: '1px solid var(--green)',
          padding: '2.5rem',
          textAlign: 'center',
          borderRadius: '2px'
        }}
      >
        <div style={{ fontSize: '32px', color: 'var(--green)', marginBottom: '1rem' }}>✓</div>
        <p style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--green)', margin: 0 }}>
          Message sent. I'll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <div style={{ position: 'relative' }}>
      {status === 'error' && (
        <div 
          role="alert" 
          aria-live="polite"
          style={{
            background: 'rgba(255, 107, 107, 0.05)',
            border: '1px solid var(--red)',
            padding: '1rem',
            marginBottom: '1.5rem',
            borderRadius: '2px',
            fontSize: '12px',
            fontFamily: 'var(--mono)',
            color: 'var(--red)'
          }}
        >
          Something went wrong. Please email me directly: <a href={`mailto:${CONFIG.email}`} style={{ textDecoration: 'underline' }}>{CONFIG.email}</a>
        </div>
      )}

      <form aria-label="Contact form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="name" style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase' }}>Name</label>
          <input 
            id="name" 
            type="text" 
            required 
            aria-required="true"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            placeholder="John Doe"
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="email" style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase' }}>Email</label>
          <input 
            id="email" 
            type="email" 
            required 
            aria-required="true"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            placeholder="john@example.com"
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="message" style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase' }}>Message</label>
          <textarea 
            id="message" 
            rows="5" 
            required 
            aria-required="true"
            value={formData.message}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Hi Samuel, I'd like to talk about..."
          />
        </div>

        <Button 
          type="submit" 
          variant="filled" 
          disabled={status === 'submitting'}
          style={{ width: '100%' }}
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message →'}
        </Button>

        <p style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textAlign: 'center', marginTop: '0.75rem' }}>
          Response time: usually within 24 hours
        </p>
      </form>
    </div>
  )
}

const inputStyle = {
  background: 'var(--bg2)',
  border: '1px solid var(--border)',
  padding: '12px 16px',
  color: 'var(--text)',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.2s',
  width: '100%'
}
// We handle focus via CSS usually, but for inline:
// In V2 refactor, we can add a <style> block here if needed or use the globals.css focus-visible.
