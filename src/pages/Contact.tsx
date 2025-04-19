import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import InvestorForm from '../components/contact/InvestorForm';
import FeedbackForm from '../components/contact/FeedbackForm';
import ContactDetails from '../components/contact/ContactDetails';
import GoogleMap from '../components/contact/GoogleMap';
import Footer from '../components/Footer';
import FadeIn from '../components/animations/FadeIn';

const Contact = () => {
  const [activeForm, setActiveForm] = useState<'contact' | 'investor' | 'feedback'>('contact');
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const formType = searchParams.get('form');
    if (formType === 'investor') {
      setActiveForm('investor');
    }
  }, [location]);

  const forms = {
    contact: {
      title: 'General Inquiry',
      component: ContactForm,
    },
    investor: {
      title: 'Investor Interest',
      component: InvestorForm,
    },
    feedback: {
      title: 'Feedback',
      component: FeedbackForm,
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FadeIn>
        <ContactHero />
      </FadeIn>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Contact Details - 4 columns on desktop */}
            <FadeIn direction="left" delay={0.2} className="lg:col-span-4">
              <ContactDetails />
            </FadeIn>

            {/* Forms Section - 8 columns on desktop */}
            <FadeIn direction="right" delay={0.3} className="lg:col-span-8">
              <div className="flex justify-center space-x-4 mb-8">
                {Object.entries(forms).map(([key, { title }]) => (
                  <button
                    key={key}
                    onClick={() => setActiveForm(key as typeof activeForm)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      activeForm === key
                        ? 'bg-pink-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {title}
                  </button>
                ))}
              </div>

              <div className="bg-white shadow-sm rounded-lg p-8">
                {React.createElement(forms[activeForm].component)}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <FadeIn delay={0.4}>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
              <p className="text-xl text-gray-600">Come see us at our headquarters</p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <GoogleMap />
            </div>
          </div>
        </section>
      </FadeIn>

      <Footer />
    </div>
  );
};

export default Contact;