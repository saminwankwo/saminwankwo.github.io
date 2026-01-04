import Link from 'next/link'

export default function Home() {
  return (
    <section className="min-h-[60vh] bg-gradient-to-br from-[#0b1e3f] via-[#1e3a8a] to-[#0c4a6e] text-white flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-3">Nwankwo Samuel</h1>
        <p className="text-lg text-blue-100 mb-6">Backend Engineer | Full-Stack Developer</p>
        <p className="max-w-xl mx-auto text-slate-200 mb-8">Building scalable APIs, cloud-native applications, and robust backend systems.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/portfolio" className="px-4 py-2 rounded-md bg-blue-500 text-white">View Portfolio</Link>
          <Link href="/contact" className="px-4 py-2 rounded-md border border-white/10 text-white">Get In Touch</Link>
        </div>
      </div>
    </section>
  )
}
