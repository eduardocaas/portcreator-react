import axios from "axios";
import type { Credentials } from "../../models/auth/Credentials";
import type { SignupModel } from "../../models/auth/SignupModel";
import { jwtDecode } from "jwt-decode";


interface Token {
  userId: string;
  userEmail: string;
  firstAccess: string;
  exp: number;
}

const API_URL = import.meta.env.VITE_API_URL;

const httpOptions = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const login = async (credentials: Credentials) => {
  const response = await axios.post<{ token: string }>(`${API_URL}/auth/signin`, credentials, httpOptions);
  return response.data;
};

const signup = async (signupModel: SignupModel) => {
  return axios.post(`${API_URL}/auth/signup`, signupModel, httpOptions);
};


const saveToken = (token: string) => {
  if (!token) return;
  
  localStorage.setItem('token', token);
  
  const decoded = decodeToken(token);
  if (decoded) {
    localStorage.setItem('userId', decoded.userId);
    localStorage.setItem('userEmail', decoded.userEmail);
    localStorage.setItem('firstAccess', decoded.firstAccess);
  }
};

const getToken = (): string | null => {
  return localStorage.getItem('token');
};

const logout = () => {
  localStorage.clear();
};

const decodeToken = (token: string): Token | null => {
  if (!token) return null;
  try {
    return jwtDecode<Token>(token);
  } catch (error) {
    console.error('Token inválido', error);
    return null;
  }
};

const isTokenExpired = (token: string): boolean => {
  const decoded = decodeToken(token);
  if (!decoded || !decoded.exp) {
    return true;
  }
  return Date.now() >= decoded.exp * 1000;
};

const isAuthenticated = (): boolean => {
  const token = getToken();
  if (!token) {
    return false;
  }
  return !isTokenExpired(token);
};

const getUserId = (): string | null => {
  return localStorage.getItem('userId');
};

const getUserEmail = (): string | null => {
  return localStorage.getItem('userEmail');
};

export const authService = {
  login,
  signup,
  logout,
  saveToken,
  getToken,
  isAuthenticated,
  decodeToken,
  isTokenExpired,
  getUserId,
  getUserEmail,
};