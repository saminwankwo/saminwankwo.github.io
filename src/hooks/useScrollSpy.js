import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds, options = { rootMargin: '-40% 0px -55% 0px' }) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const observers = []

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }, options)

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
        observers.push(el)
      }
    })

    return () => {
      observers.forEach((el) => observer.unobserve(el))
    }
  }, [sectionIds, options])

  return activeId
}
