import type React from "react";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useParams } from "react-router";
import { certificationService } from "../../../../services/admin/CertificationService";
import type { Certification } from "../../../../models/admin/certification/Certification";

const FormCertification: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [certification, setCertification] = useState<Certification>({
    id: '',
    title: '',
    institutionName: '',
    description: '',
    issueDate: new Date(),
    hours: 0,
    type: 0,
    imagePath: ''
  });

  useEffect(() => {
    const loadCertification = async () => {
      if (id) {
        try {
          const data = await certificationService.getById(id);
          setCertification(data);
        } catch (error) {
          console.error("Falha ao carregar certificação:", error);
          alert("Falha ao carregar certificação")
        }
      }
    };
    loadCertification();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const finalValue = name === 'hours' ? parseInt(value, 10) || 0 : value;

    setCertification(prev => ({ ...prev, [name]: finalValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      try {
        await certificationService.update(
          id,
          certification
        );
        alert("Certificação atualizada com sucesso!")
      } catch (error) { // TODO: Adicionar tratamento por código de erro
        console.error("Erro ao atualizar certificação:", error);
        alert("Falha ao atualizar certificação!");
      }
    }
    else {
      try {
        await certificationService.save(
          {
            title: certification.title,
            description: certification.description,
            type: certification.type,
            issueDate: certification.issueDate,
            hours: certification.hours,
            institutionName: certification.institutionName,
            imagePath: certification.imagePath
          }
        );
        alert("Certificação salva com sucesso!")
      } catch (error) { // TODO: Adicionar tratamento por código de erro
        console.error("Erro ao registrar certificação:", error);
        alert("Falha ao registrar certificação!");
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit} className="container mt-5">
      <Link type="button" className="btn btn-outline-secondary mb-3" to="/app/certifications"><i
        className="bi bi-chevron-left me-2"></i><span className="me-2">Voltar</span></Link>
      <h2>Registrar certificação</h2>
      <div className="row">
        <Form.Group className="mb-3 col-12 col-md-6">
          <Form.Label htmlFor="title">Título</Form.Label>
          <Form.Control type="text" id="title"
            value={certification.title}
            onChange={handleChange}
            name="title" required />
        </Form.Group >

        <Form.Group className="mb-3 col-12 col-md-6">
          <Form.Label htmlFor="institution">Instituição</Form.Label>
          <Form.Control type="text" id="institution" name="institutionName"
            value={certification.institutionName}
            onChange={handleChange}
            required />
        </Form.Group >

        <Form.Group className="mb-3 col-12">
          <Form.Label for="description" className="form-label">Descrição</Form.Label>
          <Form.Control id="description" as='textarea' rows={4} name="description"
            value={certification.description}
            onChange={handleChange}
            required />
        </Form.Group >

        <Form.Group className="mb-3 col-12 col-md-6">
          <Form.Label htmlFor="issueDate">Data de emissão</Form.Label>
          <Form.Control type="date" id="issueDate" name="issueDate"
            value={certification.issueDate instanceof Date ? certification.issueDate.toISOString().split('T')[0] : certification.issueDate}
            onChange={handleChange}
            required />
        </Form.Group >

        <Form.Group className="mb-3 col-12 col-md-6">
          <Form.Label htmlFor="hours">Duração (horas)</Form.Label>
          <Form.Control type="number" id="hours"
            name="hours"
            value={certification.hours}
            onChange={handleChange}
            required />
        </Form.Group >

        <Form.Group className="mb-3 col-12 col-md-6">
          <p className="form-label">Tipo de certificado</p>
          <Form.Check
            type="radio"
            label="Certificação"
            name="type"
            value="0"
            id="radioCertification"
            checked={certification.type == 0}
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="Curso"
            name="type"
            value="1"
            id="radioCourse"
            checked={certification.type == 1}
            onChange={handleChange}
          />
        </Form.Group>
      </div>

      <div className="mb-3 col-12 col-md-3 offset-md-3 d-flex align-items-center justify-content-end">
        {!id && (<button type="submit"
          className="btn btn-primary w-100 w-md-auto px-md-4 py-md-2">Registrar
        </button>)}
        {id && (<button type="submit" className="btn btn-primary w-100 w-md-auto px-md-4 py-md-2" > Atualizar
        </button >)}
      </div >
    </Form >
  )
}

export default FormCertification