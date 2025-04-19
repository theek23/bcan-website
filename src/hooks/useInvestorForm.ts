import { useState } from 'react';

interface InvestorFormData {
  name: string;
  email: string;
  company: string;
  investmentRange: string;
  message: string;
}

export const useInvestorForm = () => {
  const [formData, setFormData] = useState<InvestorFormData>({
    name: '',
    email: '',
    company: '',
    investmentRange: '',
    message: '',
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
      console.log('Investor form submitted:', formData);
      setFormData({ name: '', email: '', company: '', investmentRange: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, handleChange, handleSubmit, isSubmitting };
};