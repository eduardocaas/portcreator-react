import type React from "react";
import { Button, Container } from "react-bootstrap";
import DetailsProfile from "../details-profile/DetailsProfile";
import FormProfile from "../form-profile/FormProfile";
import type { User } from "../../../../models/admin/User";

const Profile: React.FC = () => {

  let user: User = {
    id: '',
    name: '',
    email: '',
    description: '',
    goal: '',
    github: '',
    linkedin: '',
    location: ''
  }

  return (
    <Container className="container mt-5">
      <Button className="btn btn-outline-dark"> <i
        className="me-2"></i>Editar perfil</Button >
      <FormProfile />
      <hr />
      <DetailsProfile user={user}/>
    </Container >
  );
}

export default Profile