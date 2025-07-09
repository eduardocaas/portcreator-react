import api from "../../api";
import type { User } from "../../models/admin/User";
import { authService } from "../auth/AuthService";

const API_URL = import.meta.env.VITE_API_URL;

const httpOptions = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const getById = async (): Promise<User | null> => {
  try {
    let id = authService.getUserId();
    if (id == null) {
      return null;
    }
    const response = await api.get<User>(`${API_URL}/api/users`);
    return response.data;
  }
  catch (error) {
    console.error("Falha ao consultar:", error);
    throw error;
  }
}

const update = async (user: User) => {
  try {
    let id = authService.getUserId();
    if (id == null || !id) {
      return null;
    }
    const response = await api.put(`${API_URL}/api/users/${id}`, user, httpOptions);
    return response;
  }
  catch (error) {
    console.error("Falha ao consultar:", error);
    throw error;
  }
}

export const userService = {
  getById,
  update
}