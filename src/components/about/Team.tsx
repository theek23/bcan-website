import React from 'react';
import { Users } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "Chief Executive Officer",
      image: "https://img.freepik.com/free-photo/medium-shot-woman-posing-indoors_23-2149915935.jpg?t=st=1745155764~exp=1745159364~hmac=9a56f3d2f3dfcbda5b16e0e788a849463fd141bba077041c4c6f572ebf4f26fd&w=740"
    },
    {
      name: "Michael Chen",
      title: "Chief Technology Officer",
      image: "https://img.freepik.com/free-photo/medium-shot-woman-posing-indoors_23-2149915935.jpg?t=st=1745155764~exp=1745159364~hmac=9a56f3d2f3dfcbda5b16e0e788a849463fd141bba077041c4c6f572ebf4f26fd&w=740"
    },
    {
      name: "Amara Patel",
      title: "Head of Research",
      image: "https://img.freepik.com/free-photo/medium-shot-woman-posing-indoors_23-2149915935.jpg?t=st=1745155764~exp=1745159364~hmac=9a56f3d2f3dfcbda5b16e0e788a849463fd141bba077041c4c6f572ebf4f26fd&w=740"
    },
    {
      name: "David Rodriguez",
      title: "Head of Product Development",
      image: "https://img.freepik.com/free-photo/medium-shot-woman-posing-indoors_23-2149915935.jpg?t=st=1745155764~exp=1745159364~hmac=9a56f3d2f3dfcbda5b16e0e788a849463fd141bba077041c4c6f572ebf4f26fd&w=740"
    },
    {
      name: "Olivia Kim",
      title: "Medical Director",
      image: "https://img.freepik.com/free-photo/medium-shot-woman-posing-indoors_23-2149915935.jpg?t=st=1745155764~exp=1745159364~hmac=9a56f3d2f3dfcbda5b16e0e788a849463fd141bba077041c4c6f572ebf4f26fd&w=740"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Users size={16} className="text-blue-600 mr-2" />
            <span className="text-sm text-blue-800">Our Experts</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate innovators behind BCAN Solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;