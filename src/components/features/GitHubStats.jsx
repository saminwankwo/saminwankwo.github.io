import React from 'react'
import CONFIG from '@config'
import { useGitHub } from '@hooks/useGitHub'
import Tag from '@ui/Tag'
import Skeleton from '@ui/Skeleton'

export default function GitHubStats() {
  const { user, repos, loading, error, rateLimited } = useGitHub()

  if (loading) {
    return (
      <div className="github-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
        <Skeleton count={6} height="80px" />
        <Skeleton count={1} height="300px" />
      </div>
    )
  }

  if (error || !user) {
    return <p style={{ color: 'var(--text3)', fontFamily: 'var(--mono)', fontSize: '12px' }}>GitHub stats unavailable</p>
  }

  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${CONFIG.githubUser}&theme=tokyonight&hide_border=true&background=0f1217`

  return (
    <div className="github-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
      {/* Top Repositories */}
      <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: '1.5rem' }}>
        <h3 style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          Top Repositories
        </h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {repos.map(repo => (
            <li key={repo.name}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                <span style={{ fontSize: '13px', fontFamily: 'var(--mono)', color: 'var(--green)', fontWeight: 600 }}>{repo.name}</span>
                <p style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', margin: '4px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {repo.description || 'No description provided.'}
                </p>
                <footer style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '10px', color: 'var(--text3)', fontFamily: 'var(--mono)' }}>
                  <Tag size="sm">{repo.language || 'Code'}</Tag>
                  <span>★ {repo.stargazers_count}</span>
                  <span>⑂ {repo.forks_count}</span>
                </footer>
              </a>
            </li>
          ))}
        </ul>
        <a 
          href={CONFIG.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'block', marginTop: '1.5rem', fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--green)' }}
        >
          View all on GitHub →
        </a>
      </div>

      {/* Contribution Stats */}
      <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: '1.5rem' }}>
        <h3 style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          Contribution Stats
        </h3>
        
        <div className="github-stats-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {[
            { label: 'Public Repos', value: user.public_repos },
            { label: 'Followers', value: user.followers },
            { label: 'Following', value: user.following },
            { label: 'Public Gists', value: user.public_gists }
          ].map(stat => (
            <div key={stat.label} style={{ background: 'var(--bg3)', border: '1px solid var(--border)', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: '24px', color: 'var(--green)' }}>{stat.value}</div>
              <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <img 
            src={streakUrl} 
            width="100%" 
            height="auto"
            loading="lazy" 
            alt="GitHub contribution streak"
            style={{ border: '1px solid var(--border)', maxWidth: '100%', height: 'auto' }}
            onError={e => e.currentTarget.style.display = 'none'} 
          />
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .github-stats-grid { gap: 1.5rem !important; }
        }
        @media (max-width: 480px) {
          .github-stats-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 360px) {
          .github-stats-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
