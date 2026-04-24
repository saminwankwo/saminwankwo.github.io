import FadeIn from './FadeIn'

export default function SectionHeader({ tag, title }) {
  return (
    <FadeIn>
      <div style={{ marginBottom: '2.5rem' }}>
        <p style={{
          fontSize: '11px',
          color: 'var(--green)',
          fontFamily: 'var(--mono)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '0.5rem'
        }}>// {tag}</p>
        <h2 style={{
          fontFamily: 'var(--sans)',
          fontWeight: 800,
          fontSize: 'clamp(26px, 4vw, 38px)',
          letterSpacing: '-1px',
          color: 'var(--text)'
        }}>{title}</h2>
        <div style={{
          width: '40px',
          height: '2px',
          background: 'var(--green)',
          marginTop: '10px'
        }} />
      </div>
    </FadeIn>
  )
}
