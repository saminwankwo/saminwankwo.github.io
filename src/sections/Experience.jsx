import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import experience from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" style={{
      background: 'var(--bg)',
      padding: '5rem 2rem'
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <SectionHeader tag="Work History" title="Professional Experience" />
        
        <div style={{ position: 'relative' }} className="timeline-wrapper">
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'var(--border)'
          }} />
          
          {experience.map((job, i) => (
            <FadeIn key={`${job.company}-${i}`} delay={i * 60}>
              <div style={{
                paddingLeft: '2rem',
                paddingBottom: '2.75rem',
                position: 'relative'
              }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: '-5px',
                  top: '5px',
                  width: '11px',
                  height: '11px',
                  borderRadius: '50%',
                  background: job.current ? 'var(--green)' : 'var(--bg)',
                  border: job.current ? 'none' : '2px solid var(--green)'
                }} />
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <h3 style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '17px', color: 'var(--text)' }}>
                    {job.company}
                  </h3>
                  {job.current && (
                    <span style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      background: 'rgba(0,255,157,0.1)',
                      color: 'var(--green)',
                      border: '1px solid rgba(0,255,157,0.3)',
                      padding: '2px 8px',
                      borderRadius: '2px'
                    }}>Current</span>
                  )}
                </div>
                
                <div style={{ color: 'var(--blue)', fontSize: '13px', fontFamily: 'var(--mono)', marginBottom: '4px' }}>
                  {job.role}
                </div>
                <div style={{ color: 'var(--text3)', fontSize: '11px', fontFamily: 'var(--mono)', letterSpacing: '0.04em', marginBottom: '1rem' }}>
                  {job.loc} · {job.date}
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
                  {job.tech.map(t => (
                    <span key={t} style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '10px',
                      color: 'var(--amber)',
                      border: '1px solid rgba(255,209,102,0.25)',
                      background: 'rgba(255,209,102,0.05)',
                      padding: '2px 8px',
                      borderRadius: '2px'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
                
                <ul style={{ listStyle: 'none' }}>
                  {job.bullets.map((b, bi) => (
                    <li key={bi} style={{
                      fontSize: '12px',
                      fontFamily: 'var(--mono)',
                      color: 'var(--text2)',
                      lineHeight: 1.9,
                      paddingLeft: '1.2rem',
                      position: 'relative',
                      marginBottom: '8px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--green)'
                      }}>›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #experience { padding: 4rem 1.25rem !important; }
        }
      `}</style>
    </section>
  )
}
