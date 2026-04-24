import { useState, useEffect } from 'react';
import { CONFIG } from '../data/config';

const HASHNODE_API_URL = 'https://gql.hashnode.com';

const GET_POSTS_QUERY = `
  query Publication($host: String!, $first: Int!) {
    publication(host: $host) {
      posts(first: $first) {
        edges {
          node {
            id
            title
            brief
            slug
            url
            publishedAt
            readTimeInMinutes
            coverImage {
              url
            }
            tags {
              name
            }
          }
        }
      }
    }
  }
`;

const GET_SINGLE_POST_QUERY = `
  query Post($host: String!, $slug: String!) {
    publication(host: $host) {
      post(slug: $slug) {
        id
        title
        brief
        publishedAt
        readTimeInMinutes
        url
        content {
          html
        }
        coverImage {
          url
        }
        tags {
          name
        }
      }
    }
  }
`;

export function useHashnode({ first = 4, slug = null } = {}) {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const query = slug ? GET_SINGLE_POST_QUERY : GET_POSTS_QUERY;
        const variables = slug 
          ? { host: CONFIG.hashnodeBlog, slug } 
          : { host: CONFIG.hashnodeBlog, first };

        const response = await fetch(HASHNODE_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query, variables }),
        });

        const { data, errors } = await response.json();
        
        if (errors) {
          throw new Error(errors[0].message);
        }

        if (slug) {
          setPost(data.publication.post);
        } else {
          setPosts(data.publication.posts.edges.map(edge => edge.node));
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [first, slug]);

  return { posts, post, loading, error };
}
