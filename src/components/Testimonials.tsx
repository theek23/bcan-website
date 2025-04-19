import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "BCAN's technology has transformed how we approach early detection. It's a game-changer for women's health.",
      author: "Dr. Sarah Chen",
      title: "Chief Oncologist, Memorial Hospital",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "The accuracy and comfort of the BCan Bra have made regular screening accessible to more women than ever before.",
      author: "Dr. Michael Roberts",
      title: "Director of Research, Health Innovation Institute",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "As an investor, I've seen many healthcare innovations, but BCAN's approach to AI-driven detection is truly revolutionary.",
      author: "Emily Thompson",
      title: "Healthcare Investment Analyst",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Experts Say</h2>
          <p className="text-xl text-gray-600">Trusted by leading healthcare professionals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-pink-200" />
              <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;