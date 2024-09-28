"use client"

import React, { useEffect, useState } from 'react';
import styles from './cardList.module.css';
import { Card } from '../card/Card';

const getBlogs = async () => {
  try {
    const res = await fetch('/api/blog', { 
      cache: 'no-store',
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });
    if (!res.ok) throw new Error('Failed to fetch blogs');
    return res.json();  
  } catch (error) {
    console.error("Error loading blogs:", error);
    throw error;
  }
};

export const CardList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (error) {
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className={styles.message}>Loading blogs...</div>;
  if (error) return <div className={styles.message}>Error: {error}</div>;
  if (blogs.length === 0) return <div className={styles.message}>No blogs found.</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Posts</h2>
      <div className={styles.cards}>
        {blogs.map((blog) => (
          <Card
            key={blog._id}
            id={blog._id}
            image={blog.image}
            title={blog.title}
            category={blog.category}
            author={blog.author}
          />
        ))}
      </div>
    </div>
  );
};