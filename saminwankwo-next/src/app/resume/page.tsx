import Link from 'next/link'

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-4">Online Resume</h1>
      <p className="text-slate-300 mb-6">A concise overview of experience, skills, and impact.</p>
      <Link href="/assets/Resume.pdf" target="_blank" className="px-4 py-2 rounded-md bg-blue-500 text-white">Download PDF</Link>
      <div className="mt-8 grid gap-6">
        <section className="rounded-xl border border-white/10 bg-slate-900/50 p-6">
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          <p className="text-slate-300">Highlights of backend engineering, API design, and system architecture.</p>
        </section>
        <section className="rounded-xl border border-white/10 bg-slate-900/50 p-6">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <p className="text-slate-300">Node.js, PHP/Laravel, AWS, Docker, databases, and more.</p>
        </section>
      </div>
    </div>
  )
}