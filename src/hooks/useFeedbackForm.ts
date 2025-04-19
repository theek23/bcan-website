import { useState } from 'react';

interface FeedbackFormData {
  name: string;
  email: string;
  feedbackType: string;
  feedback: string;
}

export const useFeedbackForm = () => {
  const [formData, setFormData] = useState<FeedbackFormData>({
    name: '',
    email: '',
    feedbackType: '',
    feedback: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      console.log('Feedback form submitted:', formData);
      setFormData({ name: '', email: '', feedbackType: '', feedback: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, handleChange, handleSubmit, isSubmitting };
};