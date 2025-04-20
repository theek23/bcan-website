import { Activity, Battery, Wifi, Smartphone } from 'lucide-react';

const ProductShowcase = () => {
  const features = [
    {
      icon: <Activity className="w-6 h-6 text-pink-600" />,
      title: "24/7 Monitoring",
      description: "Continuous health tracking with real-time data analysis"
    },
    {
      icon: <Battery className="w-6 h-6 text-pink-600" />,
      title: "Self-Charging",
      description: "Powered by motion or body heat for uninterrupted use",
    },    
    {
      icon: <Wifi className="w-6 h-6 text-pink-600" />,
      title: "Wireless Connectivity",
      description: "Seamless data sync with our secure cloud platform"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-pink-600" />,
      title: "Mobile App",
      description: "Easy-to-use companion app for real-time monitoring"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">BCan Bra: The Future of Early Detection</h2>
            <p className="text-xl text-gray-600">
              Our revolutionary smart garment combines comfort with patent pending technology to provide continuous monitoring and early detection of breast abnormalities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-pink-100 to-blue-100 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000"
                alt="Medical Technology"
                className="w-full h-full object-cover rounded-2xl opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-blue-500/20 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;