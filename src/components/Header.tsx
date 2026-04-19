"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [theme, setTheme] = useState<'dark'|'light'>(() => {
    if (typeof window === 'undefined') return 'dark'
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Samuel Nwankwo
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/portfolio" className="text-slate-300 hover:text-white">Portfolio</Link>
          <Link href="/blog" className="text-slate-300 hover:text-white">Blog</Link>
          <Link href="/resume" className="text-slate-300 hover:text-white">Resume</Link>
          <Link href="/contact" className="text-slate-300 hover:text-white">Contact</Link>
          <button
            aria-label="Toggle theme"
            aria-pressed={theme === 'dark'}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="px-3 py-1.5 rounded-md border border-white/10 text-slate-200 hover:bg-slate-800"
          >{theme === 'dark' ? 'Light' : 'Dark'}</button>
        </div>
      </div>
    </nav>
  )
}
