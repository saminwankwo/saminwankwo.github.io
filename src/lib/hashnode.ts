export type HashnodePost = {
  title: string
  slug: string
  brief: string
  url?: string
  coverImage?: { url: string } | null
  tags?: { name: string }[]
  publishedAt?: string
}

type PageInfo = { endCursor?: string; hasNextPage: boolean }

export async function getHashnodePosts(host: string, first = 12, after?: string) {
  const query = `
    query PostsByPublication($host: String!, $first: Int!, $after: String) {
      publication(host: $host) {
        posts(first: $first, after: $after) {
          edges {
            node {
              title
              slug
              brief
              url
              coverImage { url }
              tags { name }
              publishedAt
            }
          }
          pageInfo { endCursor hasNextPage }
        }
      }
    }
  `

  const res = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { host, first, after } }),
    next: { revalidate: 3600 },
  })
  const json = await res.json()
  const edges = json?.data?.publication?.posts?.edges || []
  const pageInfo: PageInfo = json?.data?.publication?.posts?.pageInfo || { hasNextPage: false }
  const posts: HashnodePost[] = edges.map((e: any) => e.node)
  return { posts, pageInfo }
}