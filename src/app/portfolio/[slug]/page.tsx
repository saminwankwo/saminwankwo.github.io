import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug, projects } from '@/data/projects'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug ?? p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  return {
    title: project?.title ?? 'Project',
    description: project?.tagline ?? project?.description,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '4rem 2rem',
        background: 'var(--bg-primary)',
        minHeight: '80vh',
      }}
    >
      {/* Back */}
      <Link
        href="/portfolio"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '12px',
          color: 'var(--text-muted)',
          textDecoration: 'none',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-jetbrains), monospace',
          marginBottom: '2.5rem',
          transition: 'color .2s',
        }}
        onMouseEnter={undefined}
      >
        ← Back to Projects
      </Link>

      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <p
          style={{
            fontSize: '11px',
            color: 'var(--accent-green)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-jetbrains), monospace',
            marginBottom: '0.5rem',
          }}
        >
          {project.cat}
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-syne), sans-serif',
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: '0.75rem',
          }}
        >
          {project.title}
        </h1>
        {project.tagline && (
          <p style={{ fontSize: '15px', color: 'var(--accent-blue)', fontFamily: 'var(--font-jetbrains), monospace' }}>
            {project.tagline}
          </p>
        )}
      </div>

      {/* Metric banner */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '10px 16px',
          background: 'rgba(0,255,157,0.08)',
          border: '1px solid rgba(0,255,157,0.3)',
          borderRadius: '4px',
          marginBottom: '2.5rem',
        }}
      >
        <span style={{ color: 'var(--accent-green)', fontSize: '16px' }}>✓</span>
        <span style={{ fontSize: '13px', color: 'var(--accent-green)', fontFamily: 'var(--font-jetbrains), monospace' }}>
          {project.metric}
        </span>
      </div>

      {/* Body grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {/* Description */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            padding: '1.75rem',
            gridColumn: '1 / -1',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontSize: '17px',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '0.75rem',
            }}
          >
            About this project
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.8, fontFamily: 'var(--font-jetbrains), monospace' }}>
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            padding: '1.75rem',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontSize: '14px',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '1rem',
            }}
          >
            Tech Stack
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {project.tech.map(t => (
              <span key={t} className="tag tag-primary">{t}</span>
            ))}
          </div>
        </div>

        {/* Links */}
        {(project.links.demo || project.links.repo || project.links.readme) && (
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '1.75rem',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-syne), sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '1rem',
              }}
            >
              Links
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {project.links.demo && (
                <Link href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '12px' }}>
                  Live Demo ↗
                </Link>
              )}
              {project.links.repo && (
                <Link href={project.links.repo} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: '12px' }}>
                  GitHub Repo ↗
                </Link>
              )}
              {project.links.readme && (
                <Link href={project.links.readme} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: '12px' }}>
                  Docs / README ↗
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}