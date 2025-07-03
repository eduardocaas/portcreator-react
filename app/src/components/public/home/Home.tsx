import { Button } from 'react-bootstrap'
import './Home.css'

export function Home() {
  return (
    <>
      <Button href='/signin' className='me-2'>Login</Button>
      <Button href='/signup'>Registre-se</Button>
    </>
  )
}