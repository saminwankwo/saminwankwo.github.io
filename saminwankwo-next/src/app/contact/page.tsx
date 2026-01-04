export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-4">Contact</h1>
      <p className="text-slate-300 mb-6">Email me at <a className="text-blue-400" href="mailto:nwankwosami@gmail.com">nwankwosami@gmail.com</a></p>
      <form className="grid gap-4">
        <input className="rounded-md border border-white/10 bg-slate-900/50 px-3 py-2" placeholder="Your name" />
        <input className="rounded-md border border-white/10 bg-slate-900/50 px-3 py-2" placeholder="Your email" />
        <textarea className="rounded-md border border-white/10 bg-slate-900/50 px-3 py-2" rows={5} placeholder="Message" />
        <button className="px-4 py-2 rounded-md bg-blue-500 text-white">Send</button>
      </form>
    </div>
  )
}