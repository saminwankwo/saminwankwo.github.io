import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Tag from '../components/Tag'
import { useGitHub } from '../hooks/useGitHub'
import { CONFIG } from '../data/config'

export default function GitHub() {
  const { user, repos, loading, error } = useGitHub()

  return (
    <section id="github" aria-labelledby="github-heading" style={{
      background: 'var(--bg)',
      padding: 'var(--section-py) var(--section-px)'
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        <SectionHeader tag="Open Source" title="GitHub Activity" />

        <div className="github-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem'
        }}>
          {/* LEFT CARD: Top Repositories */}
          <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Top Repositories
            </h3>

            {loading ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[1,2,3,4].map(i => (
                  <div key={i} className="skeleton" style={{ height: '60px', width: '100%' }} />
                ))}
              </div>
            ) : error ? (
              <p style={{ fontSize: '12px', color: 'var(--text3)', fontFamily: 'var(--mono)' }}>GitHub stats unavailable</p>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {repos.map((repo, idx) => (
                  <li 
                    key={repo.id}
                    style={{
                      padding: '0.75rem 0',
                      borderBottom: idx === repos.length - 1 ? 'none' : '1px solid var(--border)'
                    }}
                  >
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--green)', display: 'block', marginBottom: '4px' }}
                    >
                      {repo.name}
                    </a>
                    <p style={{ 
                      fontSize: '11px', 
                      fontFamily: 'var(--mono)', 
                      color: 'var(--text3)',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      marginBottom: '4px'
                    }}>
                      {repo.description || 'No description provided.'}
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <Tag size="sm" primary={false}>{repo.language || 'Code'}</Tag>
                      <span style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
                        ★ {repo.stargazers_count}
                      </span>
                      <span style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
                        ⑂ {repo.forks_count}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            
            <a 
              href={CONFIG.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--green)', marginTop: '1rem', display: 'block' }}
            >
              View all on GitHub →
            </a>
          </div>

          {/* RIGHT CARD: Stats & Streak */}
          <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Contribution Stats
            </h3>

            {loading ? (
              <div className="skeleton" style={{ height: '200px', width: '100%' }} />
            ) : error ? (
              <p style={{ fontSize: '12px', color: 'var(--text3)', fontFamily: 'var(--mono)' }}>GitHub stats unavailable</p>
            ) : (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', padding: '1rem', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '24px', color: 'var(--green)' }}>
                      {user.public_repos}
                    </div>
                    <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase' }}>Repos</div>
                  </div>
                  <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', padding: '1rem', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '24px', color: 'var(--green)' }}>
                      {user.followers}
                    </div>
                    <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase' }}>Followers</div>
                  </div>
                  <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', padding: '1rem', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '24px', color: 'var(--green)' }}>
                      {user.following}
                    </div>
                    <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase' }}>Following</div>
                  </div>
                  <div style={{ background: 'var(--bg3)', border: '1px solid var(--border)', padding: '1rem', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '24px', color: 'var(--green)' }}>
                      {user.public_gists}
                    </div>
                    <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase' }}>Gists</div>
                  </div>
                </div>

                <img 
                  src={`https://github-readme-streak-stats.herokuapp.com?user=${CONFIG.github}&theme=dark&background=0f1217&ring=00ff9d&fire=00ff9d&currStreakLabel=00ff9d&sideLabels=8892a4&dates=4a5568&border=1e2530`}
                  alt="GitHub contribution streak for Samuel Nwankwo"
                  width="495"
                  height="195"
                  style={{ width: '100%', height: 'auto', border: '1px solid var(--border)', display: 'block' }}
                  loading="lazy"
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />

              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .github-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
