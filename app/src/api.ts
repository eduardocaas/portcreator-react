import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token: string | null = sessionStorage.getItem('token');

    if (token) {
      config.headers['Token'] = token;
    }

    return config;
  },
  (error: any) => {
    return Promise.reject(new Error(error?.message ?? String(error)));
  }
);

export default api;