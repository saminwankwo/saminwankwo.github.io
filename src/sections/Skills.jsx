import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import Tag from '../components/Tag'
import skills from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" style={{
      background: 'var(--bg2)',
      padding: '5rem 2rem',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <SectionHeader tag="Technical Stack" title="Skills & Technologies" />
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem'
        }}>
          {skills.map((cat, i) => (
            <FadeIn key={cat.cat} delay={i * 60}>
              <div 
                className="skill-card"
                style={{
                  background: 'var(--bg3)',
                  border: '1px solid var(--border)',
                  padding: '1.4rem',
                  height: '100%',
                  transition: '0.2s',
                  borderRadius: '2px'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '1rem'
                }}>
                  <span style={{ color: 'var(--green)', fontSize: '17px' }}>{cat.icon}</span>
                  <span style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '13px', color: 'var(--text)' }}>
                    {cat.cat}
                  </span>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {cat.tags.map(t => (
                    <Tag key={t.label} primary={t.primary}>{t.label}</Tag>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      <style>{`
        .skill-card:hover { border-color: var(--green) !important; }
        @media (max-width: 768px) {
          #skills { padding: 4rem 1.25rem !important; }
        }
      `}</style>
    </section>
  )
}
