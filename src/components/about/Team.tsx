import { Users, Linkedin } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Angelo Perera",
      title: "Chef Executive Officer",
      image: "/person2.jpg",
      linkedin: "https://www.linkedin.com/in/angelo-perera",
    },
    {
      name: "Mihiri Alwis",
      title: "Co Founder",
      image: "/person1.jpg",
      linkedin: "https://www.linkedin.com/in/mihiri-alwis-18525225b",
    },
    {
      name: "Tharusha Perera",
      title: "Co Founder",
      image: "/person3.jpg",
      linkedin: "https://www.linkedin.com/in/tharusha-perera-b39b64193",
    },
    {
      name: "Savinda Kommalage",
      title: "Co Founder",
      image: "/person4.jpg",
      linkedin: "https://www.linkedin.com/in/sdkx",
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
        <div className="mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden">
              <img
                src="/all.jpg"
                alt="BCAN Solutions Team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <h3 className="text-2xl font-bold text-center mb-8">Leadership Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
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
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Linkedin size={16} className="text-blue-600" />
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <p className="text-blue-600 font-medium">{member.title}</p>
                  </a>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
