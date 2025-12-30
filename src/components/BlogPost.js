import React from 'react'
import { useState, useEffect } from "react";


function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
                query {
                    user(username: "saminwankwo") {
                    publication {
                        posts(page: 0) {
                        title
                        slug
                        brief
                        }
                    }
                    }
                }
                `,
          }),
        });
        const data = await response.json();
        if (data.data?.user?.publication?.posts) {
          setPosts(data.data.user.publication.posts);
        } else {
          setError("Could not load posts");
        }
      } catch (e) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <section style={{ padding: "3rem 2rem 5rem" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {loading && <p className="text-center text-secondary">Loading posts...</p>}
        {error && <p className="text-center" style={{ color: "var(--accent-pink)" }}>{error}</p>}

        {!loading && !error && posts.length === 0 && (
          <p className="text-center text-secondary">No posts found.</p>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid">
            {posts.map((post) => (
              <div key={post.slug} className="glass-card">
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                  <a href={`https://saminwankwo.hashnode.dev/${post.slug}`} target="_blank" rel="noreferrer" style={{ color: "var(--accent-cyan)" }}>
                    {post.title}
                  </a>
                </h3>
                <p className="text-secondary" style={{ marginBottom: "1rem" }}>{post.brief}</p>
                <a href={`https://saminwankwo.hashnode.dev/${post.slug}`} target="_blank" rel="noreferrer" className="btn-neon" style={{ padding: "0.5rem 1.5rem", fontSize: "0.875rem" }}>
                  Read More
                </a>
              </div>
            ))}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href="https://saminwankwo.hashnode.dev" target="_blank" rel="noreferrer" className="btn-neon btn-neon-purple">
            Visit Full Blog
          </a>
        </div>
      </div>
    </section>
  );
}

export default BlogPosts
