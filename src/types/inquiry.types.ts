export enum InquiryType {
    GENERAL = "general",
    INVESTOR = "investor",
    FEEDBACK = "feedback",
}

export interface Inquiry {
  id: number;
  type: InquiryType;
  name: string;
  email: string;
  subject?: string;
  message?: string;
  company?: string;
  investmentRange?: string;
  feedbackType?: string;
  additionalInfo?: string;
  createdAt: string;
  updatedAt: string;
}

export interface InquiryResponse {
  message: string;
  data: Inquiry;
}

export interface InquiriesListResponse {
  message: string;
  data: Inquiry[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export type InquiryStatus = "NEW" | "PENDING";

export interface InquiryWithStatus extends Inquiry {
  status: InquiryStatus;
}