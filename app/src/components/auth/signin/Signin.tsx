import { Button, Container, FormControl, FormLabel } from 'react-bootstrap'
import './Signin.css'

function SignIn() {
  return (
   <Container>
    <form>
      <div className='mb-1'>
        <FormLabel htmlFor='inputEmail'>E-mail</FormLabel>
        <FormControl type='email' id='inputEmail' required></FormControl>
      </div> 
      <div className="mb-1">
        <FormLabel htmlFor='inputPassword'>Senha</FormLabel>
        <FormControl type='password' id='inputPassword' required></FormControl>
      </div>
      <Button type='submit'>Entrar</Button>
      <p>Não tem uma conta? <a>Registre-se</a></p>
    </form>
   </Container>
  )
}