import Image from 'next/image'
import Link from 'next/link'
import { getProjectBySlug } from '@/data/projects'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-2xl font-semibold">Project not found</h1>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-2">{project.title}</h1>
      {project.tagline && <p className="text-slate-300 mb-6">{project.tagline}</p>}
      {project.image && (
        <div className="relative w-full h-64 mb-6">
          <Image src={project.image} alt={project.title} fill className="object-cover rounded-xl" />
        </div>
      )}

      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-slate-900/50 rounded-xl border border-white/10 p-6">
          <h2 className="text-xl font-semibold mb-3">Problem</h2>
          <p className="text-slate-300 mb-4">{project.description}</p>
          <h2 className="text-xl font-semibold mb-3">Solution</h2>
          <p className="text-slate-300 mb-4">Implemented scalable architecture, robust APIs, and reliable integrations tailored to the product context.</p>
          <h2 className="text-xl font-semibold mb-3">Outcome</h2>
          <p className="text-slate-300">Improved performance, developer velocity, and user adoption with measurable metrics.</p>
        </div>
        <aside className="bg-slate-900/50 rounded-xl border border-white/10 p-6">
          <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map(t => (
              <span key={t} className="px-2 py-1 text-xs rounded-md border border-white/10 text-slate-300">{t}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.links.demo && <Link href={project.links.demo} target="_blank" className="px-3 py-1.5 rounded-md bg-blue-500 text-white">Demo</Link>}
            {project.links.repo && <Link href={project.links.repo} target="_blank" className="px-3 py-1.5 rounded-md border border-white/10 text-slate-200">Repo</Link>}
            {project.links.readme && <Link href={project.links.readme} target="_blank" className="px-3 py-1.5 rounded-md border border-white/10 text-slate-200">Docs</Link>}
          </div>
        </aside>
      </section>
    </div>
  )
}