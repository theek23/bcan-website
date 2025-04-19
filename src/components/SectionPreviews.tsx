import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Microscope } from 'lucide-react';

const SectionPreviews = () => {
  const sections = [
    {
      title: 'About Us',
      description: "Discover our mission to revolutionize breast cancer detection through innovative AI technology and our commitment to improving women's health worldwide.",
      icon: <Users className="w-8 h-8 text-pink-600" />,
      link: '/about',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000',
    },
    {
      title: 'Research',
      description: 'Explore our groundbreaking research in AI-powered detection, clinical trials, and collaborations with leading medical institutions.',
      icon: <Microscope className="w-8 h-8 text-pink-600" />,
      link: '/research',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2000',
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore BCAN Solutions</h2>
          <p className="text-xl text-gray-600">Learn more about our mission and research</p>
        </div>

        <div className="grid gap-8">
          {sections.map((section, index) => (
            <div 
              key={section.title}
              className={`bg-white rounded-xl shadow-sm overflow-hidden ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } lg:flex`}
            >
              <div className="lg:w-1/2">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  {section.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-3">{section.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{section.description}</p>
                <Link
                  to={section.link}
                  className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
                >
                  Learn More <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionPreviews;