import React from 'react';
import { TrendingUp } from 'lucide-react';
import { useInvestorForm } from '../../hooks/useInvestorForm';

const InvestorForm = () => {
  const { formData, handleChange, handleSubmit, isSubmitting } = useInvestorForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="block w-full h-12 px-4 rounded-lg border-2 border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="block w-full h-12 px-4 rounded-lg border-2 border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-base font-medium text-gray-700 mb-2">
          Company/Organization
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          className="block w-full h-12 px-4 rounded-lg border-2 border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
        />
      </div>

      <div>
        <label htmlFor="investmentRange" className="block text-base font-medium text-gray-700 mb-2">
          Investment Range
        </label>
        <select
          id="investmentRange"
          name="investmentRange"
          value={formData.investmentRange}
          onChange={handleChange}
          required
          className="block w-full h-12 px-4 rounded-lg border-2 border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
        >
          <option value="">Select range</option>
          <option value="50k-250k">$50,000 - $250,000</option>
          <option value="250k-1m">$250,000 - $1,000,000</option>
          <option value="1m-5m">$1,000,000 - $5,000,000</option>
          <option value="5m+">$5,000,000+</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">
          Additional Information
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="block w-full px-4 py-3 rounded-lg border-2 border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 flex justify-center items-center px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : (
          <>
            Submit Interest
            <TrendingUp size={18} className="ml-2" />
          </>
        )}
      </button>
    </form>
  );
};

export default InvestorForm;