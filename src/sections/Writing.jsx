import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import articles from '../data/articles'

export default function Writing() {
  return (
    <section id="writing" style={{
      background: 'var(--bg)',
      padding: '5rem 2rem'
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <SectionHeader tag="Tech Content" title="Articles & Writing" />
        
        <FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--border)' }}>
            {articles.map((art, i) => (
              <a 
                href={art.href}
                key={i}
                className="article-row"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1.5rem',
                  padding: '1.1rem 1.4rem',
                  background: 'var(--bg2)',
                  borderBottom: i < articles.length - 1 ? '1px solid var(--border)' : 'none',
                  transition: '0.2s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '9px',
                    fontFamily: 'var(--mono)',
                    color: 'var(--green)',
                    border: '1px solid rgba(0,255,157,0.4)',
                    background: 'rgba(0,255,157,0.05)',
                    padding: '2px 8px',
                    borderRadius: '2px'
                  }}>
                    {art.tag}
                  </span>
                  <span style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '14px', color: 'var(--text)' }}>
                    {art.title}
                  </span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
                    {art.readTime}
                  </span>
                  <span style={{ color: 'var(--text3)', fontSize: '14px' }}>↗</span>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>
        
        <FadeIn delay={150}>
          <div style={{ textAlign: 'center', marginTop: '2.5rem', fontSize: '12px', fontFamily: 'var(--mono)', color: 'var(--text3)' }}>
            Also creating backend dev content on YouTube →{' '}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>
              Subscribe
            </a>
          </div>
        </FadeIn>
      </div>
      <style>{`
        .article-row:hover { background: var(--bg3) !important; }
        @media (max-width: 768px) {
          #writing { padding: 4rem 1.25rem !important; }
        }
      `}</style>
    </section>
  )
}
