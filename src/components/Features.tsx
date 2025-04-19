import React from 'react';
import { Brain, Shield, Clock, Award } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-pink-600" />,
      title: 'AI-Powered Detection',
      description: 'Advanced machine learning algorithms for accurate early detection',
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-600" />,
      title: 'Non-Invasive',
      description: 'Comfortable, radiation-free monitoring solution',
    },
    {
      icon: <Clock className="w-8 h-8 text-pink-600" />,
      title: 'Real-Time Monitoring',
      description: 'Continuous health tracking with instant alerts',
    },
    {
      icon: <Award className="w-8 h-8 text-pink-600" />,
      title: 'Clinically Validated',
      description: 'Proven accuracy through extensive clinical trials',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Revolutionary Technology
            </h2>
            <p className="text-xl text-gray-600">
              Leading the future of breast cancer detection
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;