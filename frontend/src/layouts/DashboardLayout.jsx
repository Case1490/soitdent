// src/layouts/DashboardLayout.jsx
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Stethoscope,
  FileText,
} from "lucide-react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="d-flex pt-[90px]">
      {/* Sidebar */}
      <div
        className={`bg-light border-end p-3 ${
          collapsed ? "d-none" : "d-block"
        }`}
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <h4 className="mb-4">Intranet</h4>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/intranet">
            <LayoutDashboard size={18} className="me-2" />
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/intranet/pacientes">
            <Users size={18} className="me-2" />
            Pacientes
          </Nav.Link>
          <Nav.Link as={Link} to="/intranet/citas">
            <Calendar size={18} className="me-2" />
            Citas
          </Nav.Link>
          <Nav.Link as={Link} to="/intranet/odontologos">
            <Stethoscope size={18} className="me-2" />
            Odontólogos
          </Nav.Link>
          <Nav.Link as={Link} to="/intranet/tratamientos">
            <FileText size={18} className="me-2" />
            Tratamientos
          </Nav.Link>
          <Nav.Link as={Link} to="/intranet/reportes">
            📊 Reportes
          </Nav.Link>
        </Nav>
      </div>

      {/* Contenido */}
      <div className="flex-grow-1">
        <Navbar bg="light" expand="lg" className="border-bottom">
          <Container fluid>
            <Navbar.Brand>Panel Intranet</Navbar.Brand>
            <button
              className="btn btn-outline-secondary"
              onClick={() => setCollapsed(!collapsed)}
            >
              ☰
            </button>
          </Container>
        </Navbar>
        <Container fluid className="p-4">
          <Outlet />
        </Container>
      </div>
    </div>
  );
}
