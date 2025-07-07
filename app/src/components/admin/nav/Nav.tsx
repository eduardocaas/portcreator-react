import type React from "react"
import { Button } from "react-bootstrap"
import Footer from "../footer/Footer";
import { Outlet } from "react-router";

const Nav: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="/app">Portcreator</a>

          {/* Botão mobile */}
          <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegação">
            <span className="navbar-toggler-icon"></span>
          </Button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/app"
                >Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/app/certifications"
                >Certificações</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/app/profile"
                >Perfil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/app/portfolio"
                >Portfolio</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Button className="btn-outline-light">Logout</Button>
              </li>
            </ul >
          </div >
        </div >
      </nav >

      <div className="flex-fill">
        <Outlet></Outlet>
      </div>

      <Footer />
    </div >
  );
}

export default Nav;