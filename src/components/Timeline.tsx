import { Calendar, Award, TestTube2, Users, Heart } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description:
        'BCAN Solutions established with a mission to revolutionize breast cancer detection',
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      year: '2020',
      title: 'First Patent',
      description:
        'Secured patent for our innovative AI-powered detection technology',
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: '2021',
      title: 'Clinical Trials',
      description:
        'Successfully completed first phase of clinical trials with 95% accuracy',
      icon: <TestTube2 className="w-6 h-6" />,
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description:
        'Expanded operations to 10 countries, helping thousands of women',
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
          <p className="text-xl text-gray-600">
            Milestones in our mission to transform healthcare
          </p>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-6">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="flex items-center w-full bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-pink-600 text-white mr-4">
                {m.icon}
              </div>
              <div>
                <span className="text-pink-600 font-bold block">{m.year}</span>
                <h3 className="text-lg font-semibold">{m.title}</h3>
                <p className="text-gray-600 mt-1">{m.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal cards (no connecting lines) */}
        <div className="hidden lg:flex flex-wrap justify-center gap-8">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="flex flex-col items-center flex-1 min-w-[260px] max-w-sm"
            >
              <div className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center">
                {m.icon}
              </div>
              <div className="mt-4 bg-white p-6 rounded-lg shadow-md text-center">
                <span className="text-pink-600 font-bold block">{m.year}</span>
                <h3 className="text-xl font-semibold mt-2">{m.title}</h3>
                <p className="text-gray-600 mt-2">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
