import { ArrowRight, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import ModelViewer from "./ModelViewer";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full">
              <Cpu size={16} className="text-pink-600 mr-2" />
              <span className="text-sm text-pink-800">Smart</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Ultimate Solution For Breast Cancer Early Detection
            </h1>

            <p className="text-xl text-gray-600">
              Transform breast cancer detection with our innovative BCan Bra,
              powered by advanced AI and patent-pending technology merged with
              AI for earlier, more accurate diagnosis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="px-8 py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center"
              >
                Learn More
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/contact?form=investor"
                className="px-8 py-4 border-2 border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 transition-colors duration-200 flex items-center justify-center"
              >
                Invest in Us
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/contact?form=investor"
                className="px-8 py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center"
              >
                Donate now
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-[500px] rounded-2xl bg-gradient-to-br from-pink-200 to-blue-200 animate-none">
              {/* Placeholder for 3D model/animation */}
              {/* <div className="absolute inset-0 flex items-center justify-center text-pink-600">
                <span className="text-lg">Interactive 3D Model</span>
              </div> */}
              <div className="w-full h-[500px] rounded-xl bg-gradient-to-br from-pink-100 to-blue-100">
                <ModelViewer />
              </div>
            </div>
          </div>
        </div>

        {/* Updated donate button with smaller size and increased margin-top */}
        <div className="flex justify-center mt-12">
          {/* <Link
            to="/contact?form=feedback"
            className="px-8 py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center text-sm"
          >
            Donate Now
            <ArrowRight size={16} className="ml-2" />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;