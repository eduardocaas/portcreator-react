import { Button } from 'react-bootstrap'
import './NotFound.css'

export function NotFound() {
  return (
    <>
      <h1>Página não encontrada</h1>
      <Button href='/'>Voltar a página inicial</Button>
    </>
  )
}