import { API_CONFIG } from "../config/api.config";
import { apiService } from "./api.service";
import {
  Inquiry,
  InquiryResponse,
  InquiriesListResponse,
  InquiryWithStatus,
  InquiryStatus,
  InquiryType,
} from "../types/inquiry.types";
import { authService } from "./auth.service";

export interface CreateInquiryData {
  type: InquiryType;
  name: string;
  email: string;
  subject?: string;
  message?: string;
  company?: string;
  investmentRange?: string;
  feedbackType?: string;
  additionalInfo?: string;
}

class InquiryService {
  private getAuthHeaders() {
    const token = authService.getToken();
    if (!token) throw new Error("Not authenticated");
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  private calculateStatus(createdAt: string): InquiryStatus {
    const createdDate = new Date(createdAt);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - createdDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 2 ? "PENDING" : "NEW";
  }

  private addStatusToInquiry(inquiry: Inquiry): InquiryWithStatus {
    return {
      ...inquiry,
      status: this.calculateStatus(inquiry.createdAt),
    };
  }

  async getAllInquiries(
    page: number = 1,
    limit: number = 10
  ): Promise<InquiriesListResponse> {
    const response = await apiService.get<InquiriesListResponse>(
      API_CONFIG.ENDPOINTS.INQUIRIES.GET_ALL,
      {
        headers: this.getAuthHeaders(),
        params: {
          page: page.toString(),
          limit: limit.toString(),
        },
      }
    );

    // Add status to each inquiry
    response.data = response.data.map(this.addStatusToInquiry.bind(this));
    return response;
  }

  async getInquiryById(id: number): Promise<InquiryWithStatus> {
    const response = await apiService.get<InquiryResponse>(
      API_CONFIG.ENDPOINTS.INQUIRIES.GET_BY_ID(id),
      {
        headers: this.getAuthHeaders(),
      }
    );

    return this.addStatusToInquiry(response.data);
  }

  async createInquiry(data: CreateInquiryData): Promise<InquiryResponse> {
    return apiService.post<InquiryResponse>(
      API_CONFIG.ENDPOINTS.INQUIRIES.CREATE,
      data
    );
  }
}

export const inquiryService = new InquiryService();
