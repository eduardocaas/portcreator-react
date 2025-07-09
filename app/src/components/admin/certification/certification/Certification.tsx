import type React from "react";
import { Button, Container } from "react-bootstrap";
import CardCertification from "../card-certification/CardCertification";
import { useEffect, useState } from "react";
import type { CertificationPartial } from "../../../../models/admin/certification/CertificationPartial";
import { certificationService } from "../../../../services/admin/CertificationService";
import { Link } from "react-router";

const Certification: React.FC = () => {

  const [certifications, setCertifications] = useState<CertificationPartial[]>([]);

  const loadCertifications = () => {
    certificationService.getAll(false).then(
      certs => setCertifications(certs)
    )
  }
  useEffect(() => {
    loadCertifications();
  }, [])

  return (
    <Container className="mt-5">
      <Link className="btn btn-outline-dark" to="/app/certifications/create"> <i className="bi bi-save me-3"></i>Adicionar
        certificação</Link>

      <hr />
      <div className="d-flex">
        <h3 className="mb-3">Certificações</h3>
        <div className="mb-3 ms-3 me-3 vr"></div>

        <div className="mb-3 w-100">
          <div className="row g-2">
            <div className="col-12 col-md-8 col-lg-3">
              <div className="input-group">
                <span className="input-group-text">&#8981;</span>
                <input type="text" className="form-control" placeholder="Pesquisa" />
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
              <select className="form-select">
                <option>Opt</option>
              </select>
            </div>
          </div>
        </div>
      </div >
      <div className="row">
        {
          certifications.map(cert => (
            <div key={cert.id} className="col-12 col-md-6 col-xl-4 mb-3">
              <CardCertification onDelete={loadCertifications} certification={cert} />
            </div>
          ))
        }
      </div >
      {certifications.length == 0 && (<p className="text-secondary mt-1"> Você ainda não possui certificações registradas!</p >)}
      {/* <p className="text-secondary mt-1">Nenhuma certificação encontrada!</p > */}
    </Container >
  )
}

export default Certification