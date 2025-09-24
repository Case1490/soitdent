import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <Container>
        <Row className="text-center">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="font-bold text-lg text-white">
              Clínica Odontológica
            </h5>
            <p className="text-sm">
              Tu sonrisa, nuestra pasión.
              <br />
              Expertos en salud y estética dental.
            </p>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="font-bold text-lg text-white">Contáctanos</h5>
            <ul className="list-unstyled text-sm">
              <li>Dirección: Av. Ejemplo 123, Miraflores</li>
              <li>Teléfono: +51 987 654 321</li>
              <li>Email: info@clinicadental.com</li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="font-bold text-lg text-white">Síguenos</h5>
            <div className="flex justify-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://wa.me/51987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
