import { useState, useEffect } from 'react'
import CONFIG from '@config'

const GQL_BETA_URL = 'https://gql-beta.hashnode.com'

const POST_FIELDS = `
  title
  brief
  slug
  url
  readTimeInMinutes
  publishedAt
  coverImage { url }
  tags { name }
`

export function useHashnode({ first = 4 } = {}) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchPosts() {
      try {
        // New API (2025+): user(username).posts is public, no Pro required
        // Old publication(host) query is now Pro-gated and deprecated
        const response = await fetch(GQL_BETA_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
              query GetUserPosts($username: String!, $first: Int!) {
                user(username: $username) {
                  posts(first: $first) {
                    edges {
                      node {
                        ${POST_FIELDS}
                      }
                    }
                  }
                }
              }
            `,
            variables: {
              username: CONFIG.hashnodeUser,
              first
            }
          })
        })

        const result = await response.json()
        if (result.errors) {
          throw new Error(result.errors[0]?.message || 'Hashnode error')
        }
        const fetchedPosts = result?.data?.user?.posts?.edges?.map(({ node }) => ({
          title: node.title,
          brief: node.brief,
          slug: node.slug,
          url: node.url,
          readTime: `${node.readTimeInMinutes} min`,
          date: node.publishedAt,
          tag: node.tags[0]?.name || "Article",
          coverImage: node.coverImage?.url ? { url: node.coverImage.url } : null
        })) || []

        setPosts(fetchedPosts)
      } catch (err) {
        console.warn('Hashnode fetch failed:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [first])

  return { posts, loading, error }
}

export function useHashnodePost(slug) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!slug) return

    async function fetchPost() {
      try {
        // Fetch via user.posts and find by slug (public, no Pro needed)
        // We fetch enough posts to cover the blog; Hashnode id-based post query requires ID
        const response = await fetch(GQL_BETA_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
              query GetUserPostsForDetail($username: String!) {
                user(username: $username) {
                  posts(first: 100) {
                    edges {
                      node {
                        ${POST_FIELDS}
                        content { html }
                      }
                    }
                  }
                }
              }
            `,
            variables: {
              username: CONFIG.hashnodeUser
            }
          })
        })

        const result = await response.json()
        if (result.errors) {
          throw new Error(result.errors[0]?.message || 'Hashnode error')
        }
        const edges = result?.data?.user?.posts?.edges || []
        const match = edges.find(({ node }) => node.slug === slug)?.node || null

        if (!match) {
          setPost(null)
        } else {
          setPost({
            title: match.title,
            brief: match.brief,
            slug: match.slug,
            url: match.url,
            readTime: `${match.readTimeInMinutes} min`,
            date: match.publishedAt,
            tag: match.tags[0]?.name || "Article",
            coverImage: match.coverImage?.url ? { url: match.coverImage.url } : null,
            content: match.content
          })
        }
      } catch (err) {
        console.warn('Hashnode post fetch failed:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  return { post, loading, error }
}
