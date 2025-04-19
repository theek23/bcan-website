import React from 'react';
import { Heart, Star, Shield } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const ImpactStories = () => {
  const stories = [
    {
      icon: <Heart className="w-12 h-12 text-pink-600" />,
      title: "Sarah's Journey",
      description: "Early detection through BCan technology led to successful treatment within weeks of discovery.",
      impact: "Now cancer-free for 2 years"
    },
    {
      icon: <Star className="w-12 h-12 text-pink-600" />,
      title: "Dr. Chen's Research",
      description: "Implementing BCan in our clinic has increased early detection rates by 45%.",
      impact: "Over 1,000 lives impacted"
    },
    {
      icon: <Shield className="w-12 h-12 text-pink-600" />,
      title: "Community Impact",
      description: "Partnership with local hospitals has made screening accessible to underserved communities.",
      impact: "Reaching 10,000+ women annually"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <span className="text-pink-600 font-semibold">Real Stories, Real Impact</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Lives Changed Through Early Detection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every story represents countless lives touched by our mission to revolutionize breast cancer detection
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.2}>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{story.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">
                  {story.impact}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.6}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
              <Heart className="w-5 h-5 text-pink-600" />
              <span className="text-gray-900 font-medium">
                Join us in making early detection accessible to all
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ImpactStories;