import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail } from "lucide-react";
import Navigation from "../components/Navigation";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import FeedbackForm from "../components/contact/FeedbackForm";
import GoogleMap from "../components/contact/GoogleMap";
import Footer from "../components/Footer";
import FadeIn from "../components/animations/FadeIn";

const Contact = () => {
  const [activeForm, setActiveForm] = useState<"contact" | "feedback">(
    "contact"
  );
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const formType = searchParams.get("form");
    if (formType === "feedback") {
      setActiveForm("feedback");
    }
  }, [location]);

  const forms = {
    contact: {
      title: "General Inquiry",
      component: ContactForm,
    },
    feedback: {
      title: "Feedback",
      component: FeedbackForm,
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FadeIn>
        <ContactHero />
      </FadeIn>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Information - Centered above form */}
          <FadeIn delay={0.2} className="mb-12">
            {/* <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </p>
            </div> */}

            {/* Contact Details - Horizontal layout */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-pink-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">Phone</p>
                      <a
                        href="tel:+94771074922"
                        className="text-sm text-pink-600 hover:text-pink-700 transition-colors block"
                      >
                        +94771074922
                      </a>
                      <a
                        href="tel:+94706163613"
                        className="text-sm text-pink-600 hover:text-pink-700 transition-colors block"
                      >
                        +94706163613
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-pink-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">Email</p>
                      <a
                        href="mailto:info@bcansolutions.com"
                        className="text-sm text-pink-600 hover:text-pink-700 transition-colors block"
                      >
                        info@bcansolutions.com
                      </a>
                      <a
                        href="mailto:angalop@bcansolutions.com"
                        className="text-sm text-pink-600 hover:text-pink-700 transition-colors block"
                      >
                        angalop@bcansolutions.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Centered Form Section */}
          <FadeIn direction="up" delay={0.3}>
            <div className="max-w-2xl mx-auto">
              {/* Form Tabs */}
              <div className="flex justify-center space-x-2 mb-8">
                {Object.entries(forms).map(([key, { title }]) => (
                  <button
                    key={key}
                    onClick={() => setActiveForm(key as typeof activeForm)}
                    className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeForm === key
                        ? "bg-pink-600 text-white shadow-lg transform scale-105"
                        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {title}
                  </button>
                ))}
              </div>

              {/* Form Container */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-pink-600 to-pink-700 px-8 py-6">
                  <h3 className="text-2xl font-bold text-white text-center">
                    {forms[activeForm].title}
                  </h3>
                </div>
                <div className="p-8">
                  {React.createElement(forms[activeForm].component)}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn delay={0.4}>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Visit Our Office
              </h2>
              <p className="text-xl text-gray-600">
                Come see us at our headquarters
              </p>
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