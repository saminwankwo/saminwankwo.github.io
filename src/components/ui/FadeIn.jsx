import React, { useState, useEffect, useRef } from 'react'

export default function FadeIn({ 
  children, 
  delay = 0, 
  className, 
  style, 
  as: Element = 'div' 
}) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(domRef.current)
        }
      })
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    })

    if (domRef.current) {
      observer.observe(domRef.current)
    }

    return () => {
      if (domRef.current) observer.unobserve(domRef.current)
    }
  }, [])

  const currentStyle = {
    ...style,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : 'translateY(22px)',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`
  }

  return (
    <Element
      ref={domRef}
      className={className}
      style={currentStyle}
    >
      {children}
    </Element>
  )
}
