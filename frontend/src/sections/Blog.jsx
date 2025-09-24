import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { useState } from "react";
import CardArticle from "../components/CardArticle";

import Image1 from "../assets/blog-higiene-bucal.jpg";
import Image2 from "../assets/blog-dieta.jpg";
import Image3 from "../assets/blog-implantes.jpg";

const articlesData = [
  {
    id: 1,
    title: "Claves para una higiene bucal perfecta",
    description:
      "Aprende los mejores trucos y consejos para mantener una sonrisa sana y brillante.",
    fullContent:
      "Mantener una higiene bucal impecable es más que solo cepillarse los dientes; es la base para una salud general óptima y una sonrisa que irradia confianza.\n\n" +
      "1. La técnica de cepillado importa: No se trata de fuerza, sino de precisión. Usa un cepillo de cerdas suaves y cepilla en movimientos circulares o verticales, cubriendo cada superficie del diente, sin olvidar las encías y la lengua.\n\n" +
      "2. El hilo dental es tu mejor aliado: El cepillo no llega a todas partes. El hilo dental elimina la placa y los restos de comida que se acumulan entre los dientes, previniendo la caries y las enfermedades de las encías. Hazlo al menos una vez al día.\n\n" +
      "3. El enjuague bucal completa la limpieza: Un buen enjuague bucal ayuda a eliminar las bacterias que causan el mal aliento y refuerza el esmalte. Úsalo como el paso final de tu rutina diaria.\n\n" +
      "4. Visitas regulares al dentista: No esperes a tener dolor. Las revisiones y limpiezas profesionales cada seis meses son esenciales para detectar problemas a tiempo y mantener tu boca en perfecto estado.",
    image: Image1,
  },
  {
    id: 2,
    title: "Dieta y salud dental",
    description:
      "Descubre qué alimentos son buenos para tus dientes y cuáles deberías evitar.",
    fullContent:
      "Lo que comes no solo afecta tu cuerpo, sino también la salud de tus dientes y encías. Una dieta equilibrada es tu mejor defensa contra las caries y otros problemas dentales.\n\n" +
      "Alimentos que Benefician a tu Sonrisa:\n" +
      "• Lácteos: El calcio y el fósforo de la leche, el queso y el yogur fortalecen el esmalte dental.\n" +
      "• Frutas y vegetales crujientes: Manzanas, zanahorias y apio actúan como limpiadores naturales, aumentando la producción de saliva que neutraliza los ácidos dañinos.\n" +
      "• Agua: Beber agua hidrata y ayuda a eliminar los restos de comida. El agua fluorada también fortalece los dientes.\n\n" +
      "Alimentos a Limitar:\n" +
      "• Azúcares y carbohidratos refinados: Dulces, refrescos, pasteles y pan blanco son el alimento favorito de las bacterias que causan caries.\n" +
      "• Alimentos pegajosos: Las golosinas como caramelos y gomitas se adhieren a los dientes, dando a las bacterias más tiempo para hacer daño.\n" +
      "• Bebidas ácidas: Jugos cítricos y bebidas energéticas pueden erosionar el esmalte con el tiempo.\n\n" +
      "Recuerda, cada bocado cuenta. Una dieta consciente es una inversión en la salud a largo plazo de tu sonrisa.",
    image: Image2,
  },
  {
    id: 3,
    title: "Mitos sobre los implantes",
    description:
      "Desmentimos los mitos más comunes sobre este tratamiento dental.",
    fullContent:
      "Los implantes dentales son una solución moderna y duradera para reemplazar dientes perdidos. Sin embargo, persisten muchos mitos que pueden generar dudas. Aquí desmentimos los más comunes.\n\n" +
      "Mito 1: 'El procedimiento es muy doloroso.'\n" +
      "Realidad: La colocación de un implante es un procedimiento quirúrgico, pero se realiza con anestesia local. La mayoría de los pacientes reportan menos molestias que al extraer un diente, y la recuperación es rápida y manejable con analgésicos.\n\n" +
      "Mito 2: 'Los implantes no son para todos.'\n" +
      "Realidad: Si bien es cierto que se necesita una buena salud general y suficiente densidad ósea, la mayoría de los adultos son candidatos aptos. Si el hueso es insuficiente, existen técnicas de injerto óseo que permiten prepararlo para el implante.\n\n" +
      "Mito 3: 'Se notará que no es un diente real.'\n" +
      "Realidad: Los implantes se diseñan para fusionarse con tu hueso y se coronan con una prótesis de porcelana que imita a la perfección el color, la forma y la textura de tus dientes naturales. Son prácticamente indistinguibles.\n\n" +
      "Mito 4: 'El cuidado de los implantes es complicado.'\n" +
      "Realidad: Los implantes dentales funcionan como dientes naturales. Debes mantener una rutina de higiene diaria con cepillado, uso de hilo dental y visitas regulares a tu dentista para revisiones, al igual que con tu dentadura natural.",
    image: Image3,
  },
];

const Blog = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleShowModal = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedArticle(null);
  };

  return (
    <section className="py-12" id="blog">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-10">
          Nuestro Blog / Artículos
        </h2>
        <Row className="g-4 py-10">
          {articlesData.map((article) => (
            <Col md={6} lg={4} key={article.id}>
              <CardArticle article={article} onClick={handleShowModal} />
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        {selectedArticle && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedArticle.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="img-fluid mb-4 rounded"
              />
              <p style={{ whiteSpace: "pre-line" }}>
                {selectedArticle.fullContent}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cerrar
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Blog;
