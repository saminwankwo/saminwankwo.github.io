const HASHNODE_API_URL = 'https://gql.hashnode.com';

const GET_POSTS_QUERY = `
  query Publication {
    publication(host: "saminwankwo.hashnode.dev") {
      posts(first: 10) {
        edges {
          node {
            id
            title
            brief
            slug
            url
            publishedAt
            readTimeInMinutes
            tags {
              name
            }
          }
        }
      }
    }
  }
`;

export async function fetchHashnodePosts() {
  try {
    const response = await fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GET_POSTS_QUERY,
      }),
    });

    const { data } = await response.json();
    
    if (!data?.publication?.posts?.edges) {
      return [];
    }

    return data.publication.posts.edges.map(({ node }) => ({
      id: node.id,
      title: node.title,
      excerpt: node.brief,
      slug: node.slug,
      url: node.url,
      date: new Date(node.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
      readTime: `${node.readTimeInMinutes} min`,
      tag: node.tags?.[0]?.name || 'Engineering',
    }));
  } catch (error) {
    console.error('Error fetching Hashnode posts:', error);
    return [];
  }
}
