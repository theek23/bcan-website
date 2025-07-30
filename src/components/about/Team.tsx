import React from 'react';
import { Users } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Angelo Perera",
      title: "Chef Executive Officer",
      image: "/person2.jpg",
    },
    {
      name: "Mihiri Alwis",
      title: "Co Founder",
      image: "/person1.jpg",
    },
    {
      name: "Tharusha Perera",
      title: "Co Founder",
      image: "/person3.jpg",
    },
    {
      name: "Savinda Kommalage",
      title: "Co Founder",
      image: "/person4.jpg",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Users size={16} className="text-blue-600 mr-2" />
            <span className="text-sm text-blue-800">Our Experts</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate innovators behind BCAN Solutions
          </p>
        </div>

        {/* Featured Team Image */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16 items-center">
          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/all.jpg"
                  alt="BCAN Solutions Team"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Driven by Innovation
            </h3>
            <p className="text-gray-600">
              Our diverse team brings together expertise from various
              backgrounds to deliver cutting-edge solutions. At BCAN Solutions,
              we believe that our greatest strength lies in our collaborative
              approach and shared commitment to excellence.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-1">4+</h4>
                <p className="text-sm text-gray-600">
                  Years Combined Experience
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-1">24/7</h4>
                <p className="text-sm text-gray-600">Client Support</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-1">10+</h4>
                <p className="text-sm text-gray-600">Successful Projects</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-1">98%</h4>
                <p className="text-sm text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <h3 className="text-2xl font-bold text-center mb-8">Leadership Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;