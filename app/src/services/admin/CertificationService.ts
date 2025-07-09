import api from "../../api";
import type { Certification } from "../../models/admin/certification/Certification";
import type { CertificationPartial } from "../../models/admin/certification/CertificationPartial";
import type { CertificationSave } from "../../models/admin/certification/CertificationSave";
import type { User } from "../../models/admin/User";
import { authService } from "../auth/AuthService";

const API_URL = import.meta.env.VITE_API_URL;

const httpOptions = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const getAll = async (portfolio: boolean): Promise<Certification[] | CertificationPartial[]> => {
  try {
    const config = portfolio ? { params: { portfolio: true } } : {};
    const response = await api.get(`${API_URL}/api/certifications`, config)
    return response.data;
  }
  catch (error) {
    console.error("Falha ao consultar:", error);
    throw error;
  }
}

const getById = async (id: string): Promise<Certification> => {
  try {
    if (!id) {
      return Promise.reject(new Error("Id inválido"));
    }
    const response = await api.get<Certification>(`${API_URL}/api/certifications/${id}`);
    return response.data;
  }
  catch (error) {
    console.error("Falha ao consultar:", error);
    throw error;
  }
}

const save = async (certification: CertificationSave) => {
  try {
    const response = await api.post(`${API_URL}/api/certifications`, certification, httpOptions);
    return response.data;
  }
  catch (error) {
    console.error("Falha ao salvar:", error);
    throw error;
  }
}

const remove = async (id: string) => {
  try {
    const response = await api.delete(`${API_URL}/api/certifications/${id}`);
    return response.data;
  }
  catch (error) {
    console.error("Falha ao remover:", error);
    throw error;
  }
}

const update = async (id: string, certification: CertificationSave) => {
  try {
    const response = await api.put(`${API_URL}/api/certifications/${id}`, certification, httpOptions);
    return response.data;
  }
  catch (error) {
    console.error("Falha ao salvar:", error);
    throw error;
  }
}

export const certificationService = {
  getAll,
  getById,
  save,
  remove, 
  update
}


