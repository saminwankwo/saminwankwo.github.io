import React from 'react'
import FadeIn from './FadeIn'

export default function SectionHeader({ tag, title, subtitle, id }) {
  return (
    <FadeIn style={{ marginBottom: '2.5rem' }}>
      <p className="section-tag">{tag}</p>
      <h2 id={id} className="section-title">{title}</h2>
      {subtitle && (
        <p style={{ 
          fontSize: '13px', 
          color: 'var(--text2)', 
          marginTop: '0.5rem', 
          fontFamily: 'var(--mono)' 
        }}>
          {subtitle}
        </p>
      )}
      <div className="section-line" />
    </FadeIn>
  )
}
