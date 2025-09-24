import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// 1. Importa el logo correctamente desde la carpeta `public`
import Logo from "../../public/logo.png";

const NavbarComponent = () => {
  return (
    <div className="fixed w-full bg-white z-50 shadow">
      <div className="w-5/6 m-auto">
        <Navbar expand="lg" className="py-0">
          <Container fluid>
            <Navbar.Brand href="#" className="w-[80px]">
              <img src={Logo} alt="Logo de la clínica" className="w-full" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="m-auto my-lg-0"
                style={{ maxHeight: "300px" }}
                navbarScroll
              >
                <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                <Nav.Link href="#servicios">Servicios</Nav.Link>
                <Nav.Link href="#especialistas">Especialistas</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#contactanos">Contáctanos</Nav.Link>
              </Nav>

              <Button variant="outline-primary">Intranet</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarComponent;
