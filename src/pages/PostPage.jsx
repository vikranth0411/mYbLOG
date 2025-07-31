import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../App';

function PostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) return <p>Post not found.</p>;

  return (
    <article className="blog-post">
      <h2>{post.title}</h2>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Date:</strong> {post.date}</p>
      <p style={{ marginTop: '1rem' }}>{post.content}</p>
      <p style={{ marginTop: '2rem' }}>
        <Link to="/">← Back to Blog</Link>
      </p>
    </article>
  );
}

export default PostPage;
