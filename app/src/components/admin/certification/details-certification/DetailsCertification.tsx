import type React from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router";
import type { Certification } from "../../../../models/admin/certification/Certification";
import { useEffect, useState } from "react";
import { certificationService } from "../../../../services/admin/CertificationService";

const DetailsCertification: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [certification, setCertification] = useState<Certification | null>(null);

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

  const formatType = (type: number | string): string => {
  // Convertemos para número para garantir a comparação
  const numericType = Number(type);
  switch (numericType) {
    case 0:
      return "Curso";
    case 1:
      return "Certificação";
    default:
      return "Não definido";
  }
};

const formatDate = (date: Date | string | null): string => {
  if (!date) {
    return "Data não informada";
  }
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC' 
  });
};


  return (
    <Container className="mt-5">
      <Link className="btn btn-outline-primary" to="/app/certifications"><i className="bi bi-arrow-left me-2"></i>Voltar</Link>
      <hr />
      <h3>Informações</h3>
      {/*         <!-- TODO: Imagem aqui --> */}
      <h5>Título</h5>{certification && (
        <>
          <p>{certification.title}</p>
          <h5>Descrição</h5>
          <p>{certification.description}</p>
          <h5>Certificação</h5>
          <table className="table table-striped-columns table-hover table-bordered">
            <thead>
              <tr>
                <th className="col-1 col-sm-2">Campo</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fw-bold col-1 col-sm-2">Instituição</td>
                <td>{certification.institutionName}</td>
              </tr>
              <tr>
                <td className="fw-bold col-1 col-sm-2">Tipo</td>
                <td>{formatType(certification.type)}</td>
              </tr>
              <tr>
                <td className="fw-bold col-1 col-sm-2">Horas</td>
                <td>{certification.hours}</td>
              </tr>
              <tr>
                <td className="fw-bold col-1 col-sm-2">Data de emissão</td>
                <td>{formatDate(certification.issueDate)}</td>
              </tr>
            </tbody>
          </table>
        </>)}
    </Container>
  )
}

export default DetailsCertification