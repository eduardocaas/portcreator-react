import axios from "axios"
import type { Credentials } from "../models/auth/Credentials";
import type { SignupModel } from "../models/auth/SignupModel";
import { jwtDecode } from "jwt-decode";

const API_URL = import.meta.env.VITE_API_URL;

const httpOptions = {
  headers: {
    'Content-Type' : 'application/json'
  }
};

const login = async (credentials: Credentials) => {
  const response = await axios.post(`${API_URL}/auth/sign`, credentials, httpOptions);
  return response.data;
} 

const signup = async (signupModel: SignupModel) => {
  return axios.post(`${API_URL}/auth/signup`, signupModel, httpOptions);
}

const decodeToken = (token: string) => {
  if (!token) return null;
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error('Token inválido', error)
    return null;
  }
}

const isTokenExpired = (token: string) => {
  const decoded = decodeToken(token);
  if (!decoded || !decoded.exp) {
    return true;
  }
  return Date.now() >= decoded.exp * 1000;
}

export const authService = {
  login,
  signup,
  decodeToken,
  isTokenExpired
}