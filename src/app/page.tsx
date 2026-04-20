import type { Metadata } from 'next'
import Link from 'next/link'
import TerminalWindow from '@/components/TerminalWindow'
import RevealWrapper from '@/components/RevealWrapper'
import { skills } from '@/data/skills'

export const metadata: Metadata = {
  title: 'Samuel Nwankwo — Backend Engineer',
  description:
    'Backend Engineer specializing in Node.js, PHP, Laravel, NestJS, and cloud infrastructure. 7+ years building scalable APIs and distributed systems.',
}

const stats = [
  { num: '7+',   label: 'Years PHP / Laravel'    },
  { num: '5+',   label: 'Years Node.js'           },
  { num: '$1M+', label: 'Payments Processed'      },
  { num: '200+', label: 'Auth SDK Installs'        },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="bg-grid"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '6rem 2rem 4rem',
        }}
      >
        <div
          className="section-inner"
          style={{
            display: 'flex',
            gap: '4rem',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* Left */}
          <div style={{ maxWidth: '560px', flex: 1 }}>
            <RevealWrapper>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-jetbrains), monospace',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span style={{ color: 'var(--accent-green)' }}>$</span> whoami
              </p>
            </RevealWrapper>

            <RevealWrapper delay={80}>
              <h1
                className="font-display"
                style={{
                  fontWeight: 800,
                  fontSize: 'clamp(48px, 8vw, 88px)',
                  lineHeight: 1,
                  letterSpacing: '-3px',
                  marginBottom: '1.25rem',
                }}
              >
                <span style={{ color: '#fff', display: 'block' }}>Samuel</span>
                <span style={{ color: 'var(--accent-green)', display: 'block' }}>Nwankwo</span>
              </h1>
            </RevealWrapper>

            <RevealWrapper delay={160}>
              <p
                className="font-display"
                style={{
                  fontSize: '16px',
                  color: 'var(--text-muted)',
                  marginBottom: '1.75rem',
                  fontWeight: 500,
                }}
              >
                Backend Engineer —{' '}
                <span style={{ color: 'var(--accent-blue)' }}>Node.js · PHP · Cloud</span>
              </p>
            </RevealWrapper>

            <RevealWrapper delay={240}>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                  borderLeft: '2px solid var(--accent-green)',
                  paddingLeft: '1.25rem',
                  marginBottom: '2.5rem',
                  fontFamily: 'var(--font-jetbrains), monospace',
                }}
              >
                I design and build scalable backend systems — from RESTful APIs and
                event-driven microservices to multi-tenant SaaS platforms and
                payment-integrated commerce infrastructure. 7+ years shipping
                production software across fintech, logistics, health, and education.
              </p>
            </RevealWrapper>

            {/* Stats */}
            <RevealWrapper delay={320}>
              <div
                style={{
                  display: 'flex',
                  gap: '2.5rem',
                  flexWrap: 'wrap',
                  marginBottom: '2.5rem',
                }}
              >
                {stats.map(({ num, label }) => (
                  <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span
                      className="font-display"
                      style={{ fontSize: '22px', fontWeight: 800, color: 'var(--accent-green)', lineHeight: 1 }}
                    >
                      {num}
                    </span>
                    <span
                      style={{
                        fontSize: '9px',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        fontFamily: 'var(--font-jetbrains), monospace',
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </RevealWrapper>

            {/* CTAs */}
            <RevealWrapper delay={400}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/experience" className="btn-primary">View Experience →</Link>
                <Link href="/contact"    className="btn-ghost">Get In Touch</Link>
              </div>
            </RevealWrapper>
          </div>

          {/* Right – Terminal (hidden below 1100px via inline media isn't possible, use class) */}
          <RevealWrapper
            delay={480}
            className="hero-terminal"
            style={{ flex: 1, maxWidth: '480px' } as React.CSSProperties}
          >
            <TerminalWindow />
          </RevealWrapper>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section style={{ background: 'var(--bg-secondary)' }} className="section-pad">
        <div className="section-inner">
          <RevealWrapper>
            <p className="section-tag">// Expertise</p>
          </RevealWrapper>
          <RevealWrapper delay={80}>
            <h2 className="section-title">
              Technical <span style={{ color: 'var(--accent-green)' }}>Skills</span>
            </h2>
          </RevealWrapper>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {skills.map((skill, i) => (
              <RevealWrapper key={skill.category} delay={i * 60}>
                <div className="card-base" style={{ padding: '1.5rem', cursor: 'default' }}>
                  <span style={{ fontSize: '22px', marginBottom: '0.75rem', display: 'block' }}>
                    {skill.icon}
                  </span>
                  <h3
                    className="font-display"
                    style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}
                  >
                    {skill.category}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {skill.primary.map(t => <span key={t} className="tag tag-primary">{t}</span>)}
                    {skill.normal.map(t => <span key={t}  className="tag tag-normal">{t}</span>)}
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section style={{ background: 'var(--bg-primary)' }} className="section-pad">
        <div className="section-inner">
          <RevealWrapper>
            <div
              style={{
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '3rem',
                textAlign: 'center',
                background: 'var(--bg-card)',
              }}
            >
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}
              >
                Explore the full picture
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
                6 years of experience across fintech, logistics, health and education.
                15+ shipped projects. 8 freelance clients across 3 continents.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link href="/experience" className="btn-primary">Work Experience</Link>
                <Link href="/portfolio"  className="btn-ghost">Projects</Link>
                <Link href="/freelance"  className="btn-ghost">Freelance</Link>
                <Link href="/contact"    className="btn-ghost">Contact</Link>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
