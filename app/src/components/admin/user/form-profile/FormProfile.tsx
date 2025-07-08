import type React from "react";
import { Button, Form, Row } from "react-bootstrap";
import './FormProfile.css'
import type { User } from "../../../../models/admin/User";
import { useState } from "react";

interface DetailsProfileProps {
  user: User | null;
}

const FormProfile: React.FC<DetailsProfileProps> = ({ user }) => {

  const [formUser, setFormUser] = useState<User>(user!);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormUser(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Form className="form mt-4">
      <h2>Atualize seus dados</h2>
      <Row>
        <Form.Group className="mb-3 mt-3 col-12 col-md-6">
          <Form.Label htmlFor="name">Nome</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            value={formUser.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-3 col-12 col-md-6">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            value={formUser.email!}
            onChange={handleChange}
            disabled
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-3 col-12">
          <Form.Label htmlFor="location">Localização</Form.Label>
          <Form.Control
            type="text"
            id="location"
            name="location"
            value={formUser.location}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-5 mt-4 col-12 col-lg-6">
          <Form.Label htmlFor="description">Descrição</Form.Label>
          <Form.Control
            id="description"
            name="description"
            value={formUser.description}
            onChange={handleChange}
            as="textarea"
            rows={3} />
        </Form.Group>

        <Form.Group className="mb-5 mt-5 mt-lg-4 col-12 col-lg-6 ">
          <Form.Label htmlFor="goal">Objetivo</Form.Label>
          <Form.Control
            id="goal"
            name="goal"
            value={formUser.goal}
            onChange={handleChange}
            as="textarea"
            rows={3} />
        </Form.Group>

        <Form.Group className="mb-3 mt-4 mt-md-5 col-12 col-md-6">
          <Form.Label htmlFor="github">Github</Form.Label>
          <Form.Control
            type="text"
            id="github"
            name="github"
            value={formUser.github}
            onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3 mt-4 mt-md-5 col-12 col-md-6">

          <Form.Label htmlFor="linkedin">LinkedIn</Form.Label>
          <Form.Control
            type="text"
            id="linkedin"
            name="linkedin"
            value={formUser.linkedin}
            onChange={handleChange} />
        </Form.Group>

        <div className="mt-4 mt-lg-5 col-12 col-md-4 col-lg-2">
          <Button type="submit" className="btn-primary w-100 w-md-auto px-md-4 py-md-2">Atualizar</Button>
        </div >
      </Row >
    </Form >
  )
}

export default FormProfile;