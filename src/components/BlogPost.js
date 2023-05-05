import React from 'react'
import { useState, useEffect } from "react";



function BlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://api.hashnode.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: ''
          },
          body: JSON.stringify({
            query: `
              query {
                user(username: "saminwankwo") {
                  publication {
                    posts {
                      title
                      slug
                      brief
                    }
                  }
                }
              }
            `,
          }),
        }
      );
      const data = await response.json();
      console.log(data)
      setPosts(data.data.user.publication.posts);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.brief}</p>
          <a href={`https://saminwankwo.hashnode.dev/${post.slug}`}>Read more</a>
        </div>
      ))}
    </div>
  );
}

export default BlogPosts;
