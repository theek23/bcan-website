import { API_CONFIG } from "../config/api.config";
import { apiService } from "./api.service";

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface SignUpData extends SignInCredentials {
  firstName: string;
  lastName: string;
}

export interface AuthResponse {
  data: {
    token: string;
    user: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
    };
  };
}

class AuthService {
  private tokenKey = "auth_token";

  async signIn(credentials: SignInCredentials): Promise<AuthResponse> {
    const response = await apiService.post<AuthResponse>(
      API_CONFIG.ENDPOINTS.AUTH.SIGNIN,
      credentials
    );
    console.log(response);
    this.setToken(response.data.token);
    return response;
  }

  async signUp(data: SignUpData): Promise<AuthResponse> {
    const response = await apiService.post<AuthResponse>(
      API_CONFIG.ENDPOINTS.AUTH.SIGNUP,
      data
    );
    this.setToken(response.data.token);
    return response;
  }

  async getProfile() {
    const token = this.getToken();
    if (!token) throw new Error("Not authenticated");

    return apiService.get(API_CONFIG.ENDPOINTS.AUTH.PROFILE, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout() {
    this.removeToken();
  }
}

export const authService = new AuthService();
