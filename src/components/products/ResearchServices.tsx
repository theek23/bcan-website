import React from 'react';
import { Microscope, Brain, Database, Users } from 'lucide-react';

const ResearchServices = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-pink-600" />,
      title: "AI Development",
      description: "Custom AI solutions for medical applications"
    },
    {
      icon: <Database className="w-8 h-8 text-pink-600" />,
      title: "Data Analysis",
      description: "Advanced medical data processing and analysis"
    },
    {
      icon: <Microscope className="w-8 h-8 text-pink-600" />,
      title: "Clinical Research",
      description: "Collaborative research opportunities"
    },
    {
      icon: <Users className="w-8 h-8 text-pink-600" />,
      title: "Consulting",
      description: "Expert consultation for medical institutions"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Services</h2>
          <p className="text-xl text-gray-600">Partner with us to advance medical innovation</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchServices;