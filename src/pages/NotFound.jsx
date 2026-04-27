import React from 'react'
import { Link } from 'react-router-dom'
import CONFIG from '@config'
import SEO from '@components/seo/SEO'
import Button from '@ui/Button'

export default function NotFound() {
  return (
    <>
      <SEO 
        title="404 — Page Not Found"
        description="The page you are looking for does not exist."
        noIndex={true}
        canonical={CONFIG.siteUrl + '/404'}
      />

      <main id="main-content" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', padding: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 'clamp(80px, 15vw, 160px)', color: 'var(--green)', margin: 0, opacity: 0.1 }}>
            404
          </h1>
          <div style={{ marginTop: '-40px' }}>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--text2)', marginBottom: '2.5rem' }}>
              The page you are looking for has been moved or deleted.
            </p>
            <Button as={Link} to="/" variant="filled">
              Back to Home
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
