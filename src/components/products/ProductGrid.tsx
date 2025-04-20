// import ProductCard from './ProductCard';
// import { products } from '../../data/products';

// const ProductGrid = () => {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
//           <p className="text-xl text-gray-600">Innovative solutions for early detection</p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <ProductCard key={product.id} {...product} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductGrid;

// import React, { useState, useEffect } from 'react';

// const ComingSoonSection = () => {
//   const [email, setEmail] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [timeLeft, setTimeLeft] = useState({
//     days: 30,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   // Calculate time until launch date (30 days from now)
//   useEffect(() => {
//     const launchDate = new Date();
//     launchDate.setDate(launchDate.getDate() + 30);
    
//     const timer = setInterval(() => {
//       const now = new Date();
//       const difference = launchDate - now;
      
//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((difference / 1000 / 60) % 60),
//           seconds: Math.floor((difference / 1000) % 60)
//         });
//       } else {
//         clearInterval(timer);
//       }
//     }, 1000);
    
//     return () => clearInterval(timer);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would normally handle the subscription logic
//     setIsSubmitted(true);
//     setTimeout(() => setIsSubmitted(false), 3000);
//     setEmail('');
//   };

//   return (
//     <section className="py-24 bg-gradient-to-b from-white to-blue-50">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
//             Coming Soon
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products Are Almost Ready</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             We're working hard to bring you innovative solutions for early detection. Be the first to know when we launch.
//           </p>
//         </div>

//         {/* Countdown Timer */}
//         <div className="flex justify-center mb-16">
//           <div className="grid grid-cols-4 gap-4 text-center">
//             {[
//               { label: 'Days', value: timeLeft.days },
//               { label: 'Hours', value: timeLeft.hours },
//               { label: 'Minutes', value: timeLeft.minutes },
//               { label: 'Seconds', value: timeLeft.seconds }
//             ].map((item, index) => (
//               <div key={index} className="w-20 h-24 md:w-24 md:h-28 flex flex-col justify-center items-center bg-white rounded-lg shadow-md">
//                 <span className="text-2xl md:text-3xl font-bold text-gray-900">{item.value}</span>
//                 <span className="text-sm text-gray-500">{item.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Email Notification Form */}
//         <div className="max-w-md mx-auto">
//           <div className="bg-white p-8 rounded-xl shadow-lg">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Get Notified When We Launch</h3>
            
//             {isSubmitted ? (
//               <div className="bg-green-100 text-green-700 p-4 rounded-md text-center">
//                 Thank you! We'll notify you when we launch.
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label htmlFor="email" className="sr-only">Email</label>
//                   <input
//                     id="email"
//                     type="email"
//                     placeholder="Enter your email address"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     required
//                   />
//                 </div>
//                 <button 
//                   type="submit" 
//                   className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200"
//                 >
//                   Notify Me
//                 </button>
//               </form>
//             )}
//             <p className="text-xs text-gray-500 mt-4 text-center">
//               We respect your privacy and will never share your information.
//             </p>
//           </div>
//         </div>

//         {/* Feature Preview */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           {[
//             {
//               icon: "🔍",
//               title: "Early Detection",
//               description: "Advanced technology for identifying issues before they become problems."
//             },
//             {
//               icon: "📊",
//               title: "Data Analytics",
//               description: "Comprehensive analysis tools to make informed decisions."
//             },
//             {
//               icon: "🔒",
//               title: "Secure Platform",
//               description: "Enterprise-grade security for your sensitive information."
//             }
//           ].map((feature, index) => (
//             <div key={index} className="p-6 bg-white rounded-lg shadow-md">
//               <div className="text-3xl mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ComingSoonSection;


import React, { useState } from 'react';

const ComingSoonSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Progress percentages for development stages
  const progressStages = [
    { name: 'Research', percentage: 100 },
    { name: 'Design', percentage: 85 },
    { name: 'Development', percentage: 60 },
    { name: 'Testing', percentage: 25 }
  ];

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Here you would normally handle the subscription logic
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
            Coming Soon
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products Are In Development</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're building innovative solutions for early detection. Subscribe to be the first to know when we launch.
          </p>
        </div>

        {/* Progress Indicators */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="space-y-6">
            {progressStages.map((stage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">{stage.name}</span>
                  <span className="text-sm font-medium text-blue-600">{stage.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${stage.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email Notification Form */}
        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Get Notified When We Launch</h3>
            
            {isSubmitted ? (
              <div className="bg-green-100 text-green-700 p-4 rounded-md text-center">
                Thank you! We'll notify you when we launch.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200"
                >
                  Notify Me
                </button>
              </form>
            )}
            <p className="text-xs text-gray-500 mt-4 text-center">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>

        {/* Feature Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: "🔍",
              title: "Early Detection",
              description: "Advanced technology for identifying issues before they become problems."
            },
            {
              icon: "📊",
              title: "Data Analytics",
              description: "Comprehensive analysis tools to make informed decisions."
            },
            {
              icon: "🔒",
              title: "Secure Platform",
              description: "Enterprise-grade security for your sensitive information."
            }
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;