import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getHashnodePosts } from '@/lib/hashnode'
import RevealWrapper from '@/components/RevealWrapper'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical articles by Samuel Nwankwo — backend engineering, Node.js, PHP, cloud architecture and more.',
}

const HASHNODE_HOST = 'saminwankwo.hashnode.dev'

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ after?: string; tag?: string }>
}) {
  const params = await searchParams
  const tag = params?.tag
  const after = params?.after
  const { posts, pageInfo } = await getHashnodePosts(HASHNODE_HOST, 12, after)
  const filtered = tag
    ? posts.filter((p) => (p.tags || []).some((t) => t.name === tag))
    : posts

  // Collect unique tags from current page
  const allTags = Array.from(
    new Set(posts.flatMap((p) => (p.tags || []).map((t) => t.name)))
  ).slice(0, 10)

  return (
    <section style={{ background: 'var(--bg-secondary)' }} className="section-pad">
      <div className="section-inner">
        {/* Header */}
        <RevealWrapper>
          <p className="section-tag">// Writing</p>
        </RevealWrapper>
        <RevealWrapper delay={80}>
          <h1 className="section-title font-display">
            Blog <span style={{ color: 'var(--accent-green)' }}>Posts</span>
          </h1>
        </RevealWrapper>

        {/* Tag filter bar */}
        <RevealWrapper delay={120}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '2.5rem',
            }}
          >
            <Link
              href="/blog"
              className={!tag ? 'tag tag-primary' : 'tag tag-normal'}
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              All
            </Link>
            {allTags.map((t) => (
              <Link
                key={t}
                href={`/blog?tag=${encodeURIComponent(t)}`}
                className={tag === t ? 'tag tag-primary' : 'tag tag-normal'}
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                {t}
              </Link>
            ))}
          </div>
        </RevealWrapper>

        {/* Posts grid */}
        {filtered.length === 0 ? (
          <RevealWrapper delay={160}>
            <div
              style={{
                padding: '3rem',
                textAlign: 'center',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                background: 'var(--bg-card)',
              }}
            >
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-jetbrains), monospace',
                }}
              >
                <span style={{ color: 'var(--accent-green)' }}>$</span> No posts
                found{tag ? ` for tag "${tag}"` : ''}.
              </p>
            </div>
          </RevealWrapper>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {filtered.map((post, i) => (
              <RevealWrapper key={post.slug} delay={i * 60}>
                <article
                  className="project-card"
                  style={{ padding: 0, overflow: 'hidden' }}
                >
                  {/* Cover image */}
                  {post.coverImage?.url && (
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '180px',
                        overflow: 'hidden',
                      }}
                    >
                      <Image
                        src={post.coverImage.url}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      {/* Gradient overlay */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background:
                            'linear-gradient(to top, var(--bg-card) 0%, transparent 50%)',
                        }}
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    {/* Date */}
                    {post.publishedAt && (
                      <p
                        style={{
                          fontSize: '10px',
                          color: 'var(--text-muted)',
                          letterSpacing: '1.5px',
                          textTransform: 'uppercase',
                          marginBottom: '0.5rem',
                          fontFamily: 'var(--font-jetbrains), monospace',
                        }}
                      >
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    )}

                    {/* Title */}
                    <h2
                      className="font-display"
                      style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: '0.6rem',
                        lineHeight: 1.3,
                      }}
                    >
                      <Link
                        href={`https://${HASHNODE_HOST}/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'inherit',
                          textDecoration: 'none',
                          transition: 'color .2s',
                        }}
                        onMouseEnter={undefined}
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Brief */}
                    <p
                      style={{
                        fontSize: '12px',
                        color: 'var(--text-muted)',
                        lineHeight: 1.7,
                        flex: 1,
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-jetbrains), monospace',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {post.brief}
                    </p>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '5px',
                          marginBottom: '1rem',
                        }}
                      >
                        {post.tags.slice(0, 4).map((t) => (
                          <span key={t.name} className="tag-amber">
                            {t.name}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Read link */}
                    <div
                      style={{
                        borderTop: '1px solid var(--border)',
                        paddingTop: '0.75rem',
                      }}
                    >
                      <Link
                        href={`https://${HASHNODE_HOST}/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '11px',
                          color: 'var(--accent-green)',
                          textDecoration: 'none',
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          fontFamily: 'var(--font-jetbrains), monospace',
                          transition: 'opacity .2s',
                        }}
                      >
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </article>
              </RevealWrapper>
            ))}
          </div>
        )}

        {/* Pagination */}
        {!tag && pageInfo?.hasNextPage && (
          <RevealWrapper delay={200}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '3rem',
              }}
            >
              <Link
                href={`/blog?after=${encodeURIComponent(pageInfo.endCursor || '')}`}
                className="btn-ghost"
              >
                Load More Posts →
              </Link>
            </div>
          </RevealWrapper>
        )}
      </div>
    </section>
  )
}