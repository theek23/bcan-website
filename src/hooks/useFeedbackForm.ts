import { useState } from 'react';
import { inquiryService, CreateInquiryData } from "../services/inquiry.service";
import { InquiryType } from "../types/inquiry.types";

interface FeedbackFormData {
  name: string;
  email: string;
  feedbackType: string;
  feedback: string;
}

export const useFeedbackForm = () => {
  const [formData, setFormData] = useState<FeedbackFormData>({
    name: "",
    email: "",
    feedbackType: "",
    feedback: "",
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
        type: InquiryType.FEEDBACK,
        name: formData.name,
        email: formData.email,
        feedbackType: formData.feedbackType,
        message: formData.feedback,
      };

      await inquiryService.createInquiry(inquiryData);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        feedbackType: "",
        feedback: "",
      });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to submit feedback";
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