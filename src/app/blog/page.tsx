import Image from 'next/image'
import Link from 'next/link'
import { getHashnodePosts } from '@/lib/hashnode'

export const revalidate = 3600

export default async function BlogPage({ searchParams }: { searchParams?: Promise<{ after?: string, tag?: string }> }) {
  const host = 'saminwankwo.hashnode.dev'
  const params = await searchParams
  const tag = params?.tag
  const after = params?.after
  const { posts, pageInfo } = await getHashnodePosts(host, 12, after)
  const filtered = tag ? posts.filter(p => (p.tags||[]).some(t => t.name === tag)) : posts

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Blog</h1>
      <div className="flex flex-wrap gap-2 mb-6">
        <Link href="/blog" className={!tag ? 'px-3 py-1.5 rounded-md bg-blue-500 text-white' : 'px-3 py-1.5 rounded-md border border-white/10 text-slate-200'}>All</Link>
        {Array.from(new Set(posts.flatMap(p => (p.tags||[]).map(t => t.name)))).slice(0,8).map(t => (
          <Link key={t} href={`/blog?tag=${encodeURIComponent(t)}`} className={tag===t ? 'px-3 py-1.5 rounded-md bg-blue-500 text-white' : 'px-3 py-1.5 rounded-md border border-white/10 text-slate-200'}>
            {t}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length === 0 && (
          <p className="text-slate-300">No posts found.</p>
        )}
        {filtered.map(post => (
          <article key={post.slug} className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
            {post.coverImage?.url && (
              <div className="relative w-full h-40 mb-3 overflow-hidden rounded-md">
                <Image src={post.coverImage.url} alt={post.title} fill className="object-cover" />
              </div>
            )}
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`https://${host}/${post.slug}`} className="text-blue-400 hover:text-blue-300">
                {post.title}
              </Link>
            </h2>
            <p className="text-slate-300 text-sm mb-3">{post.brief}</p>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.slice(0, 4).map(t => (
                  <span key={t.name} className="px-2 py-1 text-xs rounded-md border border-white/10 text-slate-300">
                    {t.name}
                  </span>
                ))}
              </div>
            )}
            <Link href={`https://${host}/${post.slug}`} className="inline-block px-3 py-1.5 rounded-md bg-blue-500 text-white hover:bg-blue-600">
              Read More
            </Link>
          </article>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        {!tag && pageInfo?.hasNextPage && (
          <Link
            href={`/blog?after=${encodeURIComponent(pageInfo.endCursor || '')}`}
            className="px-4 py-2 rounded-md bg-slate-800 border border-white/10 text-slate-200 hover:bg-slate-700"
          >
            Next Page
          </Link>
        )}
      </div>
    </div>
  )
}