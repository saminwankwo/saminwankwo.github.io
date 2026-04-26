import React, { useRef, useEffect, useState } from 'react'

export default function FadeIn({
  children,
  delay = 0,
  className = '',
  style = {},
  as: Component = 'div'
}) {
  const domRef = useRef()
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(domRef.current)
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    if (domRef.current) {
      observer.observe(domRef.current)
    }

    return () => {
      if (domRef.current) observer.unobserve(domRef.current)
    };
  }, []);

  const baseStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : 'translateY(22px)',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    ...style
  }

  return (
    <Component
      ref={domRef}
      className={className}
      style={baseStyle}
    >
      {children}
    </Component>
  )
}
