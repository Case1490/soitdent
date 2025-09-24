import { Container, Row, Col, Carousel } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

import Testimonio1 from "../assets/testimonio1.jpg";
import Testimonio2 from "../assets/testimonio2.jpg";
import Testimonio3 from "../assets/testimonio3.jpg";

const testimonialsData = [
  {
    id: 1,
    name: "Ana G.",
    text: "¡Estoy fascinada con los resultados! El personal es muy profesional y me hicieron sentir cómoda en todo momento. ¡Mi sonrisa nunca se vio mejor!",
    rating: 5,
    image: Testimonio1,
  },
  {
    id: 2,
    name: "Juan S.",
    text: "Tenía mucho miedo al dentista, pero aquí la experiencia fue increíble. Me explicaron cada paso del tratamiento y el resultado superó mis expectativas.",
    rating: 5,
    image: Testimonio2,
  },
  {
    id: 3,
    name: "María L.",
    text: "El servicio es de primera. La limpieza dental fue muy detallada y me dieron excelentes consejos para cuidar mis dientes en casa. ¡Recomendado 100%!",
    rating: 5,
    image: Testimonio3,
  },
];

const Testimonials = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i < rating ? "#FFD700" : "#E0E0E0"}
          className="me-1"
        />
      );
    }
    return stars;
  };

  return (
    <section className="py-12">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-10">
          Lo que nuestros pacientes dicen
        </h2>
        <Row className="justify-content-center py-10">
          <Col md={8} lg={6}>
            <Carousel indicators={false} className="shadow-lg rounded-lg">
              {testimonialsData.map((testimonial) => (
                <Carousel.Item key={testimonial.id}>
                  <div className="text-center p-8">
                    <img
                      src={testimonial.image}
                      alt={`Foto de ${testimonial.name}`}
                      className="rounded-full w-24 h-24 mx-auto mb-4 object-cover"
                    />
                    <div className="flex justify-content-center mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="italic text-lg text-gray-700">
                      "{testimonial.text}"
                    </p>
                    <h5 className="font-bold text-lg mt-4">
                      - {testimonial.name}
                    </h5>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
