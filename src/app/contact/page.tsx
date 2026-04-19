import Link from 'next/link'

export default function ContactPage() {
  return (
    <>
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-semibold mb-2">Contact</h1>
          <p className="text-slate-300">Let’s build reliable systems with measurable impact.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/10 bg-slate-900/50 p-6 text-center">
              <div className="text-4xl mb-3">☕</div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">Collaboration</h3>
              <p className="text-slate-300 mb-4">Have a project and think I can help?</p>
              <a href="mailto:nwankwosami@gmail.com" className="inline-block px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">Email Me</a>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900/50 p-6 text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Hire Me</h3>
              <p className="text-slate-300 mb-4">Interested in hiring me for your project?</p>
              <Link href="/resume" className="inline-block px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">View Resume</Link>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900/50 p-6 text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-xl font-semibold mb-2 text-pink-300">Mentorship</h3>
              <p className="text-slate-300 mb-4">Need help learning web development?</p>
              <a href="https://www.twitter.com/saminwankwo" target="_blank" className="inline-block px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">DM on Twitter</a>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900/50 p-10 mt-8 text-center">
            <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
            <div className="flex flex-wrap gap-4 justify-center text-base">
              <a href="https://www.twitter.com/saminwankwo" target="_blank" className="text-cyan-300 hover:text-cyan-200">Twitter</a>
              <a href="https://www.linkedin.com/in/saminwankwo" target="_blank" className="text-cyan-300 hover:text-cyan-200">LinkedIn</a>
              <a href="https://github.com/saminwankwo" target="_blank" className="text-cyan-300 hover:text-cyan-200">GitHub</a>
              <a href="https://t.me/saminwankwo" target="_blank" className="text-cyan-300 hover:text-cyan-200">Telegram</a>
              <a href="https://web.facebook.com/nwankwo.samuel" target="_blank" className="text-cyan-300 hover:text-cyan-200">Facebook</a>
              <a href="https://hashnode.com/@saminwankwo" target="_blank" className="text-cyan-300 hover:text-cyan-200">Hashnode</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
