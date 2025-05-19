import { useState } from 'react';
import { inquiryService, CreateInquiryData } from "../services/inquiry.service";
import { InquiryType } from "../types/inquiry.types";

interface InvestorFormData {
  name: string;
  email: string;
  company: string;
  investmentRange: string;
  message: string;
  additionalInfo?: string;
}

export const useInvestorForm = () => {
  const [formData, setFormData] = useState<InvestorFormData>({
    name: "",
    email: "",
    company: "",
    investmentRange: "",
    message: "",
    additionalInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      const inquiryData: CreateInquiryData = {
        type: InquiryType.INVESTOR,
        name: formData.name,
        email: formData.email,
        company: formData.company,
        investmentRange: formData.investmentRange,
        message: formData.message,
        additionalInfo: formData.additionalInfo,
      };

      await inquiryService.createInquiry(inquiryData);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        investmentRange: "",
        message: "",
        additionalInfo: "",
      });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to submit investor inquiry";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    error,
    success,
  };
};