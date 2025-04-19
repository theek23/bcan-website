import React from 'react';
import { Send } from 'lucide-react';
import { useContactForm } from '../../hooks/useContactForm';
import FormContainer from './forms/FormContainer';
import FormField from './forms/FormField';
import FormInput from './forms/FormInput';
import FormTextArea from './forms/FormTextArea';
import FormButton from './forms/FormButton';

const ContactForm = () => {
  const { formData, handleChange, handleSubmit, isSubmitting } = useContactForm();

  return (
    <FormContainer title="General Inquiry">
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