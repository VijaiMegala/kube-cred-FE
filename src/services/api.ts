import axios from 'axios';
import { CreateCredentialRequest, VerifyCredentialRequest, CredentialResponse } from '../types/credential';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const credentialApi = {
  issueCredential: async (data: CreateCredentialRequest): Promise<CredentialResponse> => {
    const response = await api.post('/api/credentials/issue', data);
    return response.data;
  },

  verifyCredential: async (data: VerifyCredentialRequest): Promise<CredentialResponse> => {
    const response = await api.post('/api/credentials/verify', data);
    return response.data;
  },

  getCredentialById: async (id: string): Promise<CredentialResponse> => {
    const response = await api.get(`/api/credentials/${id}`);
    return response.data;
  },

  healthCheck: async (): Promise<{ success: boolean; message: string; workerId: string }> => {
    const response = await api.get('/health');
    return response.data;
  }
};

export default api;
