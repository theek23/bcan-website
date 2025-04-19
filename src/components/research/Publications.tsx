import React from 'react';
import { BookOpen } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "AI-Powered Early Detection of Breast Cancer Using Smart Wearable Technology",
      journal: "Journal of Medical AI",
      year: "2023",
      authors: "Chen, S., Roberts, M., et al.",
      link: "#"
    },
    {
      title: "Clinical Validation of BCan Technology: A Multi-Center Study",
      journal: "International Journal of Medical Devices",
      year: "2023",
      authors: "Thompson, E., Anderson, K., et al.",
      link: "#"
    },
    {
      title: "Machine Learning Approaches in Non-Invasive Cancer Detection",
      journal: "Medical Technology Innovation",
      year: "2022",
      authors: "Roberts, M., Chen, S., et al.",
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Publications</h2>
          <p className="text-xl text-gray-600">Peer-reviewed research and findings</p>
        </div>

        <div className="grid gap-8">
          {publications.map((pub, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <BookOpen className="w-6 h-6 text-pink-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{pub.authors}</p>
                  <p className="text-gray-500">
                    {pub.journal} • {pub.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;