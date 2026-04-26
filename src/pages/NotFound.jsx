import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { CONFIG } from '../data/config'

export default function NotFound() {
  return (
    <>
      <SEO 
        title="404 — Page Not Found" 
        description="This page doesn't exist." 
        noIndex={true}
        canonical={CONFIG.siteUrl + "/404"} 
      />

      <main id="main-content" style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        background: 'var(--bg)'
      }}>
        <h1 style={{
          fontFamily: 'var(--sans)',
          fontWeight: 800,
          fontSize: '80px',
          color: 'var(--green)',
          lineHeight: 1,
          margin: 0
        }}>
          404
        </h1>
        <p style={{
          fontFamily: 'var(--sans)',
          fontWeight: 600,
          fontSize: '24px',
          color: 'var(--text)',
          margin: '1rem 0'
        }}>
          Page not found.
        </p>
        <p style={{
          fontSize: '13px',
          fontFamily: 'var(--mono)',
          color: 'var(--text2)',
          marginBottom: '2rem',
          maxWidth: '400px'
        }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/"
          style={{
            background: 'var(--green)',
            color: 'var(--bg)',
            padding: '12px 28px',
            fontSize: '12px',
            fontFamily: 'var(--mono)',
            textTransform: 'uppercase',
            fontWeight: 600,
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.background = 'var(--green-dim)'}
          onMouseLeave={(e) => e.target.style.background = 'var(--green)'}
        >
          ← Back home
        </Link>
      </main>
    </>
  )
}
