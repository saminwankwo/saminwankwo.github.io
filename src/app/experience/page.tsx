import type { Metadata } from 'next'
import RevealWrapper from '@/components/RevealWrapper'
import { experience } from '@/data/experience'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Samuel Nwankwo work experience — Backend Engineer with 7+ years across fintech, logistics, education and health sectors.',
}

export default function ExperiencePage() {
  return (
    <section style={{ background: 'var(--bg-primary)' }} className="section-pad">
      <div className="section-inner">
        <RevealWrapper>
          <p className="section-tag">// Career</p>
        </RevealWrapper>
        <RevealWrapper delay={80}>
          <h1 className="section-title font-display">
            Work <span style={{ color: 'var(--accent-green)' }}>Experience</span>
          </h1>
        </RevealWrapper>

        <div className="timeline">
          {experience.map((job, i) => (
            <RevealWrapper
              key={job.company + job.start}
              delay={i * 80}
              style={{ position: 'relative', marginBottom: '3.5rem' } as React.CSSProperties}
            >
              <div className={`timeline-dot${job.current ? ' active' : ''}`} />

              {/* Header row */}
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.25rem' }}>
                <span className="font-display" style={{ fontSize: '17px', fontWeight: 700, color: '#fff' }}>
                  {job.company}
                </span>
                {job.current && <span className="badge-current">Current</span>}
              </div>

              <p style={{ fontSize: '13px', color: 'var(--accent-blue)', marginBottom: '0.2rem', fontFamily: 'var(--font-jetbrains), monospace' }}>
                {job.role} · {job.type}
              </p>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '0.75rem', fontFamily: 'var(--font-jetbrains), monospace' }}>
                {job.start} – {job.end} · {job.location}
              </p>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' }}>
                {job.tech.map(t => <span key={t} className="tag-amber">{t}</span>)}
              </div>

              {/* Bullets */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {job.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      gap: '0.75rem',
                      fontFamily: 'var(--font-jetbrains), monospace',
                    }}
                  >
                    <span style={{ color: 'var(--accent-green)', flexShrink: 0, fontSize: '14px', lineHeight: 1.5 }}>›</span>
                    {b}
                  </li>
                ))}
              </ul>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
