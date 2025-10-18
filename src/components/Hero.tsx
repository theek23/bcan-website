import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background with Medical Theme */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-25 to-white"></div>
        
        {/* Animated orbs with stronger visibility and custom animation */}
        <style>{`
          @keyframes float-pulse {
            0%, 100% { transform: scale(1) translateY(0px); opacity: 0.35; }
            50% { transform: scale(1.1) translateY(-20px); opacity: 0.55; }
          }
          @keyframes float-pulse-2 {
            0%, 100% { transform: scale(1) translateY(0px); opacity: 0.4; }
            50% { transform: scale(1.15) translateY(-25px); opacity: 0.6; }
          }
          @keyframes float-pulse-3 {
            0%, 100% { transform: scale(1) translateY(0px); opacity: 0.45; }
            50% { transform: scale(1.2) translateY(-30px); opacity: 0.65; }
          }
          .orb-1 { animation: float-pulse 6s ease-in-out infinite; }
          .orb-2 { animation: float-pulse-2 7s ease-in-out infinite 2s; }
          .orb-3 { animation: float-pulse-3 8s ease-in-out infinite 4s; }
        `}</style>
        <div className="orb-1 absolute top-20 left-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="orb-2 absolute top-40 right-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="orb-3 absolute -bottom-8 left-1/2 w-full h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(236, 72, 153, .05) 25%, rgba(236, 72, 153, .05) 26%, transparent 27%, transparent 74%, rgba(236, 72, 153, .05) 75%, rgba(236, 72, 153, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(236, 72, 153, .05) 25%, rgba(236, 72, 153, .05) 26%, transparent 27%, transparent 74%, rgba(236, 72, 153, .05) 75%, rgba(236, 72, 153, .05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px'
          }}
        ></div>
        

      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="flex justify-center">
          <div className="max-w-4xl text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Ultimate Solution For Breast Cancer Early Detection
            </h1>

            <p className="text-xl text-gray-600">
              Transform breast cancer detection with our innovative BCan Bra,
              powered by advanced AI and patent-pending technology merged with
              AI for earlier, more accurate diagnosis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center">
                Learn More
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button className="px-8 py-4 border-2 border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 transition-colors duration-200 flex items-center justify-center">
                Invest in Us
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button className="px-8 py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center">
                Donate now
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>

          {/* COMMENTED OUT - 3D Model Section */}
          {/* <div className="relative">
            <div className="w-full h-[500px] rounded-2xl bg-gradient-to-br from-pink-200 to-blue-200 animate-none">
              <div className="w-full h-[500px] rounded-xl bg-gradient-to-br from-pink-100 to-blue-100">
                <ModelViewer />
              </div>
            </div>
          </div> */}
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