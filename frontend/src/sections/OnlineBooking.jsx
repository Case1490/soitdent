import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";

const OnlineBooking = () => {
  return (
    <section id="online-booking" className="py-16 bg-blue-500 text-white">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h1 className="text-4xl font-bold mb-4">
              ¿Listo para cuidar tu sonrisa?
            </h1>
            <p className="text-lg mb-6">
              Reserva tu cita online de forma rápida y sencilla. Elige el día y
              la hora que mejor se adapte a tu agenda.
            </p>
            <Button
              href="SISTEMA_DE_RESERVAS"
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              className="d-inline-flex align-items-center justify-content-center px-4 py-3 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <FaCalendarAlt className="me-2 fs-4" />
              Reserva tu cita online ahora
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OnlineBooking;
