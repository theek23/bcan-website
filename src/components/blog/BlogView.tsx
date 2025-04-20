import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft, Clock, Share2, Bookmark, MessageSquare } from 'lucide-react';
import { blogPosts } from '../../data/blog';

interface BlogParams {
  id: string;
}

interface Author {
  name: string;
  avatar: string;
  bio: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: Author;
  content: string;
}

const BlogView = () => {
  const { id } = useParams<BlogParams>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [readingTime, setReadingTime] = useState<string>('');
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  // Calculate reading time based on content length
  const calculateReadingTime = (content: string): string => {
    const wordsPerMinute = 200;
    const textOnly = content.replace(/<[^>]*>/g, '');
    const wordCount = textOnly.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  useEffect(() => {
    // Find the current post
    const currentPost = blogPosts.find(post => post.id === id);
    
    if (currentPost) {
      // Calculate reading time
      const time = calculateReadingTime(currentPost.content);
      setReadingTime(time);
      
      setPost(currentPost);
      
      // Find related posts (same category, excluding current post)
      const related = blogPosts
        .filter(p => p.category === currentPost.category && p.id !== id)
        .slice(0, 2);
      
      setRelatedPosts(related);
    }
    
    setLoading(false);
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [id]);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  // Function to process content headings and add IDs for table of contents
  const processContentWithIds = (content: string) => {
    let processedContent = content;
    
    // Find all headings in the content and add IDs
    const headingRegex = /<h([23])[^>]*>(.*?)<\/h\1>/g;
    let match;
    
    while ((match = headingRegex.exec(content)) !== null) {
      const headingLevel = match[1];
      const headingText = match[2];
      const headingId = headingText.toLowerCase().replace(/\s+/g, '-');
      
      // Replace the original heading with one that has an ID
      const originalHeading = match[0];
      const newHeading = `<h${headingLevel} id="${headingId}">${headingText}</h${headingLevel}>`;
      
      processedContent = processedContent.replace(originalHeading, newHeading);
    }
    
    return processedContent;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
        <Link 
          to="/blog" 
          className="flex items-center text-pink-600 hover:text-pink-700"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Link>
      </div>
    );
  }

  // Process content to add IDs to headings
  const processedContent = processContentWithIds(post.content);

  return (
    <main className="flex-1">
      {/* Hero Section with Parallax Effect */}
      <div className="w-full h-[60vh] relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-cover transform scale-110 transition-transform duration-3000"
          style={{
            backgroundImage: `url(${post.image})`,
            transformOrigin: 'center',
            animation: 'subtle-zoom 30s infinite alternate'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center text-sm text-white bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                <Calendar size={14} className="mr-1" />
                {post.date}
              </span>
              <span className="inline-flex items-center text-sm text-white bg-pink-600 px-3 py-1 rounded-full">
                <Tag size={14} className="mr-1" />
                {post.category}
              </span>
              <span className="inline-flex items-center text-sm text-white bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock size={14} className="mr-1" />
                {readingTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-md">
              {post.title}
            </h1>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Floating Share Bar - Only shows on desktop */}
        <div className="hidden lg:flex flex-col fixed left-8 top-1/3 bg-white shadow-md rounded-full p-2 space-y-4 z-10">
          <button className="p-2 text-gray-500 hover:text-pink-600 transition-colors" aria-label="Share on Twitter">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </button>
          <button className="p-2 text-gray-500 hover:text-pink-600 transition-colors" aria-label="Share on Facebook">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </button>
          <button className="p-2 text-gray-500 hover:text-pink-600 transition-colors" aria-label="Share on LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </button>
          <button 
            className={`p-2 ${isBookmarked ? 'text-yellow-500' : 'text-gray-500 hover:text-yellow-500'} transition-colors`}
            onClick={handleBookmark}
            aria-label="Bookmark this article"
          >
            <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>
          <div className="border-t border-gray-200 my-1 w-full"></div>
          <a href="#comments" className="p-2 text-gray-500 hover:text-pink-600 transition-colors" aria-label="Go to comments">
            <MessageSquare size={20} />
          </a>
        </div>
        
        {/* Author Info */}
        <div className="flex items-center mb-8">
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            className="w-14 h-14 rounded-full object-cover mr-4 ring-2 ring-pink-100"
          />
          <div>
            <h3 className="font-medium text-gray-900">{post.author.name}</h3>
            <p className="text-gray-500 text-sm">Published on {post.date}</p>
          </div>
        </div>
        
        {/* Table of Contents (for longer articles) */}
        {post.content.length > 2000 && (
          <div className="mb-10 p-6 bg-gray-50 rounded-lg border border-gray-100">
            <h3 className="font-medium text-lg text-gray-900 mb-3">Table of Contents</h3>
            <ul className="space-y-1 text-gray-600 divide-y divide-gray-200">
              {post.content.match(/<h[23][^>]*>(.*?)<\/h[23]>/g)?.map((match, index) => {
                const text = match.replace(/<\/?h[23][^>]*>/g, '');
                const id = text.toLowerCase().replace(/\s+/g, '-');
                const isH3 = match.includes('h3');
                
                return (
                  <li key={id} className={`${isH3 ? 'pl-4' : ''} py-2`}>
                    <a 
                      href={`#${id}`} 
                      className="block hover:text-pink-600 transition-colors"
                    >
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        
        {/* Post Content */}
        <article>
          <div 
            className="prose prose-lg max-w-none 
              prose-headings:text-gray-800 prose-headings:font-semibold 
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-5 
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-600 prose-p:leading-relaxed 
              prose-a:text-pink-600 prose-a:no-underline hover:prose-a:underline 
              prose-img:rounded-lg 
              prose-strong:font-bold prose-strong:text-gray-800
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:my-2 prose-li:text-gray-600
              prose-blockquote:border-l-4 prose-blockquote:border-pink-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700
              prose-hr:my-8 prose-hr:border-gray-200"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />
        </article>
        
        {/* Tags & Sharing */}
        <div className="flex flex-wrap items-center justify-between mt-12 pt-6 border-t border-gray-200">
          <div className="mb-4 md:mb-0">
            <span className="text-gray-500 mr-2">Topics:</span>
            <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              {post.category}
            </span>
            <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
              Healthcare
            </span>
            <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm mb-2">
              Breast Cancer
            </span>
          </div>
          
          {/* Mobile Share Section */}
          <div className="flex items-center md:hidden">
            <span className="text-gray-500 mr-3">Share:</span>
            <button 
              className={`mr-3 ${isBookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
              onClick={handleBookmark}
            >
              <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} />
            </button>
            <button className="text-gray-400 hover:text-pink-600 mr-2">
              <Share2 size={20} />
            </button>
          </div>
          
          {/* Desktop Share Section (duplicated from floating bar for responsive design) */}
          <div className="hidden md:flex items-center">
            <span className="text-gray-500 mr-3">Share:</span>
            <button className="text-gray-400 hover:text-blue-600 mr-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </button>
            <button className="text-gray-400 hover:text-blue-800 mr-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </button>
            <button className="text-gray-400 hover:text-blue-500 mr-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Author Bio (expanded) */}
        <div className="mt-12 p-8 bg-gray-50 rounded-lg border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-20 h-20 rounded-full object-cover sm:mr-6 mx-auto sm:mx-0 mb-4 sm:mb-0 ring-4 ring-white shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center sm:text-left">About {post.author.name}</h3>
              <p className="text-gray-600">{post.author.bio}</p>
            </div>
          </div>
        </div>
        
        {/* Comments Section */}
        <div id="comments" className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Join the Discussion</h3>
          
          {/* New Comment Form */}
          <div className="mb-10">
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <textarea 
                  placeholder="Share your thoughts on this article..." 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  rows={3}
                ></textarea>
              </div>
            </div>
            <div className="text-right">
              <button className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                Post Comment
              </button>
            </div>
          </div>
          
          <p className="text-center text-gray-500 my-8">
            Be the first to share your thoughts on this article!
          </p>
        </div>
      </div>
      
      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Related Articles</h2>
            <p className="text-gray-600 mb-8">Continue exploring topics related to {post.category}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        {relatedPost.date}
                      </span>
                      <span className="inline-flex items-center text-sm text-pink-600">
                        <Tag size={14} className="mr-1" />
                        {relatedPost.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      <Link to={`/blog/${relatedPost.id}`} className="hover:text-pink-600 transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <div className="flex items-center">
                      <img 
                        src={relatedPost.author.avatar} 
                        alt={relatedPost.author.name}
                        className="w-8 h-8 rounded-full mr-3 object-cover"
                      />
                      <span className="text-sm text-gray-600">{relatedPost.author.name}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link 
                to="/blog" 
                className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors"
              >
                Explore All Articles
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">Get the latest updates on breast cancer research, early detection technologies, and inspiring stories delivered directly to your inbox.</p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none sm:mb-0 mb-2"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-r-lg font-medium hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-pink-200 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>

      {/* Add CSS for subtle zoom animation */}
      <style jsx>{`
        @keyframes subtle-zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </main>
  );
};

export default BlogView;