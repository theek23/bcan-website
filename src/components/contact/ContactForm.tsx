import React from 'react';
import { Send, CheckCircle, XCircle } from "lucide-react";
import { useContactForm } from "../../hooks/useContactForm";
import FormContainer from "./forms/FormContainer";
import FormField from "./forms/FormField";
import FormInput from "./forms/FormInput";
import FormTextArea from "./forms/FormTextArea";
import FormButton from "./forms/FormButton";

const ContactForm = () => {
  const { formData, handleChange, handleSubmit, isSubmitting, error, success } =
    useContactForm();

  return (
    <FormContainer title="General Inquiry">
      {success && (
        <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-center text-green-700">
          <CheckCircle className="mr-2 flex-shrink-0" />
          <p>
            Your message has been sent successfully. We'll get back to you soon!
          </p>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-center text-red-700">
          <XCircle className="mr-2 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField label="Name">
            <FormInput
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormField>

          <FormField label="Email">
            <FormInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormField>
        </div>

        <FormField label="Subject">
          <FormInput
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </FormField>

        <FormField label="Message">
          <FormTextArea
            name="message"
            rows={8}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormField>

        <div className="pt-6">
          <FormButton
            type="submit"
            icon={Send}
            isLoading={isSubmitting}
            loadingText="Sending..."
          >
            Send Message
          </FormButton>
        </div>
      </form>
    </FormContainer>
  );
};

export default ContactForm;