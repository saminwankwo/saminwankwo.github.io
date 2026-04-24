import SectionHeader from '../components/SectionHeader'
import FadeIn from '../components/FadeIn'
import testimonials from '../data/testimonials'

export default function Testimonials() {
  return (
    <section id="testimonials" style={{
      background: 'var(--bg2)',
      padding: '5rem 2rem',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <SectionHeader tag="Social Proof" title="What People Say" />
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem'
        }}>
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div style={{
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                height: '100%',
                borderRadius: '2px'
              }}>
                <div style={{ fontSize: '22px', color: 'var(--green)', fontFamily: 'Georgia, serif', lineHeight: 1 }}>
                  "
                </div>
                
                <div style={{ fontSize: '12px', fontFamily: 'var(--mono)', color: 'var(--text2)', fontStyle: 'italic', lineHeight: 1.9, flex: 1 }}>
                  {t.quote}
                </div>
                
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
                  <div style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: '13px', color: 'var(--text)' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '10px', fontFamily: 'var(--mono)', color: 'var(--text3)', marginTop: '2px' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #testimonials { padding: 4rem 1.25rem !important; }
        }
      `}</style>
    </section>
  )
}
