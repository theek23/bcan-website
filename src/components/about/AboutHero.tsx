import React from 'react';
import { Heart } from 'lucide-react';

const AboutHero = () => {
  return (
    <div className="pt-20 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full mb-8">
            <Heart size={16} className="text-pink-600 mr-2" />
            <span className="text-sm text-pink-800">About BCAN Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming Healthcare Through Innovation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to revolutionize early breast cancer detection, 
            making advanced healthcare technology accessible to everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;