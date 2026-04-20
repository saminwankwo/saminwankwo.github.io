import type { Metadata } from 'next'
import RevealWrapper from '@/components/RevealWrapper'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Get in touch with Samuel Nwankwo — Backend Engineer available for full-time roles and select freelance projects.",
}

const contactLinks = [
  { icon: '@', label: 'nwankwosami@gmail.com',         href: 'mailto:nwankwosami@gmail.com'              },
  { icon: '#', label: '+234 805 864 3829',              href: 'tel:+2348058643829'                        },
  { icon: '⌥', label: 'github.com/saminwankwo',        href: 'https://github.com/saminwankwo'            },
  { icon: '⌘', label: 'linkedin.com/in/saminwankwo',   href: 'https://linkedin.com/in/saminwankwo'       },
]

export default function ContactPage() {
  return (
    <section style={{ background: 'var(--bg-secondary)' }} className="section-pad">
      <div className="section-inner">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* ── Left ── */}
          <div>
            <RevealWrapper>
              <p className="section-tag">// Open to Opportunities</p>
            </RevealWrapper>

            <RevealWrapper delay={80}>
              <h1
                className="font-display"
                style={{
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 1.05,
                  marginBottom: '1rem',
                }}
              >
                Let&apos;s Build<br />
                <span style={{ color: 'var(--accent-green)' }}>Something.</span>
              </h1>
            </RevealWrapper>

            <RevealWrapper delay={160}>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                  marginBottom: '2rem',
                  fontFamily: 'var(--font-jetbrains), monospace',
                }}
              >
                Whether you&apos;re scaling a startup, refactoring a monolith,
                or need a dependable backend engineer to own a critical system
                end-to-end — I&apos;m available for full-time roles and select
                freelance engagements.
              </p>
            </RevealWrapper>

            <RevealWrapper delay={240}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {contactLinks.map(({ icon, label, href }) => (
                  <a
                    key={href}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-link"
                  >
                    <span
                      style={{
                        fontSize: '14px',
                        flexShrink: 0,
                        width: '20px',
                        textAlign: 'center',
                        color: 'var(--accent-green)',
                      }}
                    >
                      {icon}
                    </span>
                    {label}
                  </a>
                ))}
              </div>
            </RevealWrapper>
          </div>

          {/* ── Right – Form ── */}
          <RevealWrapper delay={160}>
            <ContactForm />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
