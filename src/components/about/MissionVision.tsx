import React from 'react';
import { Target, Lightbulb } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-pink-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-pink-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize early breast cancer detection through cutting-edge health technology, 
              ensuring that life-threatening conditions like breast cancer are identified and treated 
              at their earliest stages.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To transform global healthcare by leveraging innovative AI-powered solutions 
              and empowering individuals to live healthier, longer lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;