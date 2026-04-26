import { useState, useEffect } from 'react'
import { CONFIG } from '../data/config'

export function useHashnode({ first = 4 } = {}) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const query = `
          query GetPosts($username: String!, $first: Int!) {
            user(username: $username) {
              publications(first: 1) {
                edges {
                  node {
                    posts(first: $first) {
                      edges {
                        node {
                          title
                          brief
                          slug
                          url
                          readTimeInMinutes
                          publishedAt
                          coverImage { url }
                          tags { name }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `;

        const response = await fetch('https://gql.hashnode.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query,
            variables: { username: CONFIG.hashnode, first }
          }),
        });

        const result = await response.json();
        const fetchedPosts = result?.data?.user?.publications?.edges[0]?.node?.posts?.edges || [];
        
        setPosts(fetchedPosts.map(({ node }) => ({
          title: node.title,
          brief: node.brief,
          slug: node.slug,
          url: node.url,
          readTime: node.readTimeInMinutes + " min",
          date: node.publishedAt,
          tag: node.tags[0]?.name || "Article",
          coverImage: node.coverImage
        })));
        setLoading(false);
      } catch (err) {
        console.warn('Hashnode fetch error:', err);
        setError(true);
        setLoading(false);
      }
    }

    fetchPosts();
  }, [first]);

  return { posts, loading, error };
}

export function useHashnodePost(slug) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!slug) return;

    async function fetchPost() {
      try {
        const query = `
          query GetPost($username: String!, $slug: String!) {
            user(username: $username) {
              publication(host: "${CONFIG.hashnodeBlog}") {
                post(slug: $slug) {
                  title
                  brief
                  slug
                  url
                  readTimeInMinutes
                  publishedAt
                  coverImage { url }
                  tags { name }
                  content { html }
                }
              }
            }
          }
        `;

        const response = await fetch('https://gql.hashnode.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query,
            variables: { username: CONFIG.hashnode, slug }
          }),
        });

        const result = await response.json();
        const fetchedPost = result?.data?.user?.publication?.post;

        if (!fetchedPost) {
          setError(true);
        } else {
          setPost({
            ...fetchedPost,
            readTime: fetchedPost.readTimeInMinutes + " min",
            date: fetchedPost.publishedAt,
            tag: fetchedPost.tags[0]?.name || "Article"
          });
        }
        setLoading(false);
      } catch (err) {
        console.warn('Hashnode post fetch error:', err);
        setError(true);
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  return { post, loading, error };
}
