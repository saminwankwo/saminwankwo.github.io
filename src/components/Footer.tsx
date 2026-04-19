"use client"
import Link from "next/link"
import { useMemo } from "react"

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Samuel Nwankwo
            </Link>
            <div className="text-slate-400 text-sm">Backend Engineer · Full‑Stack Developer</div>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-sm">
            <Link href="/portfolio" className="text-slate-300 hover:text-white">Portfolio</Link>
            <Link href="/blog" className="text-slate-300 hover:text-white">Blog</Link>
            <Link href="/resume" className="text-slate-300 hover:text-white">Resume</Link>
            <Link href="/contact" className="text-slate-300 hover:text-white">Contact</Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6 text-sm">
          <a href="https://www.twitter.com/saminwankwo" target="_blank" className="text-cyan-300 hover:text-cyan-200">Twitter</a>
          <a href="https://www.linkedin.com/in/saminwankwo" target="_blank" className="text-cyan-300 hover:text-cyan-200">LinkedIn</a>
          <a href="https://github.com/saminwankwo" target="_blank" className="text-cyan-300 hover:text-cyan-200">GitHub</a>
          <a href="https://t.me/saminwankwo" target="_blank" className="text-cyan-300 hover:text-cyan-200">Telegram</a>
          <a href="https://web.facebook.com/nwankwo.samuel" target="_blank" className="text-cyan-300 hover:text-cyan-200">Facebook</a>
          <a href="https://hashnode.com/@saminwankwo" target="_blank" className="text-cyan-300 hover:text-cyan-200">Hashnode</a>
        </div>
        <div className="text-slate-500 text-xs mt-6 text-center md:text-left">
          ©  2020 - {year} Samuel Nwankwo. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
