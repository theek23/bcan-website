import { Calendar, Award, TestTube2, Users, Heart } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'BCAN Solutions established with a mission to revolutionize breast cancer detection',
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      year: '2020',
      title: 'First Patent',
      description: 'Secured patent for our innovative AI-powered detection technology',
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: '2021',
      title: 'Clinical Trials',
      description: 'Successfully completed first phase of clinical trials with 95% accuracy',
      icon: <TestTube2 className="w-6 h-6" />,
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded operations to 10 countries, helping thousands of women',
      icon: <Users className="w-6 h-6" />,
    },
    {
      year: '2023',
      title: 'FDA Approval',
      description: 'Received FDA approval for BCan Bra technology',
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Road Map</h2>
          <p className="text-xl text-gray-600">Milestones in our mission to transform healthcare</p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, shown on larger screens */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-pink-200" />
          
          <div className="space-y-8 lg:space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex flex-col lg:flex-row ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center lg:items-start gap-4 lg:gap-8`}>
                {/* Mobile layout - stacked vertically */}
                <div className="flex lg:hidden items-center w-full bg-white p-6 rounded-lg shadow-md">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-pink-600 text-white mr-4">
                    {milestone.icon}
                  </div>
                  <div>
                    <span className="text-pink-600 font-bold block">{milestone.year}</span>
                    <h3 className="text-lg font-semibold">{milestone.title}</h3>
                    <p className="text-gray-600 mt-1">{milestone.description}</p>
                  </div>
                </div>

                {/* Desktop layout - side by side */}
                <div className="hidden lg:block w-1/2">
                  <div className={`${
                    index % 2 === 0 ? 'lg:pr-12 text-right' : 'lg:pl-12 text-left'
                  }`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="text-pink-600 font-bold block">{milestone.year}</span>
                      <h3 className="text-xl font-semibold mt-2">{milestone.title}</h3>
                      <p className="text-gray-600 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                </div>

                {/* Center icon - hidden on mobile */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-pink-600 text-white">
                  {milestone.icon}
                </div>

                {/* Empty div for spacing on desktop */}
                <div className="hidden lg:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;