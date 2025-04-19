import React from 'react';
import { ShieldCheck } from 'lucide-react';

const ProductsHero = () => {
  return (
    <div className="pt-20 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full mb-8">
            <ShieldCheck size={16} className="text-pink-600 mr-2" />
            <span className="text-sm text-pink-800">Medical Innovation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary Healthcare Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our innovative medical devices and research services designed to transform early cancer detection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsHero;