import React from 'react';
import { BookOpen } from 'lucide-react';

const BlogHero = () => {
  return (
    <div className="pt-20 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full mb-8">
            <BookOpen size={16} className="text-pink-600 mr-2" />
            <span className="text-sm text-pink-800">Latest Updates</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Insights & Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest in breast cancer awareness, research breakthroughs, 
            and inspiring stories from our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;