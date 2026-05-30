import React from 'react'

export default function Button({ 
  children, 
  variant = 'filled', 
  size = 'md', 
  as = 'button', 
  href, 
  download, 
  onClick, 
  disabled, 
  ariaLabel, 
  type = 'button',
  target,
  rel
}) {
  const Element = as

  const baseStyles = {
    fontFamily: 'var(--mono)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    border: 'none',
    opacity: disabled ? 0.6 : 1,
    pointerEvents: disabled ? 'none' : 'auto'
  }

  const variants = {
    filled: {
      background: 'var(--green)',
      color: 'var(--bg)',
    },
    ghost: {
      background: 'transparent',
      border: '1px solid var(--green)',
      color: 'var(--green)',
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border2)',
      color: 'var(--text2)',
    }
  }

  const sizes = {
    sm: { padding: '6px 14px', fontSize: '11px' },
    md: { padding: '11px 26px', fontSize: '12px' }
  }

  const currentStyles = {
    ...baseStyles,
    ...variants[variant],
    ...sizes[size]
  }

  // Handle hover via className if possible, but let's stick to the prompt's preference for inline/logic where needed.
  // Actually, for complex hovers we use a className and defined it in globals.css or use onMouseEnter.
  // The prompt says "Styles applied inline (no className dependency)" for Tag, let's follow similar for Button.
  
  const [hover, setHover] = React.useState(false)

  const hoverStyles = hover && !disabled ? {
    filled: { background: 'var(--green-dim)' },
    ghost: { background: 'var(--green)', color: 'var(--bg)' },
    outline: { borderColor: 'var(--green)', color: 'var(--green)' }
  }[variant] : {}

  return (
    <Element
      href={href}
      download={download}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      type={as === 'button' ? type : undefined}
      target={target}
      rel={rel}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...currentStyles, ...hoverStyles }}
    >
      {children}
    </Element>
  )
}
