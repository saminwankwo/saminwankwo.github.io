'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/experience', label: 'Experience' },
  { href: '/portfolio',  label: 'Projects'   },
  { href: '/freelance',  label: 'Freelance'  },
  { href: '/blog',       label: 'Blog'       },
  { href: '/contact',    label: 'Contact'    },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          height: '56px',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
          background: 'rgba(10,12,15,0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border)',
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-syne), sans-serif',
            fontWeight: 800,
            fontSize: '18px',
            color: '#fff',
            textDecoration: 'none',
            letterSpacing: '-0.5px',
          }}
        >
          Samuel<span style={{ color: 'var(--text-muted)' }}>.dev</span>
        </Link>

        {/* Desktop nav links */}
        <ul
          className="hidden md:flex"
          style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '2rem' }}
        >
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                style={{
                  textDecoration: 'none',
                  color: isActive(href) ? 'var(--accent-green)' : 'var(--text-muted)',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-jetbrains), monospace',
                  transition: 'color .2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-green)')}
                onMouseLeave={e => (e.currentTarget.style.color = isActive(href) ? 'var(--accent-green)' : 'var(--text-muted)')}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '1rem' }}>
          <Link href="/contact" className="btn-hire">Hire Me</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            fontSize: '22px',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            position: 'fixed',
            top: '56px',
            left: 0, right: 0,
            zIndex: 999,
            background: 'rgba(10,12,15,0.98)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid var(--border)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                textDecoration: 'none',
                color: isActive(href) ? 'var(--accent-green)' : 'var(--text-muted)',
                fontSize: '13px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-jetbrains), monospace',
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn-hire" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }} onClick={() => setOpen(false)}>
            Hire Me
          </Link>
        </div>
      )}
    </>
  )
}
