import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  return (
    <div className="fixed w-full bg-white z-50 py-1 shadow">
      <div className="w-5/6 m-auto">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">SOITDENT</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="m-auto my-2 my-lg-0"
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
