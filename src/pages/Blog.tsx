import React from 'react';
import Navigation from '../components/Navigation';
import BlogHero from '../components/blog/BlogHero';
import FeaturedPosts from '../components/blog/FeaturedPosts';
import BlogGrid from '../components/blog/BlogGrid';
import Footer from '../components/Footer';
import FadeIn from '../components/animations/FadeIn';

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FadeIn>
        <BlogHero />
      </FadeIn>
      <FadeIn delay={0.2}>
        <FeaturedPosts />
      </FadeIn>
      <FadeIn delay={0.3}>
        <BlogGrid />
      </FadeIn>
      <Footer />
    </div>
  );
};

export default Blog;