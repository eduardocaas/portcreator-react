import type React from "react";
import { Button, Form, Row } from "react-bootstrap";
import './FormProfile.css'

const FormProfile: React.FC = () => {
  return (
    <Form className="form mt-4">
      <h2>Atualize seus dados</h2>
      <Row>
        <Form.Group className="mb-3 mt-3 col-12 col-md-6">
          <Form.Label for="name">Nome</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-3 col-12 col-md-6">
          <Form.Label for="email">Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            disabled
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-3 col-12">
          <Form.Label for="location">Localização</Form.Label>
          <Form.Control
            type="text"
            id="location"
            name="location"
          />
        </Form.Group>

        <Form.Group className="mb-5 mt-4 col-12 col-lg-6">
          <Form.Label for="description">Descrição</Form.Label>
          <Form.Control
            id="description"
            name="description"
            as="textarea"
            rows={3} />
        </Form.Group>

        <Form.Group className="mb-5 mt-5 mt-lg-4 col-12 col-lg-6 ">
          <Form.Label for="goal">Objetivo</Form.Label>
          <Form.Control
            id="goal"
            name="goal"
            as="textarea"
            rows={3} />
        </Form.Group>

        <Form.Group className="mb-3 mt-4 mt-md-5 col-12 col-md-6">
          <Form.Label for="github">Github</Form.Label>
          <Form.Control
            type="text"
            id="github"
            name="github" />
        </Form.Group>

        <Form.Group className="mb-3 mt-4 mt-md-5 col-12 col-md-6">

          <Form.Label for="linkedin">LinkedIn</Form.Label>
          <Form.Control
            type="text"
            id="linkedin"
            name="linkedin" />
        </Form.Group>

        <div className="mt-4 mt-lg-5 col-12 col-md-4 col-lg-2">
          <Button type="submit" className="btn-primary w-100 w-md-auto px-md-4 py-md-2">Atualizar</Button>
        </div >
      </Row >
    </Form >
  )
}

export default FormProfile;