import type React from "react";
import { Button, Card } from "react-bootstrap";
import type { CertificationPartial } from "../../../../models/admin/certification/CertificationPartial";
import { Link } from "react-router";
import { certificationService } from "../../../../services/admin/CertificationService";

interface CardCertificationProps {
  certification: CertificationPartial | null;
  onDelete: () => void;
}

const CardCertification: React.FC<CardCertificationProps> = ({ certification, onDelete }) => {
  let detailsUrl = '#'
  if (certification) {
    detailsUrl = `/app/certifications/${certification.id}`;
  }

  const handleDelete = async () => {
    if (certification) {
      try {
        await certificationService.remove(certification.id);
        onDelete();
        alert("Certificação removida com sucesso!");
      } catch (error) {
        console.error("Erro ao remover certificação:", error);
        alert("Falha ao remover certificação!");
      }
    }
  };

  return (
    <>
      {certification && (
        <Card>
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title">{certification.title}</h5>
              <p className="card-text">{certification.hours} horas</p>
              <Link to={detailsUrl} className="btn btn-secondary">Detalhes</Link>
              <button
                className="btn btn-outline-primary ms-1">
                <i className="bi bi-pencil"></i>
              </button>
              <button className="btn btn-outline-danger ms-1" onClick={handleDelete} data-bs-toggle="modal">
                <i className="bi bi-trash"></i>
              </button>
            </div>
            <div>
              <img className="img-thumbnail" src='/public/img/not_found.jpg' style={{ maxWidth: "100px" }} alt="Certificado" />
            </div>
          </div >
        </Card >
      )}
    </>

    /*    <!-- Modal -->
   <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
     <div class="modal-dialog">
       <div class="modal-content">
         <div class="modal-header">
           <h1 class="modal-title fs-5" id="deleteModalLabel">Confira os dados abaixo</h1>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
           <table class="table table-secondary table-bordered table-striped-columns">
             <tbody>
               <tr>
                 <td class="fw-bold col-3">Título</td>
                 <td>{{ certification.title }}</td>
               </tr>
               <tr>
                 <td class="fw-bold col-3">Horas</td>
                 <td>{{ certification.hours }}</td>
               </tr>
             </tbody>
           </table>
         </div>
         <div class="modal-footer d-flex justify-content-between align-items-center">
           <span class="text-muted">Clique no botão vermelho para deletar!</span>
           <div>
             <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Fechar</button>
             <button type="button" (click)="delete()" class="btn btn-danger">Deletar</button>
           </div>
         </div>
       </div>
     </div>
   </div> */
  )
}

export default CardCertification