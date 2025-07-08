import type React from "react";
import type { User } from "../../../../models/admin/User";

interface DetailsProfileProps {
  user: User | null;
}

const DetailsProfile: React.FC<DetailsProfileProps> = ({ user }) => {

  return (
    <>
      <h3>Informações</h3>
      <h5>Sobre</h5>
      {!user && <p className="text-secondary">Usuário não encontrado.</p>}
      {user && (
        <>
          {user.description && (<p>{user.description}</p>)}
          {!user.description && (<p className="text-secondary"> Adicione uma descrição</p>)}
          <h5>Objetivo</h5>
          {user.goal && (<p>{user.goal}</p>)}
          {!user.goal && (<p className="text-secondary"> Adicione um objetivo</p>)}
          <h5>Perfil</h5>
          <table className="table table-striped-columns table-hover table-bordered">
            <tbody>
              <tr>
                <td className="fw-bold col-1 col-sm-2">Nome</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td className="fw-bold col-1 col-sm-2">Email</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td className="fw-bold col-1 col-sm-2">Localização</td>
                {user.location && (<td>{user.location}</td>)}
                {!user.location && (<td className="text-secondary">Não informado</td>)}
              </tr>
              <tr>
                <td className="fw-bold col-1 col-sm-2">Github</td>
                {user.github && (<td>{user.github}</td>)}
                {!user.github && (<td className="text-secondary">Não informado</td>)}
              </tr>
              <tr>
                <td className="fw-bold col-1 col-sm-2">LinkedIn</td>
                {user.linkedin && (<td>{user.linkedin}</td>)}
                {!user.linkedin && (<td className="text-secondary">Não informado</td>)}
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  )
}

export default DetailsProfile;