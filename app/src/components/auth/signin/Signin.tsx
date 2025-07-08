import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios, { AxiosError } from 'axios';
import { authService } from '../../../services/auth/AuthService';
import type { Credentials } from '../../../models/auth/Credentials';
import { Button, Container, Row, Form, Alert } from 'react-bootstrap';
import { AuthMessage } from '../../../models/messages/AuthMessage';
import './Signin.css'

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<Credentials>({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    if (!credentials.email || !credentials.password) {
      setErrorMessage("Campos inválidos");
      setIsLoading(false);
      return;
    }

    try {
      const loginSuccess = await authService.login(credentials);

      if (loginSuccess) {
        setTimeout(() => {
          navigate('/app');
        }, 500);
      } else {
        setErrorMessage(AuthMessage.ERROR_500);
        setIsLoading(false);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const status = axiosError.response.status;
          if (status === 400) {
            setErrorMessage(AuthMessage.SIGNIN_ERROR_400);
          } else if (status === 404) {

            setErrorMessage(AuthMessage.SIGNIN_ERROR_404);
          } else {
            setErrorMessage(AuthMessage.ERROR_500);
          }
        } else if (axiosError.request) {
          setErrorMessage("Falha ao realizar requisição");
        } else {
          setErrorMessage("Falha ao processar solicitação");
        }
      } else {
        setErrorMessage("Erro desconhecido");
      }
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Row className='min-vh-100 d-flex justify-content-center align-items-center'>
        <Form onSubmit={handleSubmit} className='col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 rounded pt-5 pb-5 p-4'>
          <h3>Login</h3>
          <hr />
          {errorMessage && <Alert className='lh-1' variant="danger">{errorMessage}</Alert>}
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='inputEmail'>E-mail</Form.Label>
            <Form.Control
              type='email'
              id='inputEmail'
              name='email'
              value={credentials.email}
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
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <br />
          <Button type='submit' className='mt-1 w-100' disabled={isLoading}>
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>
          <p className='mt-3 text-start'>Não tem uma conta? <a href='/signup'>Registre-se</a></p>
        </Form>
      </Row>
    </Container>
  );
};

export default SignIn;