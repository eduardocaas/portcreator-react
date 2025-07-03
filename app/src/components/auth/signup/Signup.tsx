import './Signup.css'
import { Button, Container, FormControl, FormLabel, Row } from "react-bootstrap";

export default function SignUp() {
  return(
      <Container>
      <Row className='min-vh-100 d-flex justify-content-center align-items-center'>
        <form className='col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 rounded pt-5 pb-5 p-4'>
          <h3>Cadastro</h3>
          <hr />
          <div className='mb-1'>
            <FormLabel htmlFor='inputName'>Nome</FormLabel>
            <FormControl type='text' id='inputName' required></FormControl>
          </div>
          <div className='mb-1'>
            <FormLabel htmlFor='inputEmail'>E-mail</FormLabel>
            <FormControl type='email' id='inputEmail' required></FormControl>
          </div>
          <div className="mb-3">
            <FormLabel htmlFor='inputPassword'>Senha</FormLabel>
            <FormControl type='password' id='inputPassword' required></FormControl>
          </div>
          <Button type='submit' className='col-12 col-md-3 mb-2'>Cadastrar</Button>
          <p>Já possui uma conta? <a href='/signin'>Login</a></p>
        </form>
      </Row>
    </Container>
  )
}