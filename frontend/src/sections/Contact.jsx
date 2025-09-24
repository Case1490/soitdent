import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contactanos" className="py-12 bg-contact">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-10">Contáctanos</h2>
        <Row className="justify-center pt-10">
          <Col lg={10}>
            <Row className="shadow-lg rounded-lg overflow-hidden">
              {/* Columna del Formulario */}
              <Col md={6} className="p-6 bg-white">
                <h3 className="text-2xl font-semibold mb-4">
                  Envíanos un mensaje
                </h3>
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Número de teléfono</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Ingresa tu teléfono"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Tu mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Escribe tu mensaje aquí"
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 bg-blue-500 hover:bg-blue-600 text-white border-0 py-2"
                  >
                    Enviar mensaje
                  </Button>
                </Form>
              </Col>

              {/* Columna del Mapa y WhatsApp */}
              <Col md={6} className="d-flex flex-column p-0">
                <div className="flex-grow-1">
                  <iframe
                    title="Google Maps Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.138407425126!2d-77.03966838517205!3d-12.04655519159392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c879c2980b6b%3A0x6a0c5c4f2e9d2a23!2sPlaza%20de%20Armas%20de%20Lima!5e0!3m2!1ses!2spe!4v1619478123456!5m2!1ses!2spe"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>

                <div className="p-4 bg-white d-flex align-items-center justify-content-between flex-wrap">
                  <div className="mb-3 mb-md-0">
                    <h5 className="font-bold">Contáctanos directamente:</h5>
                    <p className="text-gray-600">Av. Ejemplo 123, Miraflores</p>
                    <p className="text-gray-600">Tel: +51 987 654 321</p>
                  </div>
                  <a
                    href="https://wa.me/51987654321?text=Hola,%20me%20gustaría%20obtener%20más%20información."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success d-flex align-items-center"
                  >
                    <FaWhatsapp className="me-2 text-xl" /> Enviar WhatsApp
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
