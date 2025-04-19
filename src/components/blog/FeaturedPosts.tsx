import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { featuredPosts } from '../../data/blog';

const FeaturedPosts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {featuredPosts.slice(0, 2).map((post) => (
            <div key={post.id} className="relative group">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 p-8 text-white">
                <span className="inline-block px-3 py-1 bg-pink-600 rounded-full text-sm mb-4">
                  {post.category}
                </span>
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-200 mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-white hover:text-pink-200"
                >
                  Read More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;