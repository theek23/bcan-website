import React from 'react';
import { MessageCircle, CheckCircle, XCircle } from "lucide-react";
import { useFeedbackForm } from "../../hooks/useFeedbackForm";
import FormContainer from "./forms/FormContainer";

const FeedbackForm = () => {
  const { formData, handleChange, handleSubmit, isSubmitting, error, success } =
    useFeedbackForm();

  return (
    <FormContainer title="Send Feedback">
      {success && (
        <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-center text-green-700">
          <CheckCircle className="mr-2 flex-shrink-0" />
          <p>Thank you for your feedback! We appreciate your input.</p>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-center text-red-700">
          <XCircle className="mr-2 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-base font-medium text-gray-700 mb-2"
          >
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
          <label
            htmlFor="email"
            className="block text-base font-medium text-gray-700 mb-2"
          >
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
          <label
            htmlFor="feedbackType"
            className="block text-base font-medium text-gray-700 mb-2"
          >
            Feedback Type
          </label>
          <select
            id="feedbackType"
            name="feedbackType"
            value={formData.feedbackType}
            onChange={handleChange}
            required
            className="block w-full h-12 px-4 rounded-lg border-2 border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          >
            <option value="">Select type</option>
            <option value="product">Product Feedback</option>
            <option value="website">Website Feedback</option>
            <option value="service">Customer Service</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="feedback"
            className="block text-base font-medium text-gray-700 mb-2"
          >
            Your Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            rows={6}
            value={formData.feedback}
            onChange={handleChange}
            required
            className="block w-full px-4 py-3 rounded-lg border-2 border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 flex justify-center items-center px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50"
        >
          {isSubmitting ? (
            "Submitting..."
          ) : (
            <>
              Submit Feedback
              <MessageCircle size={18} className="ml-2" />
            </>
          )}
        </button>
      </form>
    </FormContainer>
  );
};

export default FeedbackForm;