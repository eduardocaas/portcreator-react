import axios from "axios"
import type { Credentials } from "../models/auth/Credentials";
import type { SignupModel } from "../models/auth/SignupModel";

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