import { Brain, Shield, Clock, Award } from 'lucide-react';
import FadeIn from './animations/FadeIn';
import ModelViewer from "./ModelViewer";

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-pink-600" />,
      title: "AI-Powered Detection",
      description:
        "Advanced machine learning algorithms for accurate early detection",
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-600" />,
      title: "Non-Invasive",
      description: "Comfortable, radiation-free monitoring solution",
    },
    {
      icon: <Clock className="w-8 h-8 text-pink-600" />,
      title: "Real-Time Monitoring",
      description: "Continuous health tracking with instant alerts",
    },
    {
      icon: <Award className="w-8 h-8 text-pink-600" />,
      title: "Self-Charging & Wireless",
      description:
        "Hassle-free usage with wireless design and self-charging capability",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - 3D Model */}
          <div className="space-y-6">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold text-gray-900">
                What my product is
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div className="relative">
                <div className="w-full h-[500px] rounded-2xl bg-gradient-to-br from-pink-200 to-blue-200">
                  <div className="w-full h-[500px] rounded-xl bg-gradient-to-br from-pink-100 to-blue-100">
                    <ModelViewer />
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg text-gray-600 text-center">
                Bcan bra is still under research and development
              </p>
            </FadeIn>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Revolutionary Technology
              </h2>
            </FadeIn>

            {features.map((feature, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;