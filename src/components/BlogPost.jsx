import React from 'react';
import { Link } from 'react-router-dom';

function BlogPost({ post }) {
  return (
    <section className="blog-post">
      <h2>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.content.slice(0, 80)}...</p>
    </section>
  );
}

export default BlogPost;
