'use client'

import { useEffect, useRef, CSSProperties, ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
}

export default function RevealWrapper({ children, delay = 0, className = '', style }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  )
}
