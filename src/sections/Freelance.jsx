import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import freelance from '../data/freelance'

export default function Freelance() {
  return (
    <section id="freelance" style={{
      background: 'var(--bg)',
      padding: '5rem 2rem'
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <SectionHeader tag="Global Clients" title="Freelance Engagements" />
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          {freelance.map((client, i) => (
            <FadeIn key={`${client.name}-${i}`} delay={i * 60}>
              <div className="freelance-card" style={{
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                padding: '1rem 1.2rem',
                transition: '0.2s',
                borderRadius: '2px',
                height: '100%'
              }}>
                <div style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '13px', color: 'var(--text)', marginBottom: '0.25rem' }}>
                  {client.flag} {client.name}
                </div>
                <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                  {client.country} · {client.sector}
                </div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--text2)' }}>
                  {client.stack}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      <style>{`
        .freelance-card:hover { border-color: var(--green) !important; }
        @media (max-width: 768px) {
          #freelance { padding: 4rem 1.25rem !important; }
        }
      `}</style>
    </section>
  )
}
