// app/components/LatestPosts.js
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './latestPost.module.css'

export default function LatestPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLatestPosts() {
      try {
        const response = await fetch('/api/blog/latest');
        if (!response.ok) {
          throw new Error('Failed to fetch latest posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to load latest posts');
      } finally {
        setLoading(false);
      }
    }

    fetchLatestPosts();
  }, []);

  if (loading) return <div>Loading latest posts...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} className={styles.postCard}>
          <h5>{post.title}</h5>
          <p>By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
          <Link href={`/blog/${post._id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}