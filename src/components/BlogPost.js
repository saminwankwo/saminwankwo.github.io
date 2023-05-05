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
    <>
        {/* <!-- Main Wrapper Content Begins  --> */}

			<section className="cta-section theme-bg-light py-5">
				<div className="container text-center single-col-max-width">
					<h2 className="heading">Blog Post</h2>
                        <div className="intro">
                            <p>I write on hashnode too when I am not writing on VSCode</p>
                            <a className="btn btn-primary" href="https://saminwankwo.hashnode.dev" target="_blank" rel='noreferrer'><i className="fas fa-blog fa-fw mr-2"></i> Visit Blog</a>
                        </div>
					</div>
			</section>

        <section className="projects-list px-3 py-5 p-md-5">
            <div className="project-cards row isotope">
                {posts.map((post) => (
                    <div className="isotope-item col-md-6 mb-5">
                    <div className="card project-card"  key={post.slug}>
                        <div className='card-body'>
                            <div className='card-title' style={{textAlign:"center"}}><h3>{post.title}</h3></div>
                            {post.brief}
                            <div className='card-footer'><a href={`https://saminwankwo.hashnode.dev/${post.slug}`}>Read more</a></div>
                        </div>

                    </div>
                    </div>
                ))}
                </div>
            {/* </div>             */}
            
        </section>

    </>
    // <div>
    //   {posts.map((post) => (
    //     <div key={post.slug}>
    //       <h2>{post.title}</h2>
    //       <p>{post.brief}</p>
    //       <a href={`https://saminwankwo.hashnode.dev/${post.slug}`}>Read more</a>
    //     </div>
    //   ))}
    // </div>
  );
}

export default BlogPosts;
