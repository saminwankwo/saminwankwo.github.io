import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { getHashnodePosts } from '@/lib/hashnode'

export default async function Home() {
  const host = 'saminwankwo.hashnode.dev'
  const { posts } = await getHashnodePosts(host, 6)
  const featured = projects.slice(0, 6)

  return (
    <>
    <section className="min-h-[70vh] bg-gradient-to-br from-[#0b1e3f] via-[#1e3a8a] to-[#0c4a6e] text-white flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Samuel Nwankwo
        </h1>
        <p className="text-lg md:text-xl text-blue-100">Backend Engineer • Full‑Stack Developer</p>
        <p className="max-w-2xl mx-auto text-slate-200 mt-4">
          Building scalable APIs, cloud‑native applications, and robust backend systems.
        </p>
        <p className="max-w-2xl mx-auto text-slate-300 mt-2">
          7+ years in PHP/Laravel • 5+ years in Node.js
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          <Link href="/portfolio" className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">View Portfolio</Link>
          <Link href="/resume" className="px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/10">View Resume</Link>
          <Link href="/contact" className="px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/10">Contact Me</Link>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mt-8">
          <span className="px-3 py-1 text-xs rounded-md border border-white/10 text-slate-200">Scalable APIs</span>
          <span className="px-3 py-1 text-xs rounded-md border border-white/10 text-slate-200">Cloud‑native</span>
          <span className="px-3 py-1 text-xs rounded-md border border-white/10 text-slate-200">CI/CD</span>
          <span className="px-3 py-1 text-xs rounded-md border border-white/10 text-slate-200">Auth</span>
          <span className="px-3 py-1 text-xs rounded-md border border-white/10 text-slate-200">Payments</span>
        </div>
      </div>
    </section>
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Skills & Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="rounded-xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-lg font-semibold mb-3">Backend</h3>
            <ul className="text-slate-300 space-y-2"><li>Node.js</li><li>NestJS</li><li>Express.js</li><li>PHP/Laravel</li></ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-lg font-semibold mb-3">Databases</h3>
            <ul className="text-slate-300 space-y-2"><li>MongoDB</li><li>MySQL</li><li>PostgreSQL</li></ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-lg font-semibold mb-3">Frontend</h3>
            <ul className="text-slate-300 space-y-2"><li>React</li><li>HTML/CSS/JS</li><li>Bootstrap</li></ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-lg font-semibold mb-3">DevOps & Cloud</h3>
            <ul className="text-slate-300 space-y-2"><li>AWS</li><li>Docker</li><li>CI/CD</li></ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-lg font-semibold mb-3">Other</h3>
            <ul className="text-slate-300 space-y-2"><li>GraphQL</li><li>TypeScript</li></ul>
          </div>
        </div>
      </div>
    </section>
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(p => (
            <article key={p.id} className="rounded-xl border border-white/10 bg-slate-900/50 overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg">
              {p.image && (
                <div className="relative w-full h-40">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">
                  <Link href={`/portfolio/${p.slug || p.id}`} className="text-blue-400 hover:text-blue-300">{p.title}</Link>
                </h3>
                {p.tagline && <p className="text-slate-300 text-sm mb-2">{p.tagline}</p>}
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tech.slice(0,4).map(t => (
                    <span key={t} className="px-2 py-1 text-xs rounded-md border border-white/10 text-slate-300">{t}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {p.links.demo && <Link href={p.links.demo} target="_blank" className="px-3 py-1.5 rounded-md bg-blue-500 text-white hover:bg-blue-600">Demo</Link>}
                  {p.links.repo && <Link href={p.links.repo} target="_blank" className="px-3 py-1.5 rounded-md border border-white/10 text-slate-200 hover:bg-white/10">Repo</Link>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <article key={post.slug} className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
              {post.coverImage?.url && (
                <div className="relative w-full h-40 mb-3 overflow-hidden rounded-md">
                  <Image src={post.coverImage.url} alt={post.title} fill className="object-cover" />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">
                <Link href={`https://${host}/${post.slug}`} className="text-blue-400 hover:text-blue-300">
                  {post.title}
                </Link>
              </h3>
              <p className="text-slate-300 text-sm mb-3">{post.brief}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-10">
          <h2 className="text-2xl font-semibold mb-3">Ready to collaborate?</h2>
          <p className="text-slate-300 mb-6">Let’s build reliable systems with measurable impact.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">Get In Touch</Link>
            <Link href="/portfolio" className="px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/10">View Portfolio</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
