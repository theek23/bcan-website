import React from 'react';
import { Sparkles, Heart, Shield, Award } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: <Sparkles className="w-8 h-8 text-pink-600" />,
      title: "Innovation",
      description: "Pioneering groundbreaking technologies that redefine healthcare."
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: "Empathy",
      description: "Putting patients' well-being at the center of everything we do."
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-600" />,
      title: "Integrity",
      description: "Maintaining transparency and trust in our operations and products."
    },
    {
      icon: <Award className="w-8 h-8 text-pink-600" />,
      title: "Excellence",
      description: "Setting the gold standard in health tech and medtech solutions."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600">The principles that guide everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;