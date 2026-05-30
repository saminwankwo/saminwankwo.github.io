import { useState, useEffect } from 'react'
import CONFIG from '@config'

const GQL_URL = 'https://gql.hashnode.com'

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
        const response = await fetch(GQL_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
              query GetUserPosts($username: String!, $first: Int!) {
                user(username: $username) {
                  publication(host: "${CONFIG.hashnodeBlog}") {
                    posts(first: $first) {
                      edges {
                        node {
                          ${POST_FIELDS}
                        }
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

        const { data } = await response.json()
        const fetchedPosts = data?.user?.publication?.posts?.edges?.map(({ node }) => ({
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
        const response = await fetch(GQL_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
              query GetPost($host: String!, $slug: String!) {
                publication(host: $host) {
                  post(slug: $slug) {
                    ${POST_FIELDS}
                    content { html }
                  }
                }
              }
            `,
            variables: {
              host: CONFIG.hashnodeBlog,
              slug
            }
          })
        })

        const { data } = await response.json()
        const node = data?.publication?.post

        if (!node) {
          setPost(null)
        } else {
          setPost({
            title: node.title,
            brief: node.brief,
            slug: node.slug,
            url: node.url,
            readTime: `${node.readTimeInMinutes} min`,
            date: node.publishedAt,
            tag: node.tags[0]?.name || "Article",
            coverImage: node.coverImage?.url ? { url: node.coverImage.url } : null,
            content: node.content
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
