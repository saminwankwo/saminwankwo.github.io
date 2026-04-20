import type { Metadata } from 'next'
import Link from 'next/link'
import RevealWrapper from '@/components/RevealWrapper'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Samuel Nwankwo featured projects — from Auth SDKs and SaaS platforms to AI intrusion detection and sports prediction APIs.',
}

export default function PortfolioPage() {
  return (
    <section style={{ background: 'var(--bg-secondary)' }} className="section-pad">
      <div className="section-inner">
        <RevealWrapper>
          <p className="section-tag">// Work</p>
        </RevealWrapper>
        <RevealWrapper delay={80}>
          <h1 className="section-title font-display">
            Featured <span style={{ color: 'var(--accent-green)' }}>Projects</span>
          </h1>
        </RevealWrapper>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {projects.map((project, i) => (
            <RevealWrapper key={project.id} delay={i * 50}>
              <div className="project-card">
                <p
                  style={{
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    letterSpacing: '1px',
                    marginBottom: '0.6rem',
                    fontFamily: 'var(--font-jetbrains), monospace',
                  }}
                >
                  {project.cat}
                </p>
                <h2
                  className="font-display"
                  style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '0.8rem' }}
                >
                  {project.title}
                </h2>
                <p
                  style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-jetbrains), monospace',
                  }}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' }}>
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="tag tag-normal">{t}</span>
                  ))}
                </div>

                {/* Metric */}
                <p
                  style={{
                    fontSize: '11px',
                    color: 'var(--accent-green)',
                    borderTop: '1px solid var(--border)',
                    paddingTop: '0.75rem',
                    fontFamily: 'var(--font-jetbrains), monospace',
                    letterSpacing: '0.3px',
                  }}
                >
                  → {project.metric}
                </p>

                {/* Links */}
                {(project.links.demo || project.links.repo) && (
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                    {project.links.demo && (
                      <Link
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: '6px 14px', fontSize: '11px' }}
                      >
                        Demo
                      </Link>
                    )}
                    {project.links.repo && (
                      <Link
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                        style={{ padding: '6px 14px', fontSize: '11px' }}
                      >
                        Repo
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}