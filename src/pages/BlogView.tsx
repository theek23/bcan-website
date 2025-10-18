import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BlogView from "../components/blog/BlogView";
import FadeIn from "../components/animations/FadeIn";
const BlogViewPage = () => {
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
