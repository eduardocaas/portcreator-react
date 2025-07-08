import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { authService } from '../../../services/auth/AuthService';
import type { Credentials } from '../../../models/auth/Credentials';
import { Button, Container, Row, Form, Alert } from 'react-bootstrap';
import { AuthMessage } from '../../../models/messages/AuthMessage';
import './Signup.css'
import type { SignupModel } from '../../../models/auth/SignupModel';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [model, setModel] = useState<SignupModel>({ name: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setModel(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!model.name || !model.email || !model.password) {
      setIsLoading(false);
      setErrorMessage("Campos inválidos");
      return;
    }

    try {
      await authService.signup(model);
      setIsLoading(true);
      setErrorMessage(null);
      setSuccessMessage("Cadastro realizado com sucesso!")
      setTimeout(() => {
        navigate('/signin');
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const status = axiosError.response.status;
          if (status === 409) {
            setErrorMessage(AuthMessage.SIGNUP_ERROR_409);
          } else if (status === 400) {

            setErrorMessage(AuthMessage.SIGNUP_ERROR_400);
          } else {
            setErrorMessage(AuthMessage.ERROR_500);
          }
        } else if (axiosError.request) {
          setErrorMessage("Falha ao realização requisição");
        } else {
          setErrorMessage("Falha ao processar solicitação");
        }
      } else {
        setErrorMessage("Erro desconhecido");
      }
    }
  };

  return (
    <Container>
      <Row className='min-vh-100 d-flex justify-content-center align-items-center'>
        <Form onSubmit={handleSubmit} className='col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 rounded pt-5 pb-5 p-4'>
          <h3>Cadastro</h3>
          <hr />
          {errorMessage && <Alert className='lh-1' variant="danger">{errorMessage}</Alert>}
          {successMessage && <Alert className='lh-1' variant="success">{successMessage}</Alert>}
          <Form.Group className='mb-2'>
            <Form.Label htmlFor='inputName'>Nome</Form.Label>
            <Form.Control
              type='text'
              id='inputName'
              name='name'
              value={model.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <br />
          <Form.Group className='mb-2'>
            <Form.Label htmlFor='inputEmail'>E-mail</Form.Label>
            <Form.Control
              type='email'
              id='inputEmail'
              name='email'
              value={model.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <br />
          <Form.Group className="mb-3">
            <Form.Label htmlFor='inputPassword'>Senha</Form.Label>
            <Form.Control
              type='password'
              id='inputPassword'
              name='password'
              value={model.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <br />
          <Button type='submit' className='col-12 mb-2 mt-1' disabled={isLoading}>
            {isLoading ? 'Redirecionando...' : 'Cadastrar'}</Button>
          <p>Já possui uma conta? <a href='/signin'>Login</a></p>
        </Form>
      </Row>
    </Container>
  )
};

export default SignUp;