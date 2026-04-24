import { useGitHub } from '../hooks/useGitHub'
import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import { CONFIG } from '../data/config'

export default function GitHub() {
  const { user, repos, loading, error } = useGitHub()

  return (
    <section id="github" aria-label="GitHub activity" style={{ background: 'var(--bg)', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <SectionHeader tag="Open Source" title="GitHub Contributions" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* User Profile Card */}
          <FadeIn>
            <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: '2rem', borderRadius: '4px', height: '100%' }}>
              {loading ? (
                <div className="skeleton" style={{ height: '100px', width: '100%' }} />
              ) : error ? (
                <p style={{ color: 'var(--text3)', fontSize: '12px' }}>Unable to load GitHub profile.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src={user.avatar_url} alt={user.name} style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px solid var(--green)' }} />
                    <div>
                      <h3 style={{ fontSize: '18px', color: 'var(--text)' }}>{user.name}</h3>
                      <a href={user.html_url} target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: 'var(--green)', fontFamily: 'var(--mono)' }}>@{user.login}</a>
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text2)', fontFamily: 'var(--mono)', lineHeight: 1.6 }}>{user.bio}</p>
                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--green)' }}>{user.public_repos}</span>
                      <span style={{ fontSize: '10px', color: 'var(--text3)', textTransform: 'uppercase' }}>Repos</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--green)' }}>{user.followers}</span>
                      <span style={{ fontSize: '10px', color: 'var(--text3)', textTransform: 'uppercase' }}>Followers</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>

          {/* Repos Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
            {loading ? (
              Array(3).fill(0).map((_, i) => <div key={i} className="skeleton" style={{ height: '80px' }} />)
            ) : repos.slice(0, 3).map((repo, i) => (
              <FadeIn key={repo.id} delay={i * 100}>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ 
                    display: 'block', 
                    background: 'var(--bg3)', 
                    border: '1px solid var(--border)', 
                    padding: '1.25rem', 
                    borderRadius: '4px',
                    transition: '0.2s'
                  }}
                  className="repo-card"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h4 style={{ fontSize: '14px', color: 'var(--text)', fontFamily: 'var(--sans)' }}>{repo.name}</h4>
                    <span style={{ fontSize: '10px', color: 'var(--green)', fontFamily: 'var(--mono)' }}>{repo.language}</span>
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--text2)', fontFamily: 'var(--mono)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {repo.description || 'No description provided.'}
                  </p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .repo-card:hover { border-color: var(--green) !important; transform: translateY(-2px); }
      `}</style>
    </section>
  )
}
