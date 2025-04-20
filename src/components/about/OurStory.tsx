import React from 'react';
import { Clock } from 'lucide-react';

const OurStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Clock size={16} className="text-blue-600 mr-2" />
            <span className="text-sm text-blue-800">Our Journey</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From vision to reality, the journey of revolutionizing women's healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-pink-50 to-blue-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Beginnings</h3>
            <p className="text-gray-600">
              BCAN Solutions was officially founded in 2024, but our journey began well before that. 
              In 2022, a passionate team of innovators came together with a bold mission: to revolutionize women's 
              healthcare through cutting-edge technology. We recognized an urgent need for accessible early breast 
              cancer detection and committed ourselves to developing a solution that empowers women to take charge 
              of their health.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-blue-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Award-Winning Innovation</h3>
            <p className="text-gray-600">
              By 2023, our research efforts led to the development of our first prototype—marking a major step 
              toward making early detection faster, easier, and more accessible. That same year, our innovation was 
              recognized when we were named Overall Champions for Best Innovation at the Brainstorm Biomedical 
              Competition 2023, a proud milestone that fueled our commitment to impactful healthcare solutions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-blue-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-World Impact</h3>
            <p className="text-gray-600">
              With our official launch in 2024, BCAN Solutions is now turning years of research into real-world impact. 
              Our mission remains clear: to equip women with the tools and knowledge they need to live more—and live better. 
              As we continue to grow, we're dedicated to pushing the boundaries of MedTech innovation and shaping a 
              healthier future for women around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;