export const API_CONFIG = {
  BASE_URL: "https://bcan-backend-production.up.railway.app/api",
  ENDPOINTS: {
    AUTH: {
      SIGNIN: "/auth/signin",
      SIGNUP: "/auth/signup",
      PROFILE: "/auth/profile",
    },
    INQUIRIES: {
      BASE: "/inquiry",
      GET_ALL: "/inquiry",
      GET_BY_ID: (id: number) => `/inquiry/${id}`,
      CREATE: "/inquiry",
    },
  },
} as const;

export const getApiUrl = (endpoint: string) =>
  `${API_CONFIG.BASE_URL}${endpoint}`;
