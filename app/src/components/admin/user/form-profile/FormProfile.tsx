import type React from "react";
import { Alert, Button, Form, Row } from "react-bootstrap";
import './FormProfile.css'
import type { User } from "../../../../models/admin/User";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { UserMessage } from "../../../../models/messages/UserMessage";
import { userService } from "../../../../services/admin/UserService";

interface DetailsProfileProps {
  user: User | null;
  onUpdate: () => void;
}

const FormProfile: React.FC<DetailsProfileProps> = ({ user, onUpdate }) => {

  const [formUser, setFormUser] = useState<User>(user!);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>("Preencha os campos acima!");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInfoMessage(null);
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!formUser?.name || !formUser?.email) {
      setErrorMessage("Campos obrigatórios: nome, email");
      return;
    }

    try {
      const response = await userService.update(formUser);
      if (response) {
        setSuccessMessage("Dados atualizados com sucesso!")
        onUpdate();
        return;
      }
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const status = axiosError.response.status;
          if (status == 400) {
            setErrorMessage(axiosError.message);
          } else if (status == 404) {
            setErrorMessage(UserMessage.ERROR_404);
          } else {
            setErrorMessage(UserMessage.ERROR_500);
          }
        } else if (axiosError.request) {
          setErrorMessage("Falha ao realizar requisição!");
        } else {
          setErrorMessage("Falha ao processar solicitação!");
        }
      } else {
        setErrorMessage("Erro desconhecido!");
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit} className="form mt-4">
      <h2>Atualize seus dados</h2>
      <Row>
        <Form.Group className="mb-3 mt-3 col-12 col-md-6">
          <Form.Label htmlFor="name">Nome</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            value={formUser.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-3 col-12 col-md-6">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            value={formUser.email!}
            onChange={handleChange}
            disabled
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-3 col-12">
          <Form.Label htmlFor="location">Localização</Form.Label>
          <Form.Control
            type="text"
            id="location"
            name="location"
            value={formUser.location}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-5 mt-4 col-12 col-lg-6">
          <Form.Label htmlFor="description">Descrição</Form.Label>
          <Form.Control
            id="description"
            name="description"
            value={formUser.description}
            onChange={handleChange}
            as="textarea"
            rows={3} />
        </Form.Group>

        <Form.Group className="mb-5 mt-5 mt-lg-4 col-12 col-lg-6 ">
          <Form.Label htmlFor="goal">Objetivo</Form.Label>
          <Form.Control
            id="goal"
            name="goal"
            value={formUser.goal}
            onChange={handleChange}
            as="textarea"
            rows={3} />
        </Form.Group>

        <Form.Group className="mb-3 mt-4 mt-md-5 col-12 col-md-6">
          <Form.Label htmlFor="github">Github</Form.Label>
          <Form.Control
            type="text"
            id="github"
            name="github"
            value={formUser.github}
            onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3 mt-4 mt-md-5 col-12 col-md-6">

          <Form.Label htmlFor="linkedin">LinkedIn</Form.Label>
          <Form.Control
            type="text"
            id="linkedin"
            name="linkedin"
            value={formUser.linkedin}
            onChange={handleChange} />
        </Form.Group>

        <div className="mt-4 mt-lg-5 col-12 col-md-4 col-lg-2">
          <Button type="submit" className="btn-primary w-100 w-md-auto px-md-4 py-md-2">Atualizar</Button>
        </div >
        <div className="mt-3 mb-2 col-12">
          {infoMessage && <Alert className='lh-1' variant="primary">{infoMessage}</Alert>}
          {errorMessage && <Alert className='lh-1' variant="danger">{errorMessage}</Alert>}
          {successMessage && <Alert className='lh-1' variant="success">{successMessage}</Alert>}
        </div>
      </Row >
    </Form >
  )
}

export default FormProfile;