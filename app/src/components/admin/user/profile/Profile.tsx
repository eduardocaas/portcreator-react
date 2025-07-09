import type React from "react";
import { Button, Container } from "react-bootstrap";
import DetailsProfile from "../details-profile/DetailsProfile";
import FormProfile from "../form-profile/FormProfile";
import type { User } from "../../../../models/admin/User";
import { useEffect, useState } from "react";
import { userService } from "../../../../services/admin/UserService";

const Profile: React.FC = () => {

  const [user, setUser] = useState<User | null>(null);
  const [viewUser, setViewUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const loadUser = () => {
    userService.getById().then(
      user => {
        setUser(user);
        if (user) {
          setViewUser({ ...user })
        }
      }
    )
  }
  useEffect(() => {
    loadUser();
  }, [])

  useEffect(() => {
    if (user) {
      loadViewUser()
    }
  }, [user])

  function loadViewUser() {
    setViewUser({ ...user! })
  }

  return (
    <Container className="mt-5">
      <Button onClick={() => setIsEditing(!isEditing)} className="btn-outline-dark"> <i
        className="bi bi-chevron-up me-2"></i>Editar perfil
      </Button >
      {(isEditing && user) && <FormProfile user={user} onUpdate={loadUser} />}
      <hr />
      <DetailsProfile user={viewUser} />
    </Container >
  );
}

export default Profile