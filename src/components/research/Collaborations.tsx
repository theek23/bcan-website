import React from 'react';
import { Building2 } from 'lucide-react';

const Collaborations = () => {
  const partners = [
    {
      name: "Memorial Research Institute",
      type: "Research Hospital",
      location: "New York, USA",
      focus: "Clinical Trials & Validation"
    },
    {
      name: "Global Health Innovation Center",
      type: "Research Institute",
      location: "London, UK",
      focus: "AI Algorithm Development"
    },
    {
      name: "Pacific Medical University",
      type: "Academic Institution",
      location: "San Francisco, USA",
      focus: "Data Analysis & Research"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Partners</h2>
          <p className="text-xl text-gray-600">Collaborating for breakthrough innovations</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <Building2 className="w-8 h-8 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-gray-500 mb-1">{partner.type}</p>
              <p className="text-gray-500 mb-3">{partner.location}</p>
              <p className="text-gray-600">Focus: {partner.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborations;