import type React from "react";
import { Button, Container } from "react-bootstrap";
import DetailsProfile from "../details-profile/DetailsProfile";
import FormProfile from "../form-profile/FormProfile";

const Profile: React.FC = () => {
  return (
    <Container className="container mt-5">
      <Button className="btn btn-outline-dark"> <i
        className="me-2"></i>Editar perfil</Button >
      <FormProfile />
      <hr />
      <DetailsProfile />
    </Container >
  );
}

export default Profile