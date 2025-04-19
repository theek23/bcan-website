import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
    author: {
      name: string;
      avatar: string;
    };
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <span className="inline-flex items-center text-sm text-gray-500">
            <Calendar size={14} className="mr-1" />
            {post.date}
          </span>
          <span className="inline-flex items-center text-sm text-pink-600">
            <Tag size={14} className="mr-1" />
            {post.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          <Link to={`/blog/${post.id}`} className="hover:text-pink-600">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center">
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            className="w-8 h-8 rounded-full mr-3"
          />
          <span className="text-sm text-gray-600">{post.author.name}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;