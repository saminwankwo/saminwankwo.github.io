import type { Metadata } from 'next'
import Link from 'next/link'
import RevealWrapper from '@/components/RevealWrapper'
import { freelanceClients } from '@/data/freelance'

export const metadata: Metadata = {
  title: 'Freelance',
  description: 'Samuel Nwankwo freelance work — 8 clients across Nigeria, US and UK in fintech, transport, healthtech and edtech.',
}

export default function FreelancePage() {
  return (
    <section style={{ background: 'var(--bg-primary)' }} className="section-pad">
      <div className="section-inner">
        <RevealWrapper>
          <p className="section-tag">// Clients</p>
        </RevealWrapper>
        <RevealWrapper delay={80}>
          <h1 className="section-title font-display">
            Freelance <span style={{ color: 'var(--accent-green)' }}>Work</span>
          </h1>
        </RevealWrapper>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
          }}
        >
          {freelanceClients.map((client, i) => (
            <RevealWrapper key={client.name} delay={i * 50}>
              <div
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  padding: '1.25rem',
                  cursor: 'default',
                  transition: 'border-color .25s, transform .2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent-green)'
                  ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
                  ;(e.currentTarget as HTMLDivElement).style.transform = 'none'
                }}
              >
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '0.4rem', fontFamily: 'var(--font-jetbrains), monospace' }}>
                  {client.name}
                </p>
                <p style={{ fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.6rem', fontFamily: 'var(--font-jetbrains), monospace' }}>
                  {client.flag} {client.country} · {client.sector}
                </p>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-jetbrains), monospace' }}>
                  <span style={{ color: 'var(--accent-green)' }}>#</span> {client.stack}
                </p>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains), monospace', lineHeight: 1.5 }}>
                  {client.description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* CTA */}
        <RevealWrapper delay={500}>
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '1.5rem', fontFamily: 'var(--font-jetbrains), monospace' }}>
              Available for select freelance engagements
            </p>
            <Link href="/contact" className="btn-primary">Start a Project →</Link>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
