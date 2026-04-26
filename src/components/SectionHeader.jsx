import React from 'react'
import FadeIn from './FadeIn'

export default function SectionHeader({ tag, title, subtitle, id }) {
  return (
    <FadeIn style={{ marginBottom: '2.5rem' }}>
      <p className="section-tag" id={id}>{tag}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p style={{
          fontSize: 13,
          color: 'var(--text2)',
          marginTop: '0.75rem',
          lineHeight: 1.8,
          maxWidth: '600px'
        }}>
          {subtitle}
        </p>
      )}
      <div className="section-line" />
    </FadeIn>
  )
}
