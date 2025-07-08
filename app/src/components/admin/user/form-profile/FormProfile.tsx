import type React from "react";
import { Form, Row } from "react-bootstrap";
import './FormProfile.css'

const FormProfile: React.FC = () => {
  return (
    <>
      <Form className="form container mt-4">
        <h2>Atualize seus dados</h2>
        <Row>
          <Form.Group className="mb-3 col-12 col-md-6">
            <Form.Label for="name">Nome</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3 col-12 col-md-6">
            <Form.Label for="email">Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              disabled
              required
            />

            <Form.Group className="mb-3 col-12">
              <Form.Label for="location">Localização</Form.Label>
              <Form.Control
                type="text"
                id="location"
                name="location"
              />
            </Form.Group>

            <Form.Group className="mb-3 col-12 col-lg-6">
              <Form.Label for="description">Descrição</Form.Label>
              <Form.Control
                id="description"
                name="description"
                type="textarea"
                rows="3" />
            </Form.Group>

            <div className="mb-3 col-12 col-lg-6">
              <label for="goal" className="form-label">Objetivo</label>
              <textarea className="form-control" id="goal" [(ngModel)]="user.goal" name="goal" rows="3"></textarea>
          </div >

          <div className="mb-3 col-12 col-md-6">
            <label for="github" className="form-label">Github</label>
            <input type="text" className="form-control" [(ngModel)]="user.github" name="github" id="github">
          </div>

          <div className="mb-3 col-12 col-md-6">
            <label for="linkedin" className="form-label">LinkedIn</label>
            <input type="text" className="form-control" [(ngModel)]="user.linkedin" name="linkedin" id="linkedin">
          </div>

          <div className="mt-2 col-12 col-md-4 col-lg-2">
            <button type="submit" [disabled]="!this.nameControl.valid" (click)="update()" className="btn btn-primary w-100 w-md-auto px-md-4 py-md-2">Atualizar</button>
        </div >
      </Row >

    </Form >
</>
)
}

export default FormProfile;