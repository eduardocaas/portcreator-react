import type React from "react";
import { Button, Container } from "react-bootstrap";
import DetailsProfile from "../details-profile/DetailsProfile";
import FormProfile from "../form-profile/FormProfile";
import type { User } from "../../../../models/admin/User";
import { useEffect, useState } from "react";
import { userService } from "../../../../services/admin/UserService";

const Profile: React.FC = () => {

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    userService.getById().then(
      u => setUser(u)
    )
  })

  return (
    <Container className="container mt-5">
      <Button className="btn-outline-dark"> <i
        className="me-2"></i>Editar perfil</Button >
      <FormProfile />
      <hr />
      <DetailsProfile user={user} />
    </Container >
  );
}

export default Profile