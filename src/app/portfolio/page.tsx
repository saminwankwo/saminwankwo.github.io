import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'

export default async function PortfolioPage({ searchParams }: { searchParams?: Promise<{ tag?: string }> }) {
  const params = await searchParams
  const tag = params?.tag
  const filtered = tag ? projects.filter(p => p.tech.includes(tag)) : projects

  const tags = Array.from(new Set(projects.flatMap(p => p.tech))).sort()

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Portfolio</h1>
      <div className="flex flex-wrap gap-2 mb-6">
        <Link href="/portfolio" className={!tag ? 'px-3 py-1.5 rounded-md bg-blue-500 text-white' : 'px-3 py-1.5 rounded-md border border-white/10 text-slate-200'}>All</Link>
        {tags.map(t => (
          <Link key={t} href={`/portfolio?tag=${encodeURIComponent(t)}`} className={tag===t ? 'px-3 py-1.5 rounded-md bg-blue-500 text-white' : 'px-3 py-1.5 rounded-md border border-white/10 text-slate-200'}>
            {t}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <article key={p.id} className="rounded-xl border border-white/10 bg-slate-900/50 overflow-hidden">
            {p.image && (
              <div className="relative w-full h-40">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">
                <Link href={`/portfolio/${p.slug || p.id}`} className="text-blue-400 hover:text-blue-300">{p.title}</Link>
              </h2>
              {p.tagline && <p className="text-slate-300 text-sm mb-2">{p.tagline}</p>}
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tech.slice(0,4).map(t => (
                  <span key={t} className="px-2 py-1 text-xs rounded-md border border-white/10 text-slate-300">{t}</span>
                ))}
              </div>
              <div className="flex gap-2">
                {p.links.demo && <Link href={p.links.demo} target="_blank" className="px-3 py-1.5 rounded-md bg-blue-500 text-white">Demo</Link>}
                {p.links.repo && <Link href={p.links.repo} target="_blank" className="px-3 py-1.5 rounded-md border border-white/10 text-slate-200">Repo</Link>}
                {p.links.readme && <Link href={p.links.readme} target="_blank" className="px-3 py-1.5 rounded-md border border-white/10 text-slate-200">Readme</Link>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}