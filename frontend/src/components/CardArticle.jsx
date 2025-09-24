import { Card, Button } from "react-bootstrap";
import React from "react";

const CardArticle = ({ article, onClick }) => {
  return (
    <Card className="shadow-lg h-100 d-flex flex-column">
      <Card.Img variant="top" src={article.image} alt={article.title} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div className="flex-grow-1">
          <Card.Title className="text-xl font-bold">{article.title}</Card.Title>
          <Card.Text className="text-gray-600 mt-2">
            {article.description}
          </Card.Text>
        </div>
        <Button
          onClick={() => onClick(article)}
          className="mt-3 bg-blue-500 text-white hover:bg-blue-600 border-0"
        >
          Leer más
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardArticle;
