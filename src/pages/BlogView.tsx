import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BlogView from '../components/blog/BlogView';
import FadeIn from '../components/animations/FadeIn';
import { blogPosts } from '../data/blog';

const BlogViewPage = () => {
  const { id } = useParams();
  const [postExists, setPostExists] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if post exists
    const post = blogPosts.find(post => post.id === id);
    setPostExists(!!post);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <div className="flex-1 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <FadeIn>
        <BlogView />
      </FadeIn>
      
      <Footer />
    </div>
  );
};

export default BlogViewPage;