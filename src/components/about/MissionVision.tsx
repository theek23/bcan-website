import React from 'react';
import { Target, Lightbulb } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-pink-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-pink-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
            At BCAN Solutions, we are dedicated to transforming women’s healthcare through innovative technology. Our mission is to develop accessible, reliable, and research-driven solutions that empower women to take control of their health, enabling early detection and proactive care. Through our work, we strive to help women live more and live better.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
            We envision a world where every woman has the knowledge, tools, and confidence to safeguard her health. By pioneering advancements in MedTech, raising awareness, and breaking barriers to early detection, BCAN Solutions is committed to redefining women’s healthcare—creating a future where preventable diseases no longer go unnoticed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;