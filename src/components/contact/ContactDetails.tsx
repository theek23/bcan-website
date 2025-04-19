import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactDetails = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
      <div className="space-y-6">
        <div className="flex items-start">
          <Phone className="w-5 h-5 text-pink-600 mt-1 mr-4" />
          <div>
            <h3 className="font-medium text-gray-900">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-gray-600">+1 (555) 987-6543</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="w-5 h-5 text-pink-600 mt-1 mr-4" />
          <div>
            <h3 className="font-medium text-gray-900">Email</h3>
            <p className="text-gray-600">info@bcansolutions.com</p>
            <p className="text-gray-600">support@bcansolutions.com</p>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="w-5 h-5 text-pink-600 mt-1 mr-4" />
          <div>
            <h3 className="font-medium text-gray-900">Address</h3>
            <p className="text-gray-600">
              123 Innovation Drive<br />
              Suite 200<br />
              San Francisco, CA 94105<br />
              United States
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="w-5 h-5 text-pink-600 mt-1 mr-4" />
          <div>
            <h3 className="font-medium text-gray-900">Business Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
            <p className="text-gray-600">Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;